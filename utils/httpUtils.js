import axios from 'axios'
import Qs from 'qs'

const baseURL = 'http://127.0.0.1:7001'
const timeout = 30 * 1000
const instance = axios.create({
  baseURL,
  timeout,
  headers: {
    'Content-Type': 'application/json',
  },
})

const instanceForm = axios.create({
  baseURL,
  timeout,
  transformRequest: [
    function (data) {
      data = Qs.stringify(data)
      return data
    },
  ],
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
})

const instanceObj = {
  instance,
  instanceForm,
}

const api = {
  login: '/login',
}

const httpUtil = {
  api,
  get: (url, params) =>
    new Promise((resolve, reject) => {
      instanceObj.instance
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
  post: (url, params, option) =>
    new Promise((resolve, reject) => {
      instanceObj.instance
        .post(url, params, option)
        .then(response => {
          resolve(response.data)
        })
        .catch(error => {
          reject(error)
        })
    }),
  getForm: (url, params) =>
    new Promise((resolve, reject) => {
      instanceObj.instanceForm
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
  postForm: (url, params) =>
    new Promise((resolve, reject) => {
      instanceObj.instanceForm
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
