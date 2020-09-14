import axios from 'axios'
import qs from 'qs'
import store from '../store'

const $axios = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 5000
})

$axios.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = store.getters.token
    }
    // 判断请求方式是否为POST，进行转换格式
    if (config.method === ('post' || 'put')) {
      if (config.headers['Content-Type'] !== 'multipart/form-data') {
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
      }
      config.data = qs.stringify({ ...config.data })
    } else {
      config.params = { ...config.params }
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
$axios.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 0) {
      return res
    } else {
      return Promise.reject(res.message)
    }
  },
  error => {
    console.log('response error', error)
    const res = error.response
    // token 过期的操作
    if (res.status === 401) {
      store.dispatch('user/removeToken').then(() => {
        location.reload()
      })
    }

    return Promise.reject(error)
  }
)

export { $axios }
