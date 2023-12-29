<template>
  <div class="home-view-container">
    <!-- HomeHeader 组件 -->
    <HomeHeader />

    <!-- 轮播图 -->
    <div class="carousel-wrapper">
      <Carousels />
    </div>

    <!-- 图片区域 -->
    <div class="image-section">
      <span class="section-title">精美图片</span>
      <Gops />
    </div>
  </div>
</template>

<script>
import Carousels from "@/components/Home/Carousels.vue";
import HomeHeader from "@/components/Home/HomeHeader.vue";
import Gops from "@/components/Home/Gops.vue";

export default {
  name: 'HomeView',
  components: {
    HomeHeader,
    Carousels,
    Gops
  }
}
</script>

<style scoped>
.home-view-container {
  position: fixed;
  top: 70px; /* 标题栏高度加上留白 */
  left: 256px; /* 与侧边栏接壤 */
  right: 0;
  bottom: 0;
  overflow: auto;
  transition: 0.5s;
}

.carousel-wrapper {
  margin-top: 16px; /* 与标题栏的留白 */
  margin-left: 8px; /* 与侧边栏的留白 */
  margin-right: 8px;
}

.image-section {
  margin-top: 16px;
  margin-left: 8px;
  margin-right: 8px;
}

.section-title {
  font-size: 24px;
  margin-bottom: 16px;
}
</style>
