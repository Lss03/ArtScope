<template>
  <v-container>
    <v-row>
      <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(image, index) in userPictures"
          :key="index"
      >
        <v-img :src="image.url" :alt="`Image ${index}`" aspect-ratio="1.5"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      // 不再直接在组件中存储图片URL的数组
    };
  },
  computed: {
    // 使用 mapGetters 来获取 Vuex 中的用户图片列表
    ...mapGetters('user', ['userPictures']),
  },
  mounted() {
    console.log('User pictures:', this.userPictures);
    // 确保用户详细信息已被获取，这应包括图片列表
    if (!this.userPictures.length) {
      // 假设已登录用户的用户名可以通过 Vuex 获取
      const username = this.$store.getters['user/userDetails'].accountName;
      if (username) {
        this.$store.dispatch('user/fetchUserDetails', username);
      }
    }
  }
};
</script>

<style>
/* 你的样式 */
</style>
