<template>
  <div class="easydoc-page">
    <div @click="handleClose" class="easydoc-page__mask"></div>
    <div class="easydoc-page__container">
      <div class="easydoc-page__tab">
        <div
          @click="handleChangeIndex(index)"
          v-for="(node, index) in nodes"
          :key="node.renderId"
          :class="['easydoc-page__block', index === activeIndex && 'active']"
        >
          {{ node.name }}
        </div>
      </div>
      <div :class="['easydoc-page__content', renderModalClassName]">
        <div class="easydoc-page__close" @click="handleClose">
          <svg class="icon" aria-hidden>
            <use xlink:href="#easy-doc_close"></use>
          </svg>
        </div>
        <div class="easydoc-page__text" v-html="nodes[activeIndex].description"></div>
      </div>
    </div>
  </div>
</template>
<script>
import EasyDocFactory from '../../EasyDocFactory.ts'
export default {
  name: 'Page',
  data() {
    return {
      activeIndex: 0,
    }
  },
  methods: {
    handleChangeIndex(index) {
      this.activeIndex = index
    },
    handleClose() {
      EasyDocFactory.handleRenderUIPanel.HandleUIService.destroyLastRender()
    },
  },
}
</script>
<style lang="less" scoped>
@import '../../css/var';
.easydoc-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10000;
  &__mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
  }
  &__container {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
  &__tab {
    width: 220px;
    margin-right: 20px;
  }
  &__block {
    width: 200px;
    height: 80px;
    font-size: 16px;
    color: #333;
    background-color: #fff;
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    cursor: pointer;
    border-top: 2px solid #fff;
    padding: 16px;
    &:hover {
      border-color: @main-color;
    }
    & + & {
      margin-top: 20px;
    }
    &.active {
      border-color: @main-color;
    }
  }
  &__content {
    position: relative;
    font-size: 14px;
    box-sizing: border-box;
    padding: 20px 20px 40px 20px;
    min-width: 550px;
    max-width: 40%;
    min-height: 200px;
    max-height: 700px;
    border-top: 2px solid @main-color;
    background-color: #fff;
    overflow: auto;
  }
  &__text {
    line-height: 1.8;
  }
  &__close {
    position: absolute;
    top: 6px;
    right: 6px;
    color: #c1c1c1;
    font-size: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
}
</style>
