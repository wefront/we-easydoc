import { NodeTypeEnum, RenderNode } from '../../../types'
import createVueView from '../../utils/createVueView'
import Doc from '../../views/render/doc.vue'
import HandleConfig from '../../config/handle'
export default abstract class NodesRenderBase {
  public type: NodeTypeEnum

  public nodes: RenderNode[]

  public renderId: number

  public container: HTMLElement

  constructor(type: NodeTypeEnum, nodes: RenderNode[]) {
    this.type = type
    this.nodes = nodes
    this.renderId = NodesRenderBase.mark()
    this.container = this.createContainer()
  }

  /**
   * 创建renderId的规则
   *
   * @returns {Number}
   * @memberof NodesRenderBase
   */
  static mark(): number {
    return Date.now()
  }

  /**
   * 循环render node
   *
   * @memberof NodesRenderBase
   */
  poolRenderNodes(): void {
    const { nodes } = this
    this.container.appendChild(
      createVueView(Doc, {
        nodes,
        renderModalClassName: HandleConfig.__renderModalClassName,
      }),
    )
    document.body.appendChild(this.container)
  }

  /**
   * 创建containerId规则
   *
   * @returns {string}
   * @memberof NodesRenderBase
   */
  getContainerId(): string {
    return this.type + String(this.renderId)
  }

  render(): void {
    // 开始node组
    this.poolRenderNodes()
  }

  /**
   * 创建container div
   *
   * @returns {HTMLElement}
   * @memberof NodesRenderBase
   */
  createContainer(): HTMLElement {
    const container = document.createElement('div')
    container.id = this.getContainerId()
    return container
  }

  destroyDom(): void {
    this.container.parentElement?.removeChild(this.container)
  }

  abstract destroy(): void
}
