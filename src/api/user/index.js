import request from '../../utils/axios'

//更改头像
export function upLoad(data) {
    return request({
        url: '/users/api/uploadAvatar',
        method: 'post',
        data: data
    });
}

//更改用户信息
export function updateUser(data) {
    return request({
        url: '/users/api/updateUser',
        method: 'post',
        data: data
    });
}