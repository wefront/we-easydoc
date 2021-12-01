import { ManualNode, ManualStep, NodeTypeEnum, RenderDocNode, RenderManualNode, RenderNode } from '../../../types'
import EasyDocFactory from '../../EasyDocFactory'

export default class HandleManual {
  public static getRenderNodes(manual: ManualNode, stepIdx: number): RenderManualNode {
    const renderManualNode: RenderManualNode = {
      initUrl: manual.initUrl,
      renderId: '-1',
      description: manual.description,
      name: manual.name,
      steps: manual.steps.map((step: ManualStep, idx: number) => {
        // 只处理操作手册当前步骤的节点，节点数组可能为空，则不处理
        if (stepIdx === idx && step.nodes) {
          let renderDocNode: RenderDocNode[] = []
          EasyDocFactory.handleData.getBaseRenderNode(
            NodeTypeEnum.DOC,
            step.nodes,
            (nodeType: NodeTypeEnum, nodes: RenderNode[]) => {
              renderDocNode = nodes as RenderDocNode[]
            },
          )
          return {
            description: step.description,
            url: step.url,
            nodes: renderDocNode,
            linkManualName: step.linkManualName,
          }
        }
        return {
          description: step.description,
          url: step.url,
          nodes: [],
          linkManualName: step.linkManualName,
        }
      }),
    }
    return renderManualNode
  }
}
