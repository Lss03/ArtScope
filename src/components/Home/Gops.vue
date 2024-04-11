<template>
    <v-container class="container">
        <div>
            <span class="third-title">风景</span>
            <div class="photos-container">
                <v-row no-gutters>
                    <v-col cols="12" sm="6" md="3" v-for="(image,index) in pictures" :key="index" class="item">
                        <img class="item-img" v-if="index < 4" :src="image.url" :alt="`Image ${index}`" @click="handleButtonClick(image)">
                    </v-col>
                </v-row>
            </div>
        </div>

        <div>
            <span class="third-title">猫猫</span>
            <div class="photos-container">
                <v-row no-gutters>
                    <v-col cols="12" sm="6" md="3" v-for="(photo,index) in photosList" :key="photo.id">
                        <img class="item-img" v-if="(index >= 4)&(index <8)" :src="photo.src" alt="" @click="handleButtonClick(photo)">
                    </v-col>
                </v-row>
            </div>

        </div>


        <div>
            <span class="third-title">建筑</span>
            <div class="photos-container">
                <v-row no-gutters>
                    <v-col cols="12" sm="6" md="3" v-for="(photo,index) in photosList" :key="photo.id">
                        <img class="item-img" v-if="(index >=8 )&(index <12)" :src="photo.src" alt="" @click="handleButtonClick(photo)">
                    </v-col>
                </v-row>
            </div>

        </div>

        <div>
            <span class="third-title">小狗</span>
            <div class="photos-container">
                <v-row no-gutters>
                    <v-col cols="12" sm="6" md="3" v-for="(photo,index) in photosList" :key="photo.id">
                        <img class="item-img" v-if="(index >= 12)&(index <16)" :src="photo.src" alt="" @click="handleButtonClick(photo)">
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
            pictures: [],
        };
    },
    mounted() {
        this.fetchPictures('cat');
    },
    // computed: mapState({
    //     photosList: state => state.photosInstance.list
    // }),
    // created() {
    //     this.$store.dispatch('photosInstance/getList');
    // },
    //图片详情点击事件：
    methods: {
        async fetchPictures(category) {
            try {
                const params = {
                    category: category, // 添加查询参数
                };

                const response = await axios.get('http://localhost:8080/api/pictures/byCategory', { params });
                console.log("分类请求返回数据");
                console.log(response.data);
                console.log(response.data.pictureEntities);
                if (response.data.success && response.data.pictureEntities) {
                    // 提取每个图片对象的url属性
                    const pictureUrls = response.data.pictureEntities.map(picture => ({
                        url: picture.url,
                        // 你可以根据需要提取更多属性
                        id: picture.imageId,
                        likesCount: picture.likesCount,
                        category: picture.category,
                        uploadTime: picture.uploadTime,
                        user: picture.user
                    }));

                    // 存储提取的图片URL数组
                    this.pictures = pictureUrls;
                } else {
                    console.error('Failed to fetch pictures:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching pictures:', error);
            }
        },
        handleButtonClick(key) {
            console.log()
            this.$store.dispatch('xinxiInstance/getphoto',key);
            this.$router.push('/details');


        }
    }



}
</script>
