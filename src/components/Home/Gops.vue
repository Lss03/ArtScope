<template>
  <v-container>
    <span class="third-title">风景</span>
    <div class="photos-container">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="3" v-for="(photo,index) in photosList" :key="photo.id">
          <img class="item-img" v-if="index < 4" :src="photo.src" alt="">
        </v-col>
      </v-row>
    </div>
    <span class="third-title">猫猫</span>
    <div class="photos-container">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="3" v-for="(photo,index) in photosList" :key="photo.id">
          <img class="item-img" v-if="(index >= 4)&(index <8)" :src="photo.src" alt="">
        </v-col>
      </v-row>

    </div>
    <span class="third-title">建筑</span>
    <div class="photos-container">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="3" v-for="(photo,index) in photosList" :key="photo.id">
          <img class="item-img" v-if="(index >=8 )&(index <12)" :src="photo.src" alt="">
        </v-col>
      </v-row>

    </div>
    <span class="third-title">小狗</span>
    <div class="photos-container">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="3" v-for="(photo,index) in photosList" :key="photo.id">
          <img class="item-img" v-if="(index >= 12)&(index <16)" :src="photo.src" alt="">
        </v-col>
      </v-row>

    </div>
  </v-container>
</template>

<style scoped>
.photos-container {
  margin-top: 8px; /* 与标题栏的留白 */
  margin-left: 16px; /* 左侧留白 */
  margin-right: 16px; /* 右侧留白 */
  border-radius: 15px; /* 圆角 */
  box-shadow: 0 2px 4px rgba(0,0,0,.2); /* 阴影 */
}

.item-img {
  height: 200px;
  width: 100%; /* 图片宽度调整为 100% */
  border-radius: 12px; /* 图片圆角 */
  padding: 8px;
}

.third-title {
  margin-top: 16px;
  font-size: 20px;
  margin-bottom: 16px;
}
</style>

<script>
import { mapState } from 'vuex';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Gops",
  computed: mapState({
    photosList: state => state.photosInstance.list
  }),
  created() {
    this.$store.dispatch('photosInstance/getList');
  }
}
</script>
