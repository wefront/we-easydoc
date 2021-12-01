import Index from '../../../views/panel/index.vue'
import { shallowMount } from '@vue/test-utils'
import Manuals from './Manuals.json'

describe('panel', () => {
  let vm: any
  beforeEach(() => {
    Object.defineProperty(window, 'location', {
      value: {
        href: '',
        origin: 'http://mockurl.com',
      },
    })
  })
  afterEach(() => {
    vm.$destroy()
  })
  test('drag', async () => {
    const wrapper = shallowMount(Index, {
      data() {
        return {
          jsonData: {},
        }
      },
    })

    vm = wrapper.vm

    expect(wrapper.html()).toContain('钉住拖拽')
    await wrapper.find('.ed-lock').trigger('click')
    expect(wrapper.html()).toContain('取消钉住吸附')
    expect(wrapper.vm.$data.lock).toBe(true)

    await wrapper.find('.ed-panel').trigger('dragstart', { offsetX: 1, offsetY: 1 })
    await wrapper.find('.ed-panel').trigger('dragend', { clientX: 5, clientY: 4 })
    const panelEl = wrapper.find('.ed-panel').element as HTMLElement
    expect(panelEl.style.getPropertyValue('left')).toBe('4px')
    expect(panelEl.style.getPropertyValue('top')).toBe('3px')

    await wrapper.find('.ed-lock').trigger('click')
    expect(wrapper.vm.$data.lock).toBe(false)

    wrapper.setData({
      tagActive:true,
      lock:false
    })
    await wrapper.find('.ed-panel').trigger('mouseleave')

    
  })
  test('manualClick - not is initUrl', async () => {
    const wrapper = shallowMount(Index, {
      data() {
        return {
          jsonData: { manuals: Manuals },
        }
      },
    })
    vm = wrapper.vm
    await vm.$nextTick()

    wrapper.find('.ed-manual-catalogues .ed-manual-item:first-child').trigger('click')
    console.log(vm.$data.currentManual);
    
    expect(window.location.href).toBe('http://mockurl.com/appaccess/')
  })
  test('manualClick - is initUrl', async () => {
    window.location.pathname = '/appaccess/'

    const wrapper = shallowMount(Index, {
      data() {
        return {
          jsonData: { manuals: Manuals },
        }
      }
    })
    vm = wrapper.vm
    await vm.$nextTick()

    await wrapper.find('.ed-manual-catalogues .ed-manual-item:first-child').trigger('click')
    expect(vm.$data.currentStepIdx).toBe(0)
  })
  test('currentManual',async()=>{
    const wrapper = shallowMount(Index, {
      data() {
        return {
          jsonData: { manuals: Manuals },
        }
      },
    })
    vm = wrapper.vm
    await vm.$nextTick()

    await wrapper.find('.ed-manual-catalogues .ed-manual-item:first-child').trigger('click')

    expect(wrapper.html()).toContain('应用接入')
    expect(wrapper.html()).toContain('网关后台操作手册')
    expect(wrapper.html()).toContain('第1步')
    expect(wrapper.html()).toContain('新增应用')

    await wrapper.find('.ed-panel-step .ed-manual-content svg').trigger('click')
  })
})
