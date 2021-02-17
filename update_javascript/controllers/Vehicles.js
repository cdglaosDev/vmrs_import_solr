import db from '../util/database.js'
import cleansing from '../helpers/modules/Cleansing.js'
// import func from '../helpers/index.js'

const Vehicle = db.vehicle
const VehicleVdvc = db.vehicleVDVC

export default {
  async findVehicleByNumber (number) {
    return await VehicleVdvc.findAll({ where: { number: number } })
      .then(async result => {
        if (result.length === 0) {
          return false
        } else {
          return result[0] 
        }
      })
      .catch(err => {
        console.log(err)
        throw `Error when find Vehicle at note_id: ${noteId}`
      })
  },
  async findVehicle (noteId) {
    return await Vehicle.findAll({ where: { note_id: noteId }, attributes: ['id'] })
      .then(async result => {
        if (result.length === 0) {
          return false
        } else {
          return result[0].id 
        }
      })
      .catch(err => {
        console.log(err)
        throw `Error when find Vehicle at note_id: ${noteId}`
      })
  },
  async createNewVehicle (vehicle, cleansingData) {
    return await getCleansing(vehicle, cleansingData)
      .then(async data => {
        return await Vehicle.create(data)
          .then(result => {
            console.log('Create new vehicle success')
            return result.id
          })
          .catch(err => {
            console.log(err)
            throw 'Error to crete new vehicle'
          })
      })
      .catch(err => {
        throw err
      })
  },
  async updateVehicle (vehicle, cleansingData, id) {
    return await getCleansing(vehicle, cleansingData)
      .then(async data => {
        return await Vehicle.update(data, { where: {id: id } })
          .then(() => {
            console.log('Update vehicle success')
            return id
          })
          .catch(err => {
            console.log(err)
            throw 'Error to update vehicle'
          })
      })
      .catch(err => {
        throw err
      })
  }
}

async function getCleansing (vehicle, cleansingData) {
  return await cleansing.cleansingData(vehicle, cleansingData)
    .then(result => {
      return result
    })
    .catch(err => {
      throw err
    })
}
