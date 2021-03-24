const axios = require('axiox')

const pipedrive = axios.create({
  baseUrl: 'https://api.pipedrive.com/v1/'
})

pipedrive.interceptors.request.use(config => {
  console.log(config)
})