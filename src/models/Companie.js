const { Model, DataTypes } = require('sequelize')

class Companie extends Model {
  static init(sequelize) {
    super.init(
      {
        nameCompanie: DataTypes.STRING,
        emailContact: DataTypes.STRING,
        address: DataTypes.STRING,
      },
      {
        sequelize
      }
    )
  }

  static associate(models) {
    this.hasMany(models.User, { foreignKey: 'companieId', as: 'users'})
  }
}

module.exports = Companie