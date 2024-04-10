/**
 * @name: index
 * @author: yuxi
 * @date: 2024/3/26 10:11
 * @description：index
 * @update: 2024/3/26 10:11
 */

const Router = require('koa-router')
const router = new Router()
const ws = require('./ws')

// 在路由之前添加错误处理中间件
router.use(async (ctx, next) => {
    try {
        await next()
    }
    catch (err) {
        console.log('最外层错误捕获！！！', err)
        // 抛出错误，会被顶层的错误处理中间件捕获
        throw err
    }
})

router.all('/', async (ctx) => {
    ctx.body = 'hello ws-node'
    // await next()
})

router.use(ws.routes(), ws.allowedMethods())

module.exports = router
