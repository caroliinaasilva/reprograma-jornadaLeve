const express = require('express')
const cors = require ('cors')
const mongoose = require('./database/mongooseConnect')
const app = express ()



app.use(express.json())
app.use(cors())
mongoose.connect()



module.exports = app