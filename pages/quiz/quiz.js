var { getTestDetail } = require('../../utils/test-loader')
var { calcResult } = require('../../utils/scoring')

function shuffleArray(arr) {
  var shuffled = arr.slice()
  for (var i = shuffled.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1))
    var temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
  }
  return shuffled
}

Page({
  data: {
    test: null,
    algorithm: 'score',

    // score / weight 共用
    currentIndex: 0,
    answers: [],
    selectedQuestions: [],
    progress: 0,

    // branch 专用
    currentQuestionId: '',
    pathLog: [],       // [{ questionId, optionIndex }]
    stepCount: 0,

    // 通用 UI
    currentQuestion: null,
    selectedOption: -1,
    optionLabels: ['A', 'B', 'C', 'D'],
  },

  onLoad: function (options) {
    var testId = options.testId
    var test = getTestDetail(testId)
    if (!test) {
      wx.showToast({ title: '测试数据加载失败', icon: 'none' })
      setTimeout(function () { wx.navigateBack() }, 1500)
      return
    }

    var algorithm = test.algorithm || 'score'

    if (algorithm === 'branch') {
      this._initBranch(test)
    } else {
      this._initSequential(test, algorithm)
    }
  },

  // ===== 初始化：计分 / 权重（顺序展示）=====
  _initSequential: function (test, algorithm) {
    var pool = test.questions
    var pickCount = test.pickCount || pool.length
    var selected = shuffleArray(pool).slice(0, pickCount)

    this.setData({
      test: test,
      algorithm: algorithm,
      selectedQuestions: selected,
      currentQuestion: selected[0],
      currentIndex: 0,
      answers: [],
      progress: 0,
    })
  },

  // ===== 初始化：分支型 =====
  _initBranch: function (test) {
    var startId = test.startQuestion || 'start'
    var firstQ = test.questions[startId]
    if (!firstQ) {
      wx.showToast({ title: '测试数据异常', icon: 'none' })
      return
    }
    this.setData({
      test: test,
      algorithm: 'branch',
      currentQuestionId: startId,
      currentQuestion: firstQ,
      pathLog: [],
      stepCount: 0,
    })
  },

  onUnload: function () {},

  // ===== 选择答案 =====
  onOptionTap: function (e) {
    if (this.data.selectedOption !== -1) return

    var optionIndex = e.currentTarget.dataset.index
    this.setData({ selectedOption: optionIndex })

    var that = this
    setTimeout(function () {
      if (that.data.algorithm === 'branch') {
        that._handleBranchOption(optionIndex)
      } else {
        that._handleSequentialOption(optionIndex)
      }
    }, 300)
  },

  // ===== 计分 / 权重 答题 =====
  _handleSequentialOption: function (optionIndex) {
    var test = this.data.test
    var currentIndex = this.data.currentIndex
    var questions = this.data.selectedQuestions
    var newAnswers = this.data.answers.concat([optionIndex])

    if (currentIndex + 1 >= questions.length) {
      // 最后一题 → 计算结果
      var output = calcResult(test, questions, newAnswers)
      this.setData({ answers: newAnswers })
      var url = '/pages/result/result?testId=' + test.id + '&resultKey=' + output.resultKey
      // 权重型传递维度百分比
      if (output.dimensionPercent) {
        url += '&dp=' + encodeURIComponent(JSON.stringify(output.dimensionPercent))
      }
      wx.redirectTo({ url: url })
    } else {
      var next = currentIndex + 1
      var progress = Math.round((next / questions.length) * 100)
      this.setData({
        currentIndex: next,
        currentQuestion: questions[next],
        answers: newAnswers,
        selectedOption: -1,
        progress: progress,
      })
    }
  },

  // ===== 分支型答题 =====
  _handleBranchOption: function (optionIndex) {
    var test = this.data.test
    var currentId = this.data.currentQuestionId
    var currentQ = test.questions[currentId]
    var option = currentQ.options[optionIndex]

    var newLog = this.data.pathLog.concat([{
      questionId: currentId,
      optionIndex: optionIndex,
    }])

    if (option.result) {
      // 到达终点
      this.setData({ pathLog: newLog })
      wx.redirectTo({
        url: '/pages/result/result?testId=' + test.id + '&resultKey=' + option.result
      })
    } else if (option.next && test.questions[option.next]) {
      // 跳转下一题
      this.setData({
        currentQuestionId: option.next,
        currentQuestion: test.questions[option.next],
        pathLog: newLog,
        stepCount: this.data.stepCount + 1,
        selectedOption: -1,
      })
    } else {
      wx.showToast({ title: '路径异常', icon: 'none' })
    }
  },
})
