<template>
  <div>
    <MyPageHeader />
    <div class="content" >
      <MyPageInfo/>
      <v-divider></v-divider>
      <v-tabs
          color="deep-purple-accent-4"
          align-tabs="center"
          grow
      >
        <v-tab @click="changeComponent(1)" >购物车</v-tab>
        <v-tab @click="changeComponent(2)">仓库</v-tab>
      </v-tabs>
      <component :is="currentComponent"></component>
    </div>
  </div>
</template>

<script>
import MyPageHeader from "@/components/MyPage/MyPageHeader.vue";
import MyPageInfo from "@/components/MyPage/MyPageInfo";
import ShoppingCart from "@/components/MyPage/ShoppingCart";
import RepositoryShow from "@/components/MyPage/RepositoryShow";

export default {
  name: 'MyPageView',
  data: () => ({
    currentComponent: 'ShoppingCart',
  }),
  methods: {
    changeComponent(value) {
      if (value === 1) {
        this.currentComponent = 'ShoppingCart'
      } else if (value === 2) {
        this.currentComponent = 'RepositoryShow'
      }
    }
  },

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
.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 将子组件在垂直方向上对齐到容器的顶部 */
  justify-content: flex-start; /* 将子组件在水平方向上对齐到容器的左侧 */
  margin-inline: 10px;
}
v-btn-toggle {
  margin-top: 10px;
}

</style>
