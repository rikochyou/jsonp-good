import { JsonpConfig, JsonpPromise, Window } from '../types'

export default function jsonp(config: JsonpConfig): JsonpPromise {
  return new Promise((resolve, reject) => {
    const { url, timeout = 6000, funcName } = config
      // 解决ts在window上挂属性报错的问题
    ;(<any>window)[funcName!] = function(data: any) {
      console.log('jsonp data', data)
      clean()
      resolve(data)
    }
    if (timeout) {
      var timer = setTimeout(() => {
        clean()
        reject(new Error(`Timeout of ${timeout} ms exceeded`))
      }, timeout)
    }

    function clean() {
      if (elem.parentNode) elem.parentNode.removeChild(elem)
      ;(<any>window)[funcName!] = {}
      if (timer) clearTimeout(timer)
    }
    // 创建script标签，进行跨域请求
    let elem = document.createElement('script')
    elem.src = url
    let insertPosition = document.getElementsByTagName('script')[0] || document.head
    insertPosition.parentNode!.insertBefore(elem, insertPosition)
  })
}
