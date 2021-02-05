/**
 * 校验手机号
 * @param {value} value 手机号
 */
export function checkPhone(value) {
  let regPhone = /^1[3456789]\d{9}$/;
  return regPhone.test(value);
}
/**
 * 校验邮箱
 * @param {value} value 邮箱
 */
export function checkMail(value) {
  let regMail = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  return regMail.test(value);
}
/**
 * 校验密码 数字+字母
 * @param {value} value 密码6-20
 */
export function checkPass(value) {
  let regPass = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
  return regPass.test(value);
}
/**
 * 校验验证码6位数
 * @param {value} value 验证码
 */
export function checkCode(value){
  let regCode = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6 }$/
  return regCode.test(value)
}