AFRAME.registerComponent('collision-player', {
  schema: {
    radius: { default: 0.3 }
  },

  init: function () {
    this.colliders = []
    this._collect()
  },

  _collect: function () {
    this.colliders = []
    var els = document.querySelectorAll('.collider')
    for (var i = 0; i < els.length; i++) {
      var el = els[i]
      var pos = el.object3D.position
      var w = el.getAttribute('width')
      var h = el.getAttribute('height')
      var d = el.getAttribute('depth')
      if (w == null) {
        var geo = el.getAttribute('geometry')
        if (geo) { w = geo.width; h = geo.height; d = geo.depth }
      }
      if (w == null) continue
      this.colliders.push({
        cx: pos.x, cy: pos.y, cz: pos.z,
        hw: w / 2, hh: h / 2, hd: d / 2
      })
    }
  },

  tick: function () {
    if (this.colliders.length === 0) { this._collect(); return }
    var pos = this.el.object3D.position
    var r = this.data.radius

    for (var i = 0; i < this.colliders.length; i++) {
      var c = this.colliders[i]
      var minX = c.cx - c.hw - r
      var maxX = c.cx + c.hw + r
      var minZ = c.cz - c.hd - r
      var maxZ = c.cz + c.hd + r

      if (pos.x >= minX && pos.x <= maxX && pos.z >= minZ && pos.z <= maxZ) {
        var dl = pos.x - minX
        var dr = maxX - pos.x
        var db = pos.z - minZ
        var df = maxZ - pos.z
        var min = Math.min(dl, dr, db, df)
        if (dl === min) pos.x = minX
        else if (dr === min) pos.x = maxX
        else if (db === min) pos.z = minZ
        else pos.z = maxZ
        break
      }
    }
  }
})
