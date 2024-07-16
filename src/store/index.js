import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {}, //用户信息
    },
    getters: {
    },
    mutations: {
        //登录后保存用户信息
        login(state, userInfo){
            //vuex存储
            state.userInfo = userInfo

            //本地存储
            localStorage.setItem('userInfo', JSON.stringify(userInfo));
        },

        //取值   登录后在app.js中调用
        initUser(){
            //vuex存储
            let userInfo = JSON.parse(localStorage.getItem('userInfo'));
            state.userInfo = userInfo
        }
    },
    actions: {
    },
    modules: {
    }
})
