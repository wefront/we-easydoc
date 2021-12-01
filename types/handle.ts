import {
  DocNode,
  EditNode,
  GuideNode,
  ManualNode,
  Node,
  NodeTypeEnum,
  PageNode,
  GuideStepConfig,
  ProjectNode
} from './base'
import HandleDoc from '../src/model/handle/HandleDoc'
import HandlePage from '../src/model/handle/HandlePage'
import HandleEdit from '../src/model/handle/HandleEdit'
import HandleManual from '../src/model/handle/HandleManual'
import HandleGuide from '../src/model/handle/HandleGuide'
import HandleDataService from '../src/services/HandleDataService'
import HandleProject from "../src/model/handle/HandleProject";

export enum NodeDirectionEnum {
  DEFAULT = 'DEFAULT', // 初始化，无意义
  TL = 'TL', // 箭头在弹窗的top-right方位
  TR = 'TR',
  TC = 'TC',
  RT = 'RT',
  RB = 'RB',
  RC = 'RC',
  BL = 'BL',
  BR = 'BR',
  BC = 'BC',
  LT = 'LT',
  LB = 'LB',
  LC = 'LC',
  CENTER = 'CENTER', // 页面中央，没有三角箭头
}

/**
 * @description dom节点的位置信息
 */
export interface DomNodeLocation {
  x: number
  y: number
  width: number
  height: number
}

/**
 * @description 节点的位置信息
 */
export interface NodeLocation extends DomNodeLocation {
  zIndex: number
  direction: NodeDirectionEnum
}

export interface RenderNodeBase {
  renderId: string
}

/**
 * @description 页面说明 渲染类型节点
 */
export interface RenderPageNode extends RenderNodeBase, PageNode, NodeLocation {}

/**
 * @description 项目说明 渲染类型节点
 */
export interface RenderProjectNode extends RenderNodeBase, ProjectNode, NodeLocation {}

/**
 * @description 原型图说明 渲染类型节点
 */
export interface RenderDocNode extends RenderNodeBase, DocNode, NodeLocation {
  width: number
  height: number
  dom: HTMLElement
  domLocation: DomNodeLocation
  direction: NodeDirectionEnum
  zIndex: number
}

/**
 * @description 跳转后台编辑 渲染类型节点
 */
export interface RenderEditNode extends RenderNodeBase, EditNode, NodeLocation {
  width: number
  height: number
  domLocation: DomNodeLocation
  direction: NodeDirectionEnum
  zIndex: number
}

export interface RenderManualStep {
  description: string
  url?: string
  nodes: RenderDocNode[]
  linkManualName?: string
}

/**
 * @description 操作手册 渲染类型节点
 */
export interface RenderManualNode extends RenderNodeBase {
  initUrl: string
  name: string
  description: string
  steps: RenderManualStep[]
}

export interface RenderGuideStep extends GuideStepConfig {
  url?: string
  node: RenderDocNode
}

/**
 * @description 用户引导  渲染类型节点
 */
export interface RenderGuideNode extends RenderNodeBase {
  name: string
  steps: RenderGuideStep[]
}

export type RenderNode = RenderPageNode | RenderDocNode | RenderEditNode | RenderManualNode | RenderGuideNode

export interface HandleDataControllerInterface {
  handleDataService: HandleDataService
  nodeType?: NodeTypeEnum
  nodes?: Node[]
  manual?: ManualNode
  guide?: GuideNode
  stepIdx: number
}

export interface HandleDataServiceInterface {
  handles: Map<NodeTypeEnum, HandleDataClass>
  handleManual: HandleManual
  handleGuide: HandleGuide
}

export type HandleDataClass = HandleDoc | HandlePage | HandleEdit | HandleProject
