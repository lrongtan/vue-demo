
let userAgent = navigator.userAgent

var DeviceUtil = {
  Android: function(){
    return userAgent.match(/Android/i) ? true : false
  },
  BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i) ? true : false
  },
  iOS: function () {
		return navigator.userAgent.match(/iPhone/iPad/iPod/i) ? true : false
  },
  Windows: function () {
		return navigator.userAgent.match(/IEMobile/i) ? true : false;
	},
}

export default DeviceUtil