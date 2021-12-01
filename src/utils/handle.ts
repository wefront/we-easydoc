/* eslint-disable import/no-cycle */
import HandleConfig from '../config/handle'
import {NodeDirectionEnum, RenderDocNode} from '../../types'

/**
 * 获取字符串长度，英文或数字长度1，汉字长度2
 * @param str
 */
export function getStringLength(str: string): number {
  if (!str || str.length === 0) {
    return 0
  }
  let len = 0
  for (let i = 0; i < str.length; i++) {
    const a = str.charAt(i)
    // eslint-disable-next-line no-control-regex
    if (a.match(/[^\x00-\xff]/gi) != null) {
      len += 2
    } else {
      len += 1
    }
  }
  return len
}

export function computedZIndex(elem: HTMLElement, zIndex = 0): number {
  if (document.body === elem) {
    return zIndex
  }
  const style = window.getComputedStyle(elem)
  if (style.position !== 'static' && style.zIndex !== 'auto') {
    const newZIndex: number = parseInt(style.zIndex, 10)
    if (newZIndex > zIndex) {
      zIndex = newZIndex
    }
  }
  return computedZIndex(elem.parentElement as HTMLElement, zIndex)
}

/**
 * 此处是否有同一dom的弹窗已经存在
 * @param node
 * @param nodes
 * @param direction
 */
function hereHasNode(node: any, nodes: any, direction: NodeDirectionEnum) {
  return nodes.some((item: any) => item.docId === node.docId
    && direction === item.direction
    && item.domLocation.x === node.domLocation.x
    && item.domLocation.y === node.domLocation.y
    && node.renderId > item.renderId)
}

function canRight(node: any) {
  return node.domLocation.x + node.domLocation.width + node.width < window.innerWidth - HandleConfig.__windowInterval
}

/**
 * 能否在dom右上角弹窗
 * @param node
 */
export function modalInRightTop(node: any, nodes: any): boolean {
  if (hereHasNode(node, nodes, NodeDirectionEnum.RT)) return false
  if (canRight(node) && node.domLocation.y + node.height < document.body.clientHeight - HandleConfig.__windowInterval) {
    node.x = node.domLocation.x + node.domLocation.width
    node.y = node.domLocation.y
    node.direction = NodeDirectionEnum.RT
    return true
  }
  return false
}

/**
 * 能否在dom右下角弹窗
 * @param node
 */
export function modalInRightBottom(node: any, nodes: any) {
  if (hereHasNode(node, nodes, NodeDirectionEnum.RB)) return false
  if (canRight(node) && node.domLocation.y + node.domLocation.height - node.height > HandleConfig.__windowInterval) {
    node.x = node.domLocation.x + node.domLocation.width
    node.y = node.domLocation.y + node.domLocation.height - node.height
    node.direction = NodeDirectionEnum.RB
    return true
  }
  return false
}

/**
 * 能否在dom右中间弹窗
 * @param node
 */
export function modalInRightCenter(node: any, nodes: any) {
  if (hereHasNode(node, nodes, NodeDirectionEnum.RC)) return false
  if (canRight(node)) {
    const yCenter = node.domLocation.y + node.domLocation.height / 2
    const yTop = yCenter - node.height / 2
    const yBottom = yCenter + node.height / 2
    if (yTop > HandleConfig.__windowInterval && yBottom < document.body.clientHeight - HandleConfig.__windowInterval) {
      node.x = node.domLocation.x + node.domLocation.width
      node.y = yTop
      node.direction = NodeDirectionEnum.RC
      return true
    }
    return false
  }
  return false
}

function canLeft(node: any) {
  return node.domLocation.x - node.width > HandleConfig.__windowInterval
}

/**
 * 能否在dom左上角弹窗
 * @param node
 */
export function modalInLeftTop(node: any, nodes: any) {
  if (hereHasNode(node, nodes, NodeDirectionEnum.LT)) return false
  if (canLeft(node) && node.domLocation.y + node.height < document.body.clientHeight - HandleConfig.__windowInterval) {
    node.x = node.domLocation.x - node.width
    node.y = node.domLocation.y
    node.direction = NodeDirectionEnum.LT
    return true
  }
}

/**
 * 能否在dom左下角弹窗
 * @param node
 */
export function modalInLeftBottom(node: any, nodes: any) {
  if (hereHasNode(node, nodes, NodeDirectionEnum.LB)) return false
  if (canLeft(node) && node.domLocation.y + node.domLocation.height - node.height > HandleConfig.__windowInterval) {
    node.x = node.domLocation.x - node.width
    node.y = node.domLocation.y + node.domLocation.height - node.height
    node.direction = NodeDirectionEnum.LB
    return true
  }
  return false
}

/**
 * 能否在dom左中间弹窗
 * @param node
 */
