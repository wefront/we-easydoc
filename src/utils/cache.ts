import {
  cachePool,
  JSONMapList,
  BaseNodeData,
  cacheData,
  ManualNode,
  ManualsList,
  GuideNode,
  NodeTypeEnum, ProjectList,
} from '../../types'

function readEasyDocCache(): string | null {
  const value: string | null = sessionStorage.getItem('EasyDoc')
  return value
}

function getEasyDocCache(): cachePool {
  const EasyDocCache: string | null = readEasyDocCache()
  let data = {} as cachePool
  if (EasyDocCache) {
    data = JSON.parse(EasyDocCache)
  }
  return data
}

// key为cache下的模块，不写则为全量读取
export function readCache(key?: keyof cachePool): cacheData {
  const value: string | null = readEasyDocCache()
  if (!value) {
    return null
    // throw new Error('读取缓存失败')
  }
  const data: cachePool = JSON.parse(value)
  return key ? data[key] : data
}
// 更新
export function writeMatchMapCache(value: JSONMapList): void {
  if (!value) return
  const data = getEasyDocCache()
  data.matchMap = value
  sessionStorage.setItem('EasyDoc', JSON.stringify(data))
}

export function writeJsonDataCache(url: string, value: BaseNodeData): void {
  if (!value) return
  const data = getEasyDocCache()
  if (!data.jsonData) {
    data.jsonData = {}
  }
  data.jsonData[url] = value
  sessionStorage.setItem('EasyDoc', JSON.stringify(data))
}

// 缓存操作手寸
export function writeManualsCache(value: ManualsList): void {
  if (!value) return
  const data = getEasyDocCache()
  data.manuals = value
  sessionStorage.setItem('EasyDoc', JSON.stringify(data))
}

// 缓存项目说明
export function writeProjectsCache(value: ProjectList): void {
  if (!value) return
  const data = getEasyDocCache()
  data.projects = value
  sessionStorage.setItem('EasyDoc', JSON.stringify(data))
}

// 缓存当前节点类型
export function writeNodeTypeCache(nodeType?: NodeTypeEnum): void {
  const data = getEasyDocCache()
  data.nodeType = nodeType
  sessionStorage.setItem('EasyDoc', JSON.stringify(data))
}

// 缓存当前步骤currentStep
export function writeCurrentStepCache(step?: number): void {
  const data = getEasyDocCache()
  data.currentStep = step
  sessionStorage.setItem('EasyDoc', JSON.stringify(data))
}
// 缓存当前操作手册
export function writeCurrentManualCache(manual?: ManualNode): void {
  const data = getEasyDocCache()
  data.currentManual = manual
  sessionStorage.setItem('EasyDoc', JSON.stringify(data))
}
// 缓存当前用户引导
export function writeCurrentGuideCache(guide?: GuideNode): void {
  const data = getEasyDocCache()
  data.currentGuide = guide
  sessionStorage.setItem('EasyDoc', JSON.stringify(data))
}

// 缓存当前是否显示过查看手册提示
export function writeHasShowTipCache(): void {
  const data = getEasyDocCache()
  data.hasShowTip = true
  sessionStorage.setItem('EasyDoc', JSON.stringify(data))
}
