<template>
  <v-app-bar
      :elevation="4"
      style="border-radius: 15px"
      flat
      class="text-center"
  >
    <!-- 图标，可替换或移除 -->
    <v-icon>
      <img
          src="https://your-icon-url.png"
          alt="Icon"
          style="width: auto; height: 230%; margin-left: 50px"
      >
    </v-icon>

    <!-- 标题文本 -->
    <v-toolbar-title class="title">
      <span>似有故人来</span>
    </v-toolbar-title>

    <!-- 可选: 额外的链接或按钮 -->
    <a href="https://your-link-url.com">
      <v-btn icon style="margin-right: 25px">
        <v-icon>
          <img
              src="https://your-link-icon-url.png"
              alt="Link"
              class="enlarge-image"
              style="width: 250%; height: 250%;"
          >
        </v-icon>
      </v-btn>
    </a>
  </v-app-bar>
</template>

<style scoped>
.enlarge-image {
  transition: transform 0.3s ease-in-out; /* 添加过渡效果 */
}

.enlarge-image:hover {
  transform: scale(1.1); /* 在:hover时放大，可根据需要调整比例 */
}

.title {
  position: relative;
  font-size: 190%; /* 调整标题字体大小 */
}

/* 如果需要，可以在这里添加更多样式 */
</style>
