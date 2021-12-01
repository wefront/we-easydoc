import { NodeLocation, NodeDirectionEnum } from '../../types'
/**
 * 根据docId查询具体的dom节点
 * @param docId
 */
export function querySelector(docId: string): HTMLElement[] {
  const arr1: NodeListOf<HTMLElement> = document.querySelectorAll(`[docId~=${docId}]`)
  const arr2: NodeListOf<HTMLElement> = document.querySelectorAll(`[doc-id~=${docId}]`)
  const arr3: NodeListOf<HTMLElement> = document.querySelectorAll(`[docid~=${docId}]`)
  const arr4: NodeListOf<HTMLElement> = document.querySelectorAll(`[data-docId~=${docId}]`)
  const arr5: NodeListOf<HTMLElement> = document.querySelectorAll(`[data-doc-id~=${docId}]`)
  const arr6: NodeListOf<HTMLElement> = document.querySelectorAll(`[data-docid~=${docId}]`)
  const result: HTMLElement[] = []
  arr1.forEach((item) => result.push(item))
  arr2.forEach((item) => result.push(item))
  arr3.forEach((item) => result.push(item))
  arr4.forEach((item) => result.push(item))
  arr5.forEach((item) => result.push(item))
  arr6.forEach((item) => result.push(item))
  return result
}

export function getFirstLocation(direction: NodeDirectionEnum): string {
  const f = direction[0]
  return f
}
export function getSecondLocation(direction: NodeDirectionEnum): string {
  const f = direction[1]
  return f
}
/**
 * dom设置定位
 *
 * @export
 * @param {NodeLocation} location
 * @param {HTMLElement} dom
 */
export function setDomLocation(location: NodeLocation, dom: HTMLElement | null): object {
  const l: string = getFirstLocation(location.direction)
  let { x, y } = location
  const { width, height, zIndex } = location

  switch (l) {
    case 'T':
      y -= 12
      break
    case 'B':
      y += 12
      break
    case 'R':
      x += 12
      break
    case 'L':
      x -= 12
      break
    default:
      break
  }
  const style = {
    position: 'absolute',
    top: `${y}px`,
    left: `${x}px`,
    width: `${width}px`,
    height: `${height}px`,
    zIndex: String(zIndex),
  }
  if (dom) {
    dom.style.position = style.position
    dom.style.top = style.top
    dom.style.left = style.left
    dom.style.width = style.width
    dom.style.height = style.height
    dom.style.zIndex = style.zIndex
  }
  return style
}
