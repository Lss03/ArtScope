<template>
  <v-app>
    <v-navigation-drawer permanent app location="left" color="#00838F" class="rounded">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="./assets/image/cat.png" alt="用户头像">
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
        <v-list-item link @click="$router.push('/login')" class="white--text py-2">
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
    displayName() {
      // 基于 sessionInitialized 状态，返回相应的用户名或“神秘用户”
      return this.sessionInitialized
          ? this.$store.getters['user/userDetails'].accountName || '神秘用户'
          : '神秘用户';
    }
  },
  mounted() {
    this.$store.dispatch('user/initializeSession').then(() => {
      // 在会话初始化完成后，更新 sessionInitialized 状态
      this.sessionInitialized = true;
    });
  }
};
</script>

<style>
/* 您可以在这里添加全局样式 */
</style>
