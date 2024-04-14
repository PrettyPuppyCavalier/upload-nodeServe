/**
 * @name: error
 * @author: yuxi
 * @date: 2024-04-13 11:47
 * @description：error
 * @update: 2024-04-13 11:47
 */

module.exports = {
    customizeError(code, message, data) {
        return {
            code, message, data
        }
    }
}