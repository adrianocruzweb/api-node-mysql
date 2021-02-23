const { Model, DataTypes } = require('sequelize')

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        type: DataTypes.STRING,
      },
      {
        sequelize
      }
    )
  }

  static associate(models) {
    this.belongsTo(models.Companie, { foreignKey: 'companieId', as: 'companie'})
  }
}

module.exports = User