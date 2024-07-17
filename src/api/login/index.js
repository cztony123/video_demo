import request from '../../utils/axios'

//登录
export function loginApi(data) {
    return request({
        url: '/users/api/login',
        method: 'post',
        data: data
    });
}

//注册
export function addUser(data) {
    return request({
        url: '/users/api/addUser',
        method: 'post',
        data: data
    });
}