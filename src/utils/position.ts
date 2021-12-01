import { NodeDirectionEnum } from '../../types'

export function getF(direction: NodeDirectionEnum): string {
  const f = direction[0]
  return f
}
export function getS(direction: NodeDirectionEnum): string {
  const f = direction[1]
  return f
}

type AbsolutePosition = {
  top: number | string
  left: number | string
}

type PositionMap = {
  [direction in NodeDirectionEnum]?: AbsolutePosition
}

/**
 * 设置位置
 *
 * @export
 * @param {NodeDirectionEnum} direction
 * @param {PositionMap} positionMap
 * @returns {AbsolutePosition}
 */
export function setPosition(direction: NodeDirectionEnum, positionMap: PositionMap): AbsolutePosition {
  return positionMap[direction] || { top: 0, left: 0 }
}
