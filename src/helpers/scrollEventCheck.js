const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  console.log(rect.top)
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

const isEnterViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (rect.top < 120 && rect.top > 0) || (rect.top > -120 && rect.top < 0)
}

const checkScrollDirection = (event) => {
  if (event.wheelDelta && event.wheelDelta > 0) {
    return 'up'
  } else {
    return 'down'
  }
}

export default {
  isInViewport,
  isEnterViewport,
  checkScrollDirection
}
