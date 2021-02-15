export default (sequelize, Sequelize) => {
  const historyDetail = sequelize.define(
    'license_no_history_detail',
    {
      license_status_det_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      lice_no_his_status_id: {
        type: Sequelize.INTEGER
      },
      lice_no_his_det_start_date: {
        type: Sequelize.STRING
      },
      lice_no_his_det_end_date: {
        type: Sequelize.STRING
      },
      lice_no_owner: {
        type: Sequelize.STRING
      },
      lice_no_village: {
        type: Sequelize.STRING
      },
      lice_no_his_id: {
        type: Sequelize.STRING
      },
      vehicle_id: {
        type: Sequelize.INTEGER
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )

  return historyDetail
}