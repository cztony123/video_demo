import request from '../../utils/axios'

export function getList(){
    return request({
        method:'get',
        url:'data.json'
    })
}


// export function getList(query) {
//     return request({
//         url: 'data.json',
//         method: 'get',
//         params: query
//     });
// }