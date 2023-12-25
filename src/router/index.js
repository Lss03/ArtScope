import Vue from 'vue'
import VueRouter from 'vue-router'
import shopCart from "@/components/shopCart.vue";
import goodsList from "@/components/goodsList.vue";
import LoginForm  from "@/components/LoginForm.vue";
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/',
    name: 'goodsList',
    component: goodsList
  },
  { path: '/shopCart',
    name: 'shopCart',
    component: shopCart },
    { path: '/login',
    name: 'LoginForm',
    component: LoginForm }
]

const router = new VueRouter({
  routes
})

export default router
