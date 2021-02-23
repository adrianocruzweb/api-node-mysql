const Companie = require('../models/Companie')

module.exports = {
  async index(req, res) {
    const companies = await Companie.findAll()

    return res.json(companies)
  },

  async store(req, res) {
    const { nameCompanie, emailContact, address } = req.body

    const companie = await Companie.create({ nameCompanie, emailContact, address})

    return res.json(companie)
  }
}