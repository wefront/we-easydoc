import { NodeTypeEnum, panelTypesData } from '../../types'
import { readCache } from '../utils'
import EasyDocFactory from '../EasyDocFactory'
import createVueView from '../utils/createVueView'
import Panel from '../views/panel/index.vue'

export default class HandleUIService {
  //  渲染
  public renderGuideDom = (data: panelTypesData): void => {
    // 操作面板的渲染依赖于当前URL的JSON文件说明
    if (!data) return
    // 删除已有easydoc节点，一个不在预期内的issues问题
    const edLow = document.getElementById('ED-Menu')
    if (edLow) {
      edLow.remove()
    }
    const ed = document.createElement('div')
    ed.id = 'ED-Menu'
    ed.appendChild(
      createVueView(Panel, {
        jsonData: data,
      }),
    )
    document.body.appendChild(ed)
  }

  // 移除页面的加载内容
  public destroyLastRender = (): void => {
    const nodeType = readCache('nodeType') as NodeTypeEnum
    if (!nodeType) return
    EasyDocFactory.handleRender.destroy()
    EasyDocFactory.handleData.destroyScrollEvent()
  }
}
