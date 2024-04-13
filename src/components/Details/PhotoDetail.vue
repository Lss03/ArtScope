<template>
  <v-container fluid>
    <v-row v-if="fetchSuccess">
      <v-col cols="12" md="8">
        <v-img :src="photoDetails.pictureEntity.url" aspect-ratio="1.77" class="elevation-2" rounded></v-img>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="elevation-2" outlined>
          <v-card-title>
            <v-avatar size="130" class="mr-3">
              <img src="../../assets/image/panda.png">
            </v-avatar>
            作者：<span class="pink--text">{{ photoDetails.userEntity.accountName }}</span>
            <v-btn color="blue" class="white--text ma-2">
              <v-icon left>mdi-plus</v-icon>
              关注
            </v-btn>
          </v-card-title>

          <v-card-text>
            <div class="subtitle-1 mb-1">类别：{{ photoDetails.pictureEntity.category }}</div>
            <div class="subtitle-1 mb-1">创作意图：{{ photoDetails.pictureEntity.creationIntent }}</div>
            <div class="subtitle-1 mb-1">创作日期：{{ photoDetails.pictureEntity.creationTime }}</div>
            <v-chip class="ma-2" color="amber" text-color="white">
              <v-icon left>mdi-star-outline</v-icon>
              {{ photoDetails.pictureEntity.likesCount }} Likes
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-4" v-else>
      <v-col cols="12">
        正在加载图片详情...
      </v-col>
    </v-row>
    <!-- 评论提交表单 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card class="elevation-2" outlined>
          <v-card-title>添加评论</v-card-title>
          <v-card-actions>
            <v-text-field
                label="写下你的评论..."
                v-model="newComment"
                outlined
                dense
                class="flex-grow-1"
            ></v-text-field>
            <v-btn color="primary" @click="submitComment">提交</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- 评论列表展示 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card class="elevation-2" outlined>
          <v-card-title>评论</v-card-title>
          <v-card-text>
            <div v-if="comments.length > 0">
              <v-list>
                <v-list-item v-for="comment in comments" :key="comment.id" two-line>
                  <v-list-item-avatar color="grey lighten-4">
                    <v-icon>mdi-account-circle</v-icon>
                  </v-list-item-avatar>
                  <v-list-item-content>
                    <v-list-item-title>{{ comment.user.accountName }}</v-list-item-title>
                    <v-list-item-subtitle>{{ comment.content }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-icon color="blue">mdi-thumb-up</v-icon>
                    <span>{{ comment.likesCount }}</span>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </div>
            <div v-else class="text-center">暂无评论</div>
          </v-card-text>
        </v-card>
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
    };
  },
  computed: {
    photoDetails() {
      console.log('图片详情:', this.$store.getters['photos/photoDetails']);
      return this.$store.getters['photos/photoDetails'];
    },
    comments() {
      return this.photoDetails.commentEntityList || [];
    },
    pictureDetails() {
      return this.$store.getters['photos/photoDetails'];
    }
  },
  methods: {
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
        await this.$store.dispatch('comments/submitComment',  { commentText });
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
