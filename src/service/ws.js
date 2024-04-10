/**
 * @name: ws
 * @author: yuxi
 * @date: 2024/3/26 10:17
 * @description：ws
 * @update: 2024/3/26 10:17
 */

class WsService {
    /**
     * 获取临时stsToken
     * @return {Promise<Object>}
     */
    getStsToken() {
        return new Promise(async (resolve, reject) => {
            try {

                resolve({
                    code: 200,
                    data: { },
                    message: 'success'
                })
            }
            catch (e) {
                reject(e)
            }
        })
    }

    /**
     * 获取临时访问资源url
     * @return {Promise<Object>}
     */
    getSignatureUrl() {
        return new Promise(async (resolve, reject) => {
            try {

                resolve({
                    code: 200,
                    data: 'url',
                    message: 'success'
                })
            }
            catch (e) {
                reject(e)
            }
        })
    }
}

module.exports = new WsService()
