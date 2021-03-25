const axios = require('axios')
const qs = require('qs')

const bling = axios.create({
  baseURL: 'https://bling.com.br/Api/v2/'
})

function onPostCall(config) {
  return config.method === 'post';
}

bling.interceptors.request.use(config => {
  const payload = qs.stringify(config.data)
  config.data = {}
  config.url += `?${payload}`

  return config
}, null, { synchronous: true, runWhen: onPostCall })

module.exports = bling