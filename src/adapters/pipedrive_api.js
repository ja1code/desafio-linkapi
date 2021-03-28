const axios = require('axios')

const pipedrive = axios.create({
  baseURL: 'https://api.pipedrive.com/v1/'
})

pipedrive.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    api_token: process.env.PIPEDRIVE_API_KEY
  }

  return config
}, null, { synchronous: true })

module.exports = pipedrive
