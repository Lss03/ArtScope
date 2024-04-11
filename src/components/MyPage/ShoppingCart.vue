<!--个人作品-->
<template>
    <v-container>
        <v-row>
            <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                    v-for="(image, index) in pictures"
                    :key="index"
            >
                <v-img :src="image.url" :alt="`Image ${index}`" aspect-ratio="1.5"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            pictures: [], // 存储图片URL的数组
        };
    },
    mounted() {
        this.fetchPictures(localStorage.getItem('username')); // 传递用户名
    },
    methods: {
        async fetchPictures(username) {
            try {
                const params = {
                    username: username, // 添加查询参数
                };

                const response = await axios.get('https://7aee36ef-ff2c-4af7-b3cf-911287232704.mock.pstmn.io/user/info', { params });
                console.log("请求返回数据");
                console.log(response.data);
                if (response.data.success && response.data.pictures) {
                    this.pictures = response.data.pictures;
                } else {
                    console.error('Failed to fetch pictures:', response.data.message);
                }
            } catch (error) {
                console.error('Error fetching pictures:', error);
            }
        },
    },
};

</script>
<style>

</style>
