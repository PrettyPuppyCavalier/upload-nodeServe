/**
 * @name: config.default
 * @author: yuxi
 * @date: 2023/11/20 18:48
 * @description：config.default
 * @update: 2023/11/20 18:48
 */

const dotenv = require('dotenv')
dotenv.config({ path: '.env.development' })
module.exports = process.env
