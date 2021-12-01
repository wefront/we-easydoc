import {
  GuideNode,
  HandleDataClass,
  HandleDataServiceInterface,
  ManualNode,
  Node,
  NodeTypeEnum,
  RenderGuideNode,
  RenderManualNode,
  RenderNode,
} from '../../types'
import HandleDoc from '../model/handle/HandleDoc'
import HandlePage from '../model/handle/HandlePage'
import HandleProject from '../model/handle/HandleProject'
import HandleEdit from '../model/handle/HandleEdit'
import HandleManual from '../model/handle/HandleManual'
import HandleGuide from '../model/handle/HandleGuide'

export default class HandleDataService implements HandleDataServiceInterface {
  public handles: Map<NodeTypeEnum, HandleDataClass>

  public handleManual = new HandleManual()

  public handleGuide = new HandleGuide()

  constructor() {
    this.handles = new Map<NodeTypeEnum, HandleDataClass>([
      [NodeTypeEnum.PROJECT, new HandleProject()],
      [NodeTypeEnum.PAGE, new HandlePage()],
      [NodeTypeEnum.DOC, new HandleDoc()],
      [NodeTypeEnum.EDIT, new HandleEdit()],
    ])
  }

  /**
   * 根据不同的nodeType类型使用不同的策略类生成渲染节点
   * @param nodeType
   * @param nodes
   */
  public handleData(nodeType: NodeTypeEnum, nodes: Node[]): RenderNode[] {
    const handle = this.handles.get(nodeType)
    if (handle) {
      return handle.getRenderNodes(nodes) as RenderNode[]
    }
    return []
  }

  /**
   * 生成操作手册渲染节点
   * @param nodeType
   * @param nodes
   */
  public static handleManualData(manual: ManualNode, stepIdx: number): RenderManualNode {
    return HandleManual.getRenderNodes(manual, stepIdx)
  }

  /**
   * 生成用户引导渲染节点
   * @param nodeType
   * @param nodes
   */
  public static async handleGuideData(guide: GuideNode, stepIdx: number): Promise<RenderGuideNode> {
    // 防止弹窗等情况，延时5秒执行
    let renderGuideNode: RenderGuideNode = {} as RenderGuideNode
    renderGuideNode = await new Promise<RenderGuideNode>((resolve) => {
      setTimeout(() => {
        resolve(HandleGuide.getRenderNodes(guide, stepIdx))
      }, 500)
    })
    return renderGuideNode
  }
}
