import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false
Vue.prototype.$eventBus = new Vue(); // 添加全局事件总线
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')


