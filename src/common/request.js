/**
 * request.js
 * @date Created on 2017/5/12
 * @author Jamie
 *
 */
import axios from 'axios'

// 添加一个请求拦截器
axios.interceptors.request.use(config => {
    return config
}, function (error) {
    return Promise.reject(error)
})

// 添加一个响应拦截器
axios.interceptors.response.use(response => {
    // Do something with response data
    return response.data
}, function (error) {
    // Do something with response error
    return Promise.reject(error)
})
const baseURL = 'http://localhost:8888';
export default {
    get (url, params) {
        return axios({
            method: 'get',
            url: baseURL + url,
            params,
            withCredentials: true,
            timeout: 30000
        })
    },
    post (url, data) {
        return axios({
            method: 'post',
            url: baseURL + url,
            data: data,
            timeout: 30000,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        })
    }
}
