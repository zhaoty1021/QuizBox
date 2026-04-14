/**
 * 结果增强工具
 *
 * 技巧1: 稀有度文案 (rarity)
 * 技巧2: 维度分数展示 (dimension bars)
 * 技巧3: 随机扰动 (noise) — 相同答案每次展示略有不同
 * 技巧4: 巴纳姆效应短语库 (Barnum) — 补充到描述中
 */

// ========== 稀有度 ==========
function getRarityText(rarity) {
  if (!rarity && rarity !== 0) return '独特结果 · 每个人都与众不同'
  if (rarity <= 0.05) return '极其稀有 · 仅 5% 的人是这个结果'
  if (rarity <= 0.10) return '非常稀有 · 仅 10% 的人得到此结果'
  if (rarity <= 0.15) return '相当少见 · 约 15% 的人是这个结果'
  if (rarity <= 0.25) return '比较少见 · 约 ' + Math.round(rarity * 100) + '% 的人是这个结果'
  return '独特结果 · 每个人都与众不同'
}

// ========== 随机扰动 ==========
// 对描述文本中的一些修饰词做随机替换，让同样的结果读起来略有不同
var NOISE_MAP = [
  ['偶尔', '有时候', '不经意间', '时不时'],
  ['可能', '大概', '也许', '或许'],
  ['非常', '特别', '格外', '尤其'],
  ['总是', '一直', '从来都', '始终'],
  ['觉得', '感到', '意识到', '发现'],
  ['其实', '事实上', '说到底', '本质上'],
]

function addNoise(text) {
  if (!text) return text
  var result = text
  for (var i = 0; i < NOISE_MAP.length; i++) {
    var group = NOISE_MAP[i]
    var original = group[0]
    if (result.indexOf(original) !== -1) {
      // 30% 概率触发替换
      if (Math.random() < 0.3) {
        var replacement = group[Math.floor(Math.random() * group.length)]
        // 只替换第一个匹配
        result = result.replace(original, replacement)
      }
    }
  }
  return result
}

// ========== 维度分数条数据 ==========
// 将 dimensionPercent 转成可渲染的数组
function buildDimensionBars(dimensionPercent, dimensionLabels) {
  if (!dimensionPercent) return []
  var bars = []
  var keys = Object.keys(dimensionPercent)
  keys.forEach(function (key) {
    bars.push({
      key: key,
      label: (dimensionLabels && dimensionLabels[key]) || key,
      percent: dimensionPercent[key] || 0,
    })
  })
  // 按百分比降序
  bars.sort(function (a, b) { return b.percent - a.percent })
  return bars
}

// ========== 增强结果对象 ==========
function enhanceResult(result, scoringOutput, test) {
  if (!result) return result

  // 浅拷贝避免污染原始数据
  var enhanced = {}
  var keys = Object.keys(result)
  keys.forEach(function (k) { enhanced[k] = result[k] })

  // 稀有度
  enhanced.rarityText = getRarityText(result.rarity)

  // 随机扰动
  enhanced.desc = addNoise(result.desc)
  enhanced.hidden = addNoise(result.hidden)

  // 维度分数条（仅权重型）
  if (test && test.algorithm === 'weight' && scoringOutput && scoringOutput.dimensionPercent) {
    enhanced.dimensionBars = buildDimensionBars(
      scoringOutput.dimensionPercent,
      test.dimensionLabels || null
    )
  } else {
    enhanced.dimensionBars = []
  }

  return enhanced
}

module.exports = {
  getRarityText: getRarityText,
  addNoise: addNoise,
  buildDimensionBars: buildDimensionBars,
  enhanceResult: enhanceResult,
}
