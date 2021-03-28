const { Router } = require('express')

const syncThirdPartyController = require('../controllers/sync_third_party')

const routes = Router()

routes.get('/sync', syncThirdPartyController.handle)
routes.get('*', (req, res) => {
  res.send('Nothing to be seen here')
})

module.exports = routes