/**
 * @description 事件类型
 */
export enum EventEnum {
  CLICK = 'click', // 点击
}

export interface EventFunctions {
  [eventType: string]: EventListener
}

export interface EventListenerMap {
  [target: string]: EventFunctions
}

// export { EventEnum, EventListenerMap }
