const SyncDataService = require('../services/sync_data')
const BlingAdapter = require('../adapters/bling_api')
const PipedriveAdapter = require('../adapters/pipedrive_api')
const MongooseAdapter = require('../adapters/mongoose')

const SyncDataController = {
  handle: async (req, res) => {
    const service = new SyncDataService(BlingAdapter, PipedriveAdapter, MongooseAdapter)
    res.send(await service.execute())
  }
}

module.exports = SyncDataController