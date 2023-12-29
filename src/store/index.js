import Vue from 'vue'
import Vuex from 'vuex'
import userInstance from "@/store/user";


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    userInstance,
  }
})
