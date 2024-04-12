<template>
  <v-container fluid>
      <div>
          <DetailsHeader/>
      </div>
        <!-- Detail标题栏 -->

      <div>
        <photodetail :imageId="$route.params.id"></photodetail>
      </div>
        <!-- 占位区域 -->

  </v-container>
</template>

<script>
import DetailsHeader from "@/components/Details/DetailsHeader.vue";
import photodetail from "@/components/Details/photodetail.vue";

export default {
  name: 'DetailsView',
  components: {
    DetailsHeader,
    photodetail
  },

}
</script>

<style scoped>
/* 您可以在这里添加样式 */
</style>
