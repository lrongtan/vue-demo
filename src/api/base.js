
import axios from  "axios"
import { Toast } from "vant"
import store from "../store"
import router from "../router"

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
        console.log("请求拦截");
        console.log(config);
        // 发送验证码 和 登录 不需要  Authorization
        var reg = RegExp(/\/api\/((v1\/*\d{11}\/verifyCode)|login|login\/third-party)/);
        if (!reg.test(config.url)) {
            let userToken = store.getters.userToken;
            config.headers.Authorization = userToken.token ?? "";
            console.log(userToken.token)
        }
        return config
    }, function (error){
        return Promise.reject(error)
    })

    // 响应拦截器
    axios.interceptors.response.use(function (respond){
        let data = respond.data
        console.log("响应拦截");
        console.log(respond.data);
        if (data.code != 200 || data.code != "200") {
            Toast(respond.data.message);
            return Promise.reject(respond)
        }
        return data
    }, function (error){
        console.log("响应失败");
        console.log(error.response.data)
        
        if (error.response.data.message == undefined || error.response.data.message == null || error.response.data.message == "") {
            Toast("连接不上服务器了");
        }else if (error.response.message == undefined || error.response.message == null || error.response.message == "") {
            
        }else{
            Toast(error.response.message.code);
        }
        router.replace({
            name: 'login'
        })
        // if (error.response.data.code == 401 || error.response.data.code == 403) {
        //     console.log("运行到了")
        //     router.replace({
        //         name: 'login'
        //     })
        // }
        return Promise.reject(error.response)
    })

}


