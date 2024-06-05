<template>
  <v-container fluid>
    <!-- 标题栏 -->
    <AIHeader/>

    <!-- 聊天内容 -->
    <ChatContent/>
  </v-container>
</template>
<style scoped>
.container{
  margin: 0;
  padding: 0;
  margin-top: 12px;
}


</style>
<script>
import AIHeader from "@/components/Ai/AiHeader.vue";
import ChatContent from "@/components/Ai/ChatContent.vue";

export default {
  name: 'AiView',
  components: {
    AIHeader,
    ChatContent
  }
}
</script>
