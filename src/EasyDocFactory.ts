import HandleUIController from './controller/HandleUIController'
import HandleLoadDataController from './controller/HandleLoadDataController'
import HandleDataController from './controller/HandleDataController'
import HandleRenderController from './controller/HandleRenderController'
import pkg from '../package.json'
import LoadConfig from './config/load'
import HandleConfig from './config/handle'
import { AuthEnum, EasyDocOption, GuideNode, GuideStep, ManualNode, NodeTypeEnum, ProjectList } from '../types'
import { environmentFn } from './utils/env'
import {
  hrefAIsClassChild,
  readCache,
  writeCurrentGuideCache,
  writeCurrentManualCache,
  writeCurrentStepCache,
  writeNodeTypeCache,
} from './utils'

class EasyDocFactory {
  public static __version__: string = pkg.version

  public static easyDocPath = LoadConfig.easyDocPath

  public static easyManualsPath = LoadConfig.easyManualsPath

  public static easyProjectsPath = LoadConfig.easyProjectsPath

  public static hasEasyDocJSON = LoadConfig.hasEasyDocJSON

  public static hasManualsJSON = LoadConfig.hasManualsJSON

  public static hasProjectsJSON = LoadConfig.hasProjectsJSON

  public static EasyDocDocumentUrl: string | boolean = LoadConfig.EasyDocDocumentUrl

  public static urlPrefix = LoadConfig.urlPrefix

  public static showGuideMask = LoadConfig.showGuideMask

  public static ignorePaths: string[] = LoadConfig.ignorePaths

  public static minHeight = HandleConfig.minHeight

  public static minWidth = HandleConfig.minWidth

  public static maxHeight = HandleConfig.maxHeight

  public static maxWidth = HandleConfig.maxWidth

  public static editHeight = HandleConfig.editHeight

  public static editWidth = HandleConfig.editWidth

  public static windowInterval = HandleConfig.__windowInterval

  public static env: AuthEnum

  public static handleRenderUIPanel = new HandleUIController()

  public static handleLoadData = new HandleLoadDataController()

  public static handleData = new HandleDataController()

  public static handleRender = new HandleRenderController()

  public static init(opt: EasyDocOption = {}): void {
    EasyDocFactory.computedEnv(opt.env)
    if (opt.easyDocPath) {
      EasyDocFactory.easyDocPath = opt.easyDocPath
    }
    if (opt.easyManualsPath) {
      EasyDocFactory.easyManualsPath = opt.easyManualsPath
    }
    if (opt.easyProjectsPath) {
      EasyDocFactory.easyProjectsPath = opt.easyProjectsPath
    }
    if (opt.hasEasyDocJSON !== undefined) {
      EasyDocFactory.hasEasyDocJSON = opt.hasEasyDocJSON
    }
    if (opt.hasManualsJSON !== undefined) {
      EasyDocFactory.hasManualsJSON = opt.hasManualsJSON
    }
    if (opt.hasProjectsJSON !== undefined) {
      EasyDocFactory.hasProjectsJSON = opt.hasProjectsJSON
    }
    if (opt.EasyDocDocumentUrl !== undefined) {
      EasyDocFactory.EasyDocDocumentUrl = opt.EasyDocDocumentUrl
    }

    if (opt.urlPrefix) {
      EasyDocFactory.urlPrefix = opt.urlPrefix
    }
    if (opt.showGuideMask !== undefined) {
      EasyDocFactory.showGuideMask = opt.showGuideMask
    }

    if (opt.ignorePaths) {
      EasyDocFactory.ignorePaths = opt.ignorePaths
    }
    if (opt.mountPanel !== false) {
      // ?????????????????????
      EasyDocFactory.handleRenderUIPanel.renderGuide()
      // ??????????????????3s?????????????????????
      setTimeout(() => {
        if (!localStorage.getItem('_easydoc_project_over')) {
          localStorage.setItem('_easydoc_project_over', '_easydoc_project_over')
          const projectList: ProjectList = readCache('projects') as ProjectList
          this.handleData.getBaseRenderNode(NodeTypeEnum.PROJECT, projectList)
        }
      }, 3000)
      // ????????????easydoc????????????a??????????????????????????????body???????????????????????????????????????
      document.body.addEventListener('click', (e) => {
        const elem = e.target as HTMLAnchorElement
        if (elem.tagName === 'A' && hrefAIsClassChild(elem, 'easydoc-')) {
          // ??????????????????????????????????????????????????????url??????http?????????????????????????????????
          if (EasyDocFactory.urlPrefix && elem.origin === window.location.origin) {
            elem.href = window.location.origin + EasyDocFactory.urlPrefix + elem.pathname
          }
        }
      })
    }
  }

