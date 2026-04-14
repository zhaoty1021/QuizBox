var testLoader = require('../../utils/test-loader')
var ad = require('../../utils/ad')
var poster = require('../../utils/poster')
var { enhanceResult } = require('../../utils/result-enhance')

Page({
  data: {
    test: null,
    result: null,
    unlocked: false,
    hiddenUnlocked: false,
    posterPath: '',
    generating: false,
    bannerAdId: '',
    recommendTests: [],
    dimensionBars: [],
    rarityText: '',
  },

  onLoad: function (options) {
    var testId = options.testId
    var resultKey = options.resultKey
    var test = testLoader.getTestDetail(testId)
    if (!test || !test.results[resultKey]) {
      wx.showToast({ title: '结果加载失败', icon: 'none' })
      setTimeout(function () { wx.reLaunch({ url: '/pages/index/index' }) }, 1500)
      return
    }

    var rawResult = test.results[resultKey]

    // 构造 scoringOutput 用于增强（从 URL 参数无法传递完整对象，此处简化）
    var scoringOutput = { resultKey: resultKey }
    // 如果是权重型，从 URL 参数中解析维度百分比
    if (test.algorithm === 'weight' && options.dp) {
      try {
        scoringOutput.dimensionPercent = JSON.parse(decodeURIComponent(options.dp))
      } catch (e) {}
    }

    var enhanced = enhanceResult(rawResult, scoringOutput, test)
    var app = getApp()

    var allTests = testLoader.getAllTests()
    var others = allTests.filter(function (t) { return t.id !== testId })
    var recommend = others.sort(function () { return Math.random() - 0.5 }).slice(0, 3)

    this.setData({
      test: { id: test.id, title: test.title, category: test.category, algorithm: test.algorithm || 'score' },
      result: enhanced,
      dimensionBars: enhanced.dimensionBars || [],
      rarityText: enhanced.rarityText || '',
      unlocked: !app.globalData.adEnabled,
      hiddenUnlocked: !app.globalData.adEnabled,
      bannerAdId: app.globalData.adEnabled ? app.globalData.bannerAdId : '',
      recommendTests: recommend,
    })
  },

  // 解锁主结果
  onUnlockTap: function () {
    var that = this
    var app = getApp()
    ad.showRewardedAd(
      app.globalData.rewardedVideoAdId,
      function () { that.setData({ unlocked: true }) },
      function () {}
    )
  },

  // 解锁隐藏内容
  onUnlockHiddenTap: function () {
    var that = this
    var app = getApp()
    ad.showRewardedAd(
      app.globalData.rewardedVideoAdId,
      function () { that.setData({ hiddenUnlocked: true }) },
      function () {}
    )
  },

  // 生成海报
  onGeneratePoster: function () {
    var that = this
    this.setData({ generating: true })
    poster.generatePoster({
      category: this.data.test.category,
      testTitle: this.data.test.title,
      resultTitle: this.data.result.title,
      resultDesc: this.data.result.desc,
    }).then(function (path) {
      that.setData({ posterPath: path, generating: false })
    }).catch(function () {
      that.setData({ generating: false })
      wx.showToast({ title: '海报生成失败', icon: 'none' })
    })
  },

  // 保存海报到相册
  onSavePoster: function () {
    wx.saveImageToPhotosAlbum({
      filePath: this.data.posterPath,
      success: function () {
        wx.showToast({ title: '已保存到相册' })
      },
      fail: function () {
        wx.showToast({ title: '请先授权访问相册', icon: 'none' })
      },
    })
  },

  // 再测一套
  onBackToIndex: function () {
    wx.reLaunch({ url: '/pages/index/index' })
  },

  // 点击推荐测试
  onRecommendTap: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({ url: '/pages/quiz/quiz?testId=' + id })
  },

  onAdError: function () {},

  // 转发配置
  onShareAppMessage: function () {
    var title = this.data.result
      ? '我测出了「' + this.data.result.title + '」，你来测测？'
      : '趣味测试，快来测一测'
    return { title: title, path: '/pages/index/index' }
  },
})
