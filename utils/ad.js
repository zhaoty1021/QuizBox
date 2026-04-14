function showRewardedAd(adUnitId, onSuccess, onFail) {
  var ad = wx.createRewardedVideoAd({ adUnitId: adUnitId })

  ad.onError(function (err) {
    console.error('广告加载失败', err)
    wx.showToast({ title: '广告加载失败，请稍后重试', icon: 'none' })
    if (onFail) onFail(err)
  })

  ad.onClose(function (res) {
    if (res && res.isEnded) {
      if (onSuccess) onSuccess()
    } else {
      wx.showToast({ title: '需要看完才能解锁哦', icon: 'none' })
      if (onFail) onFail('not_ended')
    }
  })

  ad.load()
    .then(function () { return ad.show() })
    .catch(function () {
      ad.show().catch(function (err) {
        wx.showToast({ title: '广告暂时不可用', icon: 'none' })
        if (onFail) onFail(err)
      })
    })
}

module.exports = { showRewardedAd }
