<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" md="3">
        <!-- 模拟侧边栏宽度的容器 -->
      </v-col>

      <v-col cols="12" md="9">
  <AiHeader />

  <!-- 对话内容容器 -->
  <div class="chat-container">
    <v-card
      v-for="(message, index) in messages"
      :key="index"
      class="chat-message"
    >
      <v-card-text>{{ message.content }}</v-card-text>
    </v-card>
  </div>
  <v-text-field
  label="输入你的消息"
  v-model="newMessage"
  @keyup.enter="sendMessage"
  outlined
  clearable
></v-text-field>
</v-col>
    </v-row>
  </v-container>
</template>

<script>
import AiHeader from "@/components/Ai/AiHeader.vue";

export default {
  name: 'AiView',
  components: {
    AiHeader
  },
  data() {
    return {
      messages: [], // 用于存储聊天消息的数组
      newMessage: '' // 绑定到文本字段的字符串
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim()) {
        this.messages.push({ content: this.newMessage });
        this.newMessage = ''; // 清空输入框
      }
    }
  }
}
</script>

<style scoped>
/* 您的样式代码 */
</style>
