import {
  AuthEnum,
  BaseNodeData,
  BaseNodeDataList,
  JSONMapList,
  JSONMapObject,
  ManualsList,
  ProjectList,
} from '../../types'
import EasyDocFactory from '../EasyDocFactory'
import {
  readCache,
  requestData,
  writeJsonDataCache,
  writeManualsCache,
  writeMatchMapCache,
  writeProjectsCache,
} from '../utils'

export default class HandleLoadDataService {
  public nowData = {}

  /**
   * 根据"/EasyDoc.json" 获取匹配json文件的规则
   * @param "/EasyDoc.json"
   * 根据匹配到的URL 获取匹配json文件的数据
   * @param url
   */
  public static async handleLoadBaseNodeData(url: string): Promise<BaseNodeData | void> {
    // 缓存里直接拉数据如果没有就去映射里拿数据
    const JSONMap = await HandleLoadDataService.getJSONMapObjectFromCache()
    if (!JSONMap) {
      console.warn('映射json为空')
      return {};
    }
    const pathTransJsonData: JSONMapObject | void = JSONMap.find((item: JSONMapObject) => {
      if (!item?.match) return false
      return HandleLoadDataService.createRegular(item.match).test(url)
    })
    if (!pathTransJsonData) {
      console.warn('匹配不到对应的JSON')
      return {};
    }
    const jsonData = await HandleLoadDataService.getJsonDataFromCache(pathTransJsonData.jsonFile)
    // console.log(jsonData, 'jsonData')
    return jsonData
  }

  /**
   * 根据"/Manuals.json" 获取匹配json文件的规则
   * @param "/Manuals.json"
   * 根据匹配到的URL 获取匹配json文件的数据
   * @param url
   */
  public static async handleLoadManualsData(): Promise<ManualsList | void> {
    // 缓存里直接拉数据如果没有就去映射里拿数据

    const manualsList = await HandleLoadDataService.getManualsListFromCache()
    // console.log(JSONMap)
    if (!manualsList.length) {
      throw new Error('操作手册为空')
    }
    return manualsList
  }
  /**
   * 根据"/Projects.json" 获取匹配json文件的规则
   * @param "/Projects.json"
   * 根据匹配到的URL 获取匹配json文件的数据
   * @param url
   */
  public static async handleLoadProjectData(): Promise<ProjectList | void> {
    // 缓存里直接拉数据如果没有就去映射里拿数据

    const projectList = await HandleLoadDataService.getProjectListFromCache()
    // console.log(JSONMap)
    if (!projectList.length) {
      throw new Error('项目文档为空')
    }
    return projectList
  }
  // 缓存映射文件和url文件内容，保证持久化与更新使用sessionSTorage

  // 获取映射文件路由->json对应数据 T:string
  private static async requestJSONMapObject<T>(url: string): Promise<T> {
    const data: T = await requestData<T>(url)
    return data
  }

  // 获取映射文件路由->json对应数据 T:string
  private static async requestManualsList<T>(url: string): Promise<T> {
    const data: T = await requestData<T>(url)
    if (data && (<any>data).length) {
      ;(<any>data).forEach((item: any) => {
        if (item.auth === 'dev') {
          item.auth = AuthEnum.DEVELOPMENT
        } else if (item.auth === 'test') {
          item.auth = AuthEnum.TEST
        } else if (item.auth === 'pro') {
          item.auth = AuthEnum.PRODUCTION
        }
      })
    }
    return data
  }

  // 获取项目说明
  private static async requestProjectList<T>(url: string): Promise<T> {
    const data: T = await requestData<T>(url)
    if (data && (<any>data).length) {
      ;(<any>data).forEach((item: any) => {
        if (item.auth === 'dev') {
          item.auth = AuthEnum.DEVELOPMENT
        } else if (item.auth === 'test') {
          item.auth = AuthEnum.TEST
        } else if (item.auth === 'pro') {
          item.auth = AuthEnum.PRODUCTION
        }
      })
    }
    return data
  }

  // 获取描述文件数据 T:BaseNodeData
  private static async requestBaseNodeData<T>(url: string): Promise<T> {
    const data: T = await requestData<T>(url)
    // 空数据过滤, 权限缩写兼容
    Object.keys(data).forEach((key) => {
      if (!data[key].length) {
        delete data[key]
      } else {
        data[key].forEach((item: any) => {
          if (item.auth === 'dev') {
            item.auth = AuthEnum.DEVELOPMENT
          } else if (item.auth === 'test') {
            item.auth = AuthEnum.TEST
          } else if (item.auth === 'pro') {
            item.auth = AuthEnum.PRODUCTION
          }
        })
      }
    })
    return data
  }

