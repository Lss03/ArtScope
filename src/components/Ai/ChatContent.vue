<template>
  <v-container fluid style="height: 100%;overflow: hidden;">
    <!-- 聊天信息显示区域 -->
    <div :style=" { overflowY: dataValue,overflowX: defaultOverflow,height: containerHeight} ">
      <v-row>
        <v-col cols="12">
          <!-- 初始提示信息 -->
          <div v-if="haveDialogue"  class="mt-n10" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;" >
            <v-avatar color="green" size="50">
              <img :src="aiAvatar" alt="AI" />
            </v-avatar>
            <p class="text-center mt-5 font-weight-black">请输入一段文本，我会根据文本内容生成一张图片。</p>
          </div>
          <!-- 用户和AI的消息 -->
          <div class="ml-10 mr-10 mt-2" v-for="(message, index) in messages" :key="index" >
            <!-- 用户头像和用户名 -->
            <div style="display: flex; align-items: center;">
              <v-avatar :color="message.sender === 'user' ? 'blue' : 'green'" size="40" >
                <img :src="message.sender === 'user' ? userAvatar : aiAvatar" alt="message.sender" />
              </v-avatar>
              <p class="font-weight-bold ml-3 mt-3" style="display: flex; align-items: center; font-size: 20px">{{message.sender}}</p>
            </div>
            <!-- 显示文本消息 -->
            <div class="mt-2" style="display: flex; align-items: center; ">
              <v-card style="width: 100%" v-if="message.text">
                <v-card-text>{{ message.text }}</v-card-text>
              </v-card>
            </div>
            <!-- 显示图片消息 -->
            <div v-if="message.image" style="display: flex; align-items: center; ">
              <v-card style="width: 100%;overflow: hidden;height: 400px" >
                <img :src="message.image" alt="Generated Image" style="width: 100%; height: 100%; object-fit: cover;" />
              </v-card>
            </div>
          </div>
          <!-- 显示生成的图片 -->
          <!-- <v-img v-if="saveImageData" :src="saveImageData" alt="Generated Image" class="generated-image"></v-img>-->
        </v-col>
      </v-row>
    </div>
    <!-- 输入区域 -->
    <v-row>
      <v-col cols="12" class="d-flex justify-end  fixed-bottom">
        <div class="ml-10 mr-10 mt-0" style="width: 100%; display: flex; align-items: center;">
          <v-text-field :label="suggestLabel" v-model="textPrompt" outlined :append-icon="sendIcon" color="#00838F" @click:append="sendTextToAI" :readonly="readOnly"></v-text-field>
<!--          <v-btn  class="ml-2" color="#00838F" @click="sendTextToAI" depressed><v-icon color="white">mdi-send</v-icon></v-btn>-->
<!--          mdi-radiobox-marked mdi-send-->
        </div>
      </v-col>
    </v-row>

    <!-- 保存确认对话框 -->
    <v-dialog v-model="showConfirmationDialog" max-width="300">
      <v-card>
        <v-card-title class="headline">确认保存图片</v-card-title>
        <v-card-text>确定要保存这张图片吗？</v-card-text>
        <v-card-actions>
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
      haveDialogue:true, // 是否已有对话
      dataValue:"hidden", // 监听状态显示纵向滚动条
      defaultOverflow:"hidden", // 默认隐藏横向滚动条
      containerHeight: '600px',
      suggestLabel:'输入描述性文本',
      readOnly:false,
      sendIcon:'mdi-send',
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
        this.haveDialogue = false;
        this.readOnly = true;
        this.dataValue = 'auto';
        this.sendIcon = 'mdi-radiobox-marked';
        this.suggestLabel = '正在生成';
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
            this.readOnly = false;
            this.suggestLabel = '输入描述性文本';
            this.sendIcon = 'mdi-send';
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
