import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    /**
     * 导航守卫
     * beforeEach ： 全局前置导航守卫： 每当导航切换时（包括刷新页面的第一次）， 该函数都会运行
     * 运行一个 callback , 有三个参数
     * from : 之前的路由对象（thi.$route)
     * to : 即将进入的路由对象（this.$route) 
     * next : 确认导航的一个函数，调用该函数（无参） ， 就会进入 to ， 如果调用该函数（传参） 根据传入的参数进入新的导航
     *  */

    const status = store.getters['loginUser/status'];
    console.log(status)
    if (to.meta.auth) {
        // 根据路由的 meta 里面我们写的内容判断当前路由是否需要 鉴权
        if (status === 'loading') {
            //正在登录中
            next('/loading')
        } else if (status === 'login') {
            //登录过了
            next()
        } else {
            // 未登录
            window.alert("请先登录！")
            next('/login')
        }
    } else {
        //不需要鉴权，直接跳转
        next();
    }

})
export default router