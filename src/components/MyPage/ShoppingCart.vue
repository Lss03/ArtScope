<template >
<div class="container">
  <table class="sticky-header-table">

  </table>
</div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ShoppingCart",
  mounted() {
    this.$store.dispatch("cartInstance/fetchCartList");
  },
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
</style>
