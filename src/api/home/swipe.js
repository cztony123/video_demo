import request from '../../utils/axios'

export function getSwipeList(query) {
    return request({
        url: '/api/swipe/list',
        method: 'get',
        params: query
    });
}