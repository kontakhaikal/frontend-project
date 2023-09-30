export function debounce(f: Function, wait: number, immediate: boolean) {
  let timeOutId: number | null
  return () => {
    if (timeOutId != null) {
      clearTimeout(timeOutId)
    }
    const callNow = immediate && timeOutId != null
    timeOutId = setTimeout(f, wait)
    if (callNow) f()
  }
}
