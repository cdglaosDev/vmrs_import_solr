import Sequelize from 'sequelize'
import env from './env.js'

// Import models
import Vehicle from '../models/Vehicle.js'
import VehicleVdvc from '../models/VehicleVdvc.js'
import VehicleVdvcPreUpload from '../models/VehicleVdvcPreUpload.js'
import VehicleType from '../models/VehicleType.js'
import VehicleTypeGroup from '../models/VehicleTypeGroup.js'
import VehicleLog from '../models/VehicleLog.js'
import LicenseAlphabet from '../models/LicenseAlphabet.js'
import LicenseNoHistory from '../models/LicenseNoHistory.js'
import LicenseNoHistoryDetail from '../models/LicenseNoHistoryDetail.js'
import LicenseNoHistoryStatus from '../models/LicenseNoHistoryStatus.js'

const sequelize = new Sequelize(env.DB_DATABASE, env.DB_USER, env.DB_PASS, {
  host: env.DB_HOST,
  dialect: env.DB_DIALECT,
  operatorAliases: env.DB_OPERATORSALIASES,
  connectionLimit: env.DB_CONNECTIONLIMIT,
  connectTimeout: env.DB_CONNECTTIMEOUT,
  acquireTimeout: env.DB_ACQUIRETIMEOUT,
  waitForConnections: env.DB_WAITFORCONNECTIONS,
  logging: env.DB_LOGGING,
  pool: {
    max: env.DB_MAX,
    min: env.DB_MIN,
    acquire: env.DB_ACQUIRE,
    idle: env.DB_IDLE
  }
})

// sequelize.authenticate()
//   .then(() => {
//     console.log('Connected to database successfully')
//   })

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.vehicleVDVC = VehicleVdvc(sequelize, Sequelize)
db.vehicleVDVCPreUpload = VehicleVdvcPreUpload(sequelize, Sequelize) // Use for update solr -> sql
db.vehicle = Vehicle(sequelize, Sequelize)
db.vehicleType = VehicleType(sequelize, Sequelize)
db.vehicleTypeGroup = VehicleTypeGroup(sequelize, Sequelize)

db.log = VehicleLog(sequelize, Sequelize)

db.licenseAlphabet = LicenseAlphabet(sequelize, Sequelize)
db.licenseNoHistory = LicenseNoHistory(sequelize, Sequelize)
db.licenseNoHistoryDetail = LicenseNoHistoryDetail(sequelize, Sequelize)
db.licenseNoHistoryStatus = LicenseNoHistoryStatus(sequelize, Sequelize)

db.licenseNoHistory.hasMany(db.licenseNoHistoryDetail, { as: 'his_detail', foreignKey: 'lice_no_his_id' })

export default db
