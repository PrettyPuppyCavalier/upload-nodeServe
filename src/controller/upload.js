/**
 * @name: upload
 * @author: yuxi
 * @date: 2024/3/26 10:16
 * @description：ws
 * @update: 2024/3/26 10:16
 */

const service = require('../service/upload')

class UploadController {
    /**
     * 上传单个文件
     * @param ctx
     * @return {Promise<void>}
     */
    async uploadSingleFile(ctx) {
        try {
            ctx.body = await service.uploadSingleFile(ctx.request.files.file)
        }
        catch (e) {
            ctx.app.emit('error', e, ctx)
        }
    }

    /**
     * 上传文件分片
     * @param ctx
     * @return {Promise<void>}
     */
    async uploadFileChunk(ctx) {
        try {
            ctx.body = await service.uploadFileChunk({
                ...ctx.request.body,
                file: ctx.request.files.file
            })
        }
        catch (e) {
            ctx.app.emit('error', e, ctx)
        }
    }

    /**
     * 合并文件分片
     * @param ctx
     * @return {Promise<void>}
     */
    async mergeChunks(ctx) {
        try {
            ctx.body = await service.mergeChunks(ctx.request.body)
        }
        catch (e) {
            ctx.app.emit('error', e, ctx)
        }
    }
}

module.exports = new UploadController()
