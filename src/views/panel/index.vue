<template>
  <div
    class="ed-panel"
    :draggable="!lock"
    @dragstart="dragstartPanel($event)"
    @dragover="dragoverPanel($event)"
    @dragend="dragoverPanel($event)"
    @mouseleave="mouseleave($event)"
    :style="panelStyle"
  >
    <div class="ed-panel-content">
      <div class="tag" @click="tagClick">
        <svg class="icon" aria-hidden>
          <use xlink:href="#easy-doc_double-arrow-left"></use>
        </svg>
      </div>
      <div class="title" :style="EasyDocDocumentUrlStyle" @click="goEasyDocDocument">Easy-Doc</div>
      <div class="ed-menu">
        <div
          :class="{ 'easydoc-type': true, active: documentActive === item.type }"
          v-for="item in documentTypesFilter"
          @click="typeChange(item)"
        >
          <svg class="icon" aria-hidden>
            <use :xlink:href="item.icon"></use>
          </svg>
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="ed-panel-step" v-if="documentActive === 'manuals'" :style="stepStyle">
      <div class="ed-manual-content" v-if="currentManual">
        <svg class="icon" aria-hidden @click="backManualCatalogues">
          <use xlink:href="#easy-doc_leftarrow"></use>
        </svg>
        <div class="title">{{ currentManual.name }}</div>
        <div class="sub-title" v-html="currentManual.description"></div>
        <div class="manual-step-list">
          <div
            :class="{ 'manual-step-item': true, active: currentStepIdx === idx }"
            v-for="(item, idx) in currentManual.steps"
            @click="manualStepItem(item, idx)"
          >
            <div class="title">
              第{{ idx + 1 }}步
              <svg class="icon btn-next" aria-hidden v-if="item.linkManualName">
                <use xlink:href="#easy-doc_Rightbutton"></use>
              </svg>
            </div>
            <div class="desc" v-html="item.description"></div>
          </div>
        </div>
      </div>
      <div class="ed-manual-catalogues" v-else>
        <div class="title">操作手册目录</div>
        <div class="ed-manual-list">
          <div class="ed-manual-item" v-for="item in documents.manuals" @click="manualClick(item)">
            <div class="title">
              {{ item.name }}
              <svg class="icon btn-next" aria-hidden>
                <use xlink:href="#easy-doc_Rightbutton"></use>
              </svg>
            </div>
            <div class="desc">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ed-panel-btn" :style="btnStyle">
      <div class="ed-setting">
        <svg class="icon" aria-hidden>
          <use xlink:href="#easy-doc_set"></use>
        </svg>
      </div>
      <div class="ed-lock" @click="toggleLock">
        <template v-if="lock">
          <svg class="icon" aria-hidden>
            <use xlink:href="#easy-doc_lock"></use>
          </svg>
          <span class="desc"> 取消钉住吸附 </span>
        </template>
        <template v-else>
          <svg class="icon" aria-hidden>
            <use xlink:href="#easy-doc_unlock1"></use>
          </svg>
          <span class="desc"> 钉住拖拽 </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
// import ManualRender from '../../model/render/ManualRender.ts'
import { NodeTypeEnum } from '../../../types/index.ts'
import { writeNodeTypeCache, writeCurrentGuideCache, writeCurrentManualCache } from '../../utils/cache.ts'
import { readCache, writeCurrentStepCache } from '../../utils/index.ts'
import HandleDataController from '../../controller/HandleDataController.ts'
import EasyDocFactory from '../../EasyDocFactory.ts'

