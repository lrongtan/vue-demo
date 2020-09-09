
import axios from  "axios"
// import store from "../store"

export default (Vue) => {
    Object.defineProperties(Vue.prototype, {
        $http: {
            value: axios
        }
    })

    //  axios配置
    axios.defaults.baseURL = process.env.APP_BASE_URL
    axios.defaults.timeout = 30000
    axios.defaults.withCredentials = false // 表示跨域请求时是否需要使用凭证

    //  请求拦截器
    axios.interceptors.request.use(function (config){
        return config
    }, function (error){
        return Promise.reject(error)
    })

    // 响应拦截器
    axios.interceptors.response.use(function (respond){
        let data = respond.data
        return data
    }, function (error){
        return Promise.reject(error)
    })

}


