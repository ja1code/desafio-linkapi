const SyncThirdPartyService = require('../services/sync_third_party')
const BlingAdapter = require('../adapters/bling_api')
const PipedriveAdapter = require('../adapters/pipedrive_api')
const MongooseAdapter = require('../adapters/mongoose')
const SyncDatabaseService = require('../services/sync_database')

const SyncThirdPartyController = {
  handle: async (req, res) => {
    const DatabaseService = new SyncDatabaseService(MongooseAdapter)

    const service = new SyncThirdPartyService(BlingAdapter, PipedriveAdapter, DatabaseService)
    res.send(await service.execute())
  }
}

module.exports = SyncThirdPartyController
