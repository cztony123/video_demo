import axios from 'axios'
import store from '@/store/index.js'
import router from '../router/index'

axios.create({
    baseURL:'/', //基础路径，发送请求路径的前缀
    timeout:5000 //超时时间
})


//请求拦截器
axios.interceptors.request.use(function(config){
    config.headers['Token'] = store.state.userInfo ?  store.state.userInfo.token : ''
    return config;
},
function(error){
    return Promise.reject(error)
}) 



//响应拦截器
axios.interceptors.response.use(function(response){
    return response.data;
},
function(error){
    return Promise.reject(error)
})  

export default axios