const { Model, DataTypes } = require('sequelize')

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        type: DataTypes.STRING,
        price: DataTypes.STRING,
      },
      {
        sequelize
      }
    )
  }
}

module.exports = Product