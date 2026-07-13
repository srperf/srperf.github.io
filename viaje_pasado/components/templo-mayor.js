AFRAME.registerComponent('templo-mayor', {
  schema: {
    color: { type: 'color', default: '#C4A080' },
    detalle: { type: 'string', default: 'alto' }
  },

  init: function () {
    var el = this.el
    var data = this.data

    var texId = this._crearTextura()
    var detalle = data.detalle
    var baseColor = data.color

    // Plataforma base
    this._caja(el, 16.5, 0.3, 13.5, '0 -0.15 0', texId, this._oscurecer(baseColor, 25), 0.95)

    // 4 cuerpos escalonados (base rectangular 15x12)
    var tierH = 2.0

    for (var i = 0; i < 4; i++) {
      var w = +(15 - i * 3.2).toFixed(2)
      var d = +(12 - i * 2.5).toFixed(2)
      var y = i * tierH
      this._nivel(el, w, d, tierH, y, baseColor, texId, detalle)
    }

    // Templos gemelos + estructura circular
    if (detalle === 'alto') {
      this._templos(el, 4 * tierH, baseColor, texId)
      this._circuloEhecatl(el, 4 * tierH)
    }
  },

  _crearTextura: function () {
    var id = 'tezontle_' + Math.random().toString(36).substr(2, 6)
    var canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    var ctx = canvas.getContext('2d')

    ctx.fillStyle = '#D4BFA0'
    ctx.fillRect(0, 0, 256, 256)

    for (var n = 0; n < 1200; n++) {
      var x = Math.random() * 256
      var y = Math.random() * 256
      var r = Math.random() * 10 + 1
      var a = (Math.random() - 0.5) * 0.2
      ctx.fillStyle = a > 0
        ? 'rgba(220,200,170,' + a + ')'
        : 'rgba(60,40,30,' + (-a) + ')'
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    for (var g = 0; g < 10; g++) {
      ctx.strokeStyle = 'rgba(80,55,40,0.12)'
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

  _pos: function (x, y, z) {
    return x + ' ' + y + ' ' + z
  },

  _nivel: function (el, w, d, h, y, baseColor, texId, detalle) {
    var hasStairs = detalle !== 'bajo'
    var cols = Math.max(2, Math.min(7, Math.round(w / 2.3)))
    var rows = Math.max(2, Math.min(6, Math.round(d / 2.3)))

    for (var row = 0; row < rows; row++) {
      for (var col = 0; col < cols; col++) {
        var bw = w / cols
        var bd = d / rows
        var bx = -w / 2 + col * bw + bw / 2
        var bz = -d / 2 + row * bd + bd / 2
        bx += (Math.random() - 0.5) * 0.02
        bz += (Math.random() - 0.5) * 0.02
        var color = this._variarColor(baseColor)
        this._caja(el, bw * 0.96, h, bd * 0.96,
          this._pos(bx, y + h / 2, bz), texId, color, 0.9)
      }
    }

    if (!hasStairs) return

    // Doble escalinata en la cara frontal (+Z)
    var stairD = 0.4
    var stairColor = this._aclarar(baseColor, 15)
    var halfD = d / 2
    var sTotal = w * 0.55  // ancho total ocupado por ambas escaleras
    var sW = sTotal / 2    // ancho de cada escalera

    // Escalera izquierda (Huitzilopochtli, -X)
    this._escalinata(el, -sW / 2, sW, h, y, halfD, stairD, texId, stairColor, baseColor, detalle)
    // Escalera derecha (Tláloc, +X)
    this._escalinata(el, sW / 2, sW, h, y, halfD, stairD, texId, stairColor, baseColor, detalle)

    // Balaustrada central (entre las dos escaleras)
    if (detalle === 'alto') {
      var bc = this._oscurecer(baseColor, 10)
      var cb = document.createElement('a-box')
      cb.setAttribute('material',
        'src: #' + texId + '; color: ' + bc + '; roughness: 0.9; metalness: 0')
      cb.setAttribute('width', 0.25)
      cb.setAttribute('height', h)
      cb.setAttribute('depth', stairD * 1.5)
      cb.setAttribute('position', this._pos(0, y + h / 2, halfD + stairD * 0.75))
      el.appendChild(cb)
    }
  },

  _escalinata: function (el, x, ancho, h, y, halfD, stairD, texId, color, baseColor, detalle) {
    var se = document.createElement('a-box')
    se.setAttribute('material',
      'src: #' + texId + '; color: ' + color + '; roughness: 0.8; metalness: 0')
    se.setAttribute('width', ancho)
    se.setAttribute('height', h)
    se.setAttribute('depth', stairD)
    se.setAttribute('position', this._pos(x, y + h / 2, halfD + stairD / 2))
    el.appendChild(se)

    if (detalle !== 'alto') return

    // Balaustradas laterales de la escalinata
    var bColor = this._oscurecer(baseColor, 12)
    var bw = 0.12
    var gap = ancho / 2 + bw / 2

    for (var sd = -1; sd <= 1; sd += 2) {
      var be = document.createElement('a-box')
      be.setAttribute('material',
        'src: #' + texId + '; color: ' + bColor + '; roughness: 0.9; metalness: 0')
      be.setAttribute('width', bw)
      be.setAttribute('height', h)
      be.setAttribute('depth', stairD * 1.6)
      be.setAttribute('position', this._pos(x + sd * gap, y + h / 2, halfD + stairD * 0.8))
      el.appendChild(be)
    }
  },

  _templos: function (el, topY, baseColor, texId) {
    var huitzX = -2.2
    var tlalocX = 2.2

    this._templo(el, topY, huitzX, '#8B2500', texId)  // Huitzilopochtli (rojo)
    this._templo(el, topY, tlalocX, '#1E5A99', texId)  // Tláloc (azul)
  },

  _templo: function (el, topY, xOff, accentColor, texId) {
    // Base escalón
    this._caja(el, 1.8, 0.25, 2.2, this._pos(xOff, topY + 0.125, 0), null, '#A08060', 0.9)

    // Muros
    this._caja(el, 1.4, 0.5, 1.8, this._pos(xOff, topY + 0.5, 0), null, '#B89A72', 0.85)

    // Puerta oscura
    var door = document.createElement('a-box')
    door.setAttribute('width', 0.3)
    door.setAttribute('height', 0.25)
    door.setAttribute('depth', 0.04)
    door.setAttribute('position', this._pos(xOff, topY + 0.5, 0.96))
    door.setAttribute('color', '#1A0D08')
    el.appendChild(door)

    // Techo escalonado inferior (con color del dios)
    this._caja(el, 2.0, 0.18, 2.4, this._pos(xOff, topY + 0.84, 0), null, accentColor, 0.85)

    // Techo escalonado superior
    this._caja(el, 1.3, 0.18, 1.6, this._pos(xOff, topY + 1.02, 0), null, this._oscurecer(accentColor, 20), 0.9)

    // Cremación/cumbrera
    var crest = document.createElement('a-box')
    crest.setAttribute('width', 0.2)
    crest.setAttribute('height', 0.25)
    crest.setAttribute('depth', 0.2)
    crest.setAttribute('position', this._pos(xOff, topY + 1.235, 0))
    crest.setAttribute('material', 'color: #705040; roughness: 0.95; metalness: 0')
    el.appendChild(crest)

    // Incensario (bracero) al lado del templo
    var incensario = document.createElement('a-cylinder')
    incensario.setAttribute('radius', 0.08)
    incensario.setAttribute('height', 0.25)
    incensario.setAttribute('position', this._pos(xOff + 1.1, topY + 0.125, 0))
    incensario.setAttribute('color', accentColor)
    el.appendChild(incensario)
  },

  _circuloEhecatl: function (el, topY) {
    // Estructura circular de Quetzalcóatl-Ehécatl entre los templos
    var base = document.createElement('a-cylinder')
    base.setAttribute('radius', 0.45)
    base.setAttribute('height', 0.3)
    base.setAttribute('position', this._pos(0, topY + 0.15, 0))
    base.setAttribute('material', 'color: #B89A72; roughness: 0.85; metalness: 0')
    el.appendChild(base)

    var walls = document.createElement('a-cylinder')
    walls.setAttribute('radius', 0.35)
    walls.setAttribute('height', 0.4)
    walls.setAttribute('position', this._pos(0, topY + 0.5, 0))
    walls.setAttribute('color', '#A08060')
    el.appendChild(walls)

    var roof = document.createElement('a-cone')
    roof.setAttribute('radius-bottom', 0.5)
    roof.setAttribute('radius-top', 0.05)
    roof.setAttribute('height', 0.35)
    roof.setAttribute('position', this._pos(0, topY + 0.875, 0))
    roof.setAttribute('material', 'color: #C4A060; roughness: 0.85; metalness: 0')
    el.appendChild(roof)
  }
})
