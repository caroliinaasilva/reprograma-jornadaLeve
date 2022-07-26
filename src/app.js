require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('./database/mongooseConnect');
const swaggerFile = require('../swagger/swagger_output.json');
const index = require('./routes/index');
const pacientesRoutes = require('./routes/pacientesRoutes');
const psicologasRoutes = require('./routes/psicologasRoutes');
const userRoute = require('./routes/userRoute');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect();
app.use('/', index);
app.use(pacientesRoutes);
app.use(psicologasRoutes);
app.use(userRoute);

app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;
