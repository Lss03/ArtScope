import Vue from 'vue'
import Vuex from 'vuex'
import userInstance from "@/store/modules/user";
import photosInstance from "@/store/modules/photos";


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInstance,
    photosInstance
  }
})
