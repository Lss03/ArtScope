<template>
  <div v-if="sessionReady"> <!-- 只有在 sessionReady 为 true 时才渲染内容 -->
    <MyPageHeader />
    <div class="my-container">
      <MyPageInfo class="my-page-info"/>
      <v-divider></v-divider>
      <v-tabs color="deep-purple-accent-4" align-tabs="center" grow>
        <v-tab @click="changeComponent('CreationShow')">作品</v-tab>
        <v-tab @click="changeComponent('CollectionShow')">收藏</v-tab>
      </v-tabs>
      <component :is="currentComponent"></component>
    </div>
  </div>
  <div v-else> <!-- 数据加载时显示的临时内容 -->
    加载中...
  </div>
</template>

<script>
import MyPageHeader from "@/components/MyPage/MyPageHeader.vue";
import MyPageInfo from "@/components/MyPage/MyPageInfo";
import CollectionShow from "@/components/MyPage/CollectionShow";
import CreationShow from "@/components/MyPage/CreationShow";

export default {
  name: 'MyPageView',
  data: () => ({
    currentComponent: 'CreationShow',
    sessionReady: false,
  }),
  methods: {
    changeComponent(componentName) {
      this.currentComponent = componentName;
    },
    async initializeSession() {
      await this.$store.dispatch('user/initializeSession');
      this.sessionReady = true;
    }
  },
  created() {
    this.initializeSession();
  },
  components: {
    MyPageInfo,
    MyPageHeader,
    CreationShow,
    CollectionShow
  }
}
</script>

<style scoped>
.my-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-inline: 10px;
}
.my-page-info {
  border-radius: 15px;
  margin-left: 8px;
  margin-right: 8px;
}
</style>
