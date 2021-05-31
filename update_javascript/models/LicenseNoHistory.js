export default (sequelize, Sequelize) => {
  const history  = sequelize.define(
    'license_no_history',
    {
      lice_no_his_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      vehicle_type_group_id: {
        type: Sequelize.INTEGER
      },
      lice_no_province_code: {
        type: Sequelize.INTEGER
      },
      lice_alph_id: {
        type: Sequelize.INTEGER
      },
      lice_no_number: {
        type: Sequelize.STRING
      },
      license_log_activity: {
        type: Sequelize.STRING
      },
      vehicle_kind_code: { // ******** edit from vehicle_kind_id to vehicle_kind_code
        type: Sequelize.STRING // ******** edit from integer to string
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return history
}