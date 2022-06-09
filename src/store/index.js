import Vue from 'vue'
import Vuex from 'vuex'
import loginUser from "./loginUser.js"

// Vue.use(Vuex) // 在 Vue 中使用 Vuex 插件

// export default new Vuex.Store({
//   state: {},
//   getters: {},
//   mutations: {},
//   actions: {},
//   modules: {}
// })



// 使用 vuex 并放在 window 上，方便测试
Vue.use(Vuex)
let store = new Vuex.Store({
  // 由于一个共享仓库会有很多的数据和 mutation 以及 actions , 因此可以在构造器上使用模块
  modules: {
    loginUser
  },
  strict: true // 在构造器中开启严格模式，这样 state 的数据只能由 commit mutation 操作该动，不能直接修改
})

window.store = store;
export default store;