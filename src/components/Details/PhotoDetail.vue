<template>
    <v-container fluid class="ml-n2 mr-n6">
        <!-- 一整个卡片-->
        <div v-if="fetchSuccess">
            <v-row style="height:450px;width: 100%">
                <!-- 左侧图片-->
                <v-col cols="8">
                    <v-img :src="photoDetails.pictureEntity.url" aspect-ratio="1.77" rounded></v-img>
                </v-col>
                <!-- 右侧部分-->
                <v-col cols="4">
                    <!-- 右侧上方用户信息-->
                    <div class="mr-n7 ml-n2" style="border: gainsboro solid 0.5px">
                        <!-- 用户头像和用户名 -->
                        <div style="display: flex; align-items: center; box-shadow:2px 2px 1px gray;border: black solid 1px">
                            <v-avatar size="60">
                                <img :src="photoDetails.userEntity.avatarUrl">
                            </v-avatar>
                            <p class="font-weight-bold ml-3 mt-3"
                               style="display: flex; align-items: center; font-size: 20px">
                                {{ photoDetails.userEntity.accountName }}</p>
                            <v-spacer></v-spacer>
                            <v-btn dark class="ml-11 mr-1 " rounded>
                                <v-icon left>mdi-plus</v-icon>
                                关注
                            </v-btn>

                        </div>
                        <!-- 类别等文字 -->
                        <div class="ml-2 mt-2 mr-n5">
                            <div class="mb-2">类别：{{ photoDetails.pictureEntity.category }}</div>
                            <div class="mb-2">创作意图：{{ photoDetails.pictureEntity.creationIntent }}</div>
                            <div class="mb-3">创作日期：{{ photoDetails.pictureEntity.creationTime }}</div>
                            <div class="mb-3" style="font-weight: bolder">支持这张图片！
                                <v-btn @click="toggleLike" class="ml-2" color="red" rounded dark>
                                    <v-icon left>mdi-thumb-up</v-icon>
                                    {{ photoDetails.pictureEntity.likesCount }}
                                </v-btn>
                            </div>
                            <div class="mb-3" style="font-weight: bolder">收藏这张图片！
                                <v-btn @click="toggleFavorite" class="ml-2" color="amber" rounded dark>
                                    <v-icon left>mdi-heart</v-icon>
                                    <!-- 这里写为收藏参数-->
                                    {{ photoDetails.pictureEntity.favoriteCount }}
                                </v-btn>
                            </div>
                        </div>
                    </div>
                    <!-- 右侧下方评论-->
                    <div class="mt-6 ml-n2">
                        <!-- 发表评论-->
                        <div>
                            <p style="font-weight: bolder;font-size: 20px; color: gray" class="mb-6">添加评论</p>
                            <v-row>
                                <v-col cols="10">
                                    <v-text-field v-model="newComment" outlined dense color="#00838F"
                                                  placeholder="维护社区环境，注意良好发言~"
                                                  style="font-size: 14px "></v-text-field>
                                </v-col>
                                <v-col cols="2">
                                    <v-btn @click="submitComment" color="white" variant="outlined">提交</v-btn>
                                </v-col>
                            </v-row>
                        </div>

                    </div>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
                <v-col cols="12">
                    <!-- 评论内容 -->
                    <div>
                        <p style="font-weight: bolder;font-size: 20px;" class="mt-5 ml-5">评论</p>
                        <div>
                            <div v-if="comments.length > 0">
                                <v-list>
                                    <v-list-item v-for="comment in comments" :key="comment.id" two-line
                                                 style="border-bottom: gainsboro 1px solid">
                                        <v-list-item-avatar color="grey lighten-4">
                                            <v-icon>mdi-account-circle</v-icon>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title style="font-weight: bolder">{{
                                                comment.user.accountName
                                                }}
                                            </v-list-item-title>
                                            <v-list-item-subtitle>{{ comment.content }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action class="ml-t">
                                            <v-icon color="gainsboro" @click="turnColor" class="mt-4">mdi-thumb-up
                                            </v-icon>
                                            <span>{{ comment.likesCount }}</span>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list>
                            </div>
                            <div v-else class="text-center">暂无评论</div>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </div>
        <v-row v-else>
            <v-col>
                正在加载图片详情...
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
export default {
    name: 'PhotoDetail',
    props: {
        photoId: {
            type: [Number, String],
            required: true,
        },
    },
    data() {
        return {
            fetchSuccess: false,
            newComment: '',
            liked: false, // 是否已点赞
        };
    },
    computed: {
        photoDetails() {
            console.log('图片详情:', this.$store.getters['photos/photoDetails']);
            return this.$store.getters['photos/photoDetails'];
        },
        comments() {
            return this.photoDetails.commentEntityList || [];
        }
    },
    methods: {
        // toggleFavorite() {
        //     this.getUserInfoAndToggleFavorite();
        // },
        // async getUserInfoAndToggleFavorite() {
        //     try {
        //         const user = this.$store.getters['user/userDetails'];
        //         console.log('用户信息:', user);
        //         const isFavorited = user.favoritePictures.some(
        //             (picture) => picture.id === this.photoId
        //         );
        //         console.log('是否已收藏:', isFavorited);
        //         // 根据是否已经收藏过来切换收藏状态
        //         const action = isFavorited ? 'removeFavorite' : 'addFavorite';
        //         console.log('操作:', action);
        //         await this.saveFavoriteToServer(action);
        //
        //     } catch (error) {
        //         console.error('An error occurred while fetching user info:', error);
        //     }
        // },
        // async saveFavoriteToServer(action) {
        //     const imageId = this.photoId;
        //     const userId = this.$store.getters['user/userDetails'].id;
        //     if (action === 'addFavorite') {
        //         await this.$store.dispatch('photos/saveFavorite', {userId, imageId});
        //         this.photoDetails.pictureEntity.favoriteCount += 1;
        //     } else {
        //         await this.$store.dispatch('photos/removeFavorite', {userId, imageId});
        //         this.photoDetails.pictureEntity.favoriteCount -= 1;
        //     }
        // },


        toggleFavorite() {
            this.favorited = !this.favorited;
            this.favorited ? this.photoDetails.pictureEntity.favoriteCount++ : this.photoDetails.pictureEntity.favoriteCount--;
            console.log('收藏状态:', this.favorited);
            // 调用API保存到服务器（如果适用）
            this.saveFavoriteToServer();
        },

        async saveFavoriteToServer() {
            const imageId = this.photoId;
            const userId = this.$store.getters['user/userDetails'].id.toString();
            // const userId=4;
            // const imageId=1;
            console.log('保存收藏状态到服务器:', {userId, imageId});
            try {
                // 调用API保存到服务器
                await this.$store.dispatch('photos/saveFavorite', {userId, imageId});
            } catch (error) {
                console.error('保存收藏状态失败:', error);
            }
        },
        toggleLike() {
            this.liked = !this.liked;
            this.liked ? this.photoDetails.pictureEntity.likesCount++ : this.photoDetails.pictureEntity.likesCount--;
            console.log('点赞状态:', this.liked);
            // 调用API保存到服务器（如果适用）
            this.saveLikeToServer(this.liked);
        },
        async saveLikeToServer() {
            const imageId = this.photoId;
            // const imageId=1;
            console.log('保存点赞状态到服务器:', imageId);
            try {
                // 调用API保存点赞状态到服务器
                await this.$store.dispatch('photos/saveLike', imageId);
            } catch (error) {
                console.error('保存点赞状态失败:', error);
            }
        },
        turnColor() {

        },
        async fetchPhotoDetails() {
            try {
                await this.$store.dispatch('photos/fetchPhotoDetails', this.photoId);
                this.fetchSuccess = true;
            } catch (error) {
                console.error("Error fetching photo details:", error);
                this.fetchSuccess = false;
            }
        },
        async submitComment() {
            const commentText = this.newComment;
            if (!this.newComment.trim()) {
                alert("评论内容不能为空！");
                return;
            }
            try {
                await this.$store.dispatch('comments/submitComment', {commentText});
                this.newComment = ''; // 清空评论框
                // 考虑到可能不需要重新加载评论，如果Vuex操作已经更新了状态
                // 如果状态未自动更新，则需要调用下面的方法重新获取评论
                await this.fetchPhotoDetails(); // 如果需要，重新获取详情，包括最新的评论
            } catch (error) {
                console.error('提交评论失败:', error);
                alert('提交评论失败，请重试。');
            }
        },
    },
    mounted() {
        this.fetchPhotoDetails();
    },

};
</script>

<style scoped>
/* 您的样式保持不变 */
</style>
