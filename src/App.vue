<template>
    <v-app>
        <v-navigation-drawer permanent app location="left" color="#00838F" class="rounded">
            <v-list>
                <v-list-item>
                    <v-list-item-avatar>
                        <img :src="avatarUrl" alt="用户头像" @click="uploadAvatar">
                        <input
                                type="file"
                                ref="avatarUploader"
                                @change="handleAvatarChange"
                                style="display: none"
                        />
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ displayName }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-divider></v-divider>
            <!-- 导航链接 -->
            <v-list dense>
                <v-list-item link @click="$router.push('/')" class="white--text py-2">
                    <v-list-item-icon>
                        <v-icon color="white">mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>广场</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="$router.push('/ai')" class="white--text py-2">
                    <v-list-item-icon>
                        <v-icon color="white">mdi-brush</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>AI绘画</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item v-if="!isLoggedIn" link @click="$router.push('/login')" class="white--text py-2">
                    <v-list-item-icon>
                        <v-icon color="white">mdi-login</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>登录</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link @click="$router.push('/MyPage')" class="white--text py-2">
                    <v-list-item-icon>
                        <v-icon color="white">mdi-account-circle</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>个人中心</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <!-- ... 其他 v-list-item -->
            </v-list>
        </v-navigation-drawer>
        <!-- 右侧内容区 -->
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>


export default {
    name: 'App',
    data() {
        return {
            sessionInitialized: false, // 新增状态，用于追踪会话是否已经初始化
        };
    },
    computed: {
        isLoggedIn() {
            return this.$store.state.user.isLoggedIn;
        },
        displayName() {
            // 基于 sessionInitialized 状态，返回相应的用户名或“神秘用户”
            return this.sessionInitialized
                ? this.$store.getters['user/userDetails'].accountName || '神秘用户'
                : '神秘用户';
        },
        avatarUrl() {
            // 如果会话已初始化并且用户有头像URL，则返回，否则返回默认头像
            return this.sessionInitialized && this.$store.getters['user/userDetails'].avatarUrl
                ? this.$store.getters['user/userDetails'].avatarUrl
                : './assets/image/cat.png'; // 这里是默认头像的路径
        }
    },
    mounted() {
        this.$store.dispatch('user/initializeSession').then(() => {
            // 在会话初始化完成后，更新 sessionInitialized 状态
            this.sessionInitialized = true;
        });
    },
    methods: {
        uploadAvatar() {
            this.$refs.avatarUploader.click();
        },
        handleAvatarChange(event) {

            const username = this.$store.getters['user/userDetails'].accountName || '神秘用户';
            console.log('用户名：', username);
            const file = event.target.files[0];
            console.log('上传的文件：', file);
            this.$store.dispatch('user/updateUserInfo', {username: username, avatarFile: file});
            //     .then(() => {
            //     // 更新用户头像后，重新获取用户信息
            //     this.$store.dispatch('user/fetchUserDetails', username);
            // });
        }
    }
};
</script>

<style>
/* 您可以在这里添加全局样式 */
</style>
