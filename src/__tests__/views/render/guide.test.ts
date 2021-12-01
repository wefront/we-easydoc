import Guide from '../../../views/render/guide.vue'
import { shallowMount } from '@vue/test-utils'
import { Wrapper } from '@vue/test-utils'
import Vue from 'vue'

describe('Guide', () => {
  let vm: any
  let wrapper: Wrapper<Vue>
  afterEach(() => {
    vm.$destroy()
  })
  beforeEach(() => {
    wrapper = shallowMount(Guide, {
      data() {
        return {
          showGuideMask: false,
          renderModalClassName: '',
          node: {
            docId: 'appaccess-form-domain',
            auth: 'test',
            description: '输入域名',
            direction: 'BC',
          },
          stepIdx: 1,
          stepsLength: 0,
          stepConfig: {
            prev: true,
          },
          guideIns: {
            goPre: jest.fn(),
            destroy: jest.fn(),
            goNext: jest.fn(),
          },
        }
      },
    })
    vm = wrapper.vm
  })
  test('pre', async () => {
    expect(wrapper.html()).toContain('上一步')
    await wrapper.find('.easydoc-guide__pre').trigger('click')
    expect(vm.$data.guideIns.goPre).toHaveBeenCalled()
  })
  test('end', async () => {
    wrapper.setData({
      stepConfig: {
        next: true,
      },
      stepsLength: 2,
    })
    expect(wrapper.html()).toContain('结束引导')
    await wrapper.find('.easydoc-guide__end').trigger('click')
    expect(vm.$data.guideIns.destroy).toHaveBeenCalled()
  })
  test('next', async () => {
    wrapper.setData({
      stepConfig: {
        next: true,
      },
      stepsLength: 1,
    })
    expect(wrapper.html()).toContain('下一步')
    await wrapper.find('.easydoc-guide__next').trigger('click')
    expect(vm.$data.guideIns.goNext).toHaveBeenCalled()
  })
})
