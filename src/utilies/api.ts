import axios, { AxiosInstance } from 'axios'

const useApi: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API
})

console.log(useApi)

useApi.interceptors.request.use(
  request => {
    console.log(request)
    request.withCredentials = true
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

useApi.interceptors.response.use(
  response => {
    console.log(response)
    return response
  },
  async error => {
    Promise.reject(error)
    return Promise.reject(error)
  }
)

export {
  useApi
}
