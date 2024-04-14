/**
 * @name: date
 * @author: yuxi
 * @date: 2024/3/2 14:26
 * @description：date
 * @update: 2024/3/2 14:26
 */

/**
 * Parse the time to string
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
const parseTime = (time, cFormat = '{y}-{m}-{d} {h}:{i}:{s}') => {
    if (arguments.length === 0 || !time) {
        return null
    }
    const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
    let date
    if (typeof time === 'object') {
        date = time
    }
    else {
        if ((typeof time === 'string')) {
            if ((/^[0-9]+$/.test(time))) {
                // support "1548221490638"
                time = parseInt(time)
            }
            else {
                time = time.replace(new RegExp(/-/gm), '/')
            }
        }

        if ((typeof time === 'number') && (time.toString().length === 10)) {
            time = time * 1000
        }
        date = new Date(time)
    }
    const formatObj = {
        y: date.getFullYear(),
        m: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        i: date.getMinutes(),
        s: date.getSeconds(),
        a: date.getDay()
    }
    return format.replace(/{([ymdhisa])+}/g, (_result, key) => {
        // @ts-ignore
        const value = formatObj[key]
        // Note: getDay() returns 0 on Sunday
        if (key === 'a') {
            return ['日', '一', '二', '三', '四', '五', '六'][value]
        }
        return value.toString().padStart(2, '0')
    })
}

/**
 * 判断字符是否等于'YYYY-MM-DD'格式
 * @param dateString
 * @return {boolean}
 */
const validateDateFormatYYYYMMDD = (dateString) => {
    var regex = /^\d{4}-\d{2}-\d{2}$/

    if (regex.test(dateString)) {
        var parts = dateString.split('-')
        var year = parseInt(parts[0], 10)
        var month = parseInt(parts[1], 10)
        var day = parseInt(parts[2], 10)

        var date = new Date(year, month - 1, day) // 月份从0开始计数，所以要减去1

        if (date.getFullYear() === year && date.getMonth() + 1 === month && date.getDate() === day) {
            return true // 日期格式和有效性都通过验证
        }
    }

    return false // 日期不符合YYYY-MM-DD格式或者无效
}

module.exports = {
    parseTime,
    validateDateFormatYYYYMMDD
}
