import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginForm  from "@/components/LoginForm.vue";
import LoginView from "@/views/LoginView.vue";
Vue.use(VueRouter)

const routes = [
    { path: '/login',
    name: 'LoginForm',
    component: LoginForm },
  {
    path: '/login1',
    name: 'LoginView',
    component: LoginView
  }
]

const router = new VueRouter({
  routes
})

export default router
