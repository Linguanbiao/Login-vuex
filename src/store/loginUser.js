import * as UserApi from "@/api/user"
// 导出登录模块的共享数据
export default {
    namespaced: true, //开启命名空间
    state: {
        loading: false,
        user: null
    },
    mutations: {
        setLoading(state, payload) {
            state.loading = payload
        },
        setUser(state, payload) {
            state.user = payload
        }
    },
    actions: {
        // 处理一些异步事件
        async login(ctx, payload) { //ctx 在这就是 default 的对象 {}
            ctx.commit("setLoading", true) // 设置正在登录的状态为 true
            const resp = await UserApi.login(payload.loginId, payload.loginPwd) // 访问数据
            ctx.commit("setUser", resp) //设置用户的情况
            ctx.commit("setLoading", false) //设置正在登录为 false
            return resp
        },
        async whoAmI(ctx) {
            ctx.commit("setLoading", true)
            const resp = await UserApi.whoAmI()
            ctx.commit("setUser", JSON.parse(resp)) // localStorage 里保存的是字符串格式的，这里要转换成正常的对象
            ctx.commit("setLoading", false)
        },
        async loginOut(ctx) {
            await UserApi.loginOut()
            ctx.commit("setUser", null)
        }
    },
    getters: {
        // 这里提供一些类似计算属性的的值， 供全局访问
        status(state) { // 计算属性，当前用户的登录状态： 未登录 、 登录中 、已登录
            if (state.loading) {
                return 'loading'
            } else if (state.user) {
                return "login"
            } else {
                return "unload"
            }
        }
    }
}