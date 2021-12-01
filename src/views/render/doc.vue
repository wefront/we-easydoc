<template>
  <div>
    <div
      :style="{ ...node.domStyle, ...(node.status === DocNodeStatus.SHRINK ? { width: '0', height: '0' } : {}) }"
      :class="node.status === DocNodeStatus.SHRINK ? ['easydoc-dialog--shrink'] : []"
      v-for="node in nodesFormat"
      :key="node.renderId"
    >
      <div v-if="!node.editUrl" class="easydoc-dialog">
        <div :class="['easydoc-dialog__desc', renderModalClassName]" v-html="node.description"></div>
      </div>
      <arrow :style="node.arrowStyle" v-if="!node.noArrow" :direction="node.direction"></arrow>
      <tag-comp v-show="node.status === DocNodeStatus.SHRINK" :style="node.tagStyle" :node="node"></tag-comp>
      <dot-circle
        @tap="handleChangeStatus(node)"
        :is-shrink="node.status === DocNodeStatus.SHRINK"
        :style="node.circleStyle"
      ></dot-circle>
    </div>
  </div>
</template>

<script>
import EasyDocFactory from '../../EasyDocFactory.ts'
import { setDomLocation } from '../../utils/dom.ts'
import { setPosition } from '../../utils/position.ts'
import { NodeDirectionEnum, DocNodeStatus } from '../../../types/index.ts'
import Arrow from './arrow.vue'
import TagComp from './tag-comp.vue'
import DotCircle from './dot-circle.vue'
export default {
  name: 'Doc',
  components: { Arrow, TagComp, DotCircle },
  data() {
    this.DocNodeStatus = DocNodeStatus
    return {
      nodesFormat: {},
    }
  },
  created() {
    // console.log(this.nodes)
    this.initNodesFormat()
  },
  methods: {
    initNodesFormat() {
      this.nodesFormat = this.nodes.map((node) => {
        return {
          ...node,
          domStyle: setDomLocation(node),
          noArrow: node.direction === NodeDirectionEnum.DEFAULT || node.direction === NodeDirectionEnum.CENTER,
          arrowStyle: this.locationArrow(node),
          tagStyle: this.locationTag(node),
          circleStyle: this.locationCircle(node),
          status: node.editUrl ? DocNodeStatus.SHRINK : EasyDocFactory.handleRender.docStatusIns.getDocStatus(node),
        }
      })
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
    locationTag(node) {
      const { direction, height, width } = node
      let position = {}
      const tagHeight = 20
      if (node.noArrow) {
        position = {
          top: '12px',
          left: '12px',
        }
      } else {
        position = setPosition(direction, {
          [NodeDirectionEnum.RT]: {
            top: '10px',
            left: '-16px',
          },
          [NodeDirectionEnum.RC]: {
            top: `${height / 2 - tagHeight / 2}px`,
            left: '-16px',
          },
          [NodeDirectionEnum.RB]: {
            top: `${height - 26}px`,
            left: '-16px',
          },
          [NodeDirectionEnum.LT]: {
            top: '10px',
            left: `${width + 14}px`,
          },
          [NodeDirectionEnum.LC]: {
            top: `${height / 2 - tagHeight / 2}px`,
            left: `${width + 14}px`,
          },
          [NodeDirectionEnum.LB]: {
            top: `${height - 26}px`,
            left: `${width + 14}px`,
          },
          [NodeDirectionEnum.TL]: {
            top: `${height - 20}px`,
            left: '-12px',
          },
          [NodeDirectionEnum.TC]: {
            top: `${height - 20}px`,
            left: `${width / 2 - 30}px`,
          },
          [NodeDirectionEnum.TR]: {
            top: `${height - 20}px`,
            left: `${width + 14}px`,
          },
          [NodeDirectionEnum.BL]: {
            top: `${1}px`,
            left: '-12px',
          },
          [NodeDirectionEnum.BC]: {
            top: `${1}px`,
            left: `${width / 2 - 30}px`,
          },
          [NodeDirectionEnum.BR]: {
            top: `${1}px`,
            left: `${width + 14}px`,
          },
        })
      }
      return {
        ...position,
      }
    },
    locationCircle(node) {
      const { direction, width, height, noArrow } = node
      let position = {}
      if (noArrow) {
        position = {
          top: '12px',
          left: '12px',
        }
      } else {
        position = setPosition(direction, {
          [NodeDirectionEnum.RT]: {
            top: '16px',
            left: '12px',
          },
          [NodeDirectionEnum.RC]: {
            top: `${height / 2 - 3}px`,
            left: '12px',
          },
          [NodeDirectionEnum.RB]: {
            top: `${height - 20}px`,
            left: '12px',
          },
          [NodeDirectionEnum.LT]: {
            top: '17px',
            left: `${width - 20}px`,
          },
          [NodeDirectionEnum.LC]: {
            top: `${height / 2 - 3}px`,
            left: `${width - 20}px`,
          },
          [NodeDirectionEnum.LB]: {
            top: `${height - 19}px`,
            left: `${width - 20}px`,
          },
          [NodeDirectionEnum.TL]: {
            top: `${height - 14}px`,
            left: '16px',
          },
          [NodeDirectionEnum.TC]: {
            top: `${height - 14}px`,
            left: `${width / 2 - 3}px`,
          },
          [NodeDirectionEnum.TR]: {
            top: `${height - 14}px`,
            left: `${width - 19}px`,
          },
          [NodeDirectionEnum.BL]: {
            top: `${8}px`,
            left: '17px',
          },
          [NodeDirectionEnum.BC]: {
            top: `${8}px`,
            left: `${width / 2 - 3}px`,
          },
          [NodeDirectionEnum.BR]: {
            top: `${8}px`,
            left: `${width - 19}px`,
          },
        })
      }
      return {
        position: 'absolute',
        ...position,
      }
    },
    handleChangeStatus(node) {
      if (node.editUrl) return
      if (node.status === DocNodeStatus.SHRINK) {
        node.status = DocNodeStatus.UNFOLD
        EasyDocFactory.handleRender.docStatusIns.setDocStatus(node, DocNodeStatus.UNFOLD)
      } else {
        node.status = DocNodeStatus.SHRINK
        EasyDocFactory.handleRender.docStatusIns.setDocStatus(node, DocNodeStatus.SHRINK)
      }
    },
  },
}
</script>
<style lang="less" scoped>
@import '../../css/var';
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
