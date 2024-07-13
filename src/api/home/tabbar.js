import request from '../../utils/axios'

export function getTabbarList(query) {
    return request({
        url: '/api/babbar/list',
        method: 'get',
        params: query
    });
}