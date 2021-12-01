import {HandleUIControllerInterface, BaseNodeData, ManualsList, panelTypesData, ProjectList} from '../../types'
import HandleUIService from '../services/HandleUIService'
import HandleLoadDataController from './HandleLoadDataController'
import EasyDocFactory from '../EasyDocFactory'

export default class HandleUIController implements HandleUIControllerInterface {
  public HandleUIService: HandleUIService

  constructor() {
    this.HandleUIService = new HandleUIService()
  }

  // 监听路由变化pushState replaceState
  private async listenUrlChange() {
    const originPushState = History.prototype.pushState
    const _this = this
    History.prototype.pushState = async function (...args) {
      originPushState.apply(this, args)
      await _this.handleRender()
    }
    window.addEventListener('popstate', async () => {
      console.log('popstate')
      await this.handleRender()
    })
    window.addEventListener('hashchange', async () => {
      console.log('hashchange')
      await this.handleRender()
    })
  }

  // 允许自定义传入(目前看来自定义传入没什么用)
  private async handleRender(noDestroyLastRender?: boolean) {
    if (!noDestroyLastRender) {
      // 监听url变化往清除内容
      this.HandleUIService.destroyLastRender()
    }
    // 路径判断是否是ignorePaths内，是则不显示右侧小标标
    const url = window.location.pathname
    const isIgnorePath: boolean = EasyDocFactory.ignorePaths.some((matchUrl) => new RegExp(`^${matchUrl}$`).test(url))
    if (isIgnorePath) return
    // 最终数据
    let baseNode: BaseNodeData = {}
    let manuals: ManualsList = []
    let projects: ProjectList = []
    if (EasyDocFactory.hasEasyDocJSON) {
      baseNode = (await HandleLoadDataController.getBaseNodeData(url)) as BaseNodeData
    }
    if (EasyDocFactory.hasManualsJSON) {
      manuals = (await HandleLoadDataController.getManualsListData()) as ManualsList
    }
    if (EasyDocFactory.hasProjectsJSON) {
      projects = (await HandleLoadDataController.getProjectListData()) as ProjectList
    }
    const resultData: panelTypesData = { ...baseNode }
    if (projects && projects.length) {
      resultData.projects = projects
    }
    if (manuals && manuals.length) {
      resultData.manuals = manuals
    }
    // 如果当前环境加载不到json数据，则不渲染面板
    if (JSON.stringify(resultData) !== '{}') {
      this.HandleUIService.renderGuideDom(resultData)
    }
  }

  /**
   * 渲染入口dom
   * 获取BaseNodeData数据
   * 执行太多了需要拆分开
   */
  public async renderGuide(): Promise<void> {
    await this.listenUrlChange()
    this.handleRender(true)
  }
}
