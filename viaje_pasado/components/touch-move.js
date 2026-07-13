AFRAME.registerComponent('touch-move', {
  init: function () {
    var isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (!isTouch) return

    var container = document.createElement('div')
    container.id = 'touch-move'
    container.innerHTML =
      '<div class="tm-row"><button class="tm-btn" data-key="KeyW">&#9650;</button></div>' +
      '<div class="tm-row"><button class="tm-btn" data-key="KeyA">&#9664;</button>' +
      '<button class="tm-btn" data-key="KeyS">&#9660;</button>' +
      '<button class="tm-btn" data-key="KeyD">&#9654;</button></div>'

    var style = document.createElement('style')
    style.textContent =
      '#touch-move{' +
      'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);' +
      'z-index:1000;display:flex;flex-direction:column;align-items:center;gap:4px;' +
      'touch-action:none;user-select:none;' +
      '}' +
      '.tm-row{display:flex;gap:12px;}' +
      '.tm-btn{' +
      'width:56px;height:56px;border-radius:50%;border:2px solid rgba(255,255,255,0.5);' +
      'background:rgba(0,0,0,0.3);color:rgba(255,255,255,0.7);font-size:22px;' +
      'display:flex;align-items:center;justify-content:center;' +
      'backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);' +
      'touch-action:none;cursor:pointer;outline:none;' +
      '}' +
      '.tm-btn:active{background:rgba(255,255,255,0.2);}'

    document.head.appendChild(style)
    document.body.appendChild(container)

    var activeKeys = {}

    function dispatch(code, type) {
      if (activeKeys[code] === (type === 'keydown')) return
      activeKeys[code] = type === 'keydown'
      document.dispatchEvent(new KeyboardEvent(type, { code: code, bubbles: true }))
    }

    var btns = container.querySelectorAll('.tm-btn')
    for (var i = 0; i < btns.length; i++) {
      ;(function (btn) {
        var code = btn.getAttribute('data-key')

        btn.addEventListener('touchstart', function (e) {
          e.preventDefault()
          dispatch(code, 'keydown')
        })

        btn.addEventListener('touchend', function (e) {
          e.preventDefault()
          dispatch(code, 'keyup')
        })

        btn.addEventListener('touchcancel', function (e) {
          dispatch(code, 'keyup')
        })
      })(btns[i])
    }
  }
})
