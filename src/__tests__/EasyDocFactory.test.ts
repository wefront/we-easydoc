/* eslint-disable no-undef */
import EasyDocFactory from '../EasyDocFactory'
import LoadConfig from '../config/load'
import HandleConfig from '../config/handle'
import HandleUIController from '../controller/HandleUIController'
import HandleLoadDataController from '../controller/HandleLoadDataController'
import HandleDataController from '../controller/HandleDataController'
import HandleRenderController from '../controller/HandleRenderController'
import pkg from '../../package.json'
import { AuthEnum } from '../../types'
import Manuals from './Manuals.json'

const opts = {
  minHeight: 180,
  minWidth: 200,
  maxHeight: 500,
  maxWidth: 800,
  editHeight: 60,
  editWidth: 200,
  easyDocPath: './EasyDoc.json',
  easyManualsPath: './Manuals.json',
  easyProjectsPath: '/test/EasyDoc.json',
  hasEasyDocJSON: true,
  hasManualsJSON: true,
  hasProjectsJSON: true,
  urlPrefix: '/test/EasyDoc.json',
  showGuideMask: true,
  ignorePaths: ['a', 'b'],
  mountPanel: true,
}
describe('init', () => {
  beforeAll(() => {
    const getData = jest.spyOn(HandleLoadDataController, 'getData')
    getData.mockResolvedValue(null)

    Object.defineProperty(window, 'location', {
      value: {
        origin: '',
      },
    })

    jest.spyOn(global.console, 'warn')
  })
  beforeEach(() => {
    localStorage.clear()
  })
  test('init without opts', () => {
    EasyDocFactory.init()
    expect(EasyDocFactory.easyDocPath).toEqual(LoadConfig.easyDocPath)
    expect(EasyDocFactory.easyManualsPath).toEqual(LoadConfig.easyManualsPath)
    expect(EasyDocFactory.easyProjectsPath).toEqual(LoadConfig.easyProjectsPath)
    expect(EasyDocFactory.hasEasyDocJSON).toEqual(LoadConfig.hasEasyDocJSON)
    expect(EasyDocFactory.hasManualsJSON).toEqual(LoadConfig.hasManualsJSON)
    expect(EasyDocFactory.hasProjectsJSON).toEqual(LoadConfig.hasProjectsJSON)
    expect(EasyDocFactory.urlPrefix).toEqual(LoadConfig.urlPrefix)
    expect(EasyDocFactory.showGuideMask).toEqual(LoadConfig.showGuideMask)
    expect(EasyDocFactory.ignorePaths).toEqual(LoadConfig.ignorePaths)
    expect(EasyDocFactory.editWidth).toEqual(HandleConfig.editWidth)
    expect(EasyDocFactory.editHeight).toEqual(HandleConfig.editHeight)
    expect(EasyDocFactory.maxWidth).toEqual(HandleConfig.maxWidth)
    expect(EasyDocFactory.maxHeight).toEqual(HandleConfig.maxHeight)
    expect(EasyDocFactory.minWidth).toEqual(HandleConfig.minWidth)
    expect(EasyDocFactory.minHeight).toEqual(HandleConfig.minHeight)
    expect(EasyDocFactory.windowInterval).toEqual(HandleConfig.__windowInterval)
    expect(EasyDocFactory.handleRenderUIPanel).toBeInstanceOf(HandleUIController)
    expect(EasyDocFactory.handleLoadData).toBeInstanceOf(HandleLoadDataController)
    expect(EasyDocFactory.handleData).toBeInstanceOf(HandleDataController)
    expect(EasyDocFactory.handleRender).toBeInstanceOf(HandleRenderController)

    EasyDocFactory.computedEnv(() => AuthEnum.TEST)
    expect(EasyDocFactory.env).toBe(AuthEnum.TEST)
  })
  test('__version__', () => {
    // eslint-disable-next-line no-underscore-dangle
    expect(EasyDocFactory.__version__).toEqual(pkg.version)
  })
  test('opts', () => {
    jest.useFakeTimers()
    const getBaseRenderNode = jest.spyOn(EasyDocFactory.handleData, 'getBaseRenderNode')
    getBaseRenderNode.mockReturnValue()
    EasyDocFactory.init(opts)
    jest.runAllTimers()

    expect(EasyDocFactory.easyDocPath).toEqual(opts.easyDocPath)
    expect(EasyDocFactory.easyManualsPath).toEqual(opts.easyManualsPath)
    expect(EasyDocFactory.easyProjectsPath).toEqual(opts.easyProjectsPath)
    expect(EasyDocFactory.hasEasyDocJSON).toEqual(opts.hasEasyDocJSON)
    expect(EasyDocFactory.hasManualsJSON).toEqual(opts.hasManualsJSON)
    expect(EasyDocFactory.hasProjectsJSON).toEqual(opts.hasProjectsJSON)
    expect(EasyDocFactory.urlPrefix).toEqual(opts.urlPrefix)
    expect(EasyDocFactory.showGuideMask).toEqual(opts.showGuideMask)
    expect(EasyDocFactory.ignorePaths).toEqual(opts.ignorePaths)
    expect(EasyDocFactory.editWidth).toEqual(HandleConfig.editWidth)
    expect(EasyDocFactory.editHeight).toEqual(HandleConfig.editHeight)
    expect(EasyDocFactory.maxWidth).toEqual(HandleConfig.maxWidth)
    expect(EasyDocFactory.maxHeight).toEqual(HandleConfig.maxHeight)
    expect(EasyDocFactory.minWidth).toEqual(HandleConfig.minWidth)
    expect(EasyDocFactory.minHeight).toEqual(HandleConfig.minHeight)
    expect(EasyDocFactory.windowInterval).toEqual(HandleConfig.__windowInterval)
    expect(EasyDocFactory.handleRenderUIPanel).toBeInstanceOf(HandleUIController)
    expect(EasyDocFactory.handleLoadData).toBeInstanceOf(HandleLoadDataController)
    expect(EasyDocFactory.handleData).toBeInstanceOf(HandleDataController)
    expect(EasyDocFactory.handleRender).toBeInstanceOf(HandleRenderController)

    const aLink = document.createElement('a')
    aLink.classList.add('easydoc-test')
    document.body.prepend(aLink)

    aLink.click()
  })
  test('jumpGuideStep', () => {
    EasyDocFactory.init(opts)

    EasyDocFactory.jumpGuideStep(0)
    expect(global.console.warn).toHaveBeenCalledWith('???????????????????????????stepIdx')

    EasyDocFactory.jumpGuideStep(1)
    expect(global.console.warn).toHaveBeenCalledWith('????????????????????????')

    EasyDocFactory.initGuide({
      name: '????????????A',
      auth: AuthEnum.TEST,
      steps: [
        {
          url: window.location.href,
          node: {
            docId: 'guide1',
            description: '????????????<br />A???????????????1',
          },
        },
      ],
    })
    const getRenderGuideNode = jest.spyOn(EasyDocFactory.handleData, 'getRenderGuideNode')
    getRenderGuideNode.mockResolvedValueOnce()
    jest.useFakeTimers()
    EasyDocFactory.jumpGuideStep(1, {
      url: window.location.href,
      node: {
        docId: 'guide1',
        description: '??????????????????',
      },
      next: false, //???????????????????????????
    })
    jest.runAllTimers()

    expect(getRenderGuideNode).toHaveBeenCalled()
  })
  test('computedEnv', () => {
    EasyDocFactory.computedEnv(() => 'pro')
    expect(EasyDocFactory.env).toBe(AuthEnum.PRODUCTION)
    EasyDocFactory.computedEnv(() => 'dev')
    expect(EasyDocFactory.env).toBe(AuthEnum.DEVELOPMENT)
    EasyDocFactory.computedEnv(() => 'test')
    expect(EasyDocFactory.env).toBe(AuthEnum.TEST)

    window.location.href = 'xx.guahao.cn'
    EasyDocFactory.computedEnv(() => 'other')
    expect(EasyDocFactory.env).toBe(AuthEnum.PRODUCTION)

    EasyDocFactory.computedEnv('pro')
    expect(EasyDocFactory.env).toBe(AuthEnum.PRODUCTION)
    EasyDocFactory.computedEnv('dev')
    expect(EasyDocFactory.env).toBe(AuthEnum.DEVELOPMENT)
    EasyDocFactory.computedEnv('test')
    expect(EasyDocFactory.env).toBe(AuthEnum.TEST)
    EasyDocFactory.computedEnv('other')
    expect(EasyDocFactory.env).toBe(AuthEnum.PRODUCTION)
  })
  test('startGuide', () => {
    EasyDocFactory.init(opts)
    EasyDocFactory.startGuide()
  })
  test('closeGuide', () => {
    EasyDocFactory.closeGuide()
  })
  test('jumpManualStep', () => {
    jest.useFakeTimers()
    EasyDocFactory.jumpManualStep(0)
    jest.runAllTimers()
    expect(global.console.warn).toHaveBeenCalledWith('?????????????????????????????????stepIdx')

    sessionStorage.setItem(
      'EasyDoc',
      JSON.stringify({
        currentManual: {
          name: '??????????????????',
          auth: 'test',
          initUrl: '/upstreams',
          description: '??????????????????????????????',
        },
        manuals: Manuals,
      }),
    )
    jest.useFakeTimers()
    EasyDocFactory.jumpManualStep(1, '????????????')
    jest.runAllTimers()

    jest.useFakeTimers()
    EasyDocFactory.jumpManualStep(7)
    jest.runAllTimers()
    expect(global.console.warn).toHaveBeenCalledWith('????????????????????????')
  })
  test('limitManualJumpStep', () => {
    jest.useFakeTimers()
    EasyDocFactory.limitManualJumpStep(0, 'AA')
    jest.runAllTimers()
    expect(global.console.warn).toHaveBeenCalledWith('?????????????????????????????????stepIdx')

    jest.useFakeTimers()
    EasyDocFactory.limitManualJumpStep(1, '')
    jest.runAllTimers()
    expect(global.console.warn).toHaveBeenCalledWith('?????????????????????????????????manualName')

    sessionStorage.setItem(
      'EasyDoc',
      JSON.stringify({
        currentManual: {
          name: '??????????????????',
          auth: 'test',
          initUrl: '/upstreams',
          description: '??????????????????????????????',
          steps: [
            {
              url: '/upstreams/',
              description: '??????????????????',
              nodes: [
                {
                  docId: 'upstreams-nav',
                  auth: 'test',
                  description: '??????????????????????????????',
                  direction: 'BC',
                },
              ],
            },
            {
              url: '/upstreams/',
              description: '??????????????????????????????',
              nodes: [
                {
                  docId: 'upstreams-detail',
                  auth: 'test',
                  description: '??????????????????',
                  direction: 'LC',
                },
                {
                  docId: 'upstreams-route',
                  auth: 'test',
                  description: '??????????????????',
                  direction: 'TC',
                },
                {
                  docId: 'upstreams-node',
                  auth: 'test',
                  description: '????????????',
                  direction: 'BL',
                },
              ],
            },
          ],
        },
        manuals: Manuals,
      }),
    )
    jest.useFakeTimers()
    EasyDocFactory.limitManualJumpStep(1, 'test')
    jest.runAllTimers()
    expect(global.console.warn).toHaveBeenCalledWith('???????????????????????????????????????manualName?????????')

    jest.useFakeTimers()
    EasyDocFactory.limitManualJumpStep(1, '??????????????????')
    jest.runAllTimers()

    jest.useFakeTimers()
    EasyDocFactory.limitManualJumpStep(5, '??????????????????')
    jest.runAllTimers()
    expect(global.console.warn).toHaveBeenCalledWith('????????????????????????')
  })
  test('manualNextStep',()=>{
    EasyDocFactory.manualNextStep()
  })
})
