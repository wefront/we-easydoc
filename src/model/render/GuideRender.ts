import { NodeTypeEnum, RenderGuideNode, RenderGuideStep } from '../../../types'
import { writeCurrentStepCache } from '../../utils'
import EasyDocFactory from '../../EasyDocFactory'
import createVueView from '../../utils/createVueView'
import Guide from '../../views/render/guide.vue'
import HandleConfig from '../../config/handle'

export default class GuideRender {
  private stepIdx!: number

  private steps!: RenderGuideStep[]

  // public guideBinder!: GuideBinder

  private guideContainer: HTMLElement

  // private nodeIns!: StepNode

  constructor(type: NodeTypeEnum.GUIDE, nodes: RenderGuideNode[], stepIdx: number) {
    // 缓存当前步骤
    writeCurrentStepCache(stepIdx)
    this.initModel(nodes[0] as RenderGuideNode, stepIdx)
    // 生成引导内容
    this.guideContainer = document.createElement('div')
    // 渲染node
    this.renderStep()
  }

  initModel(node: RenderGuideNode, stepIdx: number): void {
    this.steps = node.steps
    this.stepIdx = stepIdx
  }

  getCurrentStep(): RenderGuideStep {
    const { stepIdx, steps } = this
    const { node, prev, next } = steps[stepIdx]
    const MIN_ZINDEX = 999
    if (node.zIndex < MIN_ZINDEX) node.zIndex = MIN_ZINDEX
    return { node, prev, next }
  }

  renderStep(): void {
    const { stepIdx, steps } = this
    const { node, ...option } = this.getCurrentStep()
    this.guideContainer = createVueView(Guide, {
      node,
      stepIdx,
      stepConfig: option,
      stepsLength: steps.length,
      showGuideMask: EasyDocFactory.showGuideMask,
      renderModalClassName: HandleConfig.__renderModalClassName,
      guideIns: this,
    })
    document.body.appendChild(this.guideContainer)
  }

  async goNext(): Promise<void> {
    const stepIdx = this.stepIdx + 1
    await GuideRender.dump(stepIdx)
  }

  async goPre(): Promise<void> {
    const stepIdx = this.stepIdx - 1
    await GuideRender.dump(stepIdx)
  }

  static async dump(stepIdx: number): Promise<void> {
    await EasyDocFactory.handleData.guideChangeStep(stepIdx)
  }

  emptyError(): void {
    console.log('error')
  }

  destroy(): void {
    this.guideContainer.parentElement?.removeChild(this.guideContainer)
    EasyDocFactory.handleData.destroyScrollEvent()
  }
}
