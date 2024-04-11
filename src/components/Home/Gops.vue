<template>
  <v-container class="container">
    <div>
      <span class="third-title">风景</span>
      <p @click="$router.push('/MorePic')" >跳转</p>
      <div class="photos-container">
        <v-row no-gutters>
          <v-col cols="12" sm="6" md="3" v-for="(photo,index) in photosList" :key="photo.id" class="item">
            <img class="item-img" v-if="index < 4" :src="photo.src" alt="" @click="handleButtonClick(photo)">
          </v-col>
        </v-row>
      </div>
    </div>

        <div>
            <span class="third-title">猫猫</span>
            <div class="photos-container">
                <v-row no-gutters>
                    <v-col cols="12" sm="6" md="3" v-for="(image, index) in catsPictures" :key="index" class="item">
                        <img class="item-img" :src="image.url" :alt="`Image ${index}`" @click="handleButtonClick(image.id)">
                    </v-col>
                </v-row>
            </div>
        </div>

        <div>
            <span class="third-title">建筑</span>
            <div class="photos-container">
                <v-row no-gutters>
                    <v-col cols="12" sm="6" md="3" v-for="(image, index) in buildingsPictures" :key="index" class="item">
                        <img class="item-img" :src="image.url" :alt="`Image ${index}`" @click="handleButtonClick(image.id)">
                    </v-col>
                </v-row>
            </div>
        </div>


        <div>
            <span class="third-title">小狗</span>
            <div class="photos-container">
                <v-row no-gutters>
                    <v-col cols="12" sm="6" md="3" v-for="(image, index) in dogsPictures" :key="index" class="item">
                        <img class="item-img" :src="image.url" :alt="`Image ${index}`" @click="handleButtonClick(image.id)">
                    </v-col>
                </v-row>
            </div>
        </div>


    </v-container>
</template>

<style scoped>
.container{
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
    box-shadow: 0 2px 4px rgba(0,0,0,.2); /* 阴影 */
    height: 155px;
    padding-left:4px;


}

.item-img {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 8px;
    height: 155px;
    width: 98%;

    /* 图片宽度调整为 100% */
    border-radius: 12px;
    /* 图片圆角 */
    display: block;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0,1));
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

<script>
// import { mapState } from 'vuex';
import axios from "axios";

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Gops",
    data() {
        return {
            categorizedPictures: {
                landscape: [], // 风景图片
                cats: [], // 猫猫图片
                buildings: [], // 建筑图片
                dogs: [] // 小狗图片
            }
        };
    },

    mounted() {
        this.fetchAllCategories();
    },
    computed: {
        // 计算属性返回风景分类下的前4张图片
        landscapePictures() {
            return this.categorizedPictures.landscape.slice(0, 4);
        },
        // 对于其他分类，重复上述模式
        catsPictures() {
            return this.categorizedPictures.cats.slice(0, 4);
        },
        buildingsPictures() {
            return this.categorizedPictures.buildings.slice(0, 4);
        },
        dogsPictures() {
            return this.categorizedPictures.dogs.slice(0, 4);
        },
    },
    //图片详情点击事件：
    methods: {
        fetchAllCategories() {
            const categories = Object.keys(this.getCategoryTitle());
            categories.forEach(category => {
                this.fetchPictures(category);
            });
        },

        getCategoryTitle(categoryKey) {
            // 注意：这里修改为根据实际需要返回分类的映射，如前所述
            const titles = {
                landscape: 'cat',
                cats: 'cat',
                buildings: 'dog',
                dogs: 'dog'
            };
            if (categoryKey) {
                return titles[categoryKey] || categoryKey;
            }
            return titles;
        },

        async fetchPictures(category) {
            try {
                const params = { category: this.getCategoryTitle(category) };
                const response = await axios.get('http://116.63.9.51:8080/pictures/byCategory', { params });
                if (response.data.success && response.data.pictureEntities) {
                    const pictureUrls = response.data.pictureEntities.map(picture => ({
                        url: picture.url,
                        id: picture.imageId,
                        likesCount: picture.likesCount,
                        category: picture.category,
                        uploadTime: picture.uploadTime,
                        user: picture.user
                    }));
                    // 根据分类存储图片
                    this.$set(this.categorizedPictures, category, pictureUrls);
                } else {
                    console.error('Failed to fetch pictures:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching pictures:', error);
            }
        },
        handleButtonClick(imageId) {
            // 可选：如果需要在点击前就获取图片信息，可以先调用Vuex action
            // this.$store.dispatch('xinxiInstance/getphoto', imageId);

            // 跳转到详情页面，并通过URL参数传递图片ID
            this.$router.push({ path: `/details/${imageId}` });
        }
        // handleButtonClick(key) {
        //
        //     this.$store.dispatch('xinxiInstance/getphoto',key);
        //     this.$router.push('/details');
        //
        // }
    }



}
</script>
