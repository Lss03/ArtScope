<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="ml-2 mr-5 mt-2 background" style="border-radius: 15px;height: 200px;display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <v-avatar size="90" class="ml-4">
            <v-img src="https://sakura-cjq.oss-rg-china-mainland.aliyuncs.com/homepage/lazy_cat.png" alt="User Avatar"></v-img>
          </v-avatar>
          <div class="mt-n4 ml-4" style="display: flex; flex-direction: column; align-items: center; justify-content: center;font-size: 16px;background-color: rgba(255, 255, 255, 0.5);border-radius: 15px;width: 300px;box-shadow:2px 2px 3px black">
            <div class="mt-5">{{ user.accountName || '未登录' }}</div>
            <div class="mt-2 mb-2">点赞数：{{ user.likesCount || 0 }} &nbsp;&nbsp; 粉丝数：{{ user.followersCount || 0 }}</div>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MyPageInfo",
  computed: {
    ...mapState('user', {
      user: state => state.userInfo
    }),
  },
  created() {
    // 假设用户已经登录且username是存在的
    if (this.user && this.user.accountName) {
      this.$store.dispatch('user/fetchUserDetails', this.user.accountName);
    }
  },
};
</script>

<style scoped>
.background {
  background-image: url('@/assets/image/myPage.png');
  background-repeat: repeat;
}
</style>
