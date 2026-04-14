var testLoader = require('../../utils/test-loader')

Page({
  data: {
    categories: [
      { key: 'all',        label: '全部' },
      { key: 'destiny',    label: '命运' },
      { key: 'psychology', label: '性格' },
      { key: 'life',       label: '人生' },
      { key: 'brainhole',  label: '脑洞' },
      { key: 'comedy',     label: '沙雕' },
    ],
    activeCategory: 'all',
    tests: [],
    allTests: [],
    bannerAdId: '',
  },

  onLoad: function () {
    var allTests = testLoader.getAllTests()
    var app = getApp()
    this.setData({
      allTests: allTests,
      tests: allTests,
      bannerAdId: app.globalData.adEnabled ? app.globalData.bannerAdId : '',
    })
  },

  onCategoryTap: function (e) {
    var key = e.currentTarget.dataset.key
    var filtered = key === 'all'
      ? this.data.allTests
      : this.data.allTests.filter(function (t) { return t.category === key })
    this.setData({ activeCategory: key, tests: filtered })
  },

  onTestTap: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({ url: '/pages/quiz/quiz?testId=' + id })
  },

  onAdError: function () {},
})
