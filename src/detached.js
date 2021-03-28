require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.dev' : '.env'
})

const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)

const SyncThirdPartyService = require('./services/sync_third_party')
const BlingAdapter = require('./adapters/bling_api')
const PipedriveAdapter = require('./adapters/pipedrive_api')
const MongooseAdapter = require('./adapters/mongoose')
const SyncDatabaseService = require('./services/sync_database')
const DatabaseService = new SyncDatabaseService(MongooseAdapter)

function databaseSetup () {
  const database = process.env.MONGO_DBURL

  mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

async function main () {
  databaseSetup()

  const service = new SyncThirdPartyService(BlingAdapter, PipedriveAdapter, DatabaseService)

  await service.execute()

  setTimeout(() => { // Timeout that guarentees any db write is properly done
    process.exit()
  }, 10000)
}

main()
