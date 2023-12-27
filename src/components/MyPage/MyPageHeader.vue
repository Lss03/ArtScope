<template>
  <v-app-bar app :elevation="4" style="border-radius: 15px; background-color: white;" flat class="text-center">
    <!-- 左侧图片容器 -->
    <div style="flex: 1; display: flex; justify-content: flex-start; padding-left: 16px;">
      <img src="https://sakura-cjq.oss-rg-china-mainland.aliyuncs.com/homepage/lazy_cat.png" alt="Icon" style="height: 60px;">
    </div>

    <!-- 标题文本 -->
    <v-toolbar-title class="title" style="flex: 2; display: flex; justify-content: center;">
      <span>在这里写个人中心内容</span>
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
</template>

<style scoped>
.enlarge-image {
  transition: transform 0.3s ease-in-out;
}

.enlarge-image:hover {
  transform: scale(1.1);
}

.title {
  font-size: 190%;
  text-align: center;

}

/* 如果需要，可以在这里添加更多样式 */
</style>


<script setup>
</script>
