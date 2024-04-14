<template>
  <v-container fluid>
    <HomeHeader />
    <MorePic :category-id="$route.params.id"/>
  </v-container>
</template>

<style scoped>

</style>
<script>
import MorePic from "@/components/Home/MorePic.vue";
import HomeHeader from "@/components/Home/HomeHeader.vue";

export default {
  name: 'MoreView',
  components: {
    HomeHeader,
    MorePic
  }
}
</script>