  /**
   * ??????????????????
   * @param environment
   */
  public static computedEnv(environment?: (() => AuthEnum | string) | string): void {
    if (environment === undefined) {
      EasyDocFactory.env = AuthEnum.DEVELOPMENT
    } else if (typeof environment === 'function') {
      const env = environment()
      if (AuthEnum[env]) {
        EasyDocFactory.env = env as AuthEnum
      } else if (env === 'pro') {
        EasyDocFactory.env = AuthEnum.PRODUCTION
      } else if (env === 'dev') {
        EasyDocFactory.env = AuthEnum.DEVELOPMENT
      } else if (env === 'test') {
        EasyDocFactory.env = AuthEnum.TEST
      } else {
        EasyDocFactory.env = environmentFn()
      }
    } else if (typeof environment === 'string') {
      switch (environment) {
        case 'dev':
        case AuthEnum.DEVELOPMENT:
          EasyDocFactory.env = AuthEnum.DEVELOPMENT
          break
        case 'test':
        case AuthEnum.TEST:
          EasyDocFactory.env = AuthEnum.TEST
          break
        case 'pro':
        case AuthEnum.PRODUCTION:
          EasyDocFactory.env = AuthEnum.PRODUCTION
          break
        default:
          EasyDocFactory.env = environmentFn()
      }
    } else {
      EasyDocFactory.env = environmentFn()
    }
  }

  /**
   * ???????????????????????????
   * @param guide
   */
  public static initGuide(guide: GuideNode): void {
    writeCurrentGuideCache(guide)
  }

  /**
   * ??????????????????????????????
   */
  public static startGuide(): void {
    writeNodeTypeCache(NodeTypeEnum.GUIDE)
    setTimeout(() => {
      EasyDocFactory.jumpGuideStep(1)
    }, 0)
  }

  /**
   * ????????????????????????????????????
   * @param stepIdx ?????????
   * @param guideStep ???????????????????????????
   */
  public static jumpGuideStep(stepIdx: number, guideStep?: GuideStep): void {
    if (!stepIdx) {
      console.warn('???????????????????????????stepIdx')
      return
    }
    stepIdx-- // ??????????????????1
    const currentGuide = readCache('currentGuide') as GuideNode
    if (currentGuide && guideStep) {
      currentGuide.steps[stepIdx] = guideStep
      writeCurrentGuideCache(currentGuide)
    }
    if (currentGuide) {
      writeCurrentStepCache(stepIdx)
      setTimeout(() => {
        writeNodeTypeCache(NodeTypeEnum.GUIDE)
        EasyDocFactory.handleData.getRenderGuideNode(currentGuide, stepIdx)
      }, 500)
    } else {
      console.warn('????????????????????????')
    }
  }

  /**
   * ????????????????????????
   */
  public static closeGuide(): void {
    writeCurrentGuideCache()
    writeNodeTypeCache()
    EasyDocFactory.handleData.destroyScrollEvent()
    EasyDocFactory.handleRender.destroy()
  }

  /**
   * ???????????????????????????????????????
   * @param stepIdx
   */
  public static jumpManualStep(stepIdx: number, manualName?: string, timeout = 1000): void {
    setTimeout(() => {
      if (!stepIdx) {
        console.warn('?????????????????????????????????stepIdx')
        return
      }
      stepIdx-- // ??????????????????1
      let currentManual = readCache('currentManual') as ManualNode
      // ????????????????????????????????????
      const manuals = readCache('manuals') as ManualNode[]
      const appointManual = manuals.filter((manual) => manual.name === manualName)[0]
      if (manualName && currentManual.name !== manualName && appointManual) {
        writeCurrentManualCache(appointManual)
        currentManual = appointManual
      }
      if (currentManual && stepIdx < currentManual.steps.length) {
        writeCurrentStepCache(stepIdx)
        EasyDocFactory.handleData.getRenderManualNode(currentManual, stepIdx)
      } else {
        console.warn('????????????????????????')
      }
    }, timeout)
  }

  /**
   * ?????????????????????????????????
   * @param stepIdx
   */
  public static limitManualJumpStep(stepIdx: number, limitManualName: string, timeout = 1000): void {
    setTimeout(() => {
      if (!stepIdx) {
        console.warn('?????????????????????????????????stepIdx')
        return
      }
      if (!limitManualName) {
        console.warn('?????????????????????????????????manualName')
        return
      }
      stepIdx-- // ??????????????????1
      const currentManual = readCache('currentManual') as ManualNode
      if (!currentManual || currentManual.name !== limitManualName) {
        console.warn('???????????????????????????????????????manualName?????????')
        return
      }
      if (stepIdx < currentManual.steps.length) {
        writeCurrentStepCache(stepIdx)
        EasyDocFactory.handleData.getRenderManualNode(currentManual, stepIdx)
      } else {
        console.warn('????????????????????????')
      }
    }, timeout)
  }

  /**
   * ????????????????????????????????????
   */
  public static manualNextStep(): void {
    const currentStep = readCache('currentStep') as number
    EasyDocFactory.jumpManualStep(currentStep + 2)
  }
}

export default EasyDocFactory
