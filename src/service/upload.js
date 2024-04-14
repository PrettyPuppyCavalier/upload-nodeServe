/**
 * @name: upload
 * @author: yuxi
 * @date: 2024/3/26 10:17
 * @description：ws
 * @update: 2024/3/26 10:17
 */

const Fs = require("fs")
const Path = require("path")

class UploadService {
    /**
     * 上传单个文件
     * @params {file} file 上传文件
     * @return {Promise<Object>}
     */
    uploadSingleFile(file) {
        return new Promise(async (resolve, reject) => {
            try {
                // console.log('file-------->', file)
                const filePath = file.filepath
                const targetPath = Path.join(__dirname, `../../public/uploads/${ file.originalFilename }`)

                // 没有文件夹需要先创建文件夹、否则会报错
                Fs.mkdirSync(Path.dirname(targetPath), {recursive: true})

                // 移动上传的文件到目标路径
                const reader = Fs.createReadStream(filePath)
                const writer = Fs.createWriteStream(targetPath)

                reader.pipe(writer)

                // 当文件读取出错时，返回错误
                reader.on('error', (err) => {
                    reject(err)
                })

                // 当文件写入完成时，关闭响应
                reader.on('close', () => {
                    resolve({
                        code: 200,
                        data: {
                            filePath,
                            targetPath
                        },
                        message: 'success'
                    })
                })
            }
            catch (e) {
                reject(e)
            }
        })
    }

    /**
     * 上传文件分片
     * @params {file} file 上传文件
     * @return {Promise<Object>}
     */
    uploadFileChunk(data) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log('uploadFileChunk----------- >', data)
                const chunkFilePath = Path.join(__dirname, `../../public/uploads/${ data.filename }`)

                // todo 对比hash
                // 读取文件对象的内容并将其写入文件
                const reader = Fs.createReadStream(data.file.filepath) // 从文件对象中创建可读流
                const writer = Fs.createWriteStream(chunkFilePath) // 创建可写流来写入文件

                await new Promise((resolve, reject) => {
                    reader.pipe(writer) // 将可读流的内容写入文件
                    reader.on('end', resolve)
                    reader.on('error', reject)
                })

                resolve({
                    code: 200,
                    data: '分片写入完成',
                    message: 'success'
                })
            }
            catch (e) {
                reject(e)
            }
        })
    }

    /**
     * 合并文件分片
     * @params {file} file 上传文件
     * @return {Promise<Object>}
     */
    mergeChunks(file) {
        return new Promise(async (resolve, reject) => {
                try {
                    // 创建文件夹以存储合并后的文件
                    const uploadDir = Path.join(__dirname, '../../public/uploads/')
                    if (!Fs.existsSync(uploadDir)) {
                        Fs.mkdirSync(uploadDir, {recursive: true})
                    }

                    // 创建可写流以将分片数据合并为完整文件
                    const writeStream = Fs.createWriteStream(Path.join(uploadDir, 'hebing.mp4'))

                    // 逐一读取分片文件并写入合并文件
                    for (let i = 0; i < 6; i++) {
                        const chunkFilePath = Path.join(uploadDir, `${ i + 1 }-test-video.mp4`)
                        const data = Fs.readFileSync(chunkFilePath)
                        writeStream.write(data)
                        // 删除已合并的分片文件
                        Fs.unlinkSync(chunkFilePath)
                    }

                    // 关闭可写流
                    writeStream.end()

                    resolve({
                            code: 200,
                            data: '{filePath,targetPath}',
                            message: 'success'
                        }
                    )
                }
                catch
                    (e) {
                    reject(e)
                }
            }
        )
    }
}

module.exports = new UploadService()
