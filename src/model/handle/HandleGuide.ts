import { GuideNode, GuideStep, NodeTypeEnum, RenderDocNode, RenderGuideNode, RenderNode } from '../../../types'
import EasyDocFactory from '../../EasyDocFactory'
import HandleConfig from '../../config/handle'

export default class HandleGuide {
  public static getRenderNodes(guide: GuideNode, stepIdx: number): RenderGuideNode {
    const renderGuideNode: RenderGuideNode = {
      renderId: '-1',
      name: guide.name,
      steps: guide.steps.map((step: GuideStep, idx: number) => {
        if (stepIdx === idx) {
          let renderDocNodes: RenderDocNode[] = []
          EasyDocFactory.handleData.getBaseRenderNode(
            NodeTypeEnum.DOC,
            [step.node],
            (nodeType: NodeTypeEnum, nodes: RenderNode[]) => {
              renderDocNodes = nodes as RenderDocNode[]
            },
          )
          const node = renderDocNodes[0]
          if (node) {
            node.height += HandleConfig.guideBtnHeight
          }
          return {
            url: step.url,
            prev: step.prev,
            next: step.next,
            node,
          }
        }
        return {
          url: step.url,
          prev: step.prev,
          next: step.next,
          node: {} as RenderDocNode, // todo...
        }
      }),
    }
    return renderGuideNode
  }
}
