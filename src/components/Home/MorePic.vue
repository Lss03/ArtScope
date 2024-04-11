<template>
  <div>
    <!--  最上面的标题图需动态改变-->
    <div  class="ml-n4 mr-n4 mt-n3 background"  style="height: 200px;display: flex; flex-direction: column; justify-content: center;">
      <div>
        <div class="ml-12 mt-n4" style="color: white;font-size: 40px;text-align: left; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); ">春日胜景</div>
        <div class="ml-13 mt-2" style="color: white;text-align: left; ">作品数：70+</div>
      </div>
    </div>
    <div class="mt-5">
      <v-row v-for="(row, rowIndex) in imageLayout" :key="rowIndex">
        <v-col v-for="(col, colIndex) in row" :key="colIndex" :cols="col.cols">
          <v-img
              :src="`https://picsum.photos/500/300?random=${rowIndex * row.length + colIndex}`"
              class="custom-img"
              cover
          ></v-img>
        </v-col>
      </v-row>
    </div>

  </div>
</template>

<style scoped>
.background {
  background-image: url(@/assets/image/myPage.png);
  background-repeat: repeat;
}
.custom-img {
  margin: -1px;
}
</style>
<script>
export default {
  name: "MorePic",
  data() {
    return {
      imageLayout: [
        [{ cols: 4 }, { cols: 4 }, { cols: 4 }], // 第一行显示三张图片
        [{ cols: 3 }, { cols: 3 }, { cols: 3 }, { cols: 3 }], // 第二行显示四张图片
        [{ cols: 6 }, { cols: 6 }], // 第三行显示两张图片
        [{ cols: 4 }, { cols: 4 }, { cols: 4 }], // 第一行显示三张图片
        [{ cols: 3 }, { cols: 3 }, { cols: 3 }, { cols: 3 }], // 第二行显示四张图片
        [{ cols: 6 }, { cols: 6 }],
      ],

    }
  },
}
</script>