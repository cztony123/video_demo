import Vue, { reactive } from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/login/index.vue')
    },
    {
        path: '/layout',
        name: 'Layout',
        component: () => import('../views/layout/index.vue'),
        children: [
            {
                reactive: '/home',
                path: "/home",
                component: () => import('@/views/home/index'),
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
                path: "/user",
                component: () => import('@/views/user/index.vue'),
                meta:{
                    title:"用户"
                }
            },
            
            {
                path: "/setting",
                component: () => import('@/views/setting/index.vue'),
                meta:{
                    title:"设置"
                }
            },
            // {
            //     path: "/chukusearch",
            //     component: () => import('@/views/kucun/chukusearch'),
            //     meta:{
            //         title:"出库查询"
            //     }
            // },
            // {
            //     path: "/rukusearch",
            //     component: () => import('@/views/kucun/rukusearch'),
            //     meta:{
            //         title:"入库查询"
            //     }
            // },
            // {
            //     path: "/user",
            //     component: () => import('@/views/user/user'),
            //     meta:{
            //         title:"用户管理"
            //     }
            // }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router