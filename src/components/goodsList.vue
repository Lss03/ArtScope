<template>
  <v-container>
    <v-row>
      <v-col
          cols="12"
          v-for="goods in goodslist"
          :key="goods.id"
          class="my-3"
      >
        <v-card>
          <v-layout row wrap>
            <v-flex xs4>
              <v-img :src="goods.src" class="grey lighten-2" aspect-ratio="1" ></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-title primary-title>
                {{ goods.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ goods.price | currency }}
              </v-card-subtitle>
              <v-card-actions>
                <v-btn color="coral" @click="add(goods)">加入购物车</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    goodslist: state => state.goods.list
  }),
  methods: mapActions('shopcart', ['add']),
  created () {
    this.$store.dispatch('goods/getList')
  },
  filters: {
    currency (value) {
      return '¥ ' + value
    }
  }
}
</script>

<!-- 由于现在使用了 Vuetify 的内建类，所以不再需要大量的自定义 CSS -->
<style>
/* 仍然可以保留一些必要的样式，如果有的话 */
</style>
