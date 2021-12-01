import { DocNodeStatus, RenderDocNode } from '../../../../types'

export default class DocStatus {
  public docStatusMap: Map<string, DocNodeStatus>

  constructor() {
    this.docStatusMap = new Map()
  }

  private getKey(node: RenderDocNode) {
    return node.docId + node.renderId
  }

  setDocStatus(node: RenderDocNode, status: DocNodeStatus) {
    this.docStatusMap.set(this.getKey(node), status)
  }

  getDocStatus(node: RenderDocNode) {
    return this.docStatusMap.get(this.getKey(node))
  }
}
