import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from "@/views/LoginView.vue";
import AiView from "@/views/AiView.vue";
import DetailsView from "@/views/DetailsView.vue";
import HomeView from "@/views/HomeView.vue";
import MyPageView from "@/views/MyPageView.vue";
import MoreView from "@/views/MoreView.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: HomeView,
    component: HomeView
  },

  {
    path: '/login',
    name: LoginView,
    component: LoginView
  },
  {
    path: '/ai',
    name: AiView,
    component: AiView
  },
  {
    path: '/details/:id',
    name: DetailsView,
    component: DetailsView
  },
  {
    path: '/MyPage',
    name: MyPageView,
    component: MyPageView
  },
  {
    path: '/MorePic/:id',
    name: MoreView,
    component: MoreView
  }
]

const router = new VueRouter({
  routes
})

export default router
