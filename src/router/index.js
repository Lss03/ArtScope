import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from "@/views/LoginView.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginView',
    component: LoginView
  }
]

const router = new VueRouter({
  routes
})

export default router
