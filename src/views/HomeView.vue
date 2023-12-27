<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" md="3">
        <!-- 模拟侧边栏宽度的容器 -->
      </v-col>

      <v-col cols="12" md="9">
        <!-- Home 标题栏 -->
        <HomeHeader />

        <!-- 占位区域 -->
        <div>这里是 Home 内容的占位区域。</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import HomeHeader from "@/components/Home/HomeHeader.vue";

export default {
  name: 'HomeView',
  components: {
    HomeHeader
  }
}
</script>

<style scoped>
/* 您可以在这里添加样式 */
</style>
