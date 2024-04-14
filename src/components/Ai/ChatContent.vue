<template>
  <v-container fluid style="height: 100%;overflow: hidden;">
    <!-- 聊天信息显示区域 -->
    <div :style="{ overflowY: dataValue, overflowX: defaultOverflow, height: containerHeight }">
      <v-row>
        <v-col cols="12">
          <!-- 初始提示信息 -->
          <div v-if="haveDialogue" class="mt-n10" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;">
            <v-avatar color="green" size="50">
              <img :src="aiAvatar" alt="AI" />
            </v-avatar>
            <p class="text-center mt-5 font-weight-black">请输入一段文本，我会根据文本内容生成一张图片。</p>
          </div>
          <!-- 用户和AI的消息 -->
          <div class="ml-10 mr-10 mt-2" v-for="(message, index) in messages" :key="index">
            <!-- 用户头像和用户名 -->
            <div style="display: flex; align-items: center;">
              <v-avatar :color="message.sender === 'user' ? 'blue' : 'green'" size="40">
                <img :src="message.sender === 'user' ? userAvatar : aiAvatar" alt="message.sender" />
              </v-avatar>
              <p class="font-weight-bold ml-3 mt-3" style="display: flex; align-items: center; font-size: 20px">{{message.sender}}</p>
            </div>
            <!-- 显示文本消息 -->
            <div class="mt-2" style="display: flex; align-items: center;">
              <v-card style="width: 100%" v-if="message.text">
                <v-card-text>{{ message.text }}</v-card-text>
              </v-card>
            </div>
            <!-- 显示图片消息 -->
            <div v-if="message.image" style="display: flex; align-items: center;">
              <v-card style="width: 100%;overflow: hidden;height: 400px">
                <img :src="message.image" alt="Generated Image" style="width: 100%; height: 100%; object-fit: cover;" />
              </v-card>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
    <!-- 输入区域 -->
    <v-row>
      <v-col cols="12" class="d-flex justify-end fixed-bottom">
        <div class="ml-10 mr-10 mt-0" style="width: 100%; display: flex; align-items: center;">
          <v-text-field :label="suggestLabel" v-model="textPrompt" outlined :append-icon="sendIcon" color="#00838F" @click:append="sendTextToAI" :readonly="readOnly"></v-text-field>
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

    <!-- 分类和创作意图对话框 -->
    <v-dialog v-model="showCategoryDialog" max-width="500px">
      <v-card>
        <v-card-title class="headline">图片信息</v-card-title>
        <v-card-text>
          <v-select
              v-model="selectedCategory"
              :items="categories"
              label="选择分类"
              item-text="name"
              item-value="value"
              return-object
          ></v-select>
          <v-text-field
              label="输入创作意图"
              v-model="creationIntent"
              outlined
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="blue darken-1" text @click="showCategoryDialog = false">取消</v-btn>
          <v-btn color="blue darken-1" text @click="uploadImage">上传</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'ChatContent',
  data() {
    return {
      messages: [],
      haveDialogue: true,
      dataValue: "hidden",
      defaultOverflow: "hidden",
      containerHeight: '600px',
      suggestLabel: '输入描述性文本',
      readOnly: false,
      sendIcon: 'mdi-send',
      aiAvatar: 'https://sakura-cjq.oss-rg-china-mainland.aliyuncs.com/homepage/lazy_cat.png',
      userAvatar: 'https://sakura-cjq.oss-rg-china-mainland.aliyuncs.com/homepage/lazy_cat.png',
      textPrompt: '',
      saveImageData: null,
      showConfirmationDialog: false,
      showCategoryDialog: false,
      selectedCategory: null,
      creationIntent: '',
      categories: [
        { name: '猫', value: 'cat' },
        { name: '狗', value: 'dog' },
      ],
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
    async saveImageToUserData() {
      // 显示分类和创作意图输入对话框
      this.showCategoryDialog = true;
    },
    async uploadImage() {
      // 准备表单数据
      const formData = new FormData();
      formData.append('userName', this.$store.getters['user/userDetails'].accountName);
      formData.append('category', this.selectedCategory.value);
      formData.append('creationIntent', this.creationIntent);
      formData.append('imageFile', await fetch(this.saveImageData).then(r => r.blob()));

      // 调用 Vuex 动作上传图片
      try {
        const response = await this.$store.dispatch('photos/uploadPhoto', formData);
        console.log('图片上传成功', response);
        // 关闭对话框并重置表单
        this.showCategoryDialog = false;
        this.selectedCategory = null;
        this.creationIntent = '';
      } catch (error) {
        console.error('图片上传失败', error);
      }
    },
  },
};
</script>
