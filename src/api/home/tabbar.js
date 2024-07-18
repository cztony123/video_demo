import request from '../../utils/axios'

export function getTabbarList(query) {
    return request({
        url: '/api/tabbar/list',
        method: 'get',
        params: query
    });
}