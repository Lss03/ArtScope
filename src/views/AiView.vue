<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" md="3">
        <!-- 模拟侧边栏宽度的容器 -->
      </v-col>

      <v-col cols="12" md="9">
        <!-- Ai 标题栏 -->
        <AiHeader />

        <!-- 占位区域 -->
        <div>这里是 Ai内容的占位区域。</div>
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
