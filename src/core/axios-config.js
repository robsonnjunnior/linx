import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL

const interceptorRequest = config => ({
  ...config,
  params: {
    ...config.params,
    APPID: process.env.REACT_APP_API_ID,
    units: 'metric'
  }
})

axios.interceptors.request.use(interceptorRequest, Promise.reject)
