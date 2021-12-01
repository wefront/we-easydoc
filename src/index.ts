import EasyDocFactory from './EasyDocFactory'
import {EasyDocOption} from '../types'
import './iconfont/iconfont.js'
import './css/index.less'
// @ts-ignore
if(!window.process){
  // @ts-ignore
  window.process={
    env:{
      NODE_ENV:'development'
    }
  }
}
class EasyDoc {

  public static initGuide = EasyDocFactory.initGuide

  public static startGuide = EasyDocFactory.startGuide

  public static jumpGuideStep = EasyDocFactory.jumpGuideStep

  public static closeGuide = EasyDocFactory.closeGuide

  public static jumpManualStep = EasyDocFactory.jumpManualStep

  public static limitManualJumpStep = EasyDocFactory.limitManualJumpStep

  public static manualNextStep = EasyDocFactory.manualNextStep

  public static urlPrefix = EasyDocFactory.urlPrefix

  public static hasEasyDocJSON = EasyDocFactory.hasEasyDocJSON

  public static hasManualsJSON = EasyDocFactory.hasManualsJSON

  public static hasProjectsJSON = EasyDocFactory.hasProjectsJSON

  public static init(opt: EasyDocOption = {}): void {
    EasyDocFactory.init(opt)
  }
}

export default EasyDoc
