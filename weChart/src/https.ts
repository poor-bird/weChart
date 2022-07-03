import http from './axios'


/**
 * post 请求
 * @params url 接口路径
 * @params params 接口参数
 * @returns {Promise<unknown>}
*/
export const post = function (url:string, params = {}) {
  return new Promise((resolve, reject) => {
    http({
      methods: 'post',
      url: url,
      data: params,
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json;charset=UTF-8'
      }
    }).then((res: any) => {
      resolve(res.data)
    }).catch((error:any) => {
      reject(error)
    })
  })
}

/**
 * get 请求
 * @params url 接口路径
 * @params params 接口参数
 * @returns {Promise<unknown>}
*/
export const get = function (url:string, param:any = {}) {
  let params = {
    params: param
  }
  return new Promise((resolve, reject) => {
    http.get(`${url}`, params).then((res:any) => {
      resolve(res.data)
    }).catch((error:any) => {
      reject(error)
    })
  })
}

/**
 * put 请求
 * @params url 接口路径
 * @params params 接口参数
 * @returns {Promise<unknown>}
*/
export const put = function (url:string, params:any = {}) {
  return new Promise((resolve, reject) => {
    http({
      methods: 'put',
      url: url,
      data: params,
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json;charset=UTF-8'
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((error: any) => {
      reject(error)
    })
  })
}


/**
 * multipart post 请求
 * @params url 接口路径
 * @params params 接口参数
 * @returns {Promise<unknown>}
*/
export const postMultipart = function (url:string, params:any = {}) {
  return new Promise((resolve, reject) => {
    http({
      methods: 'post',
      url: url,
      data: params,
      headers: {
        Accept: 'application/json',
        'Content-type': 'multipart/form-data;boundary=' + new Date().getTime()
      }
    }).then((res: any) => {
      resolve(res)
    }).catch((error: any) => {
      reject(error)
    })
  })
}