import Doc from '../../../views/render/doc.vue'
import DotCircle from '../../../views/render/dot-circle.vue'
import { shallowMount } from '@vue/test-utils'

describe('Arrow', () => {
  let vm: any
  afterEach(() => {
    vm.$destroy()
  })

  test('doc', async () => {
    const wrapper = shallowMount(Doc, {
      data() {
        return {
          renderModalClassName: '',
          nodes: [
            {
              docId: 'appaccess-form-app',
              auth: 'test',
              description: '选择应用',
              direction: 'BC',
              noArrow: true,
            },
            {
              docId: 'appaccess-form-domain',
              auth: 'test',
              description: '输入域名',
              direction: 'BC',
              editUrl: '123',
            },
          ],
        }
      },
    })
    vm = wrapper.vm

    wrapper.findComponent(DotCircle).vm.$emit('tap')
  })

  test('handleChangeStatus', () => {
    const wrapper = shallowMount(Doc, {
      data() {
        return {
          renderModalClassName: '',
          nodes: [
            {
              docId: 'appaccess-form-app',
              auth: 'test',
              description: '选择应用',
              direction: 'BC',
              noArrow: true,
              editUrl: '',
            },
          ],
        }
      },
    })
    vm = wrapper.vm

    wrapper.findComponent(DotCircle).vm.$emit('tap')
  })
})