export function modalInLeftCenter(node: any, nodes: any) {
  if (hereHasNode(node, nodes, NodeDirectionEnum.LC)) return false
  if (canLeft(node)) {
    const yCenter = node.domLocation.y + node.domLocation.height / 2
    const yTop = yCenter - node.height / 2
    const yBottom = yCenter + node.height / 2
    if (yTop > HandleConfig.__windowInterval && yBottom < document.body.clientHeight - HandleConfig.__windowInterval) {
      node.x = node.domLocation.x - node.width
      node.y = yTop
      node.direction = NodeDirectionEnum.LC
      return true
    }
    return false
  }
  return false
}

function canTop(node: any) {
  return node.domLocation.y - node.height > HandleConfig.__windowInterval
}

/**
 * 能否在dom上左角弹窗
 * @param node
 */
export function modalInTopLeft(node: any, nodes: any) {
  if (hereHasNode(node, nodes, NodeDirectionEnum.TL)) return false
  if (canTop(node) && node.domLocation.x + node.width < window.innerWidth - HandleConfig.__windowInterval) {
    node.x = node.domLocation.x
    node.y = node.domLocation.y - node.height
    node.direction = NodeDirectionEnum.TL
    return true
  }
  return false
}

/**
 * 能否在dom上右角弹窗
 * @param node
 */
export function modalInTopRight(node: any, nodes: any) {
  if (hereHasNode(node, nodes, NodeDirectionEnum.TR)) return false
  if (canTop(node) && node.domLocation.x + node.domLocation.width - node.width > HandleConfig.__windowInterval) {
    node.x = node.domLocation.x + node.domLocation.width - node.width
    node.y = node.domLocation.y - node.height
    node.direction = NodeDirectionEnum.TR
    return true
  }
  return false
}

/**
 * 能否在dom上中间弹窗
 * @param node
 */
export function modalInTopCenter(node: any, nodes: any) {
  if (hereHasNode(node, nodes, NodeDirectionEnum.TC)) return false
  if (canTop(node)) {
    const xCenter = node.domLocation.x + node.domLocation.width / 2
    const xLeft = xCenter - node.width / 2
    const xRight = xCenter + node.width / 2
    if (xLeft > HandleConfig.__windowInterval && xRight < window.innerWidth - HandleConfig.__windowInterval) {
      node.x = xLeft
      node.y = node.domLocation.y - node.height
      node.direction = NodeDirectionEnum.TC
      return true
    }
    return false
  }
  return false
}

function canBottom(node: any) {
  return node.domLocation.y + node.domLocation.height + node.height < document.body.clientHeight - HandleConfig.__windowInterval
}

/**
 * 能否在dom下左角弹窗
 * @param node
 */
export function modalInBottomLeft(node: any, nodes: any) {
  if (hereHasNode(node, nodes, NodeDirectionEnum.BL)) return false
  if (canBottom(node) && node.domLocation.x + node.width < window.innerWidth - HandleConfig.__windowInterval) {
    node.x = node.domLocation.x
    node.y = node.domLocation.y + node.domLocation.height
    node.direction = NodeDirectionEnum.BL
    return true
  }
  return false
}

/**
 * 能否在dom下右角弹窗
 * @param node
 */
export function modalInBottomRight(node: any, nodes: any) {
  if (hereHasNode(node, nodes, NodeDirectionEnum.BR)) return false
  if (canBottom(node) && node.domLocation.x + node.domLocation.width - node.width > HandleConfig.__windowInterval) {
    node.x = node.domLocation.x + node.domLocation.width - node.width
    node.y = node.domLocation.y + node.domLocation.height
    node.direction = NodeDirectionEnum.BR
    return true
  }
  return false
}

/**
 * 能否在dom下中间弹窗
 * @param node
 */
export function modalInBottomCenter(node: any, nodes: any) {
  if (hereHasNode(node, nodes, NodeDirectionEnum.BC)) return false
  if (canBottom(node)) {
    const xCenter = node.domLocation.x + node.domLocation.width / 2
    const xLeft = xCenter - node.width / 2
    const xRight = xCenter + node.width / 2
    if (xLeft > HandleConfig.__windowInterval && xRight < document.body.clientHeight - HandleConfig.__windowInterval) {
      node.x = xLeft
      node.y = node.domLocation.y + node.domLocation.height
      node.direction = NodeDirectionEnum.BC
      return true
    }
    return false
  }
  return false
}

/**
 * 默认渲染位置
 * @param node
 */
export function modalInDefaultCenter(node: any) {
  node.x = node.domLocation.x + node.domLocation.width / 2
  node.y = node.domLocation.y + node.domLocation.height / 2
  node.direction = NodeDirectionEnum.DEFAULT
  return true
}

/**
 * 判断当前a元素是否在某个class的后代元素中
 */
export function hrefAIsClassChild(hrefA: Element, className: string): boolean {
  let wrapper:Element = hrefA
  while (wrapper !== document.body) {
    if (wrapper.className && wrapper.className.indexOf(className) !== -1) {
      return true
    }
    wrapper = wrapper.parentElement as Element
  }
  return false
}
