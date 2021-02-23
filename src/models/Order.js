const { Model, DataTypes } = require('sequelize')

class Order extends Model {
  static init(sequelize) {
    super.init(
      {}, {
        sequelize
      }
    )
  }
}

module.exports = Order