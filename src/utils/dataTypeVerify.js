/**
 * @name: dataTypeVerify
 * @author: yuxi
 * @date: 2024-04-13 11:48
 * @description：dataTypeVerify
 * @update: 2024-04-13 11:48
 */


/**
 * 判断是否为json字符串
 * @param str
 * @return {boolean}
 */
const isJSONString = (str) => {
    try {
        JSON.parse(str)
        return true
    }
    catch (e) {
        return false
    }
}

/**
 * 判断是否为有长度的字符串
 * @param str
 * @return {boolean}
 */
const isEfficientString = (str) => {
    try {
        return str && typeof str === 'string' && str.trim().length
    }
    catch (e) {
        return false
    }
}

/**
 * 判断是否为正数数字
 * @param num
 * @return {boolean}
 */
const isNumber = (num) => {
    try {
        return Object.prototype.toString.call(num) === '[object Number]'
    }
    catch (e) {
        return false
    }
}

/**
 * 使用严格相等判断是否为布尔值
 * @param value
 * @return {boolean}
 */
const isBoolean = (value) => {
    return typeof value === 'boolean'
}

/**
 * 使用严格相等判断是否为布尔值
 * @param array
 * @return {boolean}
 */
const isArray = (array) => {
    return Object.prototype.toString.call(array) === '[object Array]'
}

/**
 * 使用严格相等判断是否为布尔值
 * @param fn
 * @return {boolean}
 */
const isFn = (fn) => {
    return Object.prototype.toString.call(fn) === '[object Function]'
}

/**
 * 验证字符长度是否小于设定
 * @param {string} str
 * @param {number} l
 * @return {boolean}
 */
const validateStringLength = (str, l) => {
    return str && typeof str === 'string' && str.trim().length <= l
}

module.exports = {
    isJSONString,
    isEfficientString,
    isNumber,
    isBoolean,
    isArray,
    isFn,
    validateStringLength
}