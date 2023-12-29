<template>
<div class="container">
  <v-avatar size="160" class="avatar">
    <v-img src="https://sakura-cjq.oss-rg-china-mainland.aliyuncs.com/homepage/lazy_cat.png" alt="User Avatar"></v-img>
  </v-avatar>
  <div  class="user-info">
    <div class="user-name" style="align-self: center">{{ user.name }}</div>
    <div class="account-info">账号：{{ user.id }}</div>
    <!--  中间使用空格占位符-->
    <div class="stats-info">点赞数：{{ user.likes }} &nbsp;&nbsp; 粉丝：{{ user.fans }}</div>
  </div>
</div>
</template>
<script>
import {mapState} from "vuex";
export default {
  name: "MyPageInfo",
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      // 从 store 中的 userInstance 模块中获取 userInfo
      user: state => state.userInstance.userInfo
    })
  },
  mounted() {
    //控制台查看输出
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
