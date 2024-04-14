/**
 * @name: index
 * @author: yuxi
 * @date: 2024/3/26 10:08
 * @description：index
 * @update: 2024/3/26 10:08
 */

const app = require('./src/app')
const {APP_PORT} = require('./src/config/config.default')

// 启动服务
app.listen(APP_PORT, () => {
    console.log(`node upload service Koa start at http://127.0.0.1:${ APP_PORT }`)
})

