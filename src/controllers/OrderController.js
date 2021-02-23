const Order = require('../models/Order')

module.exports = {
  async index(req, res) {
    const orders = await Order.findAll()

    return res.json(orders)
  },

  async store(req, res) {
    const { name, email } = req.body

    const order = await Order.create({ name, email})

    return res.json(order)
  }
}