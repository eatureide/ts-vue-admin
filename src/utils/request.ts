import axios, { AxiosRequestConfig } from 'axios'

const baseUrl = 'http://localhost:3001/'

const request = axios.create({ baseURL: baseUrl })

// request不支持泛型
// request.get post put支持响应数据类型
// 由于后端又包装了一层data，导致访问数据比较麻烦

// 请求拦截器
request.interceptors.request.use(function (config) {
    // 统一设置用户身份，token
    return config
}, function (error) {
    return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(function (response) {
    // 统一处理接口响应错误，如token无效过期，服务端异常
    return response
}, function (error) {
    return Promise.reject(error)
})

export default <T = any>(config: AxiosRequestConfig) => {
    return request(config).then((res) => {
        return res.data as T
    })
}
