AFRAME.registerComponent('model-color', {
  schema: {
    topColor: { type: 'color', default: '#D4C4A8' },
    midColor: { type: 'color', default: '#C4A87C' },
    bottomColor: { type: 'color', default: '#8B7355' },
    leftColor: { type: 'color', default: '#FFFFFF' },
    rightColor: { type: 'color', default: '#FFFFFF' },
    xBlend: { type: 'number', default: 0 },
    roughness: { type: 'number', default: 0.9 },
    metalness: { type: 'number', default: 0 }
  },

  init: function () {
    var self = this
    this._texCanvas = this._crearTextura()
    this.el.addEventListener('model-loaded', function () { self._apply() })
  },

  _crearTextura: function () {
    var canvas = document.createElement('canvas')
    canvas.width = 512
    canvas.height = 512
    var ctx = canvas.getContext('2d')
    var w = 512, h = 512

    ctx.fillStyle = '#E8E0D0'
    ctx.fillRect(0, 0, w, h)

    // Large grain
    for (var n = 0; n < 2500; n++) {
      var x = Math.random() * w, y = Math.random() * h
      var r = Math.random() * 18 + 3
      var a = (Math.random() - 0.5) * 0.14
      ctx.fillStyle = a > 0
        ? 'rgba(220,208,186,' + a + ')'
        : 'rgba(50,35,25,' + (-a) + ')'
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    // Medium grain
    for (var m = 0; m < 5000; m++) {
      var x = Math.random() * w, y = Math.random() * h
      var r = Math.random() * 6 + 1
      var a = (Math.random() - 0.5) * 0.18
      ctx.fillStyle = a > 0
        ? 'rgba(232,218,196,' + a + ')'
        : 'rgba(35,28,18,' + (-a) + ')'
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    // Cracks
    for (var g = 0; g < 25; g++) {
      ctx.strokeStyle = 'rgba(55,38,28,' + (Math.random() * 0.08 + 0.06) + ')'
      ctx.lineWidth = Math.random() * 1.8 + 0.3
      ctx.beginPath()
      var sx = Math.random() * w, sy = Math.random() * h
      ctx.moveTo(sx, sy)
      var segs = Math.floor(Math.random() * 5) + 2
      for (var s = 0; s < segs; s++) {
        sx += (Math.random() - 0.5) * 70
        sy += (Math.random() - 0.5) * 70
        ctx.lineTo(sx, sy)
      }
      ctx.stroke()
    }

    // Pitting
    for (var p = 0; p < 800; p++) {
      var x = Math.random() * w, y = Math.random() * h
      var r = Math.random() * 2 + 0.4
      ctx.fillStyle = 'rgba(40,28,18,' + (Math.random() * 0.06 + 0.03) + ')'
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    // Horizontal banding (like stone layers)
    for (var b = 0; b < 40; b++) {
      var y = Math.random() * h
      var hr = Math.random() * 4 + 1
      ctx.fillStyle = 'rgba(180,168,148,' + (Math.random() * 0.05 + 0.02) + ')'
      ctx.fillRect(0, y, w, hr)
    }

    return canvas
  },

  _apply: function () {
    var mesh = this.el.getObject3D('mesh')
    if (!mesh) return
    var data = this.data
    var top = this._hexToRgb(data.topColor)
    var mid = this._hexToRgb(data.midColor)
    var bot = this._hexToRgb(data.bottomColor)
    var left = this._hexToRgb(data.leftColor)
    var right = this._hexToRgb(data.rightColor)
    var tex = new THREE.CanvasTexture(this._texCanvas)
    tex.wrapS = tex.wrapT = THREE.RepeatWrapping
    tex.repeat.set(4, 4)

    var self = this

    mesh.traverse(function (node) {
      if (!node.isMesh || !node.geometry) return
      var geo = node.geometry
      var pos = geo.attributes.position
      if (!pos) return

      geo.computeBoundingBox()
      var bb = geo.boundingBox
      var minX = bb.min.x, maxX = bb.max.x
      var minY = bb.min.y, maxY = bb.max.y
      var minZ = bb.min.z, maxZ = bb.max.z
      var yRange = maxY - minY
      var xRange = maxX - minX
      var zRange = maxZ - minZ
      if (yRange === 0) return

      // Compute normals if missing
      if (!geo.attributes.normal) {
        geo.computeVertexNormals()
      }
      var norm = geo.attributes.normal

      // Generate UVs if missing (planar XZ)
      if (!geo.attributes.uv) {
        var uvs = new Float32Array(pos.count * 2)
        for (var i = 0; i < pos.count; i++) {
          uvs[i * 2] = (pos.getX(i) - minX) / xRange
          uvs[i * 2 + 1] = (pos.getZ(i) - minZ) / zRange
        }
        geo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
      }

      var colors = new Float32Array(pos.count * 3)

      for (var j = 0; j < pos.count; j++) {
        var px = pos.getX(j), py = pos.getY(j), pz = pos.getZ(j)

        // Height gradient
        var ty = (py - minY) / yRange
        var r, g, b

        if (ty < 0.35) {
          var lt = ty / 0.35
          r = bot.r + (mid.r - bot.r) * lt
          g = bot.g + (mid.g - bot.g) * lt
          b = bot.b + (mid.b - bot.b) * lt
        } else if (ty < 0.7) {
          r = mid.r
          g = mid.g
          b = mid.b
        } else {
          var tt = (ty - 0.7) / 0.3
          r = mid.r + (top.r - mid.r) * tt
          g = mid.g + (top.g - mid.g) * tt
          b = mid.b + (top.b - mid.b) * tt
        }

        // Side blend (Templo Mayor red/blue)
        if (data.xBlend > 0 && xRange > 0) {
          var tx = (px - minX) / xRange
          var lr = left.r + (right.r - left.r) * tx
          var lg = left.g + (right.g - left.g) * tx
          var lb = left.b + (right.b - left.b) * tx
          var bf = data.xBlend
          r = r * (1 - bf) + lr * bf
          g = g * (1 - bf) + lg * bf
          b = b * (1 - bf) + lb * bf
        }

        // Multi-octave noise for stone grain
        var n1 = self._noise(px * 0.3, py * 0.3, pz * 0.3)
        var n2 = self._noise(px * 0.8, py * 0.8, pz * 0.8)
        var n3 = self._noise(px * 2.4, py * 2.4, pz * 2.4)
        var n = (n1 * 0.5 + n2 * 0.35 + n3 * 0.15) * 0.12 - 0.06

        // Normal-based AO (crevices darker)
        if (norm) {
          var nx = norm.getX(j), ny = norm.getY(j), nz = norm.getZ(j)
          var ao = ny * 0.08 + 0.04
          n -= ao
        }

        colors[j * 3] = Math.max(0, Math.min(1, r + n))
        colors[j * 3 + 1] = Math.max(0, Math.min(1, g + n))
        colors[j * 3 + 2] = Math.max(0, Math.min(1, b + n))
      }

      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      node.material = new THREE.MeshStandardMaterial({
        vertexColors: true,
        map: tex,
        roughness: data.roughness,
        metalness: data.metalness
      })
    })
  },

  _noise: function (x, y, z) {
    // Simple pseudo-random noise from position
    var v = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.545
    return v - Math.floor(v)
  },

  _hexToRgb: function (hex) {
    var r = parseInt(hex.slice(1, 3), 16) / 255
    var g = parseInt(hex.slice(3, 5), 16) / 255
    var b = parseInt(hex.slice(5, 7), 16) / 255
    return { r: r, g: g, b: b }
  }
})
