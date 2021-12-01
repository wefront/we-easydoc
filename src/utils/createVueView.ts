import Vue from 'vue';

export default function createVueView(component: any, options?: any) {
  const vueConstructor = Vue.extend(component)
  const instance = new vueConstructor({
    data: options || {},
  });
  instance.$mount();
  return instance.$el
}
