/**
 * @description 权限：文档可见访问
 */
import { NodeDirectionEnum } from './handle'

export enum AuthEnum {
  DEVELOPMENT = 'DEVELOPMENT', // 开发环境可见
  TEST = 'TEST', // 开发+测试可见
  PRODUCTION = 'PRODUCTION', // 开发+测试+生成可见
}

/**
 * @description 节点类型
 */
export enum NodeTypeEnum {
  PROJECT = 'PROJECT',
  PAGE = 'PAGE',
  DOC = 'DOC',
  EDIT = 'EDIT',
  MANUAL = 'MANUAL',
  GUIDE = 'GUIDE',
}

/**
 * @description 面板类型中文描述
 */
export enum TypeDescriptionEnum {
  PROJECTS = '项目说明',
  PAGES = '页面说明',
  DOCS = '原型说明',
  EDITS = '编辑说明',
  MANUALS = '操作手册',
  GUIDES = '用户引导',
}

/**
 * @description 面板类型icon name
 */
export enum TypeIconEnum {
  PROJECTS = 'easy-doc_signboard',
  PAGES = 'easy-doc_signboard',
  DOCS = 'easy-doc_template',
  EDITS = 'easy-doc_editor',
  MANUALS = 'easy-doc_tradealert',
  GUIDES = 'easy-doc_trust',
}

/**
 * @description 文档节点基础属性
 */
export interface BaseNode {
  docId: string
  auth?: AuthEnum
  direction?: NodeDirectionEnum
  noUnique?: boolean // 一个页面存在多个docId的dom时，设为true
  width?: number
  height?: number
  zIndex?:number
}

/**
 * @description 项目说明 类型节点
 */
export interface ProjectNode {
  description: string
  auth?: AuthEnum
  name?: string
}

/**
 * @description 页面说明 类型节点
 */
export interface PageNode {
  description: string
  auth?: AuthEnum
  name?: string
}

/**
 * @description 原型图说明 类型节点
 */
export interface DocNode extends BaseNode {
  description: string
}

/**
 * @description 跳转后台编辑 类型节点
 */
export interface EditNode extends BaseNode {
  editUrl: string
}

/**
 * @description 操作手册 操作步骤
 */
export interface ManualStep {
  description: string
  url?: string
  nodes?: DocNode[]
  linkManualName?: string
}

/**
 * @description 操作手册 类型节点
 */
export interface ManualNode {
  initUrl: string
  name: string
  auth: AuthEnum
  description: string
  steps: ManualStep[]
}

/**
 * @description 用户引导 每一步的配置项
 */
export interface GuideStepConfig {
  prev?: boolean
  next?: boolean
}
/**
 * @description 用户引导 每一步节点
 */
export interface GuideStep extends GuideStepConfig {
  url?: string
  node: DocNode
}

/**
 * @description 用户引导 类型节点
 */
export interface GuideNode {
  name: string
  auth: AuthEnum
  steps: GuideStep[]
}

export interface EasyDocOption {
  easyDocPath?: string
  easyManualsPath?: string
  easyProjectsPath?: string
  minHeight?: number
  minWidth?: number
  maxHeight?: number
  maxWidth?: number
  editHeight?: number
  editWidth?: number
  urlPrefix?: string
  env?: (() => AuthEnum) | string
  showGuideMask?: boolean
  mountPanel?: boolean
  ignorePaths?: string[],
  hasEasyDocJSON?: boolean
  hasManualsJSON?: boolean
  hasProjectsJSON?: boolean
  EasyDocDocumentUrl?: string | boolean
}

export type Node = PageNode | DocNode | EditNode | ManualNode | GuideNode



