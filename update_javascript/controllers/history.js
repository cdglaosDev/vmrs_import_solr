const db = require('../util/database')

const History = db.licenseNoHistory
const HistoryDetail = db.licenseNoHistoryDetail

const func = require('../helpers/index')

exports.createHistory = async (req, res) => {
  const vehicleId = req.body.id
  const vehicle = await func.history.getVehicle(vehicleId)
    .then(result => {
      if (result === null) res.send(`No data at vehicle_id: ${vehicleId}`)
      else return result
    })
    .catch(err => {
      res.status(500).send(err)
    })
  const log = await func.history.getLogOnlyQuickId(vehicleId)
    .catch(err => {
      res.status(500).send(err)
    })
  // ------------------------------------------------------------------------
  if (log.length > 0) {
    for (let i = 0; i < log.length; i++) {
      const history = await func.history.getHistory(vehicleId)
      .catch(err => {
        throw err
      })
      const quick_id = log[i].veh_log_data_to
      if (history.length === 0) { // No history at vehicle_id create new history and history_detail
        const historyData = await func.history.checkQuickId(quick_id, vehicle.vehicle_type_id, vehicleId)
        if (historyData) {
          await createHistory(historyData, vehicle)
            .then(async historyDetailData => {
              await createHistoryDetail (historyDetailData)
                .catch(err => {
                  res.status(500).send(err)
                })
            })
            .catch(err => {
              res.status(500).send(err)
            })
        } else {
          console.log(`quick_id at vehicle_id: ${vehicleId} is invalid -- ${quick_id}`)
        }
      } else { // If have history >= 1
        const historyData = await func.history.checkQuickId(quick_id, vehicle.vehicle_type_id, vehicleId)
          .catch(err => {
            res.status(500).send(err)
          })
        const hisIndex = await history.findIndex(value => // check history by compare value
          value.lice_no_province_code === historyData.lice_no_province_code &&
          value.lice_alph_id === historyData.lice_alph_id &&
          value.lice_no_number === historyData.lice_no_number &&
          value.vehicle_kind_id === historyData.vehicle_kind_id
        )
        if (hisIndex !== -1) { // If history by this quick_id already exist create only history detail 
          const detail = history[hisIndex].his_detail
          const startDate = vehicle.issue_date ? vehicle.issue_date.split(' ')[0] : null
          const endDate = vehicle.expire_date ? vehicle.expire_date.split(' ')[0] : null
          const hisDetailIndex = await detail.findIndex(value => // check history_detail
            value.lice_no_his_det_start_date === startDate &&
            value.lice_no_his_det_end_date === endDate &&
            value.lice_no_owner === vehicle.owner_name &&
            value.lice_no_village === vehicle.village_name
          )
          if (hisDetailIndex === -1) { // If don't have history_detail create new
            const historyDetailData = {
              lice_no_his_det_start_date: startDate,
              lice_no_his_det_end_date: endDate,
              lice_no_owner: vehicle.owner_name,
              lice_no_village: vehicle.village_name,
              lice_no_his_id: history[hisIndex].lice_no_his_id,
              vehicle_id: vehicle.id
            }
            await createHistoryDetail(historyDetailData)
              .catch(err => {
                res.status(500).send(err)
              })
          } else {
            console.log(`quick_id: ${quick_id} already exist`)
          }
        } else { // If don't have history in data create new
          if (historyData) {
            await createHistory(historyData, vehicle)
              .then(async historyDetailData => {
                await createHistoryDetail (historyDetailData)
                  .catch(err => {
                    res.status(500).send(err)
                  })
              })
              .catch(err => {
                res.status(500).send(err)
              })
          } else {
            console.log(`quick_id at vehicle_id: ${vehicleId} is invalid -- ${quick_id}`)
          }
        }
      }
    }
  } else {
    const historyData = await func.history.checkQuickId(vehicle.quick_id, vehicle.vehicle_type_id, vehicleId)
    if (historyData) {
      await createHistory(historyData, vehicle)
        .then(async historyDetailData => {
          await createHistoryDetail (historyDetailData)
            .catch(err => {
              res.status(500).send(err)
            })
        })
        .catch(err => {
          res.status(500).send(err)
        })
    } else {
      console.log(`quick_id at vehicle_id: ${vehicleId} is invalid -- ${vehicle.quick_id}`)
    }
  }
  res.send(`Create history of vehicle_id: ${vehicleId} success`)
}

exports.createErrorFile = async (req, res) => {
  const text = req.body.text
  const start = req.body.start
  const end = req.body.end
  await func.file.createFile('History', text, start, end)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

async function createHistory (historyData, vehicle) {
  return await History.create(historyData)
    .then(async result => {
      console.log(`Create history of vehicle_id: ${vehicle.id} success`)
      const historyId = result.lice_no_his_id
      const historyStatusId = await func.history.getUseId()
        .catch(err => {
          console.log(err)
          throw 'Get USES id fail'
        })
      return {
        lice_no_his_status_id: historyStatusId,
        lice_no_his_det_start_date: vehicle.issue_date,
        lice_no_his_det_end_date: vehicle.expire_date,
        lice_no_owner: vehicle.owner_name,
        lice_no_village: vehicle.village_name,
        lice_no_his_id: historyId,
        vehicle_id: vehicle.id
      }
    })
    .catch(err => {
      console.log(err)
      throw `Create history of vehicle_id: ${vehicle.id} fail`
    })
}

async function createHistoryDetail (historyDetailData) {
  historyDetailData.lice_no_his_status_id = historyDetailData.lice_no_his_status_id ? historyDetailData.lice_no_his_status_id : await getUseId().catch(err => { throw err })
  return await HistoryDetail.create(historyDetailData)
    .then(() => {
      console.log(`Create history_detail of vehicle_id: ${historyDetailData.vehicle_id} success`)
    })
    .catch(err => {
      console.log( err)
      throw `Create history_detail of vehicle_id: ${historyDetailData.vehicle_id} fail`
    })
}