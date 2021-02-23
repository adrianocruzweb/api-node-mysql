const express = require('express')
const CompanieController = require('./controllers/CompanieController')
const UserController = require('./controllers/UserController')
const ClientController = require('./controllers/ClientController')
const ProductController = require('./controllers/ProductController')
const OrderController = require('./controllers/OrderController')

const routes = express.Router()

// list all companies
routes.get('/companies', CompanieController.index)
// create one companie
routes.post('/companies', CompanieController.store)
// find all users
routes.get('/users', UserController.indexAll)
// get all users to index
routes.get('/companies/:companieId/users', UserController.index)
// create one user
routes.post('/companies/:companieId/users', UserController.store)
// find all clients
routes.get('/clients', ClientController.index)
// create client
routes.post('/clients', ClientController.store)
// update client
routes.patch('/clients/:clientId', ClientController.update)
// delete client
routes.delete('/clients/:clientId', ClientController.delete)

module.exports = routes