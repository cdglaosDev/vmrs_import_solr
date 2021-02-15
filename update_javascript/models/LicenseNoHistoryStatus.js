export default (sequelize, Sequelize) => {
  const historyStatus = sequelize.define(
    'license_no_history_status',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    }
  )
  return historyStatus
}