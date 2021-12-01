import Arrow from '../../../views/render/arrow.vue'
import { shallowMount } from '@vue/test-utils'

describe('Arrow', () => {
  let vm: any
  afterEach(() => {
    vm.$destroy()
  })

  test('arrow', async() => {
    const wrapper = shallowMount(Arrow, {
      propsData: {
        direction: 'R',
      },
    })
    vm = wrapper.vm

    const location = wrapper.find('.easydoc-arrow').element as HTMLElement
    expect(location.style.getPropertyValue('flex-direction')).toBe('row')
    await wrapper.setProps({
      direction: 'L',
    })
    await wrapper.setProps({
      direction: 'T',
    })
    await wrapper.setProps({
      direction: 'B',
    })
  })
})
