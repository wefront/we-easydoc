import {
  NodeTypeEnum,
  RenderNode,
  RenderDocNode,
  RenderEditNode,
  RenderManualNode,
  RenderGuideNode,
  RenderPageNode,
} from '../../types'
import DocRender from '../model/render/DocRender'
import EditRender from '../model/render/EditRender'
import ManualRender from '../model/render/ManualRender'
import GuideRender from '../model/render/GuideRender'
import PageRender from '../model/render/PageRender'

type NodesRender = DocRender | EditRender | ManualRender | GuideRender | PageRender

const renderNodesMap = new Map<NodeTypeEnum, Function>([
  [NodeTypeEnum.PAGE, (nodes: RenderNode[]) => new PageRender(NodeTypeEnum.PAGE, nodes as RenderPageNode[])],
  [NodeTypeEnum.DOC, (nodes: RenderNode[]) => new DocRender(NodeTypeEnum.DOC, nodes as RenderDocNode[])],
  [NodeTypeEnum.EDIT, (nodes: RenderNode[]) => new EditRender(NodeTypeEnum.EDIT, nodes as RenderEditNode[])],
  [
    NodeTypeEnum.MANUAL,
    (nodes: RenderNode[], stepIdx: number) =>
      new ManualRender(NodeTypeEnum.MANUAL, nodes as RenderManualNode[], stepIdx),
  ],
  [
    NodeTypeEnum.GUIDE,
    (nodes: RenderNode[], stepIdx: number) => new GuideRender(NodeTypeEnum.GUIDE, nodes as RenderGuideNode[], stepIdx),
  ],
  [NodeTypeEnum.PROJECT, (nodes: RenderNode[]) => new PageRender(NodeTypeEnum.PROJECT, nodes as RenderPageNode[])],
])

export default class RenderService {
  public nodesRenderIns: NodesRender

  constructor(type: NodeTypeEnum, nodes: RenderNode[], stepIdx?: number) {
    // 创建渲染
    this.nodesRenderIns = (renderNodesMap.get(type) as Function)(nodes, stepIdx)
  }

  public destroy(): void {
    this.nodesRenderIns.destroy()
  }

  public manualRepainDoc(node: RenderManualNode): void {
    const manualRenderIns = this.nodesRenderIns as ManualRender
    manualRenderIns.reRenderDoc(node)
  }

  public notifyGuideEmpty(): void {
    const guideRenderIns = this.nodesRenderIns as GuideRender
    guideRenderIns.emptyError()
  }
}
