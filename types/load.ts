import {DocNode, EditNode, ManualNode, PageNode, ProjectNode} from './base'
import HandleUIService from '../src/services/HandleUIService'
/**
 * @description xxx.json url对应doc+page单个文件对象
 */
export interface BaseNodeData {
  pages?: PageNode[]
  docs?: DocNode[]
  edits?: EditNode[]
  // manuals?: ManualsList
  // guides?: GuideNode[]
}
// json缓存列表
export type BaseNodeDataList = BaseNodeData[]

/**
 * @description manuals.json 操作手册内容
 */
export type ManualsList = ManualNode[]
export type ProjectList = ProjectNode[]

export interface panelTypesData extends BaseNodeData {
  projects?: ProjectList
  manuals?: ManualsList
}

/**
 * @description easyDoc.json url映射具体数据对象格式
 */
export interface JSONMapObject {
  match: string
  jsonFile: string
}

export type JSONMapList = JSONMapObject[]

export interface HandleUIControllerInterface {
  HandleUIService: HandleUIService
  renderGuide(dom: HTMLElement): Promise<void>
}
