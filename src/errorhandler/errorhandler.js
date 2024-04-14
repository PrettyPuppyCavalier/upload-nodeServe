/**
 * @name: errorhandler
 * @author: yuxi
 * @date: 2023/12/4 21:46
 * @description：errorhandler
 * @update: 2023/12/4 21:46
 */
const { insertErrorLog } = require('./error.log')
const { customizeError } = require('../utils/error')

module.exports = (e, ctx) => {
    let status = 500
    let errData = e
    // 错误日志写入
    if (e instanceof Error) {
        insertErrorLog(e)
        errData = customizeError(500, `${e.name}: ${e.message || e.parent}`)
    }
    else {
        switch (e.code) {
            case 1000:
                status = 400
                break
            case 1001:
                status = 200
                break
            case 1002:
                status = 402
                break
            case 1003:
                status = 200
                break
            case 1004:
                status = 404
                break
            case 1005:
                status = 405
                break
            case 1006:
                status = 406
                break
            case 1007:
                status = 407
                break
            case 1008:
                status = 408
                break
            case 1009:
                status = 409
                break
            case 500:
                status = 500
                break
            default:
                status = 500
        }
    }


    ctx.status = status
    ctx.body = e.code ? {
            code: e.code,
            message: errData.message
        } :
        {
            code: status,
            message: errData.message
        }
}
