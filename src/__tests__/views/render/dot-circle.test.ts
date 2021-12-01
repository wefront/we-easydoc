import DotCircle from '../../../views/render/dot-circle.vue'
import { shallowMount } from '@vue/test-utils'

describe('DotCircle', () => {
  let vm: any
  afterEach(() => {
    vm.$destroy()
  })

  test('isShrink-true', async () => {
    const wrapper = shallowMount(DotCircle, {
      propsData: {
        isShrink: true,
      },
    })
    vm = wrapper.vm

    await wrapper.find('.easydoc-circle').trigger('click')
    expect(wrapper.emitted().tap).toBeTruthy()
  })
  test('isShrink-false', async () => {
    const wrapper = shallowMount(DotCircle, {
      propsData: {
        isShrink: false,
      },
    })
    vm = wrapper.vm
  })
})
