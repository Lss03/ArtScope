import Vue from 'vue'
import Vuex from 'vuex'
import userInstance from "@/store/modules/user";
import cartInstance from "@/store/modules/cart";
import repositoryInstance from "@/store/modules/repository";
import photosInstance from "@/store/modules/photos";
import xinxiInstance from "@/store/modules/xinxi"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInstance,
    cartInstance,
    repositoryInstance,
    photosInstance,
    xinxiInstance
  }
})