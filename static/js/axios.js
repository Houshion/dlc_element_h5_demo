import axios from 'axios'
import qs from 'qs'

const _Url = 'http://wmwl.app.xiaozhuschool.com/' //项目接口访问地址前缀

function getUrl(url) {
  /* 判断传入的url路径是否是http开头 */
  if (url.startsWith('http') || url.startsWith('https')) {
    return url
  }
  /* 不是http开头，进行路径的拼接 */
  return `${_Url}${url}`
}

const Http = {
  get: (url, query) => new Promise((resolve, reject) => {
    /* new Promise 是为进行在vue store里面进行异步传值 */
    var path = getUrl(url)
    /* get请求 */
    axios.get(path, {
      params: query
    }).then((res1, error) => {
      if (res1) {
        resolve(res1)
      } else {
        reject(error)
      }
    })
  }),

  post: (url, query) => new Promise((resolve, reject) => {
    /* new Promise 是为进行在vue store里面进行异步传值 */
    var path = getUrl(url)
    /* post请求 */
    axios({
      url: path,
      method: 'post',
      data: qs.stringify(query),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res1, error) => {
      if (res1) {
        resolve(res1)
      } else {
        reject(error)
      }
    })
  }),

  postImg: (url, query) => new Promise((resolve, reject) => {
    var path = getUrl(url)
    axios({
      url: path,
      method: 'post',
      data: query,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then((res1, error) => {
      if (res1) {
        resolve(res1)
      } else {
        reject(error)
      }
    })
  })
}

export default Http
