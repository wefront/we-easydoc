<template>
  <div :class="circleClass" @click="$emit('tap')"></div>
</template>

<script>
export default {
  name: 'DotCircle',
  props: {
    isShrink: Boolean,
  },
  computed: {
    circleClass() {
      if (this.isShrink) {
        return ['easydoc-circle']
      } else {
        return ['easydoc-circle', 'easydoc-circle--main']
      }
    },
  },
}
</script>
<style lang="less" scoped>
@import '../../css/var';
.easydoc-circle {
  position: relative;
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    width: 9px;
    height: 9px;
    border: 1px solid #fff;
    opacity: 0.7;
    border-radius: 50%;
    animation: wave1 1s infinite ease-out alternate;
  }
  &::after {
    content: '';
    position: absolute;
    display: inline-block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    border: 1px solid #fff;
    opacity: 0.4;
    border-radius: 50%;
    animation: wave2 1s infinite ease-out 0.4s alternate;
  }
  &--main {
    background-color: @main-color;
    &::before {
      border-color: @main-color;
    }
    &::after {
      border-color: @main-color;
    }
  }
}
@keyframes wave1 {
  0% {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(0.8);
  }
  100% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1);
  }
}
@keyframes wave2 {
  0% {
    opacity: 0.1;
    transform: translate(-50%, -50%) scale(0.8);
  }
  100% {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
