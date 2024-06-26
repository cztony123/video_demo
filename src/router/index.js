import Vue from 'vue'
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
                path: "/home",
                component: () => import('@/views/home/index'),
                meta:{
                    title:"首页"
                }
            }, 
            // {
            //     path: "/racetype",
            //     component: () => import('@/views/race/racetype'),
            //     meta:{
            //         title:"种族"
            //     }
            // },
            // {
            //     path: "/raceinfo",
            //     component: () => import('@/views/race/raceinfo'),
            //     meta:{
            //         title:"种族2"
            //     }
            // },
            
            // {
            //     path: "/kucunsearch",
            //     component: () => import('@/views/kucun/kucunsearch'),
            //     meta:{
            //         title:"库存查询"
            //     }
            // },
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