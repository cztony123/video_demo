import Vue, { reactive } from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/',
        name: 'Layout',
        redirect: "/home",
        component: () => import('../views/layout/index.vue'),
        children: [
            {
                path: "/home",
                name: 'home',
                component: () => import('@/views/home/index.vue'),
                meta:{
                    title:"首页"
                }
            }, 
            {
                path: "/search",
                component: () => import('@/views/search/index.vue'),
                meta:{
                    title:"查询"
                }
            },
            {
                path: "/setting",
                component: () => import('@/views/setting/index.vue'),
                meta:{
                    title:"设置"
                }
            },
            {
                path: "/user",
                component: () => import('@/views/user/index.vue'),
                meta:{
                    title:"用户"
                },
            },
            {
                path: "/details",
                component: () => import('@/views/home/details.vue'),
                meta:{
                    title:"详情"
                }
            },
            {
                path: "/editUser",
                component: () => import('@/views/user/editUser.vue'),
                meta:{
                    title:"编辑资料"
                }
            }, 
        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router