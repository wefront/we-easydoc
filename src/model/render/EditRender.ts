import { NodeTypeEnum, RenderEditNode } from '../../../types'
import BaseRender from './BaseRender'

export default class EditRender extends BaseRender {
  constructor(type: NodeTypeEnum.EDIT, nodes: RenderEditNode[]) {
    super(type, nodes)
    this.render()
  }

  destroy(): void {
    this.destroyDom()
  }
}
