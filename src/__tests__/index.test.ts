import EasyDoc from '../index'
import EasyDocFactory from '../EasyDocFactory'
import { EasyDocOption } from '../../types'

describe('index', () => {
  const opts: EasyDocOption = {
    minHeight: 180,
    minWidth: 200,
    maxHeight: 500,
    maxWidth: 800,
    editHeight: 60,
    editWidth: 200,
    easyDocPath: '/test/EasyDoc.json',
  }
  test('EasyDoc class test', () => {
    expect(EasyDoc.initGuide).toEqual(EasyDocFactory.initGuide)
    expect(EasyDoc.startGuide).toEqual(EasyDocFactory.startGuide)
    expect(EasyDoc.jumpGuideStep).toEqual(EasyDocFactory.jumpGuideStep)
    expect(EasyDoc.closeGuide).toEqual(EasyDocFactory.closeGuide)
    expect(EasyDoc.jumpManualStep).toEqual(EasyDocFactory.jumpManualStep)
    expect(EasyDoc.limitManualJumpStep).toEqual(EasyDocFactory.limitManualJumpStep)
    expect(EasyDoc.manualNextStep).toEqual(EasyDocFactory.manualNextStep)
    expect(EasyDoc.urlPrefix).toEqual(EasyDocFactory.urlPrefix)
    expect(EasyDoc.hasEasyDocJSON).toEqual(EasyDocFactory.hasEasyDocJSON)
    expect(EasyDoc.hasManualsJSON).toEqual(EasyDocFactory.hasManualsJSON)
    expect(EasyDoc.hasProjectsJSON).toEqual(EasyDocFactory.hasProjectsJSON)

    const initFn = jest.spyOn(EasyDocFactory, 'init')
    EasyDoc.init(opts)
    expect(initFn).toHaveBeenCalledWith(opts)
  })
})
