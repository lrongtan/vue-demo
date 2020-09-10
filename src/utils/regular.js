
// 正则效验是否为手机号
export function phoneNumber(phone){
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(16[0-9]{1})|(17[0-9]{1})|(18[0-9]{1})|(19[0-9]{1}))+\d{8})$/
    if (!myreg.test(phone)){
        return false
    }
    return true
}