<template>
    <div>

        <div class="ml-n4 mr-n4 mt-n3 background"
             style="height: 200px;display: flex; flex-direction: column; justify-content: center;">
            <div>
                <div class="ml-12 mt-n4"
                     style="color: white;font-size: 40px;text-align: left; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); ">
                    {{ categoryDetails.title }}
                </div>
                <div class="ml-13 mt-2" style="color: white;text-align: left; ">{{ categoryDetails.subtitle }}</div>
            </div>
        </div>

        <div class="mt-5">
            <v-row v-for="(row, rowIndex) in imageLayout" :key="rowIndex">
                <v-col v-for="(col, colIndex) in row" :key="colIndex" :cols="col.cols">
                    <v-img
                        v-if="photos(categoryId).length > rowIndex * row.length + colIndex"
                        :src="photos(categoryId)[rowIndex * row.length + colIndex].url"
                        :alt="`Image ${rowIndex * row.length + colIndex}`"
                        class="custom-img"
                        cover
                    ></v-img>
                </v-col>
            </v-row>
        </div>

<!--        <div class="mt-5">-->
<!--            <v-row v-for="(row, rowIndex) in imageLayout" :key="rowIndex">-->
<!--                <v-col v-for="(col, colIndex) in photos(categoryId)" :key="colIndex" :cols="col.cols">-->
<!--                    <v-img-->
<!--                            :src="col.url"-->
<!--                            :alt="`Image ${colIndex}`"-->
<!--                            class="custom-img"-->
<!--                            cover-->
<!--                    ></v-img>-->
<!--                </v-col>-->
<!--            </v-row>-->
<!--        </div>-->

    </div>
</template>

<style scoped>
.background {
   background-image: url(@/assets/image/myPage.png);
    background-repeat: repeat;
}
/*.background {*/
/*    height: 200px;*/
/*    display: flex;*/
/*    flex-direction: column;*/
/*    justify-content: center;*/
/*}*/

.custom-img {
    /*height: 150px; !* 固定高度为150像素 *!*/
    /*width: auto; !* 宽度自动调整以保持图片比例 *!*/
    margin: -1px;
}
</style>
<script>


export default {
    name: "MorePic",
    data() {
        return {
            imageLayout: [
                [{cols: 4}, {cols: 4}, {cols: 4}], // 第一行显示三张图片
                [{cols: 3}, {cols: 3}, {cols: 3}, {cols: 3}], // 第二行显示四张图片
                [{cols: 6}, {cols: 6}], // 第三行显示两张图片
                // [{cols: 4}, {cols: 4}, {cols: 4}], // 第一行显示三张图片
                // [{cols: 3}, {cols: 3}, {cols: 3}, {cols: 3}], // 第二行显示四张图片
                // [{cols: 6}, {cols: 6}],
            ],
            categories: {
                landscape: {title: "自然风景", subtitle: "作品数：50+", background: "@/assets/image/bg1.jpg"},
                anime: {title: "二次元", subtitle: "作品数：60+", background: "@/assets/image/bg1.jpg"},
                architecture: {title: "建筑景观", subtitle: "作品数：30+", background: "@/assets/image/bg1.jpg"},
                animals:{title: "动物", subtitle: "作品数：40+", background: "@/assets/image/bg1.jpg"},
                realism:{title: "人物写实", subtitle: "作品数：20+", background: "@/assets/image/bg1.jpg"},

            }

        }
    },
    mounted() {
        this.fetchPictures();
        // this.backgroundStyle();
    },
    computed: {
        photos() {
            return (category) => this.$store.getters['photos/getPicturesByCategory'](category);
        },
        categoryDetails() {
            console.log("Category ID:", this.categoryId);
            console.log("Categories:", this.categories[this.categoryId]);
            return this.categories[this.categoryId];
        },


    },
    props: {
        categoryId: {
            type: [Number, String],
            required: true,
        },
    },
    methods: {
        async fetchPictures() {
            try {
                await this.$store.dispatch('photos/fetchPhotos', this.categoryId);
            } catch (error) {
                console.error("Error fetching pictures:", error);
            }
        },
        // backgroundStyle() {
        //     console.log(this.categoryDetails.background); // 查看输出的路径是否正确
        //     let categoryDetails = this.categoryDetails;
        //     console.log(require(categoryDetails.background) + ' is the background');
        //     console.log({
        //         backgroundImage: 'url(' + require(categoryDetails.background) + ')'
        //     });
        //     return {
        //         backgroundImage: 'url(' + require(categoryDetails.background) + ')'
        //     };
        // }
    }
}
</script>
