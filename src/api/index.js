
import axios from 'axios'

import store from '../store'

import md5 from "md5"


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
  return axios.post('/api/login', val)
} 

export const thirdPartyLogin = (params) => {
  let agentId = store.getters.agentId;
  let appId = store.getters.appId;
  let appSecret = store.getters.appSecret;
  let channel = store.getters.channel;
  let userId = store.getters.userId;
  let nowDate = new Date()
  let timestamp = nowDate.getTime()
  let sign_O = agentId + appId + appSecret + timestamp + channel
  
  let sign = md5(sign_O)
  console.log("MD5加密" + sign_O)
  console.log(sign)
  var appVal = {
    agentId: agentId,
    appId: appId,
    appSecret:appSecret,
    timestamp:timestamp,
    userId:userId,
    channel:channel,
    sign:sign,
  }
  let val = Object.assign(appVal,params);
  return axios.post('api/login/third-party', val)
}


//验证码
// mobile
export const sendCode = (params) => {
  let urlPath = '/api/v1/' + params.mobile + '/verifyCode';
  return axios.get(urlPath)
}

//获取 任务列表
// keyword
// pageIndex
// pageSize
export const taskPageList = (params) => {
  let urlPath = "/api/task/getPageList?keyword=" + (params.keyword != null ? params.keyword : "") + "&pageIndex=" + (params.pageIndex != null ? params.pageIndex : 1) + "&pageSize=" + (params.pageSize != null ? params.pageSize : 10);
  return axios.get(urlPath)
}

// 任务详情
// id
export const taskDetail = (params) => {
  let urlPath = "/api/task/info/" + params.id;
  return axios.get(urlPath)
}

//任务报名
// id
export const taskOrderApply = (params) => {
  let urlPath = "/api/task/order/apply/" + params.id;
  return axios.post(urlPath)
}

//任务取消
// id
export const taskOrderCancel = (params) => {
  let urlPath = "/api/task/order/cancel/" + params.id;
  return axios.post(urlPath)
}

//任务提交
// id
export const taskOrderCommit = (params) => {
  let urlPath = "/api/task/order/commit/" + params.id + "?finishInfo=" + params.finishInfo;

  return axios.post(encodeURI(urlPath))
}

//删除任务订单
// id
// /api/task/order/delete/
export const taskOrderDelete = (params) => {
  let urlPath = "/api/task/order/delete/" + params.id;
  return axios.post(urlPath)
}

//重新报名
// id

export const taskOrderReApply = (params) => {
  let urlPath = "/api/task/order/re-apply/" + params.id;
  return axios.post(urlPath)
}


//获取 任务订单列表
// keyword
// pageIndex
// pageSize
export const taskOrderPageList = (params) => {
  let urlPath = "/api/task/order/getPageList?keyword=" + 
  (params.keyword != null ? params.keyword : "") + 
  "&pageIndex=" + (params.pageIndex != null ? params.pageIndex : 1) + 
  "&pageSize=" + (params.pageSize != null ? params.pageSize : 10) + 
  "&state=" + (params.state != null ? params.state : 1);
  return axios.get(urlPath)
}

// 任务订单详情
// id
export const taskOrderDetail = (params) => {
  let urlPath = "/api/task/order/info/" + params.id;
  return axios.get(urlPath)
}

export const taskDetailAll = (params) => {
  return axios.all([taskDetail({id : params.id}),taskOrderDetail({id : params.id})])
}

export const mineTaskDetail = (params) => {
  return axios.all([taskDetail({id : params.taskId}),taskOrderDetail({id : params.orderId})])
}

export const axiosVal = () => {
  return axios
}

//获取用户信息
export const userInfo = (params) => {
  return axios.get('/api/user/info')
}

//收支明细分页列表 /api/user/incomeRecord/getPageList

export const incomeRecordPageList = (params) => {
  let urlPath = "/api/user/incomeRecord/getPageList?keyword=" + 
  (params.keyword != null ? params.keyword : "") + 
  "&pageIndex=" + (params.pageIndex != null ? params.pageIndex : 1) + 
  "&pageSize=" + (params.pageSize != null ? params.pageSize : 10) + 
  "&state=" + (params.state != null ? params.state : 1);
  return axios.get(urlPath)
}

//绑定支付宝

export const bindAlipay = (params) => {
  let urlPath = "/api/user/binding/alipay?alipayAccount=" + 
  (params.alipayAccount != null ? params.alipayAccount : "") +
  "&alipayRealname=" + (params.alipayRealname != null ? params.alipayRealname : "")
  return axios.post(urlPath)
}

//绑定微信

export const bindWechat = (params) => {
  let urlPath = "/api/user/binding/wechat?code=" + (params.code != null ? params.code : "")
  return axios.post(urlPath)
}

// 提现
// /api/withdrawarRecord/add
// 添加提现记录表
export const  withdrawarRecordAdd = (params) => {
  let urlPath = "/api/withdrawarRecord/add/";
  return axios.post(urlPath,params)
}



//单文件上传
export const uploadFiles = (params) => {
  let urlPath = "/api/upload/files";
  return axios.post(urlPath,params)
}

