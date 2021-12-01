import { NodeTypeEnum, RenderPageNode } from '../../../types'
import BaseRender from './BaseRender'
import HandleConfig from '../../config/handle'
import createVueView from '../../utils/createVueView'
import Page from '../../views/render/page.vue'
export default class PageRender extends BaseRender {
  constructor(type: NodeTypeEnum.PAGE | NodeTypeEnum.PROJECT, nodes: RenderPageNode[]) {
    super(type, nodes)
    this.renderPage()
  }

  /**
   * 渲染外部框
   *
   * @memberof PageRender
   */
  renderPage(): void {
    this.container.appendChild(
      createVueView(Page, {
        nodes: this.nodes,
        renderModalClassName: HandleConfig.__renderModalClassName,
      }),
    )
    document.body.appendChild(this.container)
  }

  destroy(): void {
    this.destroyDom()
  }
}
