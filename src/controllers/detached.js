const nrc = require('node-run-cmd')
const { spawn } = require('child_process')

const DetachedController = {
  handle: async (req, res) => {
    await spawn('node', ['src/detached.js'], { cwd: process.cwd(), detached: true })
    res.send({
      status: 'success',
      details: 'The data will be synced in the background'
    })
  }
}

module.exports = DetachedController
