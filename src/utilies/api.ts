import axios, { AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_api
})

console.log(api)

api.interceptors.request.use(
  request => {
    console.log(request)
    request.withCredentials = true
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

api.interceptors.response.use(
  response => {
    console.log(response)
    return response
  },
  async error => {
    Promise.reject(error)
    return Promise.reject(error)
  }
)
