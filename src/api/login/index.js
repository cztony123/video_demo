import request from '../../utils/axios'


export function loginApi(data) {
    return request({
        url: '/users/api/login',
        method: 'post',
        data: data
    });
}