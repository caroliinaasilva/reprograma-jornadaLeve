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
mongoose.connect();
app.use(express.json());

app.use(cors());



app.use('/', index);
app.use(pacientesRoutes);
app.use(psicologasRoutes);
app.use(userRoute);

app.use('/reprograma-jornadaLeve', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;

