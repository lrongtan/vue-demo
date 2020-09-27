
import axios from 'axios'


//登录
// {
//   "phone": "string",
//   "verifyCode": "string",
//   "agentId": 0,
//   "appId": "string"
// }
export const login = (params) => {
  return axios.post('/login', params)
} 


//验证码
// mobile
export const sendCode = (params) => {
  let urlPath = '/api/v1/' + params.mobile + '/verifyCode';
  return axios.get(urlPath)
}