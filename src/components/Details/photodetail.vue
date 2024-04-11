<template>
  <v-container>
    <!-- 图片和作者信息 -->
    <v-row>
      <v-col cols="12" md="8">
        <v-img
            :src="xinxi.src"
            aspect-ratio="1.77"
            class="elevation-2"
            style="border-radius: 15px;"
        ></v-img>
      </v-col>
      <v-col cols="12" md="4">
        <div class="author-info">
          <v-avatar size="60">
            <img src="../../assets/image/panda.png">
          </v-avatar>
          <span>{{ xinxi.zuozhe }}</span>
        </div>
        <v-card elevation="2" class="info-card">
          <v-card-text>
            <v-icon large @click="add" :color="flag > 0 ? 'amber' : 'grey'">
              mdi-star-outline
            </v-icon>
            <span class="likes">{{ xinxi.like }}</span>
            <div class="price">
              <v-icon small>mdi-currency-usd</v-icon>
              {{ xinxi.price }} 元
            </div>
            <v-btn color="primary" @click="addToCart" class="mt-3">
              {{ cartButtonText}}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 描述和评论 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card elevation="2" class="description-card">
          <v-card-text>{{ xinxi.xiangqing }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 评论区域 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card elevation="2" class="comments-card">
          <v-card-title>评论</v-card-title>
          <v-card-text>
            <div v-for="comment in comments" :key="comment.id" class="comment">
              <v-avatar size="32" class="mr-2">
                <img :src="comment.avatar">
              </v-avatar>
              <span><strong>{{ comment.author }}</strong>: {{ comment.text }}</span>
            </div>
          </v-card-text>
          <v-card-actions>
            <v-text-field
                label="添加评论"
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
  </v-container>
</template>

<script>
import xinxi from "@/store/modules/xinxi"

export default {
  name: 'PhotoDetail',
  data() {
    return {
      xinxi: xinxi.state.pxinxi,
      flag: 0,
      comments: [], // 存储评论的数组
      newComment: '', // 绑定到输入框的新评论文本
    }
  },
  computed: {
    //判断是否在购物车中
    inCart() {
      return this.$store.getters['cartInstance/getCartItemById'](this.xinxi.id);
    },
    //加入购物车按钮的文本
    cartButtonText() {
      return this.inCart ? '从购物车移除' : '加入购物车';
    }
  },
  methods: {
    add() {
      const action = this.flag === 0 ? "addlike" : "dellike";
      this.$store.dispatch(`photosInstance/${action}`, this.xinxi.id);
      this.flag = this.flag === 0 ? 1 : 0;
    },
    addToCart() {
      const action = this.inCart ? 'removePhotoFromCart' : 'addPhotoToCart';
      this.$store.dispatch(`cartInstance/${action}`, this.xinxi.id);
    }
  },
  submitComment() {
    if (this.newComment.trim()) {
      const comment = {
        id: Date.now(), // 假设评论 ID
        author: '用户名', // 这里应根据实际用户数据设置
        text: this.newComment,
        avatar: '用户头像路径', // 这里应根据实际用户数据设置
      };
      this.comments.push(comment);
      this.newComment = '';
      // 这里您可以添加代码来将评论发送到后端
    }
  }
}
</script>

<style scoped>
.author-info {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.info-card {
  border-radius: 15px;
}

.description-card {
  border-radius: 15px;
}

.likes {
  font-size: 1.5em;
  margin-left: 20px;
}

.price {
  display: flex;
  align-items: center;
  font-size: 1.2em;
  margin-top: 10px;
}

.v-icon {
  margin-right: 5px;
}
.comments-card {
  border-radius: 15px;
}

.comment {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}
</style>
