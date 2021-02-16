export default (sequelize, Sequelize) => {
  const log = sequelize.define(
    'vehicle_log',
    {
      vehicle_log_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      vehicle_id: {
        type: Sequelize.INTEGER
      },
      veh_log_field_name: {
        type: Sequelize.STRING(45)
      },
      veh_log_data_from: {
        type: Sequelize.STRING(255)
      },
      veh_log_data_to: {
        type: Sequelize.STRING(255)
      },
      app_request_no: {
        type: Sequelize.STRING(45)
      },
      veh_log_activity: {
        type: Sequelize.STRING
      },
      veh_log_datetime: {
        type: Sequelize.STRING(45)
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return log
}
