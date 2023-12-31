<template>
  <v-app>
    <!-- 顶部导航栏 -->
    <v-app-bar app :elevation="4" style="border-radius: 15px; background-color: white;" flat class="text-center">
      <!-- 左侧图片容器 -->
      <div style="flex: 1; display: flex; justify-content: flex-start; padding-left: 2px;">
        <img src="@/assets/image/VanGao.png" alt="Icon" style="height: 60px;width: 120px">
      </div>
  
      <!-- 标题文本 -->
      <v-toolbar-title class="title" style="flex: 2; display: flex; justify-content: center;">
        <span>在这里写ai内容</span>
      </v-toolbar-title>
  
      <!-- 右侧链接按钮容器 -->
      <div style="flex: 1; display: flex; justify-content: flex-end; padding-right: 16px;">
        <a href="https://www.henu.edu.cn/">
          <v-btn icon>
            <img src="https://img2.baidu.com/it/u=2905407378,1250838945&fm=253&fmt=auto&app=138&f=JPEG?w=503&h=500" alt="河南大学" class="enlarge-image" style="height: 60px;">
          </v-btn>
        </a>
      </div>
    </v-app-bar>
  
    <!-- 主要内容区域 -->
    <v-main>
      <v-container>
        <div class="chat-container">
          <!-- Display messages -->
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="message-wrapper"
          >
            <v-avatar :color="message.sender === 'user' ? 'blue' : 'green'" class="ma-2">
              <img :src="message.avatar" :alt="message.sender" class="message-avatar" />
            </v-avatar>

            <!-- Display text message or image -->
            <v-card v-if="!message.image" :class="['message-card', messageClass(message)]">
              <v-card-text>{{ message.text }}</v-card-text>
            </v-card>
            <img v-if="message.image && message.sender === 'ai'" :src="message.image" alt="AI Image" class="message-image" @click="promptSaveImage(message.image, message.intent)"/>
          </div>
        </div>

        <!-- Input area with save confirmation dialog -->
        <div class="input-button-container">
          <v-btn class="getbtn" @click="sendImage">获取AI图片</v-btn>
          <v-text-field
            class="input-field"
            label="在这里输入你的消息..."
            v-model="userInput"
            append-icon="mdi-send"
            @click:append="submitMessage"
            @keyup.enter="submitMessage"
            outlined
            dense
          ></v-text-field>
          <!-- Save confirmation dialog -->
          <v-dialog v-model="showConfirmationDialog" max-width="400">
            <v-card>
              <v-card-title class="headline">确认保存图片</v-card-title>
              <v-card-text>
                确定要保存这张图片吗？
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="cancelSaveImage">取消</v-btn>
                <v-btn color="blue darken-1" text @click="saveImageToUserData">保存</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </v-container>
    </v-main>
  </v-app>
  </template>
  
  <script>
  // 引入外部 CSS 文件
  import "@/assets/css/AIStyles.css";
  import userData from "@/api/user.js"; // Assuming you have a user API module
  export default {
    name: "ChatView",
    data() {
    return {
      messages: [
        { text: "你好，我怎么帮助你？", sender: "ai", avatar: "ai的头像路径" },
        { text: "嗨，我有个问题。", sender: "user", avatar: "用户的头像路径" },
      ],
      userInput: "",
      userAvatar: "用户的头像路径",
      aiAvatar: "ai的头像路径",
      images: [
        "https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/c83d70cf3bc79f3dc1fd5673bba1cd11728b2950.jpg",
        "https://th.bing.com/th?id=OIP.duz6S7Fvygrqd6Yj_DcXAQHaF7&w=279&h=223&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        // More image URLs
      ],
      saveImageData: null,
      showConfirmationDialog: false, // Flag to control the save confirmation dialog
    };
  },
  mounted() {
    // Add click event handlers to open the confirmation dialog for each image
    this.$refs.image.forEach((image, index) => {
      image.addEventListener("click", () => {
        // Get the intent from the corresponding message
        const intent = this.messages[index].intent;
        // Set the image data to be saved
        this.saveImageData = { imageUrl: image.src, intent };
        // Show the confirmation dialog
        this.showConfirmationDialog = true;
      });
    });
  },
  methods: {
    submitMessage() {
      if (this.userInput.trim()) {
        // 用户提交消息
        this.messages.push({
          text: this.userInput,
          sender: 'user',
          avatar: this.userAvatar
        });
        // 清空输入字段
        this.userInput = '';
        // 发送到AI服务
        this.sendToAI();
      }
    },
    sendToAI() {
      // 这里你需要发送消息到你的AI服务，并处理回复
      // 下面是回复的占位符
      setTimeout(() => {
        this.messages.push({
          text: "这是一个AI的回复。",
          sender: 'ai',
          avatar: this.aiAvatar
        });
      }, 1000);
    },
    messageClass(message) {
      // 根据发送者动态返回CSS类
      return {
        'message-user': message.sender === 'user',
        'message-ai': message.sender === 'ai'
      };
    },
    sendImage() {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      const imageToSend = this.images[randomIndex];

      this.messages.push({
        text: "", // Text can be empty
        sender: "ai",
        avatar: this.aiAvatar,
        image: imageToSend, // Add the image URL
        intent: "AI Image Intent", // Add the intent (customize as needed)
      });

      // Programmatically add a click event handler to the new AI-generated image
      const newImageIndex = this.messages.length - 1;
      const newImageElement = this.$refs.image[newImageIndex];
      newImageElement.addEventListener("click", () => {
        // Get the intent from the corresponding message
        const intent = this.messages[newImageIndex].intent;
        // Set the image data to be saved
        this.saveImageData = { imageUrl: newImageElement.src, intent };
        // Show the confirmation dialog
        this.showConfirmationDialog = true;
      });
    },
  promptSaveImage(imageUrl, intent) {
      // Set the image data to be saved
      this.saveImageData = { imageUrl, intent };
      // Show the confirmation dialog
      this.showConfirmationDialog = true;
    },
    cancelSaveImage() {
      // Reset the saveImageData and close the confirmation dialog
      this.saveImageData = null;
      this.showConfirmationDialog = false;
    },
    saveImageToUserData() {
      // Add the saveImageData to the user's data using the user API module
      userData.addImage(this.saveImageData, (userData) => {
        // After saving, update the component's userData and close the confirmation dialog
        this.userData = userData;
        this.showConfirmationDialog = false;
        // Optionally, you can also display a success message to the user
        // this.$toast.success("Image saved successfully.");
      });
    },
  },
    };
  </script>
