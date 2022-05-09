import axios from 'axios'

const basePath = 'http://localhost:3000'
// 创建 axios 实例
const http:any = axios.create({
  // 请求头配置 token
  headers: {
    'token': localStorage.getItem('token') || ''
  },
  baseURL: basePath,
  timeout: 2*60*1000,
  // 跨域请求时需要凭证，开启后，后端服务器需要设置允许开启
  withCredentials: true
})

// request 请求拦截器
http.interceptors.request.use(
  (config:any) => {
    // 发起请求时重新获取最新的token, 这一步很重要，因为获取 axios 实例的时候，获取到的token 未必有效，或者说未必能获取到
    const token = localStorage.getItem('token')
    // 特殊配置：设置下载获取 excel 接口的返回值为 blob. 这在异步下载文件时有时会显得很有用
    if(config.url === '/api/excel/download') {
      config.responseType = 'blob'
    }
    // 特殊配置：登入接口，将请求头的 token 设置为空字符串
    if(config.url === '/author/login') {
      config.headers['token'] = ''
    } else {
      config.headers['token'] = token || ''
    }
    return config
  }, 
  (err:any) => {
    console.warn('err');
    return Promise.reject(err)
  }
)

// response 响应拦截器
// http.interceptors.response.use(
//   response => {
//     const res = response.data
//     // 特殊配置：code为 -10086，表示资源不存在，跳转到提示页（404）
//     if (res.code === -10086) {
//       router.push({
//         name: 'ErrorPage',
//         query: { type: '404' }
//       }).then()
//       return res
//     }

//     // 特殊配置：-12306，无权限，跳转到提示页
//     if (res.code === -12306) {
//       router.push({
//         name: 'ErrorPage',
//         query: { type: 'authority' }
//       }).then()
//       return res
//     }
//     return res
//   }
// )

export default http