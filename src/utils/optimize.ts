// 防抖
export function debounce(fn: (...args: any[]) => void, wait: number): () => void {
  let timer = 0
  return (...args) => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      fn(...args)
      timer = 0
    }, wait)
  }
}

// 节流
export function throttle(fn: (...args: any[]) => void, wait: number): () => void {
  let timer = true
  return (...args) => {
    if (!timer) return
    timer = false
    window.setTimeout(() => {
      fn(...args)
      timer = true
    }, wait)
  }
}
