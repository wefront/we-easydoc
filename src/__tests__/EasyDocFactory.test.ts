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
    expect(global.console.warn).toHaveBeenCalledWith('请传入用户引导参数stepIdx')

    EasyDocFactory.jumpGuideStep(1)
    expect(global.console.warn).toHaveBeenCalledWith('用户引导跳转失败')

    EasyDocFactory.initGuide({
      name: '用户引导A',
      auth: AuthEnum.TEST,
      steps: [
        {
          url: window.location.href,
          node: {
            docId: 'guide1',
            description: '用户引导<br />A第一步节点1',
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
        description: '手动修改内容',
      },
      next: false, //是否显示下一步按钮
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
    expect(global.console.warn).toHaveBeenCalledWith('请传入操作手册跳转参数stepIdx')

    sessionStorage.setItem(
      'EasyDoc',
      JSON.stringify({
        currentManual: {
          name: '上游服务配置',
          auth: 'test',
          initUrl: '/upstreams',
          description: '上游服务配置操作手册',
        },
        manuals: Manuals,
      }),
    )
    jest.useFakeTimers()
    EasyDocFactory.jumpManualStep(1, '应用接入')
    jest.runAllTimers()

    jest.useFakeTimers()
    EasyDocFactory.jumpManualStep(7)
    jest.runAllTimers()
    expect(global.console.warn).toHaveBeenCalledWith('操作手册跳转失败')
  })
  test('limitManualJumpStep', () => {
    jest.useFakeTimers()
    EasyDocFactory.limitManualJumpStep(0, 'AA')
    jest.runAllTimers()
    expect(global.console.warn).toHaveBeenCalledWith('请传入操作手册跳转参数stepIdx')

    jest.useFakeTimers()
    EasyDocFactory.limitManualJumpStep(1, '')
    jest.runAllTimers()
    expect(global.console.warn).toHaveBeenCalledWith('请传入操作手册跳转参数manualName')

    sessionStorage.setItem(
      'EasyDoc',
      JSON.stringify({
        currentManual: {
          name: '上游服务配置',
          auth: 'test',
          initUrl: '/upstreams',
          description: '上游服务配置操作手册',
          steps: [
            {
              url: '/upstreams/',
              description: '搜索目标应用',
              nodes: [
                {
                  docId: 'upstreams-nav',
                  auth: 'test',
                  description: '输入对应信息进行查询',
                  direction: 'BC',
                },
              ],
            },
            {
              url: '/upstreams/',
              description: '查看上游服务对应信息',
              nodes: [
                {
                  docId: 'upstreams-detail',
                  auth: 'test',
                  description: '点击查看详情',
                  direction: 'LC',
                },
                {
                  docId: 'upstreams-route',
                  auth: 'test',
                  description: '展示关联路由',
                  direction: 'TC',
                },
                {
                  docId: 'upstreams-node',
                  auth: 'test',
                  description: '管理节点',
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
    expect(global.console.warn).toHaveBeenCalledWith('当前操作手册名称与指定名称manualName不一致')

    jest.useFakeTimers()
    EasyDocFactory.limitManualJumpStep(1, '上游服务配置')
    jest.runAllTimers()

    jest.useFakeTimers()
    EasyDocFactory.limitManualJumpStep(5, '上游服务配置')
    jest.runAllTimers()
    expect(global.console.warn).toHaveBeenCalledWith('操作手册跳转失败')
  })
  test('manualNextStep',()=>{
    EasyDocFactory.manualNextStep()
  })
})
