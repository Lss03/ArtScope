<template>
  <div class="photo-detail-container">
    <div class="author-info">
      <img src="../../assets/image/panda.png" style="border-radius: 50%; height: 60px;">
      <span>{{ xinxiStatePxinxi.zuozhe }}</span>
    </div>
    <div class="photo-container">
      <img :src="xinxiStatePxinxi.src" style="border-radius: 15px; height: 280px; width: 500px;">
    </div>
    <div class="info-container">
      <div class="like-info">
        <span class="f">{{ xinxiStatePxinxi.like }}</span>
      </div>
      <div class="price-info">
        <span class="f">{{ xinxiStatePxinxi.price }}</span>
      </div>
      <div class="button-info"><button @click="add" class="custom-button">加入购物车</button></div>
   <div class="comment-box">
  <h3>发表评论</h3>
  <textarea class="comment-input" placeholder="请输入您的评论..." v-model='cont'></textarea>
  <button class="submit-button" @click='publish'>发表</button>
</div>     
    </div>


<div class="comment-section">
  <div class="comment" v-for="(comment, index) in comments" :key="index">
    <div class="user">{{ comment.user }}</div>
    <div class="message">{{ comment.message }}</div>
    <div class="timestamp">{{ comment.timestamp }}</div>
    <div class="user-avatar">
      <img :src="comment.avatar" style="width:40px;height:40px" alt="User Avatar" />
    </div>
    <div class="likes">
      <span class="like-icon">👍</span>
      <span class="like-count">{{ comment.likes }}</span>
    </div>
  </div>
</div>
  </div>
</template>

<style>
.photo-detail-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden; /* 清除浮动 */
}

.author-info {
  float: left;
  margin-right: 20px;
}

.photo-container {
  float: left;
  margin-top: 20px;
}

.info-container {
  float: left;
  margin-top: 50px;
  margin-left: 50px;
}

.like-info, .price-info {
  border-radius: 15px;
  width: 200px;
  margin: 10px;
  float: left;
  background-color: rgb(167, 180, 192);
  height: 170px;
}
.button-info {
  border-radius: 15px;
  width: 200px;
  margin: 10px;
  float: left;
  height: 170px;
}

.comment-section {
  clear: both; /* 清除浮动 */
  margin-top: 20px;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
}

.comment {
  background-color: #fff;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.comment .user {
  font-weight: bold;
  margin-bottom: 5px;
}

.comment .message {
  color: #333;
}

.comment .timestamp {
  font-size: 12px;
  color: #999;
}
.custom-button {
  background-color: #4CAF50; /* 绿色背景 */
  color: white; /* 白色文字 */
  padding: 12px 24px; /* 上下12px, 左右24px的内边距 */
  border: none; /* 无边框 */
  border-radius: 4px; /* 圆角边框 */
  cursor: pointer; /* 鼠标悬停时的手型光标 */
  font-size: 16px; /* 字体大小 */
  transition: background-color 0.3s; /* 背景色渐变动画 */
}

.custom-button:hover {
  background-color: #45a049; /* 鼠标悬停时的背景色 */
}

.comment-box {
  max-width: 700px; /* 限制评论框的最大宽度 */
  margin: auto; /* 居中显示 */
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.comment-box h3 {
  margin-top: 0;
  color: #333;
}

.comment-input {
  width: 100%; /* 宽度占满容器 */
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: vertical; /* 允许垂直拉伸 */
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #45a049;
}

</style>

<script>
import xinxi from "@/store/modules/xinxi"
import content from "@/store/modules/content"



export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name:'photodetail',
    data() {
        return {
        comments: content.state.comments,
        xinxiStatePxinxi: xinxi.state.pxinxi,
        cont:''
        }
    },
    created() {
    // 调用获取数据的方法
    this.getData();
    },
    methods: {
        getData() {
           const id=xinxi.state.pxinxi.id
            this.$store.dispatch('contentInstance/getList',  id);
        },
        add(){
          console.log(xinxi.state.pxinxi)
          this.$store.dispatch('cartInstance/getList', xinxi.state.pxinxi);
        },
        publish(){
          console.log(this.cont)
          this.$store.dispatch('contentInstance/putList', {
                      id: xinxi.state.pxinxi.id,
                      data: this.cont
                    });
        },

    
    }
}
</script>