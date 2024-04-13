<template>
  <v-container fluid>
      <div>
          <DetailsHeader/>
      </div>
        <!-- Detail标题栏 -->

      <div>
        <PhotoDetail :photo-id="$route.params.id" />
      </div>
        <!-- 占位区域 -->

  </v-container>
</template>

<script>
import DetailsHeader from "@/components/Details/DetailsHeader.vue";
import PhotoDetail from "@/components/Details/PhotoDetail.vue";

export default {
  name: 'DetailsView',
  components: {
    DetailsHeader,
    PhotoDetail
  },
  props: ['id'],
  mounted() {
    console.log("Photo ID from route:", this.$route.params.id);
    // 可以在这里调用API获取详情，然后传给 PhotoDetail
    // 或者 PhotoDetail 自己根据 photo-id 属性调用API
  }
}
</script>

<style scoped>
/* 您可以在这里添加样式 */
</style>
