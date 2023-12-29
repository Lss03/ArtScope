<template>
  <v-container class="my-container" fluid>
<!--    <MyPageHeader />-->
    <MyPageInfo/>
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
// import MyPageHeader from "@/components/MyPage/MyPageHeader.vue";
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
    // MyPageHeader,
    ShoppingCart,
    RepositoryShow,
  }
}
</script>

<style scoped>
/* 您可以在这里添加样式 */
.my-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 将子组件在垂直方向上对齐到容器的顶部 */
  justify-content: flex-start; /* 将子组件在水平方向上对齐到容器的左侧 */
}
</style>
