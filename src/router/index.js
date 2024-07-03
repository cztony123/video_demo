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
            {
                path: "/details",
                component: () => import('@/views/home/details.vue'),
                meta:{
                    title:"详情"
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