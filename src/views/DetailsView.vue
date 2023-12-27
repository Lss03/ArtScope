<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="12" md="3">
        <!-- 模拟侧边栏宽度的容器 -->
      </v-col>

      <v-col cols="12" md="9">
        <!-- Detail标题栏 -->
        <DetailsHeader />

        <!-- 占位区域 -->
        <div>这里是 Details 内容的占位区域。</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import DetailsHeader from "@/components/Details/DetailsHeader.vue";

export default {
  name: 'DetailsView',
  components: {
    DetailsHeader
  }
}
</script>

<style scoped>
/* 您可以在这里添加样式 */
</style>
