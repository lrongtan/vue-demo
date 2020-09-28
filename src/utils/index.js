
// 秒转换成 天时分秒
export function secondTodhms(second) {
  parseInt
  let days = parseInt(second / (60 * 60 * 24))
  let hours = parseInt((second % (60 * 60 * 24)) / (60 * 60))
  let minites = parseInt((second % (60 * 60 * 24)) % (60 * 60) / 60)
  let seconds = second % 60
  var result = ""
  console.log(second)
  console.log(days)
  console.log(hours)
  console.log(minites)
  console.log(seconds)
  if (days > 0) {
    result = result + days + "天"
  }
  if (hours > 0) {
    result = result + hours + "小时"
  }
  if (minites > 0) {
    result = result + minites + "分钟"
  }
  if (seconds > 0) {
    result = result + seconds + "秒"
  }
  if (result === "") {
    result = "0秒"
  }
  return result
}


//任务类型
// 任务类型 1:下载注册 2:认证绑卡 3:开户投资 4:电商相关 5:纯关注 6:投票/砍价 7:纯转发 8:其他
export function taskTypeToText(taskType){
  switch (taskType) {
    case 1:
      return "下载注册"
    case 2:
      return "认证绑卡"
    case 3:
      return "开户投资"
    case 4:
      return "电商相关"
    case 5:
      return "纯关注"
    case 6:
      return "投票/砍价"
    case 7:
      return "纯转发"
    case 8:
      return "其他"
    default:
      return "其它"
  }
}
// 任务类型 1:下载注册 2:认证绑卡 3:开户投资 4:电商相关 5:纯关注 6:投票/砍价 7:纯转发 8:其他
var img5 = require('../assets/images/icon_类型_纯关注.png')
var img7 = require('../assets/images/icon_类型_纯转发.png')
var img4 = require('../assets/images/icon_类型_电商相关.png')
var img3 = require('../assets/images/icon_类型_开户投资.png')
var img8 = require('../assets/images/icon_类型_其他.png')
var img2 = require('../assets/images/icon_类型_认证绑卡.png')
var img1 = require('../assets/images/icon_类型_下载注册.png')
// 任务类型图片
export function taskTypeToImage(taskType){
  switch (taskType) {
    case 1:
      return img1
    case 2:
      return img2
    case 3:
      return img3
    case 4:
      return img4
    case 5:
      return img5
    case 6:
      return img8
    case 7:
      return img7
    case 8:
      return img8  
    default:
      return img8
  }
}


// 人民币 分 转 元
export function moneyFenToYuan(fen){
  if(Number.isNaN(fen)){
    return 0
  }
  return fen/100
}