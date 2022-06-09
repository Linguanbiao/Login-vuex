import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//每次渲染前都先看是否恢复登录的状态
store.dispatch("loginUser/whoAmI")
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')