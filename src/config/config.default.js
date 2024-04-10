/**
 * @name: config.default
 * @author: yuxi
 * @date: 2023/11/20 18:48
 * @description：config.default
 * @update: 2023/11/20 18:48
 */

const devEnvConfig = require('./config.dev')
const proEnvConfig = require('./config.pro')

// 确定环境
const environment = process.env.NODE_ENV || 'development'

// 导出环境变量
module.exports = environment === 'production' ? proEnvConfig : devEnvConfig
