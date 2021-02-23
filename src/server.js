const express = require("express")
const routes = require('./routes')
let port = process.env.PORT || 8080;

require('./database')

const app = express()

app.use(express.json())

app.use(routes)

app.listen(port)