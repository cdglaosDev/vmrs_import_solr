import db from '../util/database.js'
const Vehicle = db.vehicle
const Log = db.log

const func = require('../helpers/index')
const fs = require('fs')
const fsp = fs.promises

exports.createLog = async (req, res) => {
  const id = req.body.id
  const changelog = await Vehicle.findByPk(id, {
    attributes: ['log_activity']
  })
    .then(result => {
      return result.log_activity
    })
    .catch(err => {
      console.log(err)
      res.status(500).send(err)
    })
  if (changelog === null || changelog === '') {
    res.send(`Changelog is null at car id: ${id}.`)
  } else {
    var log = await func.log.getLogActivity(changelog)
      .then(result => {
        return result
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(`Error at getLogActivity at id: ${id}.`)
      })
    await Log.findAll({ where: { vehicle_id: id } })
      .then(async result => {
        if (result.length === 0) {
          for (let i = 0; i < log.length; i++) {
            log[i].vehicle_id = id
            await Log.create(log[i])
              .then(_ => {
                console.log(`Create log from id: ${id} success.`)
              })
              .catch(err => {
                console.log(`Error create log from id: ${id}.`)
                console.log(err)
                res.status(500).send(`Error create log from id: ${id}.`)
              })
          } 
        } else {
          for (let i = 0; i < log.length; i++) {
            log[i].vehicle_id = id
            const index = result.findIndex(value => value.vehicle_id === log[i].vehicle_id &&
              value.veh_log_field_name === log[i].veh_log_field_name &&
              value.veh_log_data_from === log[i].veh_log_data_from &&
              value.veh_log_data_to === log[i].veh_log_data_to &&
              value.app_request_no === log[i].app_request_no &&
              value.veh_log_activity === log[i].veh_log_activity &&
              value.veh_log_datetime === log[i].veh_log_datetime
            )
            if (index === -1) {
              await Log.create(log[i])
                .then(_ => {
                  console.log(`Create log from id: ${id} success.`)
                })
                .catch(err => {
                  console.log(`Error create log from id: ${id}.`)
                  console.log(err)
                  res.status(500).send(`Error create log from id: ${id}.`)
                })
            } else {
              console.log('Log already exist')
            }
          } 
        }
      })
      .catch(err => {
        console.log(err)
        res.status(500).send(`Error at find log at id: ${id}.`)
      })
    res.send(`Create log from id: ${id} success.`)
  }
}

exports.createErrorFile = async (req, res) => {
  const text = req.body.text
  const start = req.body.start
  const end = req.body.end
  await func.file.createFile('Log', text, start, end)
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.status(500).send(err)
    })
}