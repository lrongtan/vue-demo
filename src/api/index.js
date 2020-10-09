
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

//获取 任务列表
// keyword
// pageIndex
// pageSize
export const taskPageList = (params) => {
  let urlPath = "/api/task/getPageList?keyword=" + (params.keyword != null ? params.keyword : "") + "&pageIndex=" + (params.pageIndex != null ? params.pageIndex : 1) + "&pageSize=" + (params.pageSize != null ? params.pageSize : 10);
  console.log(urlPath)
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
  let urlPath = "/api/task/order/commit/" + params.id;
  return axios.post(urlPath, params)
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
  console.log(urlPath)
  return axios.get(urlPath, {
    params:{
      accountId: params.accountId
    }
  })
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

export const axiosVal = () => {
  return axios
}


// 提现
// /api/withdrawarRecord/add
// 添加提现记录表
export const  withdrawarRecordAdd = (params) => {
  let urlPath = "/api/withdrawarRecord/add/" + params.id;
  return axios.post(urlPath,params)
}



//单文件上传
export const uploadFiles = (params) => {
  let urlPath = "/upload/files";
  return axios.post(urlPath,params)
}

