require('dotenv').config();
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const mongoose = require('./database/mongooseConnect');
const swaggerFile = require('../swagger/swagger_output.json');
const index = require('./routes/index');
const patientRoutes = require('./routes/patientRoutes');
const psychologistRoutes = require('./routes/psychologistRoutes');
const userRoute = require('./routes/userRoute');
const { errorHandler, notFound } = require('./middleware/errorHandler');

const app = express();
mongoose.connect();
app.use(express.json());

app.use(cors());

app.use('/', index);
app.use(patientRoutes);
app.use(psychologistRoutes);
app.use(userRoute);

app.use('/reprograma-jornadaLeve', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Error handling middleware (must be last)
app.use(notFound);
app.use(errorHandler);

module.exports = app;
