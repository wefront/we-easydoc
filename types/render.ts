import { RenderDocNode } from './handle'
import DocRender from '../src/model/render/DocRender'
import GuideRender from '../src/model/render/GuideRender'
// import DocNode from '../src/model/render/dom/DocNode'
// import PageNode from '../src/model/render/dom/PageNode'
// import PageRender from '../src/model/render/PageRender'

export type RenderDialogNode = RenderDocNode
// export type RenderDialogNodeWithoutDomlocation = RenderPageNode

export type DialogRender = DocRender

// DOC类型的状态
export enum DocNodeStatus {
  SHRINK = 'SHRINK',
  UNFOLD = 'UNFOLD',
}
export interface DocNodeStatusMap {
  [key: string]: Array<DocNodeStatus>
}
