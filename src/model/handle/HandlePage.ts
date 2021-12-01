import { Node, NodeDirectionEnum, PageNode, RenderPageNode } from '../../../types'
import EasyDocFactory from '../../EasyDocFactory'
import { getStringLength } from '../../utils'

export default class HandlePage {
  private nodes: PageNode[] = []

  private MIN_CHAR_LENGTH = 100

  private MAX_CHAR_LENGTH = 2000

  /**
   * 获取渲染nodes节点
   * @param nodes
   */
  public getRenderNodes(nodes: Node[]): RenderPageNode[] {
    this.nodes = nodes as PageNode[]
    return this.getNodeDomLocation()
  }

  /**
   * 获取dom节点的x y width height
   */
  private getNodeDomLocation(): RenderPageNode[] {
    const renderPageNodes: RenderPageNode[] = []
    this.nodes.forEach((node) => {
      renderPageNodes.push({
        name: node.name,
        renderId: `${renderPageNodes.length + 1}`,
        zIndex: 999999,
        ...node,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        direction: NodeDirectionEnum.CENTER,
      })
    })
    return this.generateNodeLocation(renderPageNodes)
  }

  /**
   * 生成弹窗节点x y width height
   * @param renderDocNodes
   */
  private generateNodeLocation(renderPageNodes: RenderPageNode[]): RenderPageNode[] {
    renderPageNodes.forEach((node, idx) => {
      node.width = this.generateWidth(node.description) + 100
      node.height = this.generateHeight(node.description) + 100
      node.x = 0
      node.y = 0
    })
    return renderPageNodes
  }

  private generateWidth(description: string): number {
    const len = getStringLength(description)
    if (len <= this.MIN_CHAR_LENGTH) {
      return EasyDocFactory.minWidth
    }
    if (len >= this.MAX_CHAR_LENGTH) {
      return EasyDocFactory.maxWidth
    }
    return (
      EasyDocFactory.minWidth +
      ((len - this.MIN_CHAR_LENGTH) / (this.MAX_CHAR_LENGTH - this.MIN_CHAR_LENGTH)) *
        (EasyDocFactory.maxWidth - EasyDocFactory.minWidth)
    )
  }

  private generateHeight(description: string): number {
    const len = getStringLength(description)
    if (len <= this.MIN_CHAR_LENGTH) {
      return EasyDocFactory.minHeight
    }
    if (len >= this.MAX_CHAR_LENGTH) {
      return EasyDocFactory.maxHeight
    }
    return (
      EasyDocFactory.minWidth +
      ((len - this.MIN_CHAR_LENGTH) / (this.MAX_CHAR_LENGTH - this.MIN_CHAR_LENGTH)) *
        (EasyDocFactory.maxHeight - EasyDocFactory.minHeight)
    )
  }
}
