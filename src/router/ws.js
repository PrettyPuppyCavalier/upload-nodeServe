/**
 * @name: ws
 * @author: yuxi
 * @date: 2024/3/26 10:13
 * @description：ws
 * @update: 2024/3/26 10:13
 */

const Router = require('koa-router')
const { getStsToken, getSignatureUrl } = require('../controller/ws')

const router = new Router({
    prefix: '/ws'
})

router

    /**
     * 获取临时stsToken
     */
    .get(
        '/stsToken',
        getStsToken
    )


    /**
     * 获取临时访问资源url
     */
    .get(
        '/signatureUrl',
        getSignatureUrl
    )

module.exports = router
