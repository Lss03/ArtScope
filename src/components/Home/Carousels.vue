<template>
  <div class="carousel-container">
    <v-carousel cycle autoplay
    :interval="2000"  >
      <v-carousel-item src="@/assets/image/p1.jpg" cover></v-carousel-item>
      <v-carousel-item src="@/assets/image/p2.jpg" cover></v-carousel-item>
      <v-carousel-item src="@/assets/image/p3.jpg" cover></v-carousel-item>
      <v-carousel-item src="@/assets/image/p4.jpg" cover></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Carousel"
}
</script>

<style scoped>
.carousel-container {
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2); /* 阴影效果 */
  border-radius: 15px; /* 圆角 */
  overflow: hidden; /* 防止子元素溢出容器圆角 */
}
</style>
