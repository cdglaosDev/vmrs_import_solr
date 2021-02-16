import xlsx from 'xlsx'
import db from './util/database.js'
import vehicleController from './controllers/Vehicles.js'
import logController from './controllers/Logs.js'
import historyController from './controllers/Histories.js'

startProgram()

async function startProgram () {
  let vehicleId
  let createError = ''
  let updateError = ''
  let logError = ''
  let historyError = ''
  const PreUpload = db.vehicleVDVCPreUpload
  const cleansingData = await readExcel()
  const arr = await PreUpload.findAll()
    .then(result => {
      console.log('Data have:', result.length, 'records.')
      return result
    })
    .catch(err => {
      console.log(err)
    })
  for (let i = 0; i < arr.length; i++) {
    const vehicle = arr[i]
    const isFind = await vehicleController.findVehicle(vehicle.note_id_t)
      .catch(err => {
        throw err
      })
    if (isFind) {
      vehicleId = await vehicleController.updateVehicle(vehicle, cleansingData, isFind)
        .catch(err => {
          console.log(err)
          updateError = updateError + vehicle.note_id_t + ', ' + err + '\n'
        })
    } else {
      vehicleId = await vehicleController.createNewVehicle(vehicle, cleansingData)
        .catch(err => {
          console.log(err)
          createError = createError + vehicle.note_id_t + ', ' + err + '\n'
        })
    }
    await logController.craeteLog(vehicle.changelog_t, vehicleId)
      .catch(err => {
        console.log(err)
        logError = logError + vehicleId + ', ', + err
      })
    await historyController.createHistory(vehicleId)
      .catch(err => {
        console.log(err)
        historyError = historyError + vehicleId + ', ', + err
      })
    console.log('----------------------------------')
  }
  console.log('createError', createError, '----------------------------------\n', 'updateError', updateError, '----------------------------------\n', 'logError', logError, '----------------------------------\n', 'historyError', historyError)
}

async function exit () {
  process.exit(0)
}

async function readExcel () {
  const workbook = xlsx.readFile('./files/cleansing-solr.xls')
  const workSheet = workbook.SheetNames
  const object = {}
  await workSheet.forEach(async sheetName => {
    const excelData = await xlsx.utils.sheet_to_row_object_array(workbook.Sheets[sheetName])
    const obj = {
      [sheetName]: excelData
    }
    Object.assign(object, obj)
  })
  return object
}
