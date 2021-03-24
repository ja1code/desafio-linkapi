const axios = require('axiox')

const pipedrive = axios.create({
  baseUrl: 'https://bling.com.br/Api/v2/'
})

pipedrive.interceptors.request.use(config => {
  console.log(config)
})