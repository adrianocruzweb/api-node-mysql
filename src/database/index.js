const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Companie = require('../models/Companie')
const User = require('../models/User')
const Client = require('../models/Client')
const Product = require('../models/Product')
const Order = require('../models/Order')

const connection = new Sequelize(dbConfig)

Companie.init(connection)
User.init(connection)
Client.init(connection)
Product.init(connection)
Order.init(connection)

User.associate(connection.models)
Companie.associate(connection.models)

module.exports = connection