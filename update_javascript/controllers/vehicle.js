const db = require('../util/database')
const Vehicle = db.vehicle
const VehicleVdvc = db.vehicleVDVC
const VehiclePreUpload = db.vehicleVDVCPreUpload

const func = require('../helpers/index')

exports.creatAllVehicle = async (req, res) => {
  const cleansingData = req.query.cleansingData
  const number = req.body.number

  await VehicleVdvc.findAll({
    where: { number: number }
  })
    .then(async vehicle => {
      if (vehicle.length > 0) {
        const data = await func.cleansing.cleansingData(vehicle[0], cleansingData)
          .catch(err => {
            console.log(err)
            res.status(500).send(`Cleansing Error at number: ${number}`)
          })
        await Vehicle.create(data)
          .then(car => {
            console.log(`Create vehicle from number: ${number} success`)
            res.send({ message: `Create vehicle from number: ${number} success`, vehicleId: car.id })
          })
          .catch(err => {
            console.log(err)
            res.status(500).send('Create vehicle fail')
          })
      } else {
        res.send(`Can not find car at number: ${number}.`)
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({ error: err, message: `Cannot find vehicle from number: ${number}` })
    })
}

exports.createErrorFileUpdate = async (req, res) => {
  const text = req.body.text
  const start = req.body.start
  const end = req.body.end
  await func.file.createFile('Update_Vehicle', text, start, end)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

exports.createErrorFile = async (req, res) => {
  const text = req.body.text
  const start = req.body.start
  const end = req.body.end
  await func.file.createFile('Vehicle', text, start, end)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

exports.GetAllNoteId = async (req, res) => {
  const arr = await VehiclePreUpload.findAll({ attributes: ['note_id_t'] })
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Can not find all note_id')
    })
  res.send(arr)
}

exports.findNoteId = (req, res) => {
  const noteId = req.body.note_id
  Vehicle.findAll({ where: { note_id: noteId }, attributes: ['id', 'note_id'] })
    .then(result => [
      result.length === 1 ? res.send({ message: 'Update', vehicle: result[0] }) : res.send({ message: 'Create' })
    ])
}

exports.createByNoteId = async (req, res) => {
  const note_id = req.body.note_id
  const cleansingData = req.query.cleansingData 
  const data = await VehiclePreUpload.findByPk(note_id)
    .then(result => {
      if (result === null) {
        res.send(`No data at note_id: ${note_id}`)
      } else {
        return result
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(`Can not file data at note_id: ${note_id}`)
    })
  const cleansing = await func.cleansing.cleansingData(data, cleansingData)
    .catch(err => {
      console.log(err)
      res.status(500).send(`Cleansing Error at note_id: ${note_id}`)
    })
  await Vehicle.create(cleansing)
    .then(car => {
      console.log(`Create vehicle from note_id: ${note_id} success`)
      res.send({ message: `Create vehicle from note_id: ${note_id} success`, vehicleId: car.id })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Create vehicle fail')
    })
}

exports.updateVehicle = async (req, res) => {
  const vehicleId = req.body.vehicle_id
  const note_id = req.body.note_id
  const cleansingData = req.query.cleansingData 
  const data = await VehiclePreUpload.findByPk(note_id)
    .then(result => {
      if (result === null) {
        res.send(`No data at note_id: ${note_id}`)
      } else {
        return result
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(`Can not file data at note_id: ${note_id}`)
    })
  const cleansing = await func.cleansing.cleansingData(data, cleansingData)
    .catch(err => {
      console.log(err)
      res.status(500).send(`Cleansing Error at note_id: ${note_id}`)
    })
  const newQuickId = cleansing.quick_id
  const oldQuickId = await Vehicle.findByPk(vehicleId, { attributes: ['quick_id'] })
    .then(result => {
      if (result !== null) {
        return result.quick_id
      } else {
        return null
      }
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(`Error get verhicle for update at id: ${vehicleId}`)
    })
  Vehicle.update(cleansing, { where: { id: vehicleId } })
    .then(() => {
      res.send({ message: `Update vehicle at vehicle_id: ${vehicleId} success`, isCreateHistory: oldQuickId === newQuickId ? false : true, vehicleId: vehicleId })
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(`Update vehicle at vehicle_id: ${vehicleId} fail`)
    })
}