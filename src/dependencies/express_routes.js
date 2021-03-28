const { Router } = require('express')

const syncThirdPartyController = require('../controllers/sync_third_party')
const detachedController = require('../controllers/detached')

const routes = Router()

routes.get('/sync', syncThirdPartyController.handle)
routes.get('/sync-detached', detachedController.handle)
routes.get('*', (req, res) => {
  res.send('Nothing to be seen here')
})

module.exports = routes
