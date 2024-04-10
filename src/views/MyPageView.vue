<template>
  <div>
    <MyPageHeader />
    <div class="my-container " >
      <MyPageInfo class="my-page-info"/>
      <v-divider></v-divider>
      <v-tabs
          color="deep-purple-accent-4"
          align-tabs="center"
          grow
      >
        <v-tab @click="changeComponent(1)" >收藏</v-tab>
        <v-tab @click="changeComponent(2)">作品</v-tab>
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
import {mapState} from "vuex";

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
  computed: {
    ...mapState({
      items: (state) => state.userInstance.userInfo,
    })
  },
  mounted() {
    this.$store.dispatch("userInstance/fetchUserInfo");
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
.my-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 将子组件在垂直方向上对齐到容器的顶部 */
  justify-content: flex-start; /* 将子组件在水平方向上对齐到容器的左侧 */
  margin-inline: 10px;
}
.my-page-info {
  border-radius: 15px; /* 添加圆角 */
  margin-left: 8px; /* 与侧边栏的留白 */
  margin-right: 8px; /* 与右侧边界的留白 */
  /* 如果需要，可以添加更多样式 */
}

</style>
