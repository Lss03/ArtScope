<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="8">
                <v-img :src="pictureDetails.url" aspect-ratio="1.77" class="elevation-2" rounded></v-img>
            </v-col>

            <v-col cols="12" md="4">
                <v-card class="elevation-2" outlined>
                    <v-card-title>
                        <v-avatar size="130" class="mr-3">
                            <img src="../../assets/image/panda.png">
                        </v-avatar>
                        作者：<span class="pink--text">{{ userDetails.accountName }}</span>
                        <!-- 添加按钮 -->
                        <v-btn color="blue" class="white--text ma-2">
                            <v-icon left>mdi-plus</v-icon>
                            关注
                        </v-btn>
                    </v-card-title>


                    <v-card-text>
                        <div class="subtitle-1 mb-1">类别：{{ pictureDetails.category }}</div>
                        <div class="subtitle-1 mb-1">创作意图：{{ pictureDetails.creationIntent }}</div>
                        <div class="subtitle-1 mb-1">创作日期：{{ pictureDetails.creationTime }}</div>
                        <v-chip class="ma-2" color="amber" text-color="white" @click="add">
                            <v-icon left>mdi-star-outline</v-icon>
                            {{ userDetails.followersCount }} Likes
                        </v-chip>
                        <v-chip class="ma-2" color="blue" text-color="white">
                            <v-icon left>mdi-account-group-outline</v-icon>
                            {{ pictureDetails.likesCount }} Fans
                        </v-chip>
                        <div class="headline">价格：??? 元</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn color="primary" block @click="addToCart">
                            {{ cartButtonText }}
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>

        <!-- 描述和评论 -->
        <v-row class="mt-4">
            <v-col cols="12">
                <v-card class="elevation-2" outlined>
                    <v-card-text>{{ '信息详情？？？' }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>

        <!-- 评论区域 -->
        <v-row class="mt-4">
            <v-col cols="12">
                <v-card class="elevation-2" outlined>
                    <v-card-title>评论</v-card-title>
                    <v-card-actions>
                        <v-text-field
                                label="添加评论"
                                v-model="newComment"
                                outlined
                                dense
                                class="flex-grow-1"
                        ></v-text-field>
                        <!-- :disabled 属性用于根据 userInfo 是否为空禁用按钮 :disabled="!userInfo.id"-->
                        <v-btn color="primary" @click="submitComment">提交</v-btn>
                    </v-card-actions>
                    <v-card-text>
                        <!-- 条件判断：如果有评论 -->
                        <div v-if="comments.length > 0">
                            <!-- 循环评论数组 -->
                            <v-list>
                                <v-list-item-group>
                                    <v-list-item v-for="comment in comments" :key="comment.id" two-line>
                                        <v-list-item-avatar color="grey lighten-4">
                                            <img :src="comment.picture.url" :alt="comment.picture.category">
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title>{{
                                                comment.user.nickname || comment.user.accountName
                                                }}
                                            </v-list-item-title>
                                            <v-list-item-subtitle>{{ comment.content }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                        <v-list-item-action>
                                            <v-icon color="blue">mdi-thumb-up</v-icon>
                                            <span>{{ comment.user.likesCount }}</span>
                                        </v-list-item-action>
                                        <v-list-item-action>
                                            <span>{{ comment.commentTime }}</span>
                                        </v-list-item-action>
                                    </v-list-item>
                                </v-list-item-group>
                            </v-list>
                        </div>
                        <div v-else class="text-center">暂时没有评论噢！</div>
                    </v-card-text>

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// import xinxi from "@/store/modules/xinxi"
import axios from "axios";

export default {
    name: 'PhotoDetail',

    data() {
        return {
            userDetails: null, // 用于存储用户实体数据
            pictureDetails: null, // 用于存储图片实体数据
            comments: [], // 用于存储评论列表数据
            fetchSuccess: false, // 用于标识数据是否成功获取
            fetchMessage: '', // 用于存储获取数据的消息
        };
    },

    props: {
        imageId: {
            type: [Number, String],  // 根据实际情况，这里可能是Number或String
            required: true,
        },
    },
    mounted() {
        this.created();
    },

    computed: {
        //判断是否在购物车中(收藏）
        inCart() {
            return this.$store.getters['cartInstance/getCartItemById'](6);
        },
        //加入购物车按钮的文本
        cartButtonText() {
            return this.inCart ? '从购物车移除' : '收藏？？？';
        }
    },
    methods: {
        async created() {
            try {
                // 假设你已经通过某种方式获取了图片ID
                const imageId = this.imageId; // 或者从 Vuex/store, props, $route.params 中获取
                console.log("imageId:", imageId);
                const response = await axios.get(`http://116.63.9.51:8080/pictures/info/${this.imageId}`);
                console.log(response.data);
                if (response.data.success) {
                    this.userDetails = response.data.userEntity;
                    this.pictureDetails = response.data.pictureEntity;
                    this.comments = response.data.commentEntityList;
                    this.fetchSuccess = true;
                    this.fetchMessage = response.data.message;
                    console.log("userDetails:", this.userDetails);
                    console.log("pictureDetails:", this.pictureDetails);
                    console.log("comments:", this.comments);
                } else {
                    this.fetchSuccess = false;
                    this.fetchMessage = '获取数据失败';
                }
            } catch (error) {
                console.error("Error fetching picture details:", error);
                this.fetchSuccess = false;
                this.fetchMessage = '请求数据时发生错误';
            }
        },

        add() {
            const action = this.flag === 0 ? "addlike" : "dellike";
            this.$store.dispatch(`photosInstance/${action}`, this.xinxi.id);
            this.flag = this.flag === 0 ? 1 : 0;
        },
        addToCart() {
            const action = this.inCart ? 'removePhotoFromCart' : 'addPhotoToCart';
            this.$store.dispatch(`cartInstance/${action}`, this.xinxi.id);
        },
        // 提交评论
        async submitComment() {
            // 首先检查评论内容是否为空或仅包含空白字符
            if (!this.newComment.trim()) {
                alert("评论内容不能为空！");
                return; // 如果为空，显示警告并停止执行
            }
            //获取用户信息
            const username = localStorage.getItem('username');
            // 如果用户未登录，显示警告并停止执行
            if (!username) {
                alert('请先登录！');
                return;
            }
            try {
                // 获取用户实体
                const params = {
                    username: localStorage.getItem('username'), // 添加查询参数
                };
                console.log("params:", params);

                const responseUser = await axios.get('https://7aee36ef-ff2c-4af7-b3cf-911287232704.mock.pstmn.io/user/info', {params});
                console.log("responseUser:", responseUser.data);
                if (!responseUser.data.success) {
                    alert('获取用户信息失败');
                    return;
                }


                const requestBody = {
                    userEntity: responseUser.data.user, // 从响应中获取用户实体
                    pictureEntity: this.pictureDetails, // 使用组件中已有的图片实体
                    comment: this.newComment // 评论内容
                };

                // 发送评论到服务器
                const response = await axios.post('http://116.63.9.51:8080/comments/upload', requestBody);
                // const newCommentData = {
                //     userEntity: responseUser.data.user, // 用户信息
                //     pictureEntity: this.pictureDetails, // 相关的图片信息，如果评论与图片关联
                //     comment: this.newComment, // 评论文本
                //     // id: response.data.commentId || Date.now(), // 服务器可能返回一个新的评论ID，如果没有则使用当前时间戳
                //     // commentTime: new Date().toLocaleString() // 生成一个表示当前时间的字符串
                // };
                if (response.data.success) {
                    console.log('评论成功提交!');
                    console.log(response.data);
                    this.comments.push({
                        ...requestBody,
                        id: response.data.commentId || Date.now(),
                        commentTime: new Date().toLocaleString()
                    });
                    // // 正确的方法来响应式更新数组
                    // this.comments = [...this.comments, newCommentData];

                    this.newComment = ''; // 清空输入框
                    // 页面刷新
                    window.location.reload(); // 刷新页面以显示最新评论
                } else {
                    alert('评论提交失败: ' + response.data.message);
                }
            } catch (error) {
                console.error('处理过程中发生错误:', error);
                alert('处理请求时发生错误');
            }
        }
    }

}
</script>

<style scoped>
.author-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.info-card {
    border-radius: 15px;
}

.description-card {
    border-radius: 15px;
}

.likes {
    font-size: 1.5em;
    margin-left: 20px;
}

.price {
    display: flex;
    align-items: center;
    font-size: 1.2em;
    margin-top: 10px;
}

.v-icon {
    margin-right: 5px;
}

.comments-card {
    border-radius: 15px;
}

.comment {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}
</style>
