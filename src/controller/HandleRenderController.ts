import { NodeTypeEnum, RenderNode, RenderManualNode, RenderGuideNode, ManualsList } from '../../types'
import RenderService from '../services/RenderService'
import DocStatus from '../model/render/helper/DocStatus'

export default class HandleRenderController {
  public type: NodeTypeEnum | null = null

  public nodes: RenderNode[] = []

  public renderServiceIns: RenderService | null = null

  public docStatusIns: DocStatus

  constructor() {
    this.docStatusIns = new DocStatus()
  }

  /**
   * 开始渲染
   * @memberof HandleRenderController
   */
  public render(type: NodeTypeEnum, nodes: RenderNode[]): void {
    if (!type) {
      throw new Error('缺少type参数')
    }
    if (!nodes) {
      throw new Error('缺少nodes参数')
    }
    this.destroy()
    this.type = type
    this.nodes = nodes
    this.renderServiceIns = new RenderService(this.type, this.nodes)
  }

  /**
   * 开始渲染
   * @param manuals 热门列表数据
   */
  // public renderManualsCatalogues(manuals: ManualsList): void {
  //   if (this.renderServiceIns) this.destroy()
  //   this.renderServiceIns = new ManualCataloguesRender(manuals)
  // }

  public renderManual(renderManualNode: RenderManualNode, stepIdx: number, scrollRepaint: boolean): void {
    if (!renderManualNode) {
      throw new Error('缺少renderManualNode参数')
    }
    if (stepIdx === undefined) {
      throw new Error('缺少stepIdx参数')
    }
    // manual 是否为滚动重绘
    // 否，则重新渲染面板和doc
    // 是，则只重新渲染doc
    if (!scrollRepaint) {
      this.destroy()
      this.type = NodeTypeEnum.MANUAL
      this.nodes = [renderManualNode]
      this.renderServiceIns = new RenderService(this.type, this.nodes, stepIdx)
    } else {
      this.nodes = [renderManualNode]
      const renderServceIns = this.renderServiceIns as RenderService
      renderServceIns.manualRepainDoc(renderManualNode)
    }
  }

  public renderGuide(renderGuideNode: RenderGuideNode, stepIdx: number): void {
    if (!renderGuideNode) {
      throw new Error('缺少renderGuideNode参数')
    }
    if (stepIdx === undefined) {
      throw new Error('缺少stepIdx参数')
    }
    this.destroy()
    this.type = NodeTypeEnum.GUIDE
    this.nodes = [renderGuideNode]
    this.renderServiceIns = new RenderService(this.type, this.nodes, stepIdx)
  }

  public notifyGuideEmpty(): void {
    if (this.renderServiceIns) {
      const renderServiceIns = this.renderServiceIns as RenderService
      renderServiceIns.notifyGuideEmpty()
    } else {
      console.error('用户引导当前步骤找不到节点')
    }
  }

  public destroy(): void {
    this.renderServiceIns?.destroy()
  }
}
