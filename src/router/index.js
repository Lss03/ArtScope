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
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/ai',
    name: 'Ai',
    component: AiView
  },
  {
    path: '/details/:id', // 确保这里的参数名称与广场页面传递的参数匹配
    name: 'Details',
    component: DetailsView,
    props: true // 启用 props 将路由参数作为 props 传递
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPageView
  },
  {
    path: '/morepic/:id',
    name: 'MorePic',
    component: MoreView
  }
]

const router = new VueRouter({
  mode: 'history', // 使用 HTML5 历史模式
  routes
})

export default router;
