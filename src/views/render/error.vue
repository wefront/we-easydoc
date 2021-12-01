<template>
  <div class="easydoc-error">{{ value }}</div>
</template>

<script>
export default {
  name: 'ErrorBlock',
  props: {
    value: String,
  },
  mounted() {
    setTimeout(() => {
      this.$emit('input', '')
    }, 3000)
  },
}
</script>
<style lang="less" scoped>
@import '../../css/var';
.easydoc-error {
  font-size: 12px;
  color: #fff;
  background: @main-color;
  padding: 4px 12px;
  // animation: errorIn 3s ease-in-out;
  opacity: 0.8;
}

// @keyframes errorIn {
//   0% {
//     transform: translateY(-100%);
//     opacity: 0;
//   }
//   10% {
//     transform: translateY(0);
//     opacity: 0.8;
//   }
//   90% {
//     transform: translateY(0);
//     opacity: 0.8;
//   }
//   100% {
//     transform: translateY(-100%);
//     opacity: 0;
//   }
// }
</style>
