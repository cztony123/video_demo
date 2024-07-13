import request from '../../utils/axios'


export function getList(query) {
    return request({
        url: 'data.json',
        method: 'get',
        params: query
    });
}