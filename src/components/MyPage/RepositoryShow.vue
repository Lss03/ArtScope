<template>
  <v-row class="container">
    <v-col
        v-for="(item,index) in items"
        :key="index"
        class="d-flex child-flex"
        cols="4"
    >
      <v-img
          width="360"
          :src=item.src
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
              class="fill-height ma-0"
              align="center"
              justify="center"
          >
            <v-progress-circular
                indeterminate
                color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-col>
  </v-row>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "RepositoryShow",
  mounted() {
    this.$store.dispatch("repositoryInstance/fetchRepoList");
  },
  computed: {
    ...mapState({
      items: (state) => state.repositoryInstance.items
    })
  }

}
</script>

<style scoped>
.container {
  align-self: center;
}
</style>
