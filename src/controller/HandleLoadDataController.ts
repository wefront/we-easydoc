import { BaseNodeData, ManualsList, ProjectList } from '../../types'
import HandleLoadDataService from '../services/HandleLoadDataService'

export default class HandleLoadDataController {
  /**
   * 根据传入参数获取所有JSON文件的数据,返回给UI面板
   * @param url 当前url
   */
  public static getBaseNodeData = (url: string): Promise<BaseNodeData | void> => {
    if (!url) {
      console.log('缺少当前url参数')
      throw new Error('缺少当前url参数')
    }
    return HandleLoadDataController.getData<BaseNodeData>(HandleLoadDataService.handleLoadBaseNodeData, url)
  }

  /**
   * 根据传入参数获取项目所有manualsData,确定是否有操作手蹙额
   * @param url 当前url
   */
  public static getManualsListData = (): Promise<ManualsList | void> =>
    HandleLoadDataController.getData<ManualsList>(HandleLoadDataService.handleLoadManualsData)

  /**
   * 根据传入参数获取项目所有projectData,确定是否有项目文档
   * @param url 当前url
   */
  public static getProjectListData = (): Promise<ProjectList | void> =>
    HandleLoadDataController.getData<ProjectList>(HandleLoadDataService.handleLoadProjectData)

  public static async getData<T>(handleGetData: Function, url?: string): Promise<T | void> {
    try {
      const res: T = await handleGetData(url)
      return res
    } catch (error) {
      // 数据获取错误直接移除当前url下的面板
      console.log('数据获取失败：', error)
    }
  }
}
