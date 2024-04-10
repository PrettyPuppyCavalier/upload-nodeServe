/**
 * @name: config.default
 * @author: yuxi
 * @date: 2023/11/20 18:48
 * @description：config.default
 * @update: 2023/11/20 18:48
 */

const dotenv = require('dotenv')
dotenv.config({ path: '/root/service/workerGrandpa-service/.env.production' })
module.exports = process.env
