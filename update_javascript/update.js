import xlsx from "xlsx";
import db from "./util/database.js";
import vehicleController from "./controllers/Vehicles.js";
import logController from "./controllers/Logs.js";
import historyController from "./controllers/Histories.js";
import fileController from "./controllers/File.js";

startProgram();

async function startProgram() {
  let vehicleId;
  let createError = "";
  let updateError = "";
  let logError = "";
  let historyError = "";
  const PreUpload = db.vehicleVDVCPreUpload;
  const cleansingData = await readExcel();
  const arr = await PreUpload.findAll()
    .then((result) => {
      console.log("Data have:", result.length, "records.");
      return result;
    })
    .catch((err) => {
      console.log(err);
    });
  for (let i = 0; i < arr.length; i++) {
    const vehicle = arr[i];
    const isFind = await vehicleController
      .findVehicle(vehicle.note_id_t)
      .catch((err) => {
        throw err;
      });
    if (isFind) {
      vehicleId = await vehicleController
        .updateVehicle(vehicle, cleansingData, isFind)
        .catch((err) => {
          console.log(err);
          updateError = updateError + `${vehicle.note_id_t}, ${err}\n`;
        });
    } else {
      vehicleId = await vehicleController
        .createNewVehicle(vehicle, cleansingData)
        .catch((err) => {
          console.log(err);
          createError = createError + `${vehicle.note_id_t}, ${err}\n`;
        });
    }
    await logController
      .craeteLog(vehicle.changelog_t, vehicleId)
      .catch((err) => {
        console.log(err);
        logError = logError + `${vehicleId}, ${err}\n`;
      });
    await historyController.createHistory(vehicleId).catch((err) => {
      console.log(err);
      historyError = historyError + `${vehicleId}, ${err}\n`;
    });
    console.log("----------------------------------");
  }
  await creteErrorFile(createError, updateError, logError, historyError);
  setTimeout(() => {
    process.exit(0);
  }, 5000);
}

async function readExcel() {
  const workbook = xlsx.readFile("./files/cleansing-solr.xls");
  const workSheet = workbook.SheetNames;
  const object = {};
  await workSheet.forEach(async (sheetName) => {
    const excelData = await xlsx.utils.sheet_to_row_object_array(
      workbook.Sheets[sheetName]
    );
    const obj = {
      [sheetName]: excelData,
    };
    Object.assign(object, obj);
  });
  return object;
}

async function creteErrorFile(
  createError,
  updateError,
  logError,
  historyError
) {
  if (createError !== "")
    await fileController
      .createErrorFile(__dirname, "Update_crete", createError, "_", "_")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  if (updateError !== "")
    await fileController
      .createErrorFile(__dirname, "Update_update", updateError, "_", "_")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  if (logError !== "")
    await fileController
      .createErrorFile(__dirname, "Update_log", logError, "_", "_")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  if (historyError !== "")
    await fileController
      .createErrorFile(__dirname, "Update_history", historyError, "_", "_")
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
}
