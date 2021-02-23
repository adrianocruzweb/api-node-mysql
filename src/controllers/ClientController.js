const Client = require('../models/Client')

module.exports = {
  async index(req, res) {
    const clients = await Client.findAll()

    return res.json(clients)
  },

  async store(req, res) {
    const { name, email, password } = req.body

    const client = await Client.create({ name, email, password})

    return res.json(client)
  },

  async delete(req, res) {
    const { clientId } = req.params

    const client = await Client.findOne({
      where: {id: clientId}
    })

    deleteClient = await client.destroy()

    return res.json(deleteClient)
  },

  async update(req, res) {
    const { clientId } = req.params
    const { name, email, password } = req.body

    const client = await Client.findOne({
      where: {id: clientId}
    })

    client.name = name
    client.email = email
    client.password = password

    updateCLient = await client.save()

    return res.json(updateCLient)
  }
}