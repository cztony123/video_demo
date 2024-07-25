import request from '../../utils/axios'

//首页tabbar
export function getTabbarList(query) {
    return request({
        url: '/api/tabbar/list',
        method: 'get',
        params: query
    });
}

//轮播图
export function getSwipeList(query) {
    return request({
        url: '/api/swipe/list',
        method: 'get',
        params: query
    });
}

//列表数据
export function getList(query) {
    return request({
        url: `/api/home/list`,
        method: 'get',
        params: query
    });
}