export default {
  name: 'index',
  data() {
    return {
      tagActive: false,
      lock: false,
      documentActive: undefined,
      currentManual: undefined,
      currentStepIdx: undefined,
      documents: {},
      documentTypes: [
        { type: 'projects', icon: '#easy-doc_signboard', name: '项目说明' },
        { type: 'pages', icon: '#easy-doc_signboard', name: '页面说明' },
        { type: 'docs', icon: '#easy-doc_template', name: '原型说明' },
        { type: 'edits', icon: '#easy-doc_editor', name: '编辑说明' },
        { type: 'manuals', icon: '#easy-doc_tradealert', name: '操作手册' },
      ],
      panelStyle: {
        offsetX: 0,
        offsetY: 0,
        left: '100%',
        top: 0,
      },
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.documents = this.jsonData
      this.recoveryScene()
      if (Object.keys(this.documents).length === 1 && this.documents.manuals) {
        this.documentActive = 'manuals'
      }
    },
    dragstartPanel(e) {
      if (this.lock) {
        this.panelStyle.offsetX = e.offsetX
        this.panelStyle.offsetY = e.offsetY
      }
    },
    dragoverPanel(e) {
      if (this.lock) {
        this.panelStyle.left = `${e.clientX - this.panelStyle.offsetX}px`
        this.panelStyle.top = `${e.clientY - this.panelStyle.offsetY}px`
      }
    },
    mouseleave(e) {
      if (!this.lock && this.tagActive) {
        this.tagActive = false
        this.panelStyle = {
          offsetX: 0,
          offsetY: 0,
          left: '100%',
          top: 0,
        }
      }
    },
    backManualCatalogues() {
      this.currentStepIdx = undefined
      this.currentManual = undefined
      writeCurrentManualCache()
      writeCurrentStepCache()
    },
    manualClick(item) {
      this.currentManual = item
      writeCurrentManualCache(item)
      // 当前url是操作手册initUrl则直接打开第一步，否则跳转到initUrl
      const nowIsInitUrl = new RegExp(`^${EasyDocFactory.urlPrefix + item.initUrl}$`).test(window.location.pathname)
      if (!nowIsInitUrl) {
        window.location.href = `${window.location.origin}${EasyDocFactory.urlPrefix}${item.initUrl}`
      } else {
        this.currentStepIdx = 0
        writeCurrentStepCache(0)
        EasyDocFactory.handleData.getRenderManualNode(item, 0)
      }
    },
    typeChange(item) {
      if (this.documentActive && this.documentActive === item.type) {
        // 销毁界面上的提示
        this.documentActive = undefined
        EasyDocFactory.handleRender.destroy()
        return
      } else {
        this.documentActive = item.type
        // doc、page需要清除销毁滚轮监听展示提示
        EasyDocFactory.handleData.destroyScrollEvent()
        const nodeType = item.type.slice(0, -1).toUpperCase()
        writeNodeTypeCache(nodeType)
        if (nodeType === 'MANUAL') {
          /* 根据缓存数据判断渲染热门目录或操作详情 */
          const currentStep = readCache('currentStep')
          const currentManual = readCache('currentManual')
          if (currentManual && Object.keys(currentManual).length && typeof currentStep === 'number') {
            EasyDocFactory.handleData.getRenderManualNode(currentManual, currentStep)
          }
        } else {
          EasyDocFactory.handleData.getBaseRenderNode(nodeType, this.documents[item.type])
        }
      }
    },
    toggleLock() {
      this.lock = !this.lock
      if (this.lock === false) {
        this.panelStyle = {
          offsetX: 0,
          offsetY: 0,
          left: innerWidth - 336 + 'px',
          top: 0,
        }
      }
    },
    tagClick() {
      this.tagActive = !this.tagActive
      this.panelStyle = {
        offsetX: 0,
        offsetY: 0,
        left: this.tagActive ? innerWidth - 336 + 'px' : '100%',
        top: 0,
      }
    },
    manualStepItem(currentStep, currentStepIdx) {
      if (this.currentStepIdx === currentStepIdx) {
        return
      }
      this.currentStepIdx = currentStepIdx
      if (currentStep && currentStep.type === 'link' && currentStep.linkManualName) {
        // 跳转到其他操作手册
        const targetManual = this.documents.manuals.find(({ name }) => name === currentStep.linkManualName)
        if (targetManual && targetManual.initUrl) {
          writeCurrentStepCache(0)
          writeCurrentManualCache(targetManual)
          this.currentStepIdx = 0
          this.currentManual = targetManual
          EasyDocFactory.handleData.getRenderManualNode(targetManual, this.currentStepIdx)
          const nowIsInitUrl = new RegExp(`^${EasyDocFactory.urlPrefix + targetManual.initUrl}$`).test(
            window.location.pathname,
          )
          if (!nowIsInitUrl) {
            window.location.href = EasyDocFactory.urlPrefix + targetManual.initUrl
          }
        }
        return
      }
      // 缓存当前步骤
      writeCurrentStepCache(currentStepIdx)
      EasyDocFactory.handleData.getRenderManualNode(this.currentManual, currentStepIdx)
    },
    recoveryScene() {
      const nodeType = readCache('nodeType')
      const currentStep = readCache('currentStep')
      const currentManual = readCache('currentManual')
      // 优先判断当前步骤的下一步URL是否匹配，不匹配则从头查找是否存在匹配，存在则恢复现场，不存在则清除数据
      if (nodeType === NodeTypeEnum.MANUAL && currentManual) {
        this.documentActive = 'manuals'
        this.currentManual = currentManual
        this.currentStepIdx = currentStep
        this.recoverManualScene()
      } else {
        this.clearManualOrGuideCache()
      }
    },
    recoverManualScene() {
      if (!this.currentManual || this.currentStepIdx) {
        return
      }
      let stepIdx = -1
      // 匹配当前步骤url,可能是当前页面刷新
      const currentRule = new RegExp(`^${this.currentManual.steps[this.currentStepIdx].url}$`).test(
        window.location.pathname,
      )
      if (currentRule) {
        stepIdx = this.currentStepIdx
      }
      // 匹配下一步url,可能是跳转页面
      if (stepIdx === -1) {
        const nextRule =
          this.currentStepIdx + 1 < this.currentManual.steps.length &&
          new RegExp(`^${this.currentManual.steps[this.currentStepIdx + 1].url}$`).test(window.location.pathname)
        if (nextRule) {
          stepIdx = this.currentStepIdx + 1
        }
      }
      // 从头开始匹配当前操作手册所有url
      if (stepIdx === -1) {
        stepIdx = this.currentManual.steps.findIndex((step) =>
          new RegExp(`^${step.url}$`).test(window.location.pathname),
        )
      }
      // 恢复渲染（为啥加2s定时器？因为页面刚进来还在请求数据，docId的目标节点可能还没渲染）
      // debugger
      if (stepIdx !== -1) {
        setTimeout(() => {
          writeCurrentStepCache(stepIdx)
          EasyDocFactory.handleData.getRenderManualNode(this.currentManual, stepIdx)
          // 有争议，暂时不展开
          // setTimeout(()=>{
          //   PanelDom.autoExpend(NodeTypeEnum.MANUAL)
          // },250)
        }, 1000)
      } else {
        // url不匹配展示当前数据内容
        // PanelDom.autoExpend(NodeTypeEnum.MANUAL)
        writeCurrentStepCache(this.currentStepIdx)
        EasyDocFactory.handleData.getRenderManualNode(this.currentManual, this.currentStepIdx)
      }
    },
    clearManualOrGuideCache() {
      writeNodeTypeCache()
      writeCurrentStepCache()
      writeCurrentManualCache()
      // writeCurrentGuideCache()
    },
    goEasyDocDocument() {
      if (EasyDocFactory.EasyDocDocumentUrl !== false) {
        window.open(EasyDocFactory.EasyDocDocumentUrl)
      }
    },
  },
  computed: {
    EasyDocDocumentUrlStyle() {
      if (EasyDocFactory.EasyDocDocumentUrl !== false) {
        return {
          textDecoration: 'underline',
        }
      } else {
        return {}
      }
    },
    documentTypesFilter() {
      const modules = Object.keys(this.documents)
      return this.documentTypes.filter((item) => modules.some((it) => it === item.type))
    },
    stepStyle() {
      return {
        height: innerHeight - 224 - 40 + 'px',
      }
    },
    btnStyle() {
      if (this.documentActive === 'manuals') {
        return {
          top: innerHeight - 40 + 'px',
        }
      }
    },
  },
}
</script>

