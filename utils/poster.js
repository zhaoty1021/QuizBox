var GRADIENTS = {
  destiny:    ['#1a0533', '#4a0e5e'],
  psychology: ['#0d1b3e', '#1a3a6e'],
  life:       ['#0a2a2a', '#1a5a5a'],
  comedy:     ['#2a1a00', '#5a3a00'],
  relationship: ['#2a0a1a', '#5a1a3a'],
  brainhole:  ['#0a2a0a', '#1a5a1a'],
}

function drawRoundRect(ctx, x, y, w, h, r) {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  var chars = text.split('')
  var line = ''
  var currentY = y
  for (var i = 0; i < chars.length; i++) {
    var testLine = line + chars[i]
    if (ctx.measureText(testLine).width > maxWidth && i > 0) {
      ctx.fillText(line, x, currentY)
      line = chars[i]
      currentY += lineHeight
    } else {
      line = testLine
    }
  }
  ctx.fillText(line, x, currentY)
}

function generatePoster(params) {
  var category = params.category
  var testTitle = params.testTitle
  var resultTitle = params.resultTitle
  var resultDesc = params.resultDesc

  return new Promise(function (resolve, reject) {
    var query = wx.createSelectorQuery()
    query.select('#poster-canvas')
      .fields({ node: true, size: true })
      .exec(function (res) {
        if (!res || !res[0] || !res[0].node) {
          reject(new Error('canvas not found'))
          return
        }

        var canvas = res[0].node
        var ctx = canvas.getContext('2d')
        var sysInfo = wx.getWindowInfo ? wx.getWindowInfo() : wx.getSystemInfoSync()
        var dpr = sysInfo.pixelRatio || 2
        var W = 375
        var H = 667

        canvas.width = W * dpr
        canvas.height = H * dpr
        ctx.scale(dpr, dpr)

        // 1. 背景渐变
        var colors = GRADIENTS[category] || GRADIENTS.destiny
        var grad = ctx.createLinearGradient(0, 0, 0, H)
        grad.addColorStop(0, colors[0])
        grad.addColorStop(1, colors[1])
        ctx.fillStyle = grad
        ctx.fillRect(0, 0, W, H)

        // 2. 测试标题（顶部小字）
        ctx.fillStyle = 'rgba(255,255,255,0.6)'
        ctx.font = '14px PingFang SC'
        ctx.textAlign = 'center'
        ctx.fillText(testTitle, W / 2, 60)

        // 3. 装饰线
        ctx.strokeStyle = 'rgba(255,255,255,0.3)'
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(40, 80)
        ctx.lineTo(W - 40, 80)
        ctx.stroke()

        // 4. 结果标题（大字主视觉）
        ctx.fillStyle = '#ffffff'
        ctx.font = 'bold 28px PingFang SC'
        ctx.textAlign = 'center'
        wrapText(ctx, resultTitle, W / 2, 160, W - 80, 40)

        // 5. 描述文字
        ctx.fillStyle = 'rgba(255,255,255,0.85)'
        ctx.font = '16px PingFang SC'
        wrapText(ctx, resultDesc, W / 2, 260, W - 80, 26)

        // 6. 底部区域背景
        ctx.fillStyle = 'rgba(255,255,255,0.1)'
        drawRoundRect(ctx, W / 2 - 80, H - 160, 160, 120, 12)
        ctx.fill()

        // 7. 底部提示文字
        ctx.fillStyle = 'rgba(255,255,255,0.6)'
        ctx.font = '12px PingFang SC'
        ctx.textAlign = 'center'
        ctx.fillText('长按扫码测一测', W / 2, H - 45)

        // 8. 导出图片
        setTimeout(function () {
          wx.canvasToTempFilePath({
            canvas: canvas,
            success: function (r) { resolve(r.tempFilePath) },
            fail: function (err) { reject(err) },
          })
        }, 100)
      })
  })
}

module.exports = { generatePoster: generatePoster }
