const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

//iniciando o app
const app = express()
//permitir que minha aplicação envie dados no formato json
app.use(express.json())
//libera acesso para todos os dominios acessarem esta api
app.use(cors())

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/apinode',  {useNewUrlParser: true, useUnifiedTopology: true})


requireDir('./src/models')



//Rotas
app.use('/api', require('./src/routes'))

app.listen(3000)