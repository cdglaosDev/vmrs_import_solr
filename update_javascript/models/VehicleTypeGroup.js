export default (sequelize, Sequelize) => {
  const vehicleTypeGroup = sequelize.define(
    'vehicle_type_groups',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(100)
      },
      code: {
        type: Sequelize.STRING(20)
      },
      status: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.STRING
      },
      updated_at: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return vehicleTypeGroup
}