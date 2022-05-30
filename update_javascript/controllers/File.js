import path from "path";
import fs from "fs";
const fsp = fs.promises;

export default {
  async createErrorFile(dirPath, filePrefix, filedata, start, end) {
    const filename = `${filePrefix}_Error_id_${start}_to_${end}.txt`;
    const fileDir = path.join(dirPath, "files_error", filename);
    return await fsp
      .writeFile(fileDir, filedata)
      .then(() => {
        return `Create file ${filePrefix}_Error_id_${start}_to_${end}.txt success`;
      })
      .catch((err) => {
        console.log(err);
        throw `Create ${filePrefix}_file fail`;
      });
  },
};
