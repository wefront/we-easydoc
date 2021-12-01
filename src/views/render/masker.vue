<template>
  <div class="easydoc-mask">
    <div class="easydoc-mask__up" :style="style.up"></div>
    <div class="easydoc-mask__down" :style="style.down"></div>
    <div class="easydoc-mask__left" :style="style.left"></div>
    <div class="easydoc-mask__right" :style="style.right"></div>
  </div>
</template>

<script>
export default {
  name: 'Masker',
  props: {
    node: Object,
  },
  computed: {
    style() {
      const { zIndex, domLocation } = this.node
      const maxHeight =
        Math.max(document.body.scrollHeight, window.screen.height) - domLocation.y - domLocation.height - 3
      const maxWidth = Math.max(document.body.scrollWidth, window.screen.width) - domLocation.x - domLocation.width - 3
      return {
        up: {
          zIndex,
          height: `${domLocation.y - 3}px`,
        },
        down: {
          zIndex,
          height: `${maxHeight}px`,
          top: `${domLocation.y + domLocation.height + 3}px`,
        },
        left: {
          zIndex,
          height: `${domLocation.height + 6}px`,
          width: `${domLocation.x - 3}px`,
          top: `${domLocation.y - 3}px`,
        },
        right: {
          zIndex,
          height: `${domLocation.height + 6}px`,
          top: `${domLocation.y - 3}px`,
          width: `${maxWidth}px`,
          left: `${domLocation.x + domLocation.width + 3}px`,
        },
      }
    },
  },
}
</script>
<style lang="less" scoped>
@import '../../css/var';
.easydoc-mask {
  &__up {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: @mask-color;
  }
  &__down {
    position: fixed;
    left: 0;
    width: 100%;
    background-color: @mask-color;
  }
  &__left {
    position: fixed;
    left: 0;
    background-color: @mask-color;
  }
  &__right {
    position: fixed;
    background-color: @mask-color;
  }
  &__body {
    overflow-x: hidden;
  }
}
</style>
