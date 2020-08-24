const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')


// Iniciando o App
const app = express()
app.use(express.json())
app.use(cors())


//Iniciando DB
mongoose.connect(
  'mongodb://localhost:27017/node-api',
  { useNewUrlParser: true, useUnifiedTopology: true },
)

requireDir('./src/models')

app.use('/api', require('./src/routes'))

app.listen(5050)