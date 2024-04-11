<!--</style>-->
<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-img :src="xinxi.src" aspect-ratio="1.77" class="elevation-2" rounded></v-img>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="elevation-2" outlined>
          <v-card-title>
            <v-avatar size="130" class="mr-3">
              <img src="../../assets/image/panda.png">
            </v-avatar>
            作者：<span class="pink--text">{{ xinxi.zuozhe }}</span>
            <!-- 添加按钮 -->
            <v-btn color="blue" @click="toggleFollow" class="white--text ma-2">
              <v-icon left>mdi-plus</v-icon>
              关注
            </v-btn>
          </v-card-title>



          <v-card-text>
            <div class="subtitle-1 mb-1">类别：{{ picture.category }}</div>
            <div class="subtitle-1 mb-1">创作意图：{{ picture.creationIntent }}</div>
            <div class="subtitle-1 mb-1">创作日期：{{ picture.creationTime }}</div>
            <v-chip class="ma-2" color="amber" text-color="white" @click="add">
              <v-icon left>mdi-star-outline</v-icon>
              {{ xinxi.like }} Likes
            </v-chip>
            <v-chip class="ma-2" color="blue" text-color="white">
              <v-icon left>mdi-account-group-outline</v-icon>
              {{ picture.user.followersCount }} Fans
            </v-chip>
            <div class="headline">价格：{{ xinxi.price }} 元</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="primary" block @click="addToCart">
              {{ cartButtonText }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- 描述和评论 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card class="elevation-2" outlined>
          <v-card-text>{{ xinxi.xiangqing }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 评论区域 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card class="elevation-2" outlined>
          <v-card-title>评论</v-card-title>
          <v-card-actions>
            <v-text-field
                label="添加评论"
                v-model="newComment"
                outlined
                dense
                class="flex-grow-1"
            ></v-text-field>
            <!-- :disabled 属性用于根据 userInfo 是否为空禁用按钮 :disabled="!userInfo.id"-->
            <v-btn color="primary"  @click="submitComment">提交</v-btn>
          </v-card-actions>
          <v-card-text>
            <!-- 条件判断：如果有评论 -->
            <div v-if="comments.length > 0">
              <!-- 循环评论数组 -->
              <v-list>
                <v-list-item-group>
                  <v-list-item v-for="comment in comments" :key="comment.id" two-line>
                    <v-list-item-avatar color="grey lighten-4">
                      <img :src="comment.picture.url" :alt="comment.picture.category">
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{ comment.user.nickname || comment.user.accountName }}</v-list-item-title>
                      <v-list-item-subtitle>{{ comment.content }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-icon color="blue">mdi-thumb-up</v-icon>
                      <span>{{ comment.user.likesCount }}</span>
                    </v-list-item-action>
                    <v-list-item-action>
                      <span>{{ comment.commentTime }}</span>
                    </v-list-item-action>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </div>
            <div v-else class="text-center">暂时没有评论噢！</div>
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import xinxi from "@/store/modules/xinxi"
import comments from "@/store/modules/comments"
import user from "@/store/modules/user"

export default {
  name: 'PhotoDetail',
  data() {
    return {
      xinxi: xinxi.state.pxinxi,
      user: user.state.userInfo,
      flag: 0, following: false, // 新增data属性来表示是否关注
      comments: comments.state.comments, // 存储评论的数组
      author: comments.state.author,
      picture: comments.state.picture,
      newComment: ""
    }
  },
  mounted() {
     this.$store.dispatch('commentsInstance/getComment');
     this.$store.dispatch('commentsInstance/getInfo');
     this.$store.dispatch('commentsInstance/getPic');

  },

  computed: {
    //判断是否在购物车中
    inCart() {
      console.log(this.author);
      console.log("----",this.picture);
      console.log("!!",this.comments);
      return this.$store.getters['cartInstance/getCartItemById'](this.xinxi.id);
    },
    //加入购物车按钮的文本
    cartButtonText() {
      return this.inCart ? '从购物车移除' : '加入购物车';
    },
  },
  methods: {
    add() {
      const action = this.flag === 0 ? "addlike" : "dellike";
      this.$store.dispatch(`photosInstance/${action}`, this.xinxi.id);
      this.flag = this.flag === 0 ? 1 : 0;
    },
      toggleFollow() {
        if (this.following) {
          // 如果当前是关注状态，取消关注
          this.$store.dispatch('commentsInstance/delF');
        } else {
          // 如果当前是未关注状态，添加关注
          this.$store.dispatch('commentsInstance/addF');
        }
        // 反转关注状态
        this.following = !this.following;
    },
    addToCart() {
      const action = this.inCart ? 'removePhotoFromCart' : 'addPhotoToCart';
      this.$store.dispatch(`cartInstance/${action}`, this.xinxi.id);
    },
    submitComment() {
      if (!this.newComment.trim()) {
        // 输入为空或只有空格时不提交
        return;
      }
      if (!this.userInfo.id) {
        // 用户信息为空时不执行
        return;
      }




    },
  }
}
</script>