<style lang="less" scoped>
.ed-panel {
  position: fixed;
  /*top: 0;*/
  /*left: calc(100% + 1px);*/
  z-index: 99999;
  width: 336px;
  will-change: auto;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  transition: left 0.3s linear;
  &:hover {
    left: calc(100% - 335px);
  }

  &.show {
    left: calc(100% - 335px);
  }

  a {
    color: #ff9100;
    text-decoration: underline;

    &:hover {
      color: #ff6600;
    }
  }

  &-content {
    position: relative;
    width: 100%;
    padding-bottom: 10px;
    color: #fff;
    box-sizing: border-box;
    opacity: 0.85;
    background: linear-gradient(360deg, #ff9100, #ff6600);
    box-shadow: 0px 2px 4px 0px rgba(255, 169, 63, 0.39);
    cursor: pointer;

    .tag {
      position: absolute;
      top: 0;
      left: -20px;
      width: 20px;
      height: 40px;
      line-height: 40px;
      border-radius: 20px 0 0px 20px;
      background: #ff6600;
      box-shadow: -4px 1px 5px 0px rgba(0, 0, 0, 0.2);
      color: #fff;
      font-size: 12px;
      text-align: center;
      cursor: pointer;
      overflow: hidden;
      transition: all 0.4s;
      .icon {
        text-align: center;
        font-size: 18px;
        animation: finger infinite 2s;
        vertical-align: middle;
      }

      &--tip {
        width: 100px;
        left: -100px;
      }

      &-tip {
        display: inline-block;
      }
    }

    .title {
      position: relative;
      display: block;
      width: 80%;
      margin-left: 24px;
      line-height: 26px;
      padding: 16px 0 6px 0;
      font-size: 18px;
      font-family: PingFang, PingFang-SC;
      font-weight: 700;
      text-align: left;
      color: #fff !important;
      z-index: 99;
    }

    .ed-menu {
      .easydoc-type {
        position: relative;
        width: 80%;
        line-height: 20px;
        box-sizing: border-box;
        padding: 4px 0 4px 8px;
        margin: 6px 0 6px 16px;
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        color: #fff;
        line-height: 20px;
        cursor: pointer;
        transition: all 0.2s;
        border: 1px solid transparent;

        &:hover,
        &.active {
          width: 80%;
          border: 1px solid #ffffff;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.1);
        }

        &__icon {
          position: absolute;
          left: 6px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 20px;
          vertical-align: bottom;
        }

        select {
          color: #fff;
          background: transparent;
          border: none;
          outline: none;

          option {
            background: #ffaa36;
            border: none;
            outline: none;
          }
        }
      }
    }
  }

  &-step {
    display: flex;
    position: absolute;
    height: 0;
    width: 100%;
    min-height: 40px;
    overflow: hidden;
    box-sizing: content-box;
    background-color: rgba(255, 255, 255, 0.85);
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;

    .ed-manual-catalogues {
      box-sizing: border-box;
      width: 100%;
      flex-shrink: 0;
      padding: 4px 18px 50px;
      z-index: 1000;
      animation: showSteps 0.2s ease-in-out alternate;
      overflow: auto;

      .title {
        font-size: 16px;
        margin: 10px 0 10px 0;
        text-align: left;
      }

      .sub-title {
        font-size: 14px;
        line-height: 1.4em;
        color: #333;
        text-align: center;
        margin-top: 20px;
      }

      .ed-manual-list {
        margin-top: 20px;

        .ed-manual-item {
          position: relative;
          padding: 12px;
          border: 1px solid #c3c3c3;
          cursor: pointer;
          background-color: #fff;
          transition: all 0.4s;
          margin-top: 12px;

          &:hover {
            border-color: #ff7920;

            .btn-next {
              color: #ff7920 !important;
            }
          }

          .title {
            font-size: 14px;
            margin-top: 0;
            margin-bottom: 0;
            font-weight: normal;
            color: #333;

            .btn-next {
              font-size: 26px;
              color: #666;
              position: absolute;
              top: 20px;
              right: 12px;
              transform: translateY(-50%);
              transition: color 0.4s;

              &:hover {
                color: #ff7920;
              }
            }
          }

          .desc {
            font-size: 13px;
            line-height: 1.4;
            color: #999;
            margin-top: 10px;
          }
        }
      }
    }

    .ed-manual-content {
      box-sizing: border-box;
      width: 100%;
      flex-shrink: 0;
      padding: 4px 18px 50px;
      z-index: 1000;
      animation: showSteps 0.2s ease-in-out alternate;
      overflow: auto;
      position: relative;

      > .icon {
        font-size: 20px;
        color: #999;
        position: absolute;
        left: 10px;
        top: 10px;
        cursor: pointer;

        &:hover {
          color: #ff7920;
        }
      }

      > .title {
        font-size: 16px;
        margin: 10px 0 10px 0;
        text-align: center;
      }

      .sub-title {
        font-size: 12px;
        color: #999;
        line-height: 1.4em;
        text-align: center;
        font-weight: normal;
      }

      .manual-step-list {
        margin-top: 20px;

        .manual-step-item {
          position: relative;
          padding: 12px;
          border: 1px solid #c3c3c3;
          cursor: pointer;
          background-color: #fff;
          transition: all 0.4s;
          margin-top: 12px;

          &:hover,
          &.active {
            border-color: #ff7920;

            .btn-next {
              color: #ff7920 !important;
            }
          }

          .title {
            font-size: 14px;
            margin-top: 0;
            margin-bottom: 0;
            font-weight: normal;
            color: #333;

            .btn-next {
              font-size: 26px;
              color: #666;
              position: absolute;
              top: 20px;
              right: 12px;
              transform: translateY(-50%);
              transition: color 0.4s;

              &:hover {
                color: #ff7920;
              }
            }
          }

          .desc {
            font-size: 13px;
            line-height: 1.4;
            color: #999;
            margin-top: 10px;
          }
        }
      }
    }
  }

  &-btn {
    position: absolute;
    height: 40px;
    width: 100%;
    bottom: -40px;
    z-index: 1001;
    background: linear-gradient(360deg, #ff9100, #ff6600);
    opacity: 0.85;

    .ed-lock {
      position: absolute;
      top: 0px;
      right: 10px;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
      z-index: 999;
      transition: all 0.2s;
      display: flex;
      padding: 10px 12px;

      &.active {
        .easy-doc_lock {
          display: block;
        }

        .easy-doc_unlock1 {
          display: none;
        }
      }

      .easy-doc_lock {
        display: none;
      }

      .easy-doc_unlock1 {
        display: block;
      }

      .desc {
        padding: 3px 0 0 3px;
        font-size: 12px;
      }
    }

    .ed-setting {
      position: absolute;
      top: 0px;
      left: 10px;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
      z-index: 999;
      transition: all 0.2s;
      padding: 6px 0;
    }
  }
}

@keyframes finger {
  0% {
    transform: translate(-1px);
  }

  25% {
    transform: translate(1.5px);
  }

  50% {
    transform: translate(-1px);
  }

  75% {
    transform: translate(1.5px);
  }

  100% {
    transform: translate(-1px);
  }
}

@keyframes scaleDraw {
  0% {
    transform: scale(1); /*开始为原始大小*/
  }
  25% {
    transform: scale(1.1); /*放大1.1倍*/
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
}
</style>
