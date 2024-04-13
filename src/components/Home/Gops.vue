<template>
  <v-container class="container">
    <div v-for="category in ['cat', 'dog']" :key="category">
      <span class="third-title">{{ categoryTitles[category] }}</span>
      <div class="photos-container">
        <v-row no-gutters>
          <v-col cols="12" sm="6" md="3" v-for="photo in photos(category)" :key="photo.id" class="item">
            <img class="item-img" :src="photo.url" alt="" @click="goToPhotoDetail(photo.imageId)">
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Gops",
  computed: {
    categoryTitles() {
      return {
        cat: '猫猫',
        dog: '小狗'
      };
    },
    photos() {
      return (category) => this.$store.getters['photos/getPicturesByCategory'](category);
    }
  },
  mounted() {
    this.initCategories();
  },
  methods: {
    initCategories() {
      ['cat', 'dog'].forEach(category => {
        this.$store.dispatch('photos/fetchPhotos', category);
      });
    },
    goToPhotoDetail(photoId) {
      console.log("Photo ID being passed:", photoId); // 添加这行代码来打印photoId
      this.$router.push({ name: 'Details', params: { id: photoId } }); // 使用路由的 name 和 params 传递参数
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0;
  padding: 0;
}

.item {
  position: relative;
}

.photos-container {
  margin-top: 8px; /* 与标题栏的留白 */
  margin-bottom: 8px;
  border-radius: 15px; /* 圆角 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2); /* 阴影 */
  height: 155px;
  padding-left: 4px;
}

.item-img {
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 8px;
  height: 155px;
  width: 98%;
  border-radius: 12px; /* 图片圆角 */
  display: block;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 1));
  transition: transform 0.3s ease;
}

.item-img:hover {
  transform: scale(1.05)
}

.third-title {
  font-family: SimSun, "宋体", sans-serif;
  padding: 0;
  font-size: 20px;
  margin-bottom: 8px;
}
</style>
