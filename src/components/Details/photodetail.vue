<template>
  <v-container>
    <!-- 图片和作者信息 -->
    <v-row>
      <v-col cols="12" md="8">
        <v-img
            :src="xinxi.src"
            aspect-ratio="1.77"
            class="elevation-2"
            style="border-radius: 15px;"
        ></v-img>
      </v-col>
      <v-col cols="12" md="4">
        <div class="author-info">
          <v-avatar size="60">
            <img src="../../assets/image/panda.png">
          </v-avatar>
          <span>{{ xinxi.zuozhe }}</span>
        </div>
        <v-card
            elevation="2"
            class="info-card"
        >
          <v-card-text>
            <v-icon
                large
                @click="add"
                :color="flag > 0 ? 'amber' : 'grey'"
            >
              mdi-star-outline
            </v-icon>
            <span class="likes">{{ xinxi.like }}</span>
            <div class="price">{{ xinxi.price }} 元</div>
            <v-btn
                color="primary"
                @click="addToCart"
                class="mt-3"
            >
              加入购物车
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- 描述和评论 -->
    <v-row class="mt-4">
      <v-col cols="12">
        <v-card elevation="2" class="description-card">
          <v-card-text>{{ xinxi.xiangqing }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import xinxi from "@/store/modules/xinxi"

export default {
  name: 'PhotoDetail',
  data() {
    return {
      xinxi: xinxi.state.pxinxi,
      flag: 0,
    }
  },
  methods: {
    add() {
      const action = this.flag === 0 ? "addlike" : "dellike";
      this.$store.dispatch(`photosInstance/${action}`, this.xinxi.id);
      this.flag = this.flag === 0 ? 1 : 0;
    },
    addToCart() {
      this.$store.dispatch('cart/addPhotoToCart', this.xinxi.id);
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
  font-size: 1.2em;
  margin-top: 10px;
}
</style>
