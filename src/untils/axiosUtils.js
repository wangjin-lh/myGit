import qs from 'qs'
import axios from "axios";


axios.defaults.baseURL = `http://localhost:8000`

//请求拦截器
axios.interceptors.request.use(req => {
    const token = localStorage.getItem('token')
    if (token) {
        req.headers.token = token
    }
    if (req.method === 'post') {
        req.data = qs.stringify(req.data)
    }

    return req

}, err => Promise.reject(err))

//响应拦截器
axios.interceptors.response.use(res => {

    /*   switch (res) {
          case 200:
              return res.data;
          case 500:
              break;
          case 401:
              break;
      } */
    return res.data

}, err => Promise.reject(err))