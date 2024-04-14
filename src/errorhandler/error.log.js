/**
 * @name: error-handler
 * @author: yuxi
 * @date: 2023/2/23 14:57
 * @description：error-handler
 * @update: 2023/2/23 14:57
 */

const Fs = require('fs')
const path = require('path')
const {parseTime} = require('../utils/date')

const errorLogDir = path.join(__dirname, '..', '..', 'errorLog') // 根目录下的errorLog文件夹路径
const today = new Date()
const formattedDate = parseTime(today.getTime(), '{y}年{m}月{d}日')
const fileName = `${ formattedDate }.log`
const logFilePath = path.join(errorLogDir, fileName)

// 检查 errorLog 文件夹是否存在，如果不存在则创建
if (!Fs.existsSync(errorLogDir)) {
    Fs.mkdirSync(errorLogDir)
}

// 检查当天日期的日志文件是否存在，如果不存在则创建
if (!Fs.existsSync(logFilePath)) {
    Fs.writeFileSync(logFilePath, '') // 创建空的日志文件
}

const insertErrorLog = (err) => {
    const now = new Date()
    const formattedDate = parseTime(now.getTime())
    const errorMsg = `${ formattedDate } - 未捕获的异常:  \n${ err.message || err.parent }\n${ err.stack }\n\n------------------------------------------------------------\n\n`

    Fs.appendFile(logFilePath, errorMsg, (err) => {
        if (err) console.error('写入日志文件失败:', err)
    })
}

const insertAttackLog = (err) => {
    const now = new Date()
    const formattedDate = parseTime(now.getTime())
    const errorMsg = `${ formattedDate } - 非法访问:  \n${ err }\n\n------------------------------------------------------------\n\n`
    Fs.appendFile(logFilePath, errorMsg, (err) => {
        if (err) console.error('写入日志文件失败:', err)
    })
}
module.exports = {
    insertErrorLog,
    insertAttackLog
}
