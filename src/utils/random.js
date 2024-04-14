/**
 * @name: random
 * @author: yuxi
 * @date: 2024-04-13 11:49
 * @description：random
 * @update: 2024-04-13 11:49
 */

/**
 * 获取指定区间随机数
 * @param start
 * @param end
 * @return {*}
 */
const getRandomInt = (start, end) => {
    return Math.floor(Math.random() * (end - start + 1)) + start
}


/**
 * 生成随机字符串
 * @param length
 * @return {string}
 */
const generateRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_=+[{]};:<>,.?/|'
    const charactersLength = characters.length
    let result = ''

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength)
        result += characters.charAt(randomIndex)
    }

    return result
}

/**
 * 生成随机数字字符串
 * @param length
 * @return {string}
 */
const generateRandomNumberString = (length) => {
    const characters = '0123456789'
    const charactersLength = characters.length
    let result = ''

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength)
        result += characters.charAt(randomIndex)
    }

    return result
}

module.exports = {
    getRandomInt,
    generateRandomString,
    generateRandomNumberString
}