import Vue from 'vue'

Vue.directive('drag-me', {
  bind: function (ele, binding, vnode) {
    let pos = { top: 0, left: 0, x: 0, y: 0 }
    const mouseMoveHandler = function (e) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x
      const dy = e.clientY - pos.y

      // Scroll the element
      ele.scrollTop = pos.top - dy
      ele.scrollLeft = pos.left - dx
    }
    const mouseDownHandler = function (e) {
      ele.style.cursor = 'grabbing'
      ele.style.userSelect = 'none'
      pos = {
        // The current scroll
        left: ele.scrollLeft,
        top: ele.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      }
      ele.addEventListener('mouseup', mouseUpHandler)
      ele.addEventListener('mousemove', mouseMoveHandler)
    }
    const mouseUpHandler = function (e) {
      ele.style.cursor = 'grab'
      ele.style.removeProperty('user-select')
      ele.removeEventListener('mousemove', mouseMoveHandler)
    }
    const mouseOutHandler = function (e) {
      ele.style.cursor = 'grab'
      ele.style.removeProperty('user-select')
      ele.removeEventListener('mousemove', mouseMoveHandler)
    }

    ele.addEventListener('mousedown', mouseDownHandler)
    ele.addEventListener('mouseup', mouseUpHandler)
    ele.addEventListener('mouseout', mouseOutHandler)
  },
})
