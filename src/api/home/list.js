import request from '../../utils/axios'

export function getList(query) {
    return request({
        url: `/api/home/${query}/list/1`,
        method: 'get',
        params: query
    });
}