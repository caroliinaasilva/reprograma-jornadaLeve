require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');
const pacientesRoutes = require('./routes/pacientesRoutes')


const app = express()

app.use(express.json())
app.use(cors())


mongoose.connect()

app.use(pacientesRoutes)

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app