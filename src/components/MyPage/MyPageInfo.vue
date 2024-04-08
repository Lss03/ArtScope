<template>
  <div class="container">
    <v-avatar size="160" class="avatar">
      <v-img src="https://sakura-cjq.oss-rg-china-mainland.aliyuncs.com/homepage/lazy_cat.png" alt="User Avatar"></v-img>
    </v-avatar>
    <div class="user-info">
      <div class="user-name" style="align-self: center">{{ safeUser.name }}</div>
      <div class="account-info">账号：{{ safeUser.name }}</div>
      <div class="stats-info">点赞数：{{ safeUser.likes }} &nbsp;&nbsp; 粉丝：{{ safeUser.fans }}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyPageInfo",
  computed: {
    ...mapState({
      user: state => state.userInstance.userInfo
    }),
    safeUser() {
      return { name: '士态炎凉', likes: 10, fans: 50 }; // 默认值
    }
  },
  mounted() {
    console.log(this.$store.state.userInstance.userInfo);
  },
};
</script>

<style scoped>
.container {
  display: flex;
  background: rgb(238, 246, 254);
  padding-inline: 0;
}
.avatar {
margin-inline: 20px;
}
.user-info{
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left:5px;
}
</style>
