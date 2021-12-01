import { EditNode, Node, NodeDirectionEnum, RenderEditNode } from '../../../types'
import {
  computedZIndex,
  modalInBottomCenter,
  modalInBottomLeft,
  modalInBottomRight,
  modalInDefaultCenter,
  modalInLeftBottom,
  modalInLeftCenter,
  modalInLeftTop,
  modalInRightBottom,
  modalInRightCenter,
  modalInRightTop,
  modalInTopCenter,
  modalInTopLeft,
  modalInTopRight,
  querySelector,
} from '../../utils'
import EasyDocFactory from '../../EasyDocFactory'

export default class HandleEdit {
  private nodes: EditNode[] = []

  /**
   * 获取渲染nodes节点
   * @param nodes
   */
  public getRenderNodes(nodes: Node[]): RenderEditNode[] {
    this.nodes = nodes as EditNode[]
    return this.getNodeDomLocation()
  }

  /**
   * 获取dom节点的x y width height
   */
  private getNodeDomLocation(): RenderEditNode[] {
    const renderEditNodes: RenderEditNode[] = []
    this.nodes.forEach((node) => {
      const elems: HTMLElement[] = querySelector(node.docId)
      if (elems.length) {
        if (node.noUnique !== true) {
          elems.length = 1
        }
        elems.forEach((elem) => {
          const domRect: DOMRect = elem.getClientRects()[0]
          if (domRect) {
            renderEditNodes.push({
              renderId: `${renderEditNodes.length + 1}`,
              zIndex: node.zIndex === undefined ? computedZIndex(elem) : node.zIndex,
              ...node,
              x: 0,
              y: 0,
              width: node.width || 0,
              height: node.height || 0,
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
    return HandleEdit.generateRenderNode(renderEditNodes)
  }

  /**
   * 生成弹窗节点x y width height
   * @param renderEditNodes
   */
  private static generateRenderNode(renderEditNodes: RenderEditNode[]): RenderEditNode[] {
    renderEditNodes.forEach((node) => {
      node.width = node.width || EasyDocFactory.editWidth
      node.height = node.height || EasyDocFactory.editHeight
      HandleEdit.generateLocation(node, renderEditNodes)
    })
    return renderEditNodes
  }

  /**
   * 生成弹窗的x y位置
   * @param node
   */
  private static generateLocation(node: RenderEditNode, nodes: RenderEditNode[]) {
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
