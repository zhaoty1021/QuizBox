/**
 * 三种算法引擎
 *
 * 计分型 (score)   — 顺序展示，累计分数 → 最高分结果
 * 分支型 (branch)  — 按选择跳转 → 路径终点即结果
 * 权重型 (weight)  — 顺序展示，累计维度权重 → 映射到结果
 */

// ========== 计分型 ==========
function calcScoreResult(questions, answers) {
  var scores = {}
  questions.forEach(function (q, i) {
    var option = q.options[answers[i]]
    if (!option || !option.scores) return
    var keys = Object.keys(option.scores)
    keys.forEach(function (key) {
      scores[key] = (scores[key] || 0) + option.scores[key]
    })
  })
  return { resultKey: _maxKey(scores), scores: scores }
}

// ========== 分支型 ==========
// 在 quiz 流程中逐步推进，最终 option.result 即结果 key
// 此函数用于容错：根据已记录的路径回放出结果
function calcBranchResult(questionMap, pathLog) {
  // pathLog: [{ questionId, optionIndex }]
  var last = pathLog[pathLog.length - 1]
  if (!last) return { resultKey: '', scores: {} }
  var question = questionMap[last.questionId]
  if (!question) return { resultKey: '', scores: {} }
  var option = question.options[last.optionIndex]
  if (!option) return { resultKey: '', scores: {} }
  return { resultKey: option.result || '', scores: {} }
}

// ========== 权重型 ==========
function calcWeightResult(questions, answers, resultMapping) {
  // 1. 累计维度权重
  var weights = {}
  questions.forEach(function (q, i) {
    var option = q.options[answers[i]]
    if (!option || !option.weights) return
    var keys = Object.keys(option.weights)
    keys.forEach(function (key) {
      weights[key] = (weights[key] || 0) + option.weights[key]
    })
  })

  // 2. 按权重排序找主维度
  var sorted = Object.keys(weights).sort(function (a, b) {
    return weights[b] - weights[a]
  })
  var primary = sorted[0] || ''

  // 3. 在 resultMapping 中查找匹配
  var resultKey = ''
  for (var i = 0; i < resultMapping.length; i++) {
    if (resultMapping[i].primary === primary) {
      resultKey = resultMapping[i].result
      break
    }
  }

  // 4. 归一化维度分数为百分比
  var total = 0
  Object.keys(weights).forEach(function (k) { total += weights[k] })
  var dimensionPercent = {}
  if (total > 0) {
    Object.keys(weights).forEach(function (k) {
      dimensionPercent[k] = Math.round((weights[k] / total) * 100)
    })
  }

  return {
    resultKey: resultKey,
    scores: weights,
    dimensionPercent: dimensionPercent,
    primaryDimension: primary,
  }
}

// ========== 统一入口 ==========
function calcResult(test, questions, answers, pathLog) {
  var algorithm = test.algorithm || 'score'
  if (algorithm === 'branch') {
    return calcBranchResult(test.questions, pathLog || [])
  }
  if (algorithm === 'weight') {
    return calcWeightResult(questions, answers, test.resultMapping || [])
  }
  return calcScoreResult(questions, answers)
}

// ========== 工具函数 ==========
function _maxKey(obj) {
  var best = ''
  var bestVal = -1
  var keys = Object.keys(obj)
  for (var i = 0; i < keys.length; i++) {
    if (obj[keys[i]] > bestVal) {
      bestVal = obj[keys[i]]
      best = keys[i]
    }
  }
  return best
}

module.exports = {
  calcResult: calcResult,
  calcScoreResult: calcScoreResult,
  calcBranchResult: calcBranchResult,
  calcWeightResult: calcWeightResult,
}
