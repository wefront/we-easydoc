import Error from '../../../views/render/error.vue'
import { shallowMount } from '@vue/test-utils'

test('Test.vue', () => {
  const wrapper = shallowMount(Error, {
    propsData: {
      value: 'some error',
    },
  })
  expect(wrapper.html()).toContain('some error')
})
