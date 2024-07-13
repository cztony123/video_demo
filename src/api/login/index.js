import request from '../../utils/axios'


export function getLogin(query) {
    return request({
        url: '/api/login',
        method: 'get',
        params: query
    });
}