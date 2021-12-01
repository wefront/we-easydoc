import { NodeTypeEnum, RenderManualNode, RenderManualStep } from '../../../types'
import DocRender from './DocRender'
import EasyDocFactory from '../../EasyDocFactory'

export default class ManualRender {
  // private stepContainer: HTMLElement

  private steps!: RenderManualStep[]

  private stepIdx!: number

  // public manualBinder: ManualBinder

  private docRender: DocRender

  constructor(type: NodeTypeEnum.MANUAL, nodes: RenderManualNode[], stepIdx: number) {
    this.initModel(nodes[0] as RenderManualNode, stepIdx)
    this.docRender = new DocRender(NodeTypeEnum.DOC, this.steps[stepIdx].nodes)
  }

  /**
   * 初始化数据
   *
   * @param {RenderManualNode} node
   * @param {number} stepIdx
   * @memberof ManualRender
   */
  initModel(node: RenderManualNode, stepIdx: number): void {
    this.steps = node.steps
    this.stepIdx = stepIdx
  }

  /**
   * 重新渲染DOC
   *
   * @memberof ManualRender
   */
  reRenderDoc(node: RenderManualNode, currentStepIdx?: number): void {
    if (currentStepIdx !== undefined) {
      this.initModel(node, currentStepIdx)
    } else {
      this.initModel(node, this.stepIdx)
    }
    this.docRender.destroy()
    if (this.stepIdx === -1) return
    this.docRender = new DocRender(NodeTypeEnum.DOC, this.steps[this.stepIdx].nodes)
  }

  /**
   * 销毁
   *
   * @memberof ManualRender
   */
  destroy(): void {
    // 销毁doc以及事件
    this.docRender.destroy()
    // this.manualBinder.destroy()
    EasyDocFactory.handleData.destroyScrollEvent()
  }
}
