<template >
  <div class="container">
    <table class="sticky-header-table">
      <tr class="items">
        <th >序号</th>
        <th >作品名称</th>
        <th >图片地址</th>
        <th >加入购物车时间</th>
        <th >商品价格</th>
      </tr>
      <tr v-for="item in items" :key="item.id" class="items">
        <td>{{ item.id }}</td>
        <td>{{ item.src }}</td>
        <td>{{ item.zuozhe }}</td>
        <td>2024.1.1</td> <!-- 如果这个日期是静态的，可以保留这样的格式 -->
        <td>{{ item.price }}￥</td>
      </tr>
    </table>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ShoppingCart",

  computed: {
    ...mapState({
      items: (state) => state.cartInstance.items
    })
  }
}
</script>

<style scoped>

.container{
  /*display: flex;*/
  /*flex-direction: column;*/
  /*justify-content: center;*/
  padding-inline: 0;
  margin-inline: 0;
  height: auto;
}
.sticky-header-table {
  border-collapse: collapse;display: block;
  max-height: calc(100% - 20px); /* 设置表格的最大高度，可根据需要调整 */
  overflow-y: auto; /* 垂直滚动条 */
}
.items{
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
}
td{
  flex: 1;
  text-align: center;
  line-height: 50px;
}
th{
  width: 250px;
}
td{
  
  background-color: #f9f9f9; /* 每行的背景颜色 */
  color: #333; /* 文本颜色 */
  transition: background-color 0.3s; /* 背景色渐变动画 */

}
</style>
