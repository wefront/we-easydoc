import { NodeTypeEnum, RenderDocNode } from '../../../types'
import BaseRender from './BaseRender'

export default class DocRender extends BaseRender {
  constructor(type: NodeTypeEnum.DOC, nodes: RenderDocNode[]) {
    super(type, nodes)
    // 开始渲染节点
    this.render()
  }

  destroy(): void {
    this.destroyDom()
  }
}
