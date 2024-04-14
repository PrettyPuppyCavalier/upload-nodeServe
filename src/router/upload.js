/**
 * @name: ws
 * @author: yuxi
 * @date: 2024/3/26 10:13
 * @description：ws
 * @update: 2024/3/26 10:13
 */

const Router = require('koa-router')
const {
    uploadSingleFile,
    uploadFileChunk,
    mergeChunks
} = require('../controller/upload')

const router = new Router({
    prefix: '/upload'
})

router
    /**
     * 上传单个文件
     */
    .post(
    '/single',
    uploadSingleFile
)

    /**
     * 上传文件分片
     */
    .post(
    '/chunk',
    uploadFileChunk
)

    /**
     * 合并文件分片
     */
    .post(
    '/mergeChunks',
    mergeChunks
)

module.exports = router
