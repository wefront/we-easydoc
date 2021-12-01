import { DocNode, Node, NodeDirectionEnum, RenderDocNode } from '../../../types'
import {
  getStringLength,
  computedZIndex,
  modalInBottomLeft,
  modalInBottomRight,
  modalInDefaultCenter,
  modalInLeftBottom,
  modalInLeftTop,
  modalInRightBottom,
  modalInRightTop,
  modalInTopLeft,
  modalInTopRight,
  querySelector,
  modalInRightCenter,
  modalInBottomCenter,
  modalInLeftCenter,
  modalInTopCenter,
} from '../../utils'
import EasyDocFactory from '../../EasyDocFactory'

export default class HandleDoc {
  private nodes: DocNode[] = []

  private MIN_CHAR_LENGTH = 20

  private MAX_CHAR_LENGTH = 400

  /**
   * 获取渲染nodes节点
   * @param nodes
   */
  public getRenderNodes(nodes: Node[]): RenderDocNode[] {
    this.nodes = nodes as DocNode[]
    return this.getNodeDomLocation()
  }

  /**
   * 获取dom节点的x y width height
   */
  private getNodeDomLocation(): RenderDocNode[] {
    const renderDocNodes: RenderDocNode[] = []
    this.nodes.forEach((node) => {
      const elems: HTMLElement[] = querySelector(node.docId)
      if (elems.length) {
        if (node.noUnique !== true) {
          elems.length = 1
        }
        elems.forEach((elem) => {
          const domRect: DOMRect = elem.getClientRects()[0]
          if (domRect) {
            renderDocNodes.push({
              renderId: `${renderDocNodes.length + 1}`,
              zIndex: node.zIndex === undefined ? computedZIndex(elem) : node.zIndex,
              ...node,
              x: 0,
              y: 0,
              width: node.width || 0,
              height: node.height || 0,
              dom: elem,
              direction: node.direction || NodeDirectionEnum.DEFAULT,
              domLocation: {
                x: domRect.x + document.documentElement.scrollLeft,
                y: domRect.y + document.documentElement.scrollTop,
                width: domRect.width,
                height: domRect.height,
              },
            })
          }
        })
      }
    })
    return this.generateRenderNode(renderDocNodes)
  }

  /**
   * 生成弹窗节点x y width height
   * @param renderDocNodes
   */
  private generateRenderNode(renderDocNodes: RenderDocNode[]): RenderDocNode[] {
    renderDocNodes.forEach((node) => {
      node.width = node.width || this.generateWidth(node.description)
      node.height = node.height || this.generateHeight(node.description)
      HandleDoc.generateLocation(node, renderDocNodes)
    })
    return renderDocNodes
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
    if (len <= 20) {
      return 70
    }
    if (len <= 40) {
      return 90
    }
    if (len <= 70) {
      return 110
    }
    if (len <= 96) {
      return 130
    }
    if (len >= this.MAX_CHAR_LENGTH) {
      return EasyDocFactory.maxHeight
    }
    return (
      24 +
      EasyDocFactory.minHeight +
      ((len - this.MIN_CHAR_LENGTH) / (this.MAX_CHAR_LENGTH - this.MIN_CHAR_LENGTH)) *
        (EasyDocFactory.maxHeight - EasyDocFactory.minHeight)
    )
  }

  /**
   * 生成弹窗的x y位置
   * @param node
   */
  private static generateLocation(node: RenderDocNode, nodes: RenderDocNode[]) {
    // 用户自定义方位优先
    const fnObj = {
      RC: modalInRightCenter,
      RB: modalInRightBottom,
      BC: modalInBottomCenter,
      BR: modalInBottomRight,
      BL: modalInBottomLeft,
      LC: modalInLeftCenter,
      LB: modalInLeftBottom,
      RT: modalInRightTop,
      LT: modalInLeftTop,
      TC: modalInTopCenter,
      TR: modalInTopRight,
      TL: modalInTopLeft,
    }
    if (fnObj[node.direction] && fnObj[node.direction](node, nodes)) {
      return
    }
    const generateLocationStrategies = [
      modalInRightCenter,
      modalInRightBottom,
      modalInBottomCenter,
      modalInBottomRight,
      modalInBottomLeft,
      modalInLeftCenter,
      modalInLeftBottom,
      modalInRightTop,
      modalInLeftTop,
      modalInTopCenter,
      modalInTopRight,
      modalInTopLeft,
      modalInDefaultCenter,
    ]
    let i = 0
    while (!generateLocationStrategies[i++](node, nodes));
  }
}
