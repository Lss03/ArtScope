import Vue from 'vue'
import Vuex from 'vuex'
import userInstance from "@/store/modules/user";
import cartInstance from "@/store/modules/cart";


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInstance,
    cartInstance,
  }
})
