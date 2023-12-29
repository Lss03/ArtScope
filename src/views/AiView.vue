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
  }
}
</script>

<style scoped>
/* 您可以在这里添加样式 */
</style>
