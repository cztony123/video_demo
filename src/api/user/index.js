import request from '../../utils/axios'

//更改头像
export function getCollect(query) {
    return request({
        url: '/users/api/collect',
        method: 'get',
        params: query
    });
}