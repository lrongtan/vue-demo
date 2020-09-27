
import axios from 'axios'

import store from '../store'


//登录
// {
//   "phone": "string",
//   "verifyCode": "string",
//   "agentId": 0,
//   "appId": "string"
// }
export const login = (params) => {
  let agentId = store.getters.agentId;
  let appId = store.getters.appId;

  var appVal = {
    agentId: agentId,
    appId: appId
  }
  let val = Object.assign(appVal,params);
  console.log(val)
  return axios.post('/api/login', val)
} 


//验证码
// mobile
export const sendCode = (params) => {
  let urlPath = '/api/v1/' + params.mobile + '/verifyCode';
  return axios.get(urlPath)
}