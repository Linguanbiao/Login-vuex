import HomeView from "@/views/HomeView"
import NewsView from "@/views/NewsView"
import LoginView from "@/views/LoginView.vue"
import UserView from "@/views/UserView"
import LoadingView from "@/views/LoadingView"
export default [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/news',
        name: 'news',
        component: NewsView,
        meta: {
            // meta里面的数据可以随便写 ， 用来描述当前路由有什么特殊之处
            auth: true
        }
    },
    {
        path: "/login",
        name: 'login',
        component: LoginView
    },
    {
        path: "/user",
        name: 'user',
        component: UserView,
        meta: {
            auth: true
        }
    },
    {
        path: "/loading",
        name: 'loading',
        component: LoadingView,
    }


]