import db from '../../util/database.js'
const Vehicle = db.vehicle
const Log = db.log
const VehicleType = db.vehicleType
const Alphabet = db.licenseAlphabet
const History = db.licenseNoHistory
const HistoryStatus = db.licenseNoHistoryStatus

export default {
  async checkQuickId (quick_id, vehicle_type_id, vehicleId) {
    const regex = /^[\u0E80-\u0EDF]{2}?[0-9]{6,7}$/
    const quickId = quick_id
    // if (quickId.length >= 8 && quickId.length <= 9 && regex.test(vehicleAlphabet) && vehicle.vehicle_type_id !== null) {
    if (quickId !== null && regex.test(quickId)) {
      const vehicleAlphabet = quickId.substr(0, 2)
      const groupId = await getGroupId(vehicle_type_id)
        .catch(err => {
          throw err
        })
      const alphabetId = await getAlphabetid(vehicleAlphabet)
        .catch(err => {
          throw err
        })
      let vehicleKind 
      if (quickId.length === 9 && quickId.substr(-3) === '511') {
        vehicleKind = 51
      } else {
        vehicleKind = Number(quickId.substr(6, 1))
      }
      let provinceCode
      if (quickId.length === 9 && vehicleKind === 51) {
        provinceCode = 1
      } else {
        if (vehicleKind === 5 && Number(quickId.substr(7)) !== '1') {
          console.log(`quick_id at vehicle_id: ${vehicleId} invalid -- kind = 5 but provicne != 1`)
          return false
        } else {
          provinceCode = Number(quickId.substr(7))
        }
      }
      const historyData = {
        vehicle_type_group_id: groupId,
        lice_no_province_code: provinceCode,
        lice_alph_id: alphabetId,
        lice_no_number: quickId.substr(2, 4),
        vehicle_kind_id: vehicleKind
      }
      return historyData
    } else {
      return false
    }
  },
  async getLogOnlyQuickId (vehicleId) {
    return await Log.findAll({ where: { vehicle_id: vehicleId, veh_log_field_name: 'quick_id' } })
      .then(result => {
        return result
      })
      .catch(err => {
        console.log(err)
        throw `Can not find quick_id log from vehicle_id: ${vehicleId}`
      })
  },
  async getVehicle (vehicleId) {
    return await Vehicle.findByPk(vehicleId, { attributes: ['id', 'quick_id', 'vehicle_type_id', 'owner_name', 'village_name', 'issue_date', 'expire_date'] })
      .then(result => {
        return result === null ? null : result
      })
      .catch(err => {
        console.log(err)
        throw `Can not find vehicle at vehicle_id: ${vehicleId}`
      })
  },
  async getHistory (vehicleId) {
    return await History.findAll({ include: [{ model: db.licenseNoHistoryDetail, as: 'his_detail', where: { vehicle_id: vehicleId }}] })
      .then(result => {
        return result
      })
      .catch(err => {
        console.log(err)
        throw 'Can not find history arr'
      })
  },
  async getUseId () {
    return await HistoryStatus.findAll({ attributes: ['id'], where: { name: 'USES' } })
      .then(result => {
        return result.length === 1 ? result[0].id : null
      })
      .catch(err => {
        console.log(err)
        throw `Create history_detail fail at history_id: ${historyId}`
      })
  }
}

async function getGroupId (vehicle_type_id) {
  return await VehicleType.findByPk(vehicle_type_id, { attributes: ['vehicle_type_group_id'] })
    .then(result => {
      return result ? result.vehicle_type_group_id : null
    })
    .catch(err => {
      console.log(err)
      throw 'Error to find vehivle_type(group_id)'
    })
}

async function getAlphabetid (vehicleAlphabet) {
  return await Alphabet.findAll({ attributes: ['id'], where: { name: vehicleAlphabet } })
    .then(result => {
      return result.length === 1 ? result[0].id : null
    })
    .catch(err => {
      console.log(err)
      throw `Can not get alphabet at vehicle_id: ${vehicleId}`
    })
}
