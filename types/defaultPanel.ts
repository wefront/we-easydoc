import { BaseNodeData, NodeTypeEnum } from './index'

export interface PanelEventInterface {
  updateJsonData(jsonData: BaseNodeData): void
  bindEvent(): void
  getContainerDom(): HTMLElement | null
  getTagDom(): HTMLElement | null
  tagHidePanel(): void
  tagShowPanel(): void
  destroyPanel(): void
  cancelActiveType(nodeType?: NodeTypeEnum): void
  restPanelMenu(jsonData: BaseNodeData): void
  renderManualModule(): void
}

export interface BtnActionInterface {
  target: HTMLElement
  id: string
}
