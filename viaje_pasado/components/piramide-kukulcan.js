AFRAME.registerComponent('piramide-kukulcan', {
  schema: {
    color: { type: 'color', default: '#C4A87C' },
    detalle: { type: 'string', default: 'alto' }
  },

  init: function () {
    var el = this.el
    var data = this.data

    var texId = this._crearTextura()
    var detalle = data.detalle
    var baseColor = data.color
    var hasStairs = detalle !== 'bajo'
    var hasTemple = detalle === 'alto'
    var hasHeads = detalle === 'alto'

    // Plataforma base
    this._caja(el, 12, 0.3, 12, '0 -0.15 0', texId, this._oscurecer(baseColor, 25), 0.95)

    // 9 niveles escalonados
    for (var i = 0; i < 9; i++) {
      var w = +(10 - i * 1.1).toFixed(2)
      var y = i * 1.2
      this._nivel(el, i, w, 1.2, y, baseColor, texId, detalle)
    }

    // Templo superior
    if (hasTemple) {
      this._templo(el, 9 * 1.2)
    }

    // Cabezas de serpiente
    if (hasHeads) {
      this._cabezasSerpiente(el)
    }
  },

  _crearTextura: function () {
    var id = 'piedra_' + Math.random().toString(36).substr(2, 6)
    var canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    var ctx = canvas.getContext('2d')

    // Base color piedra
    ctx.fillStyle = '#D4C4A8'
    ctx.fillRect(0, 0, 256, 256)

    // Ruido de grano
    for (var n = 0; n < 1200; n++) {
      var x = Math.random() * 256
      var y = Math.random() * 256
      var r = Math.random() * 10 + 1
      var a = (Math.random() - 0.5) * 0.18
      ctx.fillStyle = a > 0
        ? 'rgba(230,215,190,' + a + ')'
        : 'rgba(50,35,25,' + (-a) + ')'
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    // Grietas
    for (var g = 0; g < 12; g++) {
      ctx.strokeStyle = 'rgba(60,40,30,0.15)'
      ctx.lineWidth = Math.random() * 2 + 0.3
      ctx.beginPath()
      var sx = Math.random() * 256
      var sy = Math.random() * 256
      ctx.moveTo(sx, sy)
      var segs = Math.floor(Math.random() * 5) + 3
      for (var s = 0; s < segs; s++) {
        sx += (Math.random() - 0.5) * 45
        sy += (Math.random() - 0.5) * 45
        ctx.lineTo(sx, sy)
      }
      ctx.stroke()
    }

    // Manchas de musgo
    for (var m = 0; m < 40; m++) {
      var mx = Math.random() * 256
      var my = Math.random() * 256
      var mr = Math.random() * 20 + 4
      var grad = ctx.createRadialGradient(mx, my, 0, mx, my, mr)
      grad.addColorStop(0, 'rgba(70,90,40,0.1)')
      grad.addColorStop(1, 'rgba(70,90,40,0)')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(mx, my, mr, 0, Math.PI * 2)
      ctx.fill()
    }

    var img = document.createElement('img')
    img.id = id
    img.src = canvas.toDataURL()

    var assets = document.querySelector('a-assets')
    if (!assets) {
      assets = document.createElement('a-assets')
      document.querySelector('a-scene').appendChild(assets)
    }
    assets.appendChild(img)
    return id
  },

  _caja: function (parent, w, h, d, pos, texId, color, roughness) {
    var box = document.createElement('a-box')
    var mat = 'color: ' + color + '; roughness: ' + (roughness || 0.85) + '; metalness: 0'
    if (texId) mat = 'src: #' + texId + '; ' + mat
    box.setAttribute('material', mat)
    box.setAttribute('width', w)
    box.setAttribute('height', h)
    box.setAttribute('depth', d)
    box.setAttribute('position', pos)
    parent.appendChild(box)
    return box
  },

  _oscurecer: function (hex, amount) {
    var r = Math.max(0, parseInt(hex.slice(1, 3), 16) - amount)
    var g = Math.max(0, parseInt(hex.slice(3, 5), 16) - amount)
    var b = Math.max(0, parseInt(hex.slice(5, 7), 16) - amount)
    return '#' + [r, g, b].map(function (v) {
      return ('0' + Math.round(v).toString(16)).slice(-2)
    }).join('')
  },

  _aclarar: function (hex, amount) {
    var r = Math.min(255, parseInt(hex.slice(1, 3), 16) + amount)
    var g = Math.min(255, parseInt(hex.slice(3, 5), 16) + amount)
    var b = Math.min(255, parseInt(hex.slice(5, 7), 16) + amount)
    return '#' + [r, g, b].map(function (v) {
      return ('0' + Math.round(v).toString(16)).slice(-2)
    }).join('')
  },

  _variarColor: function (hex) {
    var r = parseInt(hex.slice(1, 3), 16)
    var g = parseInt(hex.slice(3, 5), 16)
    var b = parseInt(hex.slice(5, 7), 16)
    var amount = Math.floor((Math.random() - 0.5) * 35)
    r = Math.max(0, Math.min(255, r + amount))
    g = Math.max(0, Math.min(255, g + amount))
    b = Math.max(0, Math.min(255, b + amount))
    return '#' + [r, g, b].map(function (v) {
      return ('0' + Math.round(v).toString(16)).slice(-2)
    }).join('')
  },

  _nivel: function (el, index, w, h, y, baseColor, texId, detalle) {
    var hasStairs = detalle !== 'bajo'
    var hasBalustrades = detalle === 'alto'
    var cols = Math.max(1, Math.min(6, Math.round(w / 1.8)))

    for (var row = 0; row < cols; row++) {
      for (var col = 0; col < cols; col++) {
        var bw = w / cols
        var bd = w / cols
        var bx = -w / 2 + col * bw + bw / 2
        var bz = -w / 2 + row * bd + bd / 2
        var jitter = 0.02
        bx += (Math.random() - 0.5) * jitter
        bz += (Math.random() - 0.5) * jitter
        var color = this._variarColor(baseColor)
        this._caja(el, bw * 0.96, h, bd * 0.96,
          this._pos(bx, y + h / 2, bz), texId, color, 0.9)
      }
    }

    if (!hasStairs) return

    // Escaleras en 4 caras
    var stairW = Math.max(1.2, w / 3)
    var stairD = 0.35
    var half = w / 2
    var stairColor = this._aclarar(baseColor, 15)

    var caras = [
      { x: 0, z: half + stairD / 2 },
      { x: 0, z: -half - stairD / 2 },
      { x: half + stairD / 2, z: 0 },
      { x: -half - stairD / 2, z: 0 }
    ]

    for (var s = 0; s < 4; s++) {
      var isNZ = s < 2
      var se = document.createElement('a-box')
      se.setAttribute('material',
        'src: #' + texId +
        '; color: ' + stairColor +
        '; roughness: 0.8; metalness: 0')
      se.setAttribute('width', isNZ ? stairW : stairD)
      se.setAttribute('height', h)
      se.setAttribute('depth', isNZ ? stairD : stairW)
      se.setAttribute('position', this._pos(caras[s].x, y + h / 2, caras[s].z))
      el.appendChild(se)

      // Balaustradas
      if (hasBalustrades && stairW > 0.5) {
        var balW = 0.15
        var gap = stairW / 2 + balW / 2
        var balColor = this._oscurecer(baseColor, 15)

        for (var sd = -1; sd <= 1; sd += 2) {
          var be = document.createElement('a-box')
          be.setAttribute('material',
            'src: #' + texId +
            '; color: ' + balColor +
            '; roughness: 0.9; metalness: 0')
          if (isNZ) {
            be.setAttribute('width', balW)
            be.setAttribute('height', h)
            be.setAttribute('depth', stairD * 1.4)
            be.setAttribute('position', this._pos(sd * gap, y + h / 2, caras[s].z))
          } else {
            be.setAttribute('width', stairD * 1.4)
            be.setAttribute('height', h)
            be.setAttribute('depth', balW)
            be.setAttribute('position', this._pos(caras[s].x, y + h / 2, sd * gap))
          }
          el.appendChild(be)
        }
      }
    }
  },

  _pos: function (x, y, z) {
    return x + ' ' + y + ' ' + z
  },

  _templo: function (el, topY) {
    // Base del templo (escalón)
    this._caja(el, 2, 0.15, 2, this._pos(0, topY + 0.075, 0), null, '#A08060', 0.9)
    this._caja(el, 1.8, 0.25, 1.8, this._pos(0, topY + 0.275, 0), null, '#B89A72', 0.85)

    // Muros
    this._caja(el, 1.5, 0.5, 1.5, this._pos(0, topY + 0.6, 0), null, '#B89A72', 0.85)

    // Puerta oscura empotrada (cara frontal +Z)
    var door = document.createElement('a-box')
    door.setAttribute('width', 0.35)
    door.setAttribute('height', 0.28)
    door.setAttribute('depth', 0.04)
    door.setAttribute('position', this._pos(0, topY + 0.6, 0.82))
    door.setAttribute('color', '#1A0D08')
    el.appendChild(door)

    // Cornisa
    var cornice = document.createElement('a-box')
    cornice.setAttribute('width', 1.7)
    cornice.setAttribute('height', 0.08)
    cornice.setAttribute('depth', 1.7)
    cornice.setAttribute('position', this._pos(0, topY + 0.89, 0))
    cornice.setAttribute('material', 'color: #A08060; roughness: 0.9; metalness: 0')
    el.appendChild(cornice)

    // Techo escalonado inferior
    this._caja(el, 2.1, 0.2, 2.1, this._pos(0, topY + 1.03, 0), null, '#967050', 0.9)
    // Techo escalonado superior
    this._caja(el, 1.4, 0.2, 1.4, this._pos(0, topY + 1.23, 0), null, '#8B6B4B', 0.95)
    // Cremación/cumbrera
    var crest = document.createElement('a-box')
    crest.setAttribute('width', 0.25)
    crest.setAttribute('height', 0.3)
    crest.setAttribute('depth', 0.25)
    crest.setAttribute('position', this._pos(0, topY + 1.48, 0))
    crest.setAttribute('material', 'color: #705040; roughness: 0.95; metalness: 0')
    el.appendChild(crest)
  },

  _cabezasSerpiente: function (el) {
    var dist = 5.5
    var dirs = [
      { x: 0, z: dist },
      { x: 0, z: -dist },
      { x: dist, z: 0 },
      { x: -dist, z: 0 }
    ]

    for (var d = 0; d < dirs.length; d++) {
      var dir = dirs[d]
      var isX = dir.x !== 0

      // Cabeza principal
      var head = document.createElement('a-box')
      head.setAttribute('width', isX ? 0.7 : 0.4)
      head.setAttribute('height', 0.35)
      head.setAttribute('depth', isX ? 0.4 : 0.7)
      head.setAttribute('position', this._pos(dir.x, 0.35, dir.z))
      head.setAttribute('material', 'color: #8B7355; roughness: 0.9; metalness: 0')
      el.appendChild(head)

      // Hocico (triangular, cono)
      var snout = document.createElement('a-cone')
      snout.setAttribute('radius-bottom', 0.2)
      snout.setAttribute('radius-top', 0.05)
      snout.setAttribute('height', 0.3)
      if (isX) {
        snout.setAttribute('rotation', '0 0 -90')
        snout.setAttribute('position', this._pos(dir.x + dir.x * 0.35, 0.35, 0))
      } else {
        snout.setAttribute('rotation', '90 0 0')
        snout.setAttribute('position', this._pos(0, 0.35, dir.z + dir.z * 0.35))
      }
      snout.setAttribute('material', 'color: #7A6548; roughness: 0.85; metalness: 0')
      el.appendChild(snout)

      // Ojos
      for (var e = -1; e <= 1; e += 2) {
        var eye = document.createElement('a-sphere')
        eye.setAttribute('radius', 0.08)
        if (isX) {
          eye.setAttribute('position', this._pos(dir.x, 0.45, e * 0.2))
        } else {
          eye.setAttribute('position', this._pos(e * 0.2, 0.45, dir.z))
        }
        eye.setAttribute('color', '#F5F0DC')
        el.appendChild(eye)

        var pupil = document.createElement('a-sphere')
        pupil.setAttribute('radius', 0.04)
        if (isX) {
          pupil.setAttribute('position', this._pos(dir.x + dir.x * 0.03, 0.45, e * 0.2))
        } else {
          pupil.setAttribute('position', this._pos(e * 0.2, 0.45, dir.z + dir.z * 0.03))
        }
        pupil.setAttribute('color', '#0A0A05')
        el.appendChild(pupil)
      }
    }
  }
})
