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
              <v-card-text>请输入一段文本，我会根据文本内容生成一张图片。</v-card-text>
            </v-card>
          </div>
          <!-- 用户和AI的消息 -->
          <div v-for="(message, index) in messages" :key="index" class="message-wrapper">
            <v-avatar :color="message.sender === 'user' ? 'blue' : 'green'" class="ma-2">
              <img :src="message.sender === 'user' ? userAvatar : aiAvatar" alt="message.sender" />
            </v-avatar>
            <!-- 显示文本消息 -->
            <v-card v-if="message.text" :class="`message-${message.sender} message-card`">
              <v-card-text>{{ message.text }}</v-card-text>
            </v-card>
            <!-- 显示图片消息 -->
            <div v-if="message.image" class="image-wrapper">
              <img :src="message.image" alt="Generated Image" class="message-image" />
            </div>
          </div>

          <!-- 显示生成的图片 -->
          <v-img v-if="saveImageData" :src="saveImageData" alt="Generated Image" class="generated-image"></v-img>
        </div>
      </v-col>
    </v-row>

    <!-- 输入区域 -->
    <v-row>
      <v-col cols="12" class="d-flex justify-end align-center input-button-container">
        <v-text-field v-model="textPrompt" label="输入文本" filled></v-text-field>
        <v-btn class="ml-2" color="success" @click="sendTextToAI">发送</v-btn>
      </v-col>
    </v-row>

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

>
<script>
export default {
  name: 'ChatContent',
  data() {
    return {
      messages: [],
      aiAvatar: 'https://sakura-cjq.oss-rg-china-mainland.aliyuncs.com/homepage/lazy_cat.png', // AI头像路径
      userAvatar: 'https://sakura-cjq.oss-rg-china-mainland.aliyuncs.com/homepage/lazy_cat.png', // 用户头像路径
      textPrompt: '', // 用户输入的文本
      saveImageData: null,
      showConfirmationDialog: false,
    };
  },
  methods: {
    sendTextToAI() {
      if (this.textPrompt) {
        this.messages.push({
          text: this.textPrompt,
          sender: 'user',
          avatar: this.userAvatar,
        });
        this.processText(this.textPrompt);
        this.textPrompt = ''; // 清空输入框
      }
    },
    processText(text) {
      let body = JSON.stringify({ prompt: text });

      fetch('http://test-demlskfdgd.ap-southeast-1.fcapp.run/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body
      })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.blob();
          })
          .then(data => {
            const generatedImageUrl = URL.createObjectURL(data);
            this.messages.push({
              image: generatedImageUrl,
              sender: 'ai',
              avatar: this.aiAvatar,
            });
            this.saveImageData = generatedImageUrl;
            this.promptSaveImage(generatedImageUrl);
          })
          .catch(error => {
            console.error('Error:', error);
          });
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
      // 添加保存图像到本地的逻辑
      // 例如，您可以创建一个 <a> 标签并模拟点击以下载图像
      const a = document.createElement('a');
      a.href = this.saveImageData;
      a.download = 'generated_image.jpg';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      this.showConfirmationDialog = false;
    },
  },
};
</script>
