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
const errorhandler = require('../errorhandler/errorhandler')

app.use(Body.koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 2000 * 1024 * 1024 // 设置最大文件大小为 200MB
        /*uploadDir: Path.join(__dirname, '../../public/uploads'), // 设置上传文件的目录
         keepExtensions: true, // 保持文件的扩展名
         onProgress: (progress) => {
         console.log('Upload Progress:', progress)
         }*/
    }
}))

app.use(Cors())
app.use(Router.routes()).use(Router.allowedMethods())
app.use(Mount('/static', Static(Path.join(__dirname, '../../public'))))

// onerror和处理中间件选其一就可，如果都设置处理中间件会先处理，onerror不会触发，除非   ctx.app.emit('error', err, ctx)
// 请求级别的错误处理
app.on('error', errorhandler)

module.exports = app
