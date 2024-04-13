import Vue from 'vue'
import Vuex from 'vuex'
import photos from "@/store/modules/photos";
import user from "@/store/modules/user";
import comments  from "@/store/modules/comments";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    photos,
    comments

  }
})
