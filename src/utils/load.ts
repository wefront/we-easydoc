// 请求封装
import EasyDocFactory from "../EasyDocFactory";

export function requestData<T>(path: string): Promise<T> {
  // 如果有路径前缀，在此处统一添加；如果url是以http开头的全路径，则不添加
  if (EasyDocFactory.urlPrefix && !path.startsWith('http')) {
    path = EasyDocFactory.urlPrefix + path
  }
  return new Promise<T>((resolve: (t: T) => void, reject: (t: T) => void) => {
    // 需要在这里处理异步任务
    useAjaxGetData<T>(path, resolve, reject)
  })
}

// ajax请求获取数据
function useAjaxGetData<T>(path: string, resolve: (t: T) => void, reject: (t: T) => void): void {
  // 需要在这里处理异步任务
  let xhr: XMLHttpRequest
  if (window.XMLHttpRequest) {
    xhr = new window.XMLHttpRequest()
  } else {
    xhr = new window.ActiveXObject('Microsoft.XMLHTTP')
  }
  xhr.open('get', path)
  xhr.setRequestHeader('Content-type', 'application/json')
  xhr.send()
  xhr.onreadystatechange = (): void | Error => {
    try {
      if (xhr.readyState !== 4) return
      const stateError = xhr.readyState === 4 && xhr.status !== 200
      // 此处拉取json数据错误需要有ui展示
      if (stateError) {
        // throw new Error(`获取${path}数据失败`)
        // return reject(new Error(`获取${path}数据失败`))
      }
      // 获取后台数据
      const result: string = xhr.responseText || ''
      if (!result) {
        // throw new Error(`获取${path}数据为空`)
        // return reject(new Error(`获取${path}数据为空`))
      }
      // 目前所有数据都是json字符串所以在此统一处理，将来可能会存在数据类型隐患
      return resolve(JSON.parse(result))
    } catch (error) {
      return reject(error)
    }
  }
}

export default {}
