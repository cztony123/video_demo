import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginState: false, //登录状态
        userInfo: {}, //用户信息
    },
    getters: {},
    mutations: {
        //登录后保存用户信息
        login(state, userInfo){
            state.loginState = true
            state.userInfo = userInfo
        },

        //本都存储取值  方法在app.js中调用。每次刷新不会丢失数据
        initUser(state){
            var userInfo = JSON.parse(localStorage.getItem('userInfo'));
            state.loginState = true
            state.userInfo = userInfo
        },

        //退出登录
        loginOut(state){
            state.loginState = false
            state.userInfo = {}
            localStorage.removeItem('userInfo') //删除本地存储
        }
    },
    actions: {},
    modules: {}
})
