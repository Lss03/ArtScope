<template>
  <v-container class="my-container" fluid>
    <MyPageHeader />
    <MyPageInfo class="my-page-info"/>
    <v-divider/>
    <div>
      <v-btn-toggle v-model="currentComponent" mandatory >
        <v-btn value="ShoppingCart">购物车</v-btn>
        <v-btn value="RepositoryShow">仓库</v-btn>
      </v-btn-toggle>
    </div>
    <component :is="currentComponent"></component>
  </v-container>
</template>

<script>
import MyPageHeader from "@/components/MyPage/MyPageHeader.vue";
import MyPageInfo from "@/components/MyPage/MyPageInfo";
import ShoppingCart from "@/components/MyPage/ShoppingCart";
import RepositoryShow from "@/components/MyPage/RepositoryShow";

export default {
  name: 'MypageView',
  data: () => ({
    currentComponent: "ShoppingCart",
  }),
  components: {
    MyPageInfo,
    MyPageHeader,
    ShoppingCart,
    RepositoryShow,
  }
}
</script>

<style scoped>
/* 您可以在这里添加样式 */
.my-container {
  position: fixed;
  top: 70px; /* 标题栏高度加上留白 */
  left: 256px; /* 与侧边栏接壤 */
  right: 0;
  bottom: 0;
  overflow: auto;
  transition: 0.5s;
}
.my-page-info {
  border-radius: 15px; /* 添加圆角 */
  margin-left: 8px; /* 与侧边栏的留白 */
  margin-right: 8px; /* 与右侧边界的留白 */
  /* 如果需要，可以添加更多样式 */
}

</style>
