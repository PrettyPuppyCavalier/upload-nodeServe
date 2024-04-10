/**
 * @name: index
 * @author: yuxi
 * @date: 2024/3/26 10:08
 * @description：index
 * @update: 2024/3/26 10:08
 */

const fs = require('fs')
const http = require('http')
const WebSocket = require('ws')
const colors = require('colors-console')
const app = require('./src/app')
const { APP_PORT } = require('./src/config/config.default')


// 启动服务
const server = app.listen(APP_PORT, () => {
    console.log(`node ws service Koa start at http://127.0.0.1:${APP_PORT}`)
})


// 创建socket.io的实例
// 初始化websocket，并挂载到服务器上
const wss = new WebSocket.Server({
    server
})

// 输入的 MP4 视频文件路径
const inputFilePath = 'video.mp4'

// websocket连接api
wss.on('connection', (ws) => {
    console.log(colors('green', `websocket已连接`))

    // 连接上，就发送欢迎语
    ws.send('欢迎！')

    // 监听客户端传过来的信息
    ws.on('message', function message(data) {
        const res = JSON.parse(data)
        console.log('客户端传过来的信息', res)
    })

    // 监听WebSocket关闭
    ws.on('close', function open() {
        console.log('close')
    })

    // 监听WebSocket服务出错
    ws.on('error', console.error)
})

