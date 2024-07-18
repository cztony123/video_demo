import axios from 'axios'
import store from '@/store/index.js'
import router from '../router/index'

axios.create({
    baseURL:'/', //基础路径，发送请求路径的前缀
    timeout:5000 //超时时间
})


//请求拦截器
axios.interceptors.request.use(function(config){
    //获取请求头的布尔字段 （自定义的）
    let isToken = config.params && config.params.isToken ? config.params.isToken : false

    //如果isToken为true  说名需要验证token (如：加入购物车、收藏等)
    if(isToken){
        config.headers['Token'] = store.state.userInfo ?  store.state.userInfo.token : ''
        if(!config.headers.Token){
            router.push('/login')
        }
    }
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