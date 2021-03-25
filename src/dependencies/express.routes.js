const { Router } = require('express')

const syncDataController = require('../controllers/sync_data')

const routes = Router()

routes.get('/sync', syncDataController.handle)
routes.get('*', (req, res) => {
  res.send('Nothing to be seen here')
})

module.exports = routes