  // url映射对应描述正则
  private static createRegular(match: string) {
    return new RegExp(`^${match}$`)
  }

  // 获取映射数据
  private static async getJSONMapObjectFromCache(): Promise<JSONMapList> {
    let result: JSONMapList = []
    if (HandleLoadDataService.envIsDev()) {
      result = await HandleLoadDataService.requestJSONMapObject<JSONMapList>(EasyDocFactory.easyDocPath)
    } else {
      const matchMap = readCache('matchMap') as JSONMapList
      if (!matchMap) {
        result = await HandleLoadDataService.requestJSONMapObject<JSONMapList>(EasyDocFactory.easyDocPath)
        // 写入缓存
        writeMatchMapCache(result)
      } else {
        result = matchMap
      }
    }
    return result
  }

  // 获取缓存详情内容数据
  private static async getJsonDataFromCache(url: string): Promise<BaseNodeData> {
    let result: BaseNodeData = {}
    if (HandleLoadDataService.envIsDev()) {
      result = await HandleLoadDataService.requestBaseNodeData<BaseNodeData>(url)
    } else {
      const jsonData: BaseNodeDataList = readCache('jsonData') as BaseNodeDataList
      if (!jsonData || !jsonData[url]) {
        // 非开发环境需要过滤环境数据
        result = HandleLoadDataService.filterAuth(await HandleLoadDataService.requestBaseNodeData<BaseNodeData>(url))
        // console.log(result)
        // 写入缓存
        writeJsonDataCache(url, result)
      } else {
        result = jsonData[url]
      }
    }
    return result
  }

  // 获取缓存操作手册内容数据
  private static async getManualsListFromCache(): Promise<ManualsList> {
    let result: ManualsList = []
    if (HandleLoadDataService.envIsDev()) {
      result = await HandleLoadDataService.requestManualsList<ManualsList>(EasyDocFactory.easyManualsPath)
      // 写入缓存
      writeManualsCache(result)
    } else {
      const manualsList = readCache('manuals') as ManualsList
      if (!manualsList) {
        result = await HandleLoadDataService.requestManualsList<ManualsList>(EasyDocFactory.easyManualsPath)
        // 写入缓存
        writeManualsCache(result)
      } else {
        result = manualsList
      }
    }
    return result
  }

  // 获取缓存项目说明内容数据
  private static async getProjectListFromCache(): Promise<ProjectList> {
    let result: ProjectList = []
    if (HandleLoadDataService.envIsDev()) {
      result = await HandleLoadDataService.requestProjectList<ProjectList>(EasyDocFactory.easyProjectsPath)
      // 写入缓存
      writeProjectsCache(result)
    } else {
      const projectList = readCache('projects') as ProjectList
      if (!projectList) {
        result = await HandleLoadDataService.requestProjectList<ProjectList>(EasyDocFactory.easyProjectsPath)
        // 写入缓存
        writeProjectsCache(result)
      } else {
        result = projectList
      }
    }
    return result
  }

  // 开发环境取消缓存
  private static envIsDev(): boolean {
    return EasyDocFactory.env === AuthEnum.DEVELOPMENT
  }

  // 根据环境auth过滤权限auth
  private static filterAuth(list: BaseNodeData): BaseNodeData {
    const rightAuthJsonMapList = Object.keys(list).reduce((prev, type) => {
      if (list[type].length) {
        const filterResult = list[type].filter((item: any) => {
          if (EasyDocFactory.env === AuthEnum.DEVELOPMENT) {
            return true
          }
          if (EasyDocFactory.env === AuthEnum.TEST) {
            return [AuthEnum.TEST, 'test', AuthEnum.PRODUCTION, 'pro'].includes(item.auth)
          }
          if (EasyDocFactory.env === AuthEnum.PRODUCTION) {
            return [AuthEnum.PRODUCTION, 'pro'].includes(item.auth) || !item.auth
          }
        })
        if (filterResult.length) prev[type] = filterResult
      }
      return prev
    }, {})
    // console.log(rightAuthJsonMapList)
    return rightAuthJsonMapList
  }
}
