<template>
  <v-container class="container">
    
    <span class="third-title">风景</span>
    <div class="photos-container">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="3" v-for="(photo,index) in photosList" :key="photo.id" class="item">
          <img class="item-img" v-if="index < 4" :src="photo.src" alt="" @click="handleButtonClick(photo)">
        </v-col>
      </v-row>
    </div>
    <span class="third-title">猫猫</span>
    <div class="photos-container">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="3" v-for="(photo,index) in photosList" :key="photo.id">
          <img class="item-img" v-if="(index >= 4)&(index <8)" :src="photo.src" alt="" @click="handleButtonClick(photo)">
        </v-col>
      </v-row>

    </div>
    <span class="third-title">建筑</span>
    <div class="photos-container">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="3" v-for="(photo,index) in photosList" :key="photo.id">
          <img class="item-img" v-if="(index >=8 )&(index <12)" :src="photo.src" alt="" @click="handleButtonClick(photo)">
        </v-col>
      </v-row>

    </div>
    <span class="third-title">小狗</span>
    <div class="photos-container">
      <v-row no-gutters>
        <v-col cols="12" sm="6" md="3" v-for="(photo,index) in photosList" :key="photo.id">
          <img class="item-img" v-if="(index >= 12)&(index <16)" :src="photo.src" alt="" @click="handleButtonClick(photo)">
        </v-col>
      </v-row>

    </div>
  </v-container>
</template>

<style scoped>
.container{
 margin: 0px;
 padding: 0px;
}
.item {
  position: relative;
  overflow: hidden;
}
.photos-container {

  margin-top: 8px; /* 与标题栏的留白 */
  margin-bottom: 8px;
  border-radius: 15px; /* 圆角 */
  box-shadow: 0 2px 4px rgba(0,0,0,.2); /* 阴影 */
  height: 155px;
  padding-left: 1%;
 
}

.item-img {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  height: 155px;
  width: 96%; 
  
  /* 图片宽度调整为 100% */
  border-radius: 12px;
 /* 图片圆角 */
  display: block;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0,1));
  transition: transform 0.3s ease;
}
.item-img:hover {
  transform: translateX(8px);
}

.third-title {

  padding: 0;
  
  font-size: 20px;
  margin-bottom: 8px;
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
  },
  //图片详情点击事件：
  methods: {
    handleButtonClick(key) {
      console.log(key)
      this.$store.dispatch('xinxiInstance/getphoto',key);
      this.$router.push('/details');
      
      
    }
  }



  }
</script>
