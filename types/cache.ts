import {BaseNodeData, JSONMapList, NodeTypeEnum, ManualNode, ManualsList, GuideNode, ProjectList} from './index'

/**
 * @description 缓存数据，data为具体json描述加在映射数据内
 */
export interface cachePool {
  matchMap: JSONMapList // 映射数据
  jsonData: {
    // 配置数据
    // 实际数据
    [key: string]: BaseNodeData
  }
  projects?: ProjectList // 项目说明
  manuals?: ManualsList // 操作手册合集
  nodeType?: NodeTypeEnum // 当前模块
  currentManual?: ManualNode // 当前操作手册
  currentGuide?: GuideNode // 当前用户引导
  currentStep?: number // 当前步骤
  hasShowTip?: boolean // 是否显示过提示
}

export type cacheData = cachePool | cachePool[keyof cachePool] | void | null
