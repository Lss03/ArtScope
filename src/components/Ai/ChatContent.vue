<template>
  <v-container fluid class="pa-0">
    <!-- 聊天信息显示区域 -->
    <v-row>
      <v-col cols="12">
        <div class="chat-container">
          <!-- 初始提示信息 -->
          <div class="message-wrapper">
            <v-avatar color="green" class="ma-2">
              <img :src="aiAvatar" alt="AI" />
            </v-avatar>
            <v-card class="message-ai message-card">
              <v-card-text>给我一张图片，我会返回给你一张风格变换后的图片。</v-card-text>
            </v-card>
          </div>
          <!-- 用户和AI的消息 -->
          <div v-for="(message, index) in messages" :key="index" class="message-wrapper">
            <v-avatar :color="message.sender === 'user' ? 'blue' : 'green'" class="ma-2">
              <img :src="message.avatar" alt="message.sender" />
            </v-avatar>
            <!-- 显示图片消息 -->
            <div v-if="message.image" class="image-wrapper">
              <img :src="message.image" alt="Image" class="message-image" />
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

    <!-- 输入区域 -->
    <v-row>
      <v-col cols="12" class="d-flex justify-end align-center input-button-container">
        <v-file-input v-model="imageFile" prepend-icon="mdi-camera" label="上传图片" filled> 
        </v-file-input>
        <v-btn class="ml-2" color="success" @click="sendImageToAI">发送</v-btn>
       
      </v-col>
    </v-row>
<!-- 发送按钮 -->
    <span class="but">
       
        
     
    </span>

    <!-- 保存确认对话框 -->
    <v-dialog v-model="showConfirmationDialog" max-width="400">
      <v-card>
        <v-card-title class="headline">确认保存图片</v-card-title>
        <v-card-text>确定要保存这张图片吗？</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancelSaveImage">取消</v-btn>
          <v-btn color="blue darken-1" text @click="saveImageToUserData">保存</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>


<style scoped>



  .pa-0{
    margin: 0;
    padding: 0;
  }

.chat-container{
  margin: 0;
    padding: 0;
}
.row{
  margin: 0px;
}
.col-12{
  padding: 8px;
  /* padding-bottom: 0px; */
}
.but{
  padding-left: 93.5%;
}

</style>

<script>
export default {
  name: 'ChatContent',
  data() {
    return {
      messages: [],
      aiAvatar: "AI的头像路径",
      userAvatar: "用户的头像路径",
      imageFile: null,
      saveImageData: null,
      showConfirmationDialog: false,
    };
  },
  methods: {
    sendImageToAI() {
      if (this.imageFile) {
        const imageUrl = URL.createObjectURL(this.imageFile);
        // 用户发送图片消息
        this.messages.push({
          image: imageUrl,
          sender: 'user',
          avatar: this.userAvatar,
        });
        // 通知图片状态管理代码处理图片
        this.processImage(imageUrl);
      }
    },
    processImage(imageUrl) {
      // 假设这里是与后端通信的代码
      // 以及接收处理后的图片并显示给用户的逻辑
      setTimeout(() => {
        // 这里的 imageUrl 是处理后的图片的 URL
        this.messages.push({
          image: imageUrl, // 假设后端返回了新的图片URL
          sender: 'ai',
          avatar: this.aiAvatar,
        });
        // 显示保存图片的对话框
        this.promptSaveImage(imageUrl);
      }, 2000); // 假设处理图片需要 2 秒钟
    },
    promptSaveImage(imageUrl) {
      this.saveImageData = imageUrl;
      this.showConfirmationDialog = true;
    },
    cancelSaveImage() {
      this.saveImageData = null;
      this.showConfirmationDialog = false;
    },
    saveImageToUserData() {
      // 这里将图片保存到用户数据中
      // 假设有一个API模块处理用户数据的保存
      console.log("Saved image:", this.saveImageData);
      this.showConfirmationDialog = false;
    },
  },
};
</script>
