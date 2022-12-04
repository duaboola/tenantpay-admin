import axios from 'axios'

let API = axios.create({
  baseURL: 'http://192.168.100.96:8888/tenantpay',
})

export default API
