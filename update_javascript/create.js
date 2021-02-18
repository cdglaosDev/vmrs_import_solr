import xlsx from 'xlsx'
import readline from 'readline'
import vehicleController from './controllers/Vehicles.js'
import logController from './controllers/Logs.js'
import historyController from './controllers/Histories.js'
import fileController from './controllers/File.js'

import path from 'path';
import { fileURLToPath } from 'url';
import { setTimeout } from 'timers'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

startProgram()

async function startProgram () {
  const numberPattern = /^\d+$/
  rl.question('Enter your start number: ', async (startNumber) => {
    if (startNumber.trim() && numberPattern.test(startNumber)) {
      rl.question('Enter your last number: ', async (lastNumber) => {
        if (lastNumber.trim() && numberPattern.test(lastNumber) && (parseInt(startNumber) <= parseInt(lastNumber))) {
          await createVehicle(parseInt(startNumber), parseInt(lastNumber))
            .then(async () => {
              await setTimeout(async () => {
                console.log('Process success!!')
                process.exit(0)
              }, 5000)
            })
        } else {
          console.log('Data invalid, please enter only number and start number <= last number')
          startProgram()
        }
      })
    } else {
      console.log('Data invalid, please enter only number')
      startProgram()
    }
  })
}


async function createVehicle (startNumber, lastNumber) {
  let createError = ''
  let logError = ''
  let historyError = ''
  const cleansingData = await readExcel()
  for (let i = startNumber; i <= lastNumber; i++) {
    const vehicle = await vehicleController.findVehicleByNumber(i)
      .catch(err => {
        throw err
      })
    if (vehicle) {
      await vehicleController.createNewVehicle(vehicle, cleansingData)
        .then(async vehicleId => {
          await logController.craeteLog(vehicle.changelog_t, vehicleId)
            .catch(err => {
              console.log('errrrr', err)
              logError = logError + `${vehicleId}, ${err}\n`
            })
          await historyController.createHistory(vehicleId)
            .catch(err => {
              console.log(err)
              historyError = historyError + `${vehicleId}, ${err}\n`
            })
        })
        .catch(err => {
          console.log(err)
          createError = createError + `${i}, ${err}\n`
        })
      console.log('----------------------------------')
    }
  }
  await creteErrorFile (createError, logError, historyError)
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

async function creteErrorFile (createError, logError, historyError) {
  if (createError !== '') await fileController.createErrorFile(__dirname, 'Update_crete', createError, '_', '_')
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
  if (logError !== '') await fileController.createErrorFile(__dirname, 'Update_log', logError, '_', '_')
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
  if (historyError !== '') await fileController.createErrorFile(__dirname, 'Update_history', historyError, '_', '_')
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
    })
}