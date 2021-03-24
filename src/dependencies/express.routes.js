const { Router } = require('express')

const syncDataController = require('../controllers/sync_data')

const routes = Router()

routes.get('/sync-data', syncDataController)
routes.get('*', (req, res) => {
  res.send('Nothing to be seen here')
})