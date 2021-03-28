require('dotenv').config({
  path: process.env.NODE_ENV === "development" ? ".env.dev" : ".env"
})

const express = require('express')
const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const helmet = require('helmet')

class ApiController {
  constructor() {
    console.log(`[LINKAPI] PIPEDRIVE - BLING DEALS INTEGRATION\nv1.0`)
    this.express = express()
    this.webServerSetup()
    this.databaseSetup()
  }

  databaseSetup () {
    const database = process.env.MONGO_DBURL

    mongoose.connect(database, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
  }

  webServerSetup() {
    this.express.use(express.json())
    this.express.use(helmet())
    this.express.use(require('./dependencies/express.routes'))
  }
}

module.exports = new ApiController().express