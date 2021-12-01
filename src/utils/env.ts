import {AuthEnum} from '../../types'

/**
 * 判断当前环境
 * @param type 使用NODE_ENV或者URL判断当前环境
 */
export function environmentFn(): AuthEnum {
  // if (window.location.href.indexOf('.xxx.cn') > -1) {
  //   return AuthEnum.PRODUCTION
  // }
  // if (window.location.href.indexOf('.xxx-test.com') > -1) {
  //   return AuthEnum.TEST
  // }
  return AuthEnum.DEVELOPMENT
}
