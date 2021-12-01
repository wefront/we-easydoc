import Masker from '../../../views/render/masker.vue'
import { shallowMount } from '@vue/test-utils'

describe('masker', () => {
  let vm: any
  afterEach(() => {
    vm.$destroy()
  })
  test('should ', () => {
    const wrapper = shallowMount(Masker, {
      propsData: {
        node: {
          zIndex: 9999,
          domLocation: {
            x: 1,
            y: 1,
            height: 50,
            width: 50,
          },
        },
      },
    })

    vm = wrapper.vm
    const up = wrapper.find('.easydoc-mask__up').element as HTMLElement
    expect(up.style.getPropertyValue('z-index')).toBe('9999')
    expect(up.style.getPropertyValue('height')).toBe('-2px')
  })
})
