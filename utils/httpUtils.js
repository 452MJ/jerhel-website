import axios from 'axios'

const baseURL = 'http://127.0.0.1:7001'
const timeout = 30 * 1000
const instance = axios.create({
  baseURL,
  timeout,
})

const api = {
  login: '/login',
  signUp: '/signUp',

  userInfo: '/user/info',
  addContact: '/contact/add',
}

instance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)

const httpUtil = {
  api,
  get: (url, params) =>
    new Promise(async (resolve, reject) => {
      //    Authorization: `Bearer ${token}`,

      instance
        .get(url, {
          params,
        })
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    }),
  post: (url, params) =>
    new Promise(async (resolve, reject) => {
      instance
        .post(url, params)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    }),
}
export default httpUtil
