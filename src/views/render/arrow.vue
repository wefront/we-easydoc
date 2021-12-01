<template>
  <div class="easydoc-arrow" :style="locationStyle">
    <div class="easydoc-arrow__start"></div>
    <div class="easydoc-arrow__line" :style="lineStyle"></div>
  </div>
</template>

<script>
export default {
  name: 'Arrow',
  props: {
    direction: String,
  },
  computed: {
    locationStyle() {
      const { direction } = this
      const fl = direction[0]
      let flexDirection = 'row'
      let width = 16
      let height = 8
      // 位于右侧，则正常排序
      if (fl === 'R') {
        flexDirection = 'row'
      } else if (fl === 'L') {
        // 位于右侧，则倒序
        flexDirection = 'row-reverse'
      } else if (fl === 'T') {
        // 位于上侧，则改变宽高并倒序
        width = 8
        height = 16
        flexDirection = 'column-reverse'
      } else {
        // 位于下侧，则改变宽高
        width = 8
        height = 16
        flexDirection = 'column'
      }
      return {
        height: `${height}px`,
        width: `${width}px`,
        flexDirection,
      }
    },
    lineStyle() {
      const { direction } = this
      const fl = direction[0]
      const box = {}
      if (fl === 'R' || fl === 'L') {
        box.height = '4px'
      } else {
        box.width = '4px'
      }
      return {
        ...box,
        flex: 1,
        margin: '-1px',
      }
    },
  },
  methods: {},
}
</script>

<style lang="less" scoped>
@import '../../css/var';
.easydoc-arrow {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: -1;
  // width: 200px;
  // height: 100px;
  // background-color: #000;
  &__start {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: @main-color;
    border-radius: 50%;
  }
  &__line {
    background-color: @main-color;
  }
}
</style>
