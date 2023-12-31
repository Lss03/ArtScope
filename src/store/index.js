import Vue from 'vue'
import Vuex from 'vuex'
import userInstance from "@/store/modules/user";
import cartInstance from "@/store/modules/cart";
import photosInstance from "@/store/modules/photos";
import xinxiInstance from "@/store/modules/xinxi";
import contentInstance from "@/store/modules/content";


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInstance,
    cartInstance,
    photosInstance,
    xinxiInstance,
    contentInstance,
  }
})
