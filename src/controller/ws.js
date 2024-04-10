/**
 * @name: ws
 * @author: yuxi
 * @date: 2024/3/26 10:16
 * @description：ws
 * @update: 2024/3/26 10:16
 */

const service = require('../service/ws')

class WsController {
    /**
     * 获取临时stsToken
     * @param ctx
     * @param next
     * @return {Promise<void>}
     */
    async getStsToken(ctx, next) {
        try {
            ctx.body = await service.getStsToken()
        }
        catch (e) {
            ctx.app.emit('error', e, ctx)
        }
    }

    /**
     * 获取临时访问资源url
     * @param ctx
     * @param next
     * @return {Promise<void>}
     */
    async getSignatureUrl(ctx, next) {
        try {
            ctx.body = await service.getSignatureUrl(ctx.query.url)
        }
        catch (e) {
            ctx.app.emit('error', e, ctx)
        }
    }
}

module.exports = new WsController()
