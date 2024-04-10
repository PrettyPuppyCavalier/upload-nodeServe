/**
 * @name: index
 * @author: yuxi
 * @date: 2024/3/26 10:08
 * @description：index
 * @update: 2024/3/26 10:08
 */

const Path = require('path')
const Koa = require('koa')
const Cors = require('koa2-cors')
const Static = require('koa-static')
const Mount = require('koa-mount')
const Body = require('koa-body')
const Router = require('../router')
const app = new Koa()

app.use(Body.koaBody())
app.use(Cors())
app.use(Router.routes()).use(Router.allowedMethods())
app.use(Mount('/static', Static(Path.join(__dirname, '../../public'))))

// onerror和处理中间件选其一就可，如果都设置处理中间件会先处理，onerror不会触发，除非   ctx.app.emit('error', err, ctx)
// 请求级别的错误处理
app.on('error', (e, ctx) => {
    console.error(e.stack)
})




module.exports = app
