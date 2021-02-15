const fs = require('fs')
const fsp = fs.promises

exports.createFile = async (filePrefix, filedata, start, end) => {
  const path = require('path')
  const dirPath = path.join(__dirname, '../../../', 'vue-app', 'files')
  // await fsp.readdir(dirPath)
  //   .then(async result => {
  //     if (result.length > 0) {
  //       for (let i = 0; i < result.length; i++) {
  //         const filename = result[i]
  //         await fsp.unlink(path.join(dirPath, filename))
  //           .then(() => {
  //             console.log(`Delete ${filename} success`)
  //           })
  //       }
  //     }
  //   })
  const filename = `${filePrefix}_Error_id_${start}_to_${end}.txt`
  const fileDir = path.join(dirPath, filename)
  return await fsp.writeFile(fileDir, filedata)
    .then(() => {
      return `Create file ${filePrefix}_Error_id_${start}_to_${end}.txt success`
    })
    .catch(err => {
      console.log(err)
      throw `Create ${filePrefix}_file fail`
    })
}