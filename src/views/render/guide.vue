<template>
  <div class="easydoc-guide">
    <Masker v-if="showGuideMask" :node="node" />
    <div class="easydoc-guide__target" :style="locationStyle">
      <div class="easydoc-dialog">
        <div
          :class="['easydoc-dialog__desc', 'easydoc-dialog__desc--guide', renderModalClassName]"
          v-html="node.description"
        ></div>
      </div>
      <arrow :style="arrowStyle" v-if="!noArrow" :direction="node.direction"></arrow>
      <div class="easydoc-guide__action">
        <button @click="handlePre" v-show="showPre" class="easydoc-guide__pre">上一步</button>
        <button @click="handleEnd" v-show="showEnd" class="easydoc-guide__end">结束引导</button>
        <button @click="handleNext" v-show="showNext" class="easydoc-guide__next">下一步</button>
        <div @click="handleEnd" class="easydoc-guide__close">跳过</div>
      </div>
      <error-block v-if="message" v-model="message" />
    </div>
  </div>
</template>

<script>
import { setDomLocation } from '../../utils/dom.ts'
import { NodeDirectionEnum } from '../../../types/index.ts'
import { setPosition } from '../../utils/position.ts'
import Masker from './masker.vue'
import Arrow from './arrow.vue'
import ErrorBlock from './error.vue'
export default {
  name: 'Guide',
  components: {
    Masker,
    Arrow,
    ErrorBlock,
  },
  data() {
    return {
      locationStyle: {},
      arrowStyle: {},
      message: '',
    }
  },
  computed: {
    noArrow() {
      return this.node.direction === NodeDirectionEnum.DEFAULT || this.node.direction === NodeDirectionEnum.CENTER
    },
    showPre() {
      return this.stepIdx !== 0 && this.stepConfig.prev !== false
    },
    showEnd() {
      return this.stepConfig.next !== false && this.stepIdx === this.stepsLength - 1
    },
    showNext() {
      return this.stepConfig.next !== false && this.stepIdx !== this.stepsLength - 1
    },
  },
  created() {
    this.initNode()
  },
  methods: {
    initNode() {
      this.locationStyle = setDomLocation(this.node)
      this.arrowStyle = this.locationArrow(this.node)
    },
    locationArrow(node) {
      const { direction, height, width } = node
      // 设置各个方向的位置
      const position = setPosition(direction, {
        [NodeDirectionEnum.RT]: {
          top: '16px',
          left: '-16px',
        },
        [NodeDirectionEnum.RC]: {
          top: `${height / 2 - 4}px`,
          left: '-16px',
        },
        [NodeDirectionEnum.RB]: {
          top: `${height - 20}px`,
          left: '-16px',
        },
        [NodeDirectionEnum.LT]: {
          top: '16px',
          left: `${width}px`,
        },
        [NodeDirectionEnum.LC]: {
          top: `${height / 2 - 4}px`,
          left: `${width}px`,
        },
        [NodeDirectionEnum.LB]: {
          top: `${height - 20}px`,
          left: `${width}px`,
        },
        [NodeDirectionEnum.TL]: {
          top: `${height}px`,
          left: '16px',
        },
        [NodeDirectionEnum.TC]: {
          top: `${height}px`,
          left: `${width / 2 - 4}px`,
        },
        [NodeDirectionEnum.TR]: {
          top: `${height}px`,
          left: `${width - 20}px`,
        },
        [NodeDirectionEnum.BL]: {
          top: `${-16}px`,
          left: '16px',
        },
        [NodeDirectionEnum.BC]: {
          top: `${-16}px`,
          left: `${width / 2 - 4}px`,
        },
        [NodeDirectionEnum.BR]: {
          top: `${-16}px`,
          left: `${width - 20}px`,
        },
      })
      // setGroupCss(arrow.container, {
      //   ...position,
      // })
      return {
        ...position,
      }
    },
    async handlePre() {
      try {
        await this.guideIns.goPre()
      } catch (e) {
        console.log(e.message)
      }
    },
    handleEnd() {
      this.guideIns.destroy()
    },
    async handleNext() {
      try {
        await this.guideIns.goNext()
      } catch (e) {
        this.message = e.message
      }
    },
  },
}
</script>

<style lang="less" scoped>
@import '../../css/var';
.easydoc-guide {
  &__close {
    position: absolute;
    top: 10px;
    left: 12px;
    cursor: pointer;
    font-size: 12px;
    font-weight: normal;
    color: @main-color;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
  &__action {
    box-sizing: border-box;
    width: 100%;
    padding: 5px 8px;
    padding-bottom: 8px;
    position: absolute;
    bottom: 0;
    right: 0;
    text-align: right;
  }
  &__next {
    font-size: 12px;
    padding: 4px 12px;
    color: #fff;
    border-radius: 4px;
    background-color: @main-color;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 4px;
    &:hover {
      opacity: 0.8;
    }
  }
  &__end {
    font-size: 12px;
    padding: 4px 12px;
    color: #fff;
    border-radius: 4px;
    background-color: @main-color;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 4px;
    &:hover {
      opacity: 0.8;
    }
  }
  &__pre {
    font-size: 12px;
    padding: 4px 12px;
    border: none;
    background: transparent;
    outline: none;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
  }
  &__target {
    // animation: outlineLight 0.5s;
    outline: @main-color 3px dashed;
  }
}

@keyframes outlineLight {
  0% {
    outline: @main-color 0 dashed;
  }
  100% {
    outline: @main-color 3px dashed;
  }
}
.easydoc-dialog {
  background: #ffffff;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
  padding: 24px 0;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  &__desc {
    background: #ffffff;
    box-sizing: border-box;
    line-height: 20px;
    margin: 0;
    overflow-x: auto;
    height: 100%;
    width: 100%;
    padding: 0 24px;
    font-size: 14px;
    word-break: break-all;
    color: @font-color;
    &--guide {
      padding: 0 12px;
    }
  }
  &--shrink {
    background: transparent;
    box-shadow: none;
    padding: 0;
  }
}
</style>
