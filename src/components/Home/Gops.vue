<template>
    <v-container class="container">
        <div v-for="category in ['landscape', 'anime','architecture','animals','realism']" :key="category">
            <div style="display: flex; align-items: center; justify-content: space-between;">
                <span class="third-title">{{ categoryTitles[category] }}</span>
                <!-- 添加更多按钮 -->
                <v-btn text @click="goToMoreView(category)">更多</v-btn>
            </div>
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
                landscape: '自然风景',
                anime: '二次元',
                architecture: '建筑景观',
                animals:'动物',
                realism:'人物写实',
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
            ['landscape', 'anime','architecture','animals','realism'].forEach(category => {
                this.$store.dispatch('photos/fetchPhotos', category);
            });
        },
        goToPhotoDetail(photoId) {
            console.log("Photo ID being passed:", photoId); // 添加这行代码来打印photoId
            this.$router.push({name: 'Details', params: {id: photoId}}); // 使用路由的 name 和 params 传递参数
        },
        goToMoreView(categoryId) {
            this.$router.push({name: 'MorePic', params: {id: categoryId}});
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
