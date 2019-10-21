import request from './request';

export default {
    getCount: () => request({
        method: 'get',
        url: '/api/todos'
    }),
    increaseCount: (count: Counter) => request({
        method: 'post',
        url: '/api/increase',
        data: count
    }),
    decreaseCount: (count: Counter) => request({
        method: 'post',
        url: '/api/decrease',
        data: count
    })
}