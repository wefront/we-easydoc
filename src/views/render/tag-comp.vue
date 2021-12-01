<template>
  <div :class="tagClass">
    <a v-if="node.editUrl" class="easydoc-tag__text" target="__blank" :href="node.editUrl">点击跳转配置</a>
    <a v-else class="easydoc-tag__text"></a>
  </div>
</template>

<script>
export default {
  name: 'TagComp',
  props: {
    node: Object,
  },
  computed: {
    tagClass() {
      const { direction } = this.node
      const fl = direction[0]
      const sl = direction[1]
      let classArr = []
      classArr.push('easydoc-tag')
      if (fl === 'L') {
        classArr = ['easydoc-tag', 'easydoc-tag--l']
      } else if (sl === 'R') {
        classArr = ['easydoc-tag', 'easydoc-tag--l']
      } else {
        classArr = ['easydoc-tag', 'easydoc-tag--r']
      }
      return classArr
    },
  },
}
</script>
<style lang="less" scoped>
@import '../../css/var';
.easydoc-tag {
  position: absolute;
  font-size: 0;
  white-space: nowrap;
  &::before {
    content: '';
    position: relative;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent @main-color transparent transparent;
    vertical-align: middle;
  }
  &::after {
    content: '';
    position: relative;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent transparent @main-color;
    vertical-align: middle;
  }
  &__text {
    display: inline-block;
    height: 16px;
    line-height: 16px;
    padding: 2px 7px;
    font-size: 12px;
    color: #fff;
    background-color: @main-color;
    vertical-align: middle;
    border-radius: 2px;
    margin-left: -1px;
    margin-right: -1px;
    text-decoration: none;
  }
  &--r {
    .easydoc-tag__text {
      padding-left: 20px;
    }
    &::before {
      display: inline-block;
    }
    &::after {
      display: none;
    }
  }
  &--l {
    transform: translateX(-100%);
    .easydoc-tag__text {
      padding-right: 20px;
    }
    &::before {
      display: none;
    }
    &::after {
      display: inline-block;
    }
  }
}
</style>
