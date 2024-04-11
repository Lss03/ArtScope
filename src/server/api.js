// 引入 Axios
const axios = require('axios');

// JSON Server 的基础URL
const baseURL = 'http://localhost:3001';

// 设置 Axios 实例
const instance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
        'X-Content-Type-Options': 'nosniff', // 添加 X-Content-Type-Options 头部
    },
    timeout: 1000,
    transformResponse: [function (data) {
        //  JSON 数据转换成 JavaScript 对象
        try {
            return JSON.parse(data);
        } catch (err) {
            return data;
        }
    }],
})

export const get = (url, params) => instance.get(url, { params });
export const post = (url, data) => instance.post(url, data);
export const put = (url, data) => instance.put(url, data);
export const del = (url, params) => instance.delete(url, { params });

