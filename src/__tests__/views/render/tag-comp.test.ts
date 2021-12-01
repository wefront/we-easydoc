import TagComp from '../../../views/render/tag-comp.vue'
import { shallowMount } from '@vue/test-utils'

describe('TagComp', () => {
  let vm: any
  afterEach(() => {
    vm.$destroy()
  })

  test('TagComp', async () => {
    const wrapper = shallowMount(TagComp, {
      propsData: {
        node: {
          editUrl: 'urlmock',
          direction: ['L', 'R'],
        },
      },
    })
    vm = wrapper.vm

    const target = wrapper.find('.easydoc-tag__text').element as HTMLElement

    expect(target.getAttribute('href')).toBe('urlmock')

    wrapper.setProps({
      node: {
        editUrl: 'urlmock',
        direction: ['R', 'R'],
      },
    })
    await vm.$nextTick()
    expect(wrapper.find('.easydoc-tag--l')).toBeTruthy()

    wrapper.setProps({
      node: {
        editUrl: 'urlmock',
        direction: ['R', 'L'],
      },
    })
    await vm.$nextTick()
    expect(wrapper.find('.easydoc-tag--r')).toBeTruthy()
  })
})
