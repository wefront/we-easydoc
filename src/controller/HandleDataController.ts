import {
  GuideNode,
  HandleDataControllerInterface,
  ManualNode,
  ManualsList,
  Node,
  NodeTypeEnum,
  RenderGuideNode,
  RenderManualNode,
  RenderNode,
} from '../../types'
import HandleDataService from '../services/HandleDataService'
import EasyDocFactory from '../EasyDocFactory'
import HandleConfig from '../config/handle'
import { readCache } from '../utils'

export default class HandleDataController implements HandleDataControllerInterface {
  public handleDataService: HandleDataService

  public nodeType?: NodeTypeEnum

  public nodes?: Node[]

  public renderNodeCallback?: (nodeType: NodeTypeEnum, nodes: RenderNode[]) => void

  public manual?: ManualNode

  public stepIdx = 0

  public renderManualCallback?: (renderManualNode: RenderManualNode, stepIdx: number) => void

  public guide?: GuideNode

  public renderGuideCallback?: (renderGuideNode: RenderGuideNode, stepIdx: number) => void

  private inListenScroll = false

  private throttleTimer?: number

  constructor() {
    this.handleDataService = new HandleDataService()
  }

  /**
   * 根据传入参数获取所有节点的说明弹窗的x,y,width,height
   * @param nodeType 节点类型
   * @param nodes 节点集合
   * @param renderNodeCallback 生成的弹窗坐标数据传给callback
   */
  public getBaseRenderNode(
    nodeType: NodeTypeEnum,
    nodes: Node[],
    renderNodeCallback?: (nodeType: NodeTypeEnum, nodes: RenderNode[]) => void,
  ): void {
    if (!nodeType) {
      console.log('缺少nodeType参数')
      return
    }
    if (!nodes) {
      console.log('缺少nodes参数')
      return
    }
    const renderNodes: RenderNode[] = this.handleDataService.handleData(nodeType, nodes)
    if (renderNodeCallback) {
      this.renderNodeCallback = renderNodeCallback
      renderNodeCallback(nodeType, renderNodes)
    } else {
      EasyDocFactory.handleRender.render(nodeType, renderNodes)
    }
    // 监听滚动事件，重新触发
    this.nodeType = nodeType
    this.nodes = nodes
    if (!this.inListenScroll) {
      this.inListenScroll = true
      document.body.addEventListener('scroll', this.nodeScrollEvent.bind(this), true)
    }
  }

  /**
   * 获取操作手册并渲染目录
   * @param manual 操作手册目录
   * @param stepIdx 当前在哪个操作手册
   * @param renderManualCallback
   */
  // public static getRenderManualCatalogues(manuals: ManualsList): void {
  //   if (!manuals) {
  //     console.log('缺少manuals参数')
  //     return
  //   }
  //   EasyDocFactory.handleRender.renderManualsCatalogues(manuals)
  // }

  /**
   * 获取操作手册渲染节点
   * @param manual 操作手册
   * @param stepIdx 当前在第几步
   * @param renderManualCallback
   */
  public getRenderManualNode(
    manual: ManualNode,
    stepIdx = 0,
    renderManualCallback?: (renderManualNode: RenderManualNode, stepIdx: number) => void,
    scrollRepaint?: boolean,
  ): void {
    if (!manual) {
      console.log('缺少manual参数')
      return
    }
    const renderManualNode: RenderManualNode = HandleDataService.handleManualData(manual, stepIdx)
    if (renderManualCallback) {
      this.renderManualCallback = renderManualCallback
      renderManualCallback(renderManualNode, stepIdx)
    } else {
      EasyDocFactory.handleRender.renderManual(renderManualNode, stepIdx, !!scrollRepaint)
    }
    // 监听滚动事件，重新触发
    this.nodeType = NodeTypeEnum.MANUAL
    this.manual = manual
    this.stepIdx = stepIdx
    if (!this.inListenScroll) {
      this.inListenScroll = true
      document.body.addEventListener('scroll', this.nodeScrollEvent.bind(this), true)
    }
  }

  /**
   * 获取用户引导渲染节点
   * @param manual
   * @param stepIdx
   * @param renderManualCallback
   */
  public async getRenderGuideNode(
    guide: GuideNode,
    stepIdx = 0,
    renderGuideCallback?: (renderGuideNode: RenderGuideNode, stepIdx: number) => void,
  ): Promise<void> {
    if (!guide) {
      console.log('缺少guide参数')
      return
    }
    const renderGuideNode: RenderGuideNode = await HandleDataService.handleGuideData(guide, stepIdx)
    if (renderGuideCallback) {
      this.renderGuideCallback = renderGuideCallback
      renderGuideCallback(renderGuideNode, stepIdx)
    } else if (renderGuideNode.steps[stepIdx].node) {
      EasyDocFactory.handleRender.renderGuide(renderGuideNode, stepIdx)
    } else {
      EasyDocFactory.handleRender.notifyGuideEmpty()
      throw new Error('节点缺失，请确认步骤是否完成')
    }
    // 监听滚动事件，重新触发
    this.nodeType = NodeTypeEnum.GUIDE
    this.guide = guide
    this.stepIdx = stepIdx
    if (!this.inListenScroll) {
      this.inListenScroll = true
      document.body.addEventListener('scroll', this.nodeScrollEvent.bind(this), true)
    }
  }

  /**
   * 改变当前操作手册的步骤
   * @param stepIdx
   */
  public manualChangeStep(stepIdx: number): RenderManualNode {
    this.stepIdx = stepIdx
    // this.getRenderManualNode(this.manual as ManualNode, this.stepIdx)
    return HandleDataService.handleManualData(this.manual as ManualNode, stepIdx)
  }

  /**
   * 改变当前用户引导的步骤
   * @param stepIdx
   */
  public async guideChangeStep(stepIdx: number): Promise<void> {
    this.stepIdx = stepIdx
    await this.getRenderGuideNode(this.guide as GuideNode, this.stepIdx)
    // return this.handleDataService.handleGuideData(this.guide as GuideNode, stepIdx)
  }

  /**
   * 监听所有滚动事件，重新渲染弹窗，（弹窗内的滚动除外）
   * @param event
   */
  public nodeScrollEvent(event: Event): void {
    const elem = event.target as HTMLElement
    if (elem.className.split(' ').includes(HandleConfig.__renderModalClassName)) {
      return
    }
    if (this.throttleTimer === undefined) {
      this.throttleTimer = window.setTimeout(() => {
        const nodeType = (readCache('nodeType') as unknown) as NodeTypeEnum
        if (nodeType) {
          if (nodeType === NodeTypeEnum.MANUAL && this.manual) {
            this.getRenderManualNode(this.manual, this.stepIdx, this.renderManualCallback, true)
          } else if (nodeType === NodeTypeEnum.GUIDE && this.guide) {
            this.getRenderGuideNode(this.guide, this.stepIdx, this.renderGuideCallback)
          } else if (this.nodes && this.nodes.length) {
            this.getBaseRenderNode(nodeType, this.nodes, this.renderNodeCallback)
          }
        }
        clearTimeout(this.throttleTimer)
        this.throttleTimer = undefined
      }, 200)
    }
  }

  /**
   * 暂停滚动事件处理函数
   */
  public destroyScrollEvent(): void {
    // console.trace('destroyScrollEvent')
    this.nodeType = undefined
    this.nodes = []
    this.manual = undefined
  }
}
