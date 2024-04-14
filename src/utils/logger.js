/**
 * @name: logger
 * @author: yuxi
 * @date: 2024/1/11 12:23
 * @description：logger
 * @update: 2024/1/11 12:23
 */

const { parseTime } = require('./date')
const now = parseTime(new Date().getTime())

module.exports = class Logger {
    key = ''

    constructor(key) {
        this.key = key
    }

    debug(...data) {
        console.debug(`[${now}]-${this.key}`, data)
    }

    error(...data) {
        console.error(`[${now}]-${this.key}`, ...data)
    }

    info(...data) {
        console.info(`[${now}]-${this.key}`, data)
    }

    log(...data) {
        console.log(`[${now}]-${this.key}`, data)
    }

    warn(...data) {
        console.warn(`[${now}]-${this.key}`, data)
    }
}
