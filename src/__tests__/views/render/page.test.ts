import Page from '../../../views/render/page.vue'
import { shallowMount } from '@vue/test-utils'
import EasyDocFactory from '../../../EasyDocFactory'

describe('page', () => {
  let vm: any
  afterEach(() => {
    vm.$destroy()
  })

  test('page ', async () => {
    const destroyLastRender = jest.spyOn(EasyDocFactory.handleRenderUIPanel.HandleUIService, 'destroyLastRender')
    destroyLastRender.mockReturnValue()

    const wrapper = shallowMount(Page, {
      data() {
        return {
          renderModalClassName: '',
          nodes: [
            {
              renderId: 1,
              name: 'nodeName',
              description: 'description',
            },
            {
              renderId: 2,
              name: 'nodeName2',
              description: 'description2',
            },
          ],
        }
      },
    })
    vm = wrapper.vm

    await wrapper.find('.easydoc-page__tab .easydoc-page__block:nth-child(2)').trigger('click')
    expect(vm.$data.activeIndex).toBe(1)
    
    await wrapper.find('.easydoc-page__close').trigger('click')
    expect(destroyLastRender).toHaveBeenCalled()
  })
})
