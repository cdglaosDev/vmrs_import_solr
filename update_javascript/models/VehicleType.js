export default (sequelize, Sequelize) => {
  const vehicleType = sequelize.define(
    'vehicle_types',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      name_en: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.STRING
      },
      updated_at: {
        type: Sequelize.STRING
      },
      deleted_at: {
        type: Sequelize.STRING
      },
      vehicle_type_group_id: {
        type: Sequelize.INTEGER
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return vehicleType
}