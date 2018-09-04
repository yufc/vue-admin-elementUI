import Axios from 'axios'
import store from '@/store'
import querystring from 'querystring'
import { Message } from 'element-ui'

const commit = store.commit || store.dispatch

const CONTENT_TYPE = 'form'

const options = {
  baseURL: process.env.NODE_ENV === 'development' ? '/proxyApi/' : '',
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': CONTENT_TYPE === 'json' ? 'application/json; charset=utf-8' : 'application/x-www-form-urlencoded'
  }
}

const axios = Axios.create(options)

//  添加一个请求拦截器
axios.interceptors.request.use(function(config) {
    commit('updateLoading', true)
    return config
  }, function(error) {
    return Promise.reject(error)
  })
  //  添加一个响应拦截器
axios.interceptors.response.use(res => {
  if (res.status === 200) {
    // Message({
    //   message: '请求成功！',
    //   type: 'success'
    // })
  }
  // 不显示loading
  commit('updateLoading', false)
  return res
}, err => {
  commit('updateLoading', false)
  Message({
    message: '服务端错误',
    type: 'error'
  })
  return Promise.reject(err)
})

var http = function(method, url, data = {}) {
  if (method.toUpperCase() !== 'GET') {
    data = CONTENT_TYPE === 'json' ? JSON.stringify(data) : querystring.stringify(data)
  }
  return new Promise((resolve, reject) => {
    axios({
      url,
      method,
      data
    }).then(({ data }) => {
      resolve(data)
        // if (data.code === 200) {
        //   resolve(data)
        // } else if (data.code === 500) {
        //   reject(data)
        // }
    })
  })
}

export default http;
