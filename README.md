# 小测盒 | QuizBox

趣味心理测试微信小程序。暗黑神秘视觉风格，三种算法引擎驱动，内置心理学技巧让结果"更准"。

## 功能特性

- **三种测试算法**：计分型、权重型、分支型，根据测试类型选择最合适的算法
- **随机题库**：每次从题池随机抽取，百万级组合确保每次体验不同
- **结果增强系统**：稀有度标签、随机文本扰动、维度分数条、巴纳姆效应描述
- **暗黑视觉风格**：深色背景 + 渐变光晕 + 毛玻璃质感
- **广告变现**：激励视频解锁结果 + Banner 广告（可一键开关）
- **Canvas 海报**：生成专属结果卡片，长按保存到相册
- **社交分享**：转发给好友，带自定义标题

## 项目结构

```
QuizBox/
├── app.js                    # 全局配置（广告开关）
├── app.json                  # 页面路由 & 导航栏样式
├── app.wxss                  # 全局样式重置
│
├── pages/
│   ├── index/                # 首页：测试列表 + 分类筛选
│   ├── quiz/                 # 答题页：三种流程统一处理
│   └── result/               # 结果页：增强展示 + 海报 + 分享
│
├── data/
│   ├── tests.js              # 测试卡片索引（标题/分类/封面）
│   └── tests/                # 各测试完整数据
│       ├── past-life.js      #   计分型 · 你的前世是什么身份
│       ├── soul-color.js     #   权重型 · 你的灵魂是什么颜色
│       ├── worker-type.js    #   计分型 · 你是哪种打工人
│       ├── parallel-life.js  #   分支型 · 平行宇宙里的你
│       └── hidden-talent.js  #   计分型 · 你隐藏的超能力
│
└── utils/
    ├── scoring.js            # 三种算法引擎
    ├── result-enhance.js     # 结果增强（稀有度/扰动/维度条）
    ├── test-loader.js        # 测试数据加载器
    ├── ad.js                 # 激励视频广告封装
    └── poster.js             # Canvas 2D 海报生成
```

## 三种算法引擎

### 计分型 (score)

顺序展示随机题目，每个选项带分数，累计后取最高分结果。

```
适用：前世身份、打工人、超能力
流程：题池随机抽取 → 逐题作答 → 累计各维度分数 → 最高分维度 = 结果
```

### 权重型 (weight)

与计分型流程相同，但选项带维度权重而非简单分数，结果通过 `resultMapping` 映射。结果页额外展示各维度百分比条形图。

```
适用：灵魂颜色
流程：题池随机抽取 → 逐题作答 → 累计维度权重 → 归一化为百分比 → 主维度映射结果
```

### 分支型 (branch)

按选择跳转到不同问题节点，形成决策树。不同路径通往不同结果。

```
适用：平行宇宙
流程：起始节点 → 选择 → 跳转下一节点 → ... → 到达终点节点 = 结果
特点：6层决策树，29个节点，路径间有交叉
```

## 结果增强机制

| 技巧 | 说明 |
|------|------|
| 稀有度 | 每个结果配置 `rarity` 值，展示"极其稀有 · 仅5%的人"等文案 |
| 随机扰动 | 30%概率替换描述中的修饰词同义词，同一结果每次读起来略有不同 |
| 维度分数条 | 权重型测试展示各维度百分比条形图 |
| 巴纳姆效应 | 描述文本使用"你偶尔会觉得..."等模糊但精准的表述 |

## 测试数据规格

### 计分型测试模板

```js
module.exports = {
  id: 'test-id',
  title: '测试标题',
  category: 'psychology',      // destiny | psychology | life | comedy | brainhole
  algorithm: 'score',
  pickCount: 12,               // 每次从题池抽取的题目数
  questions: [
    {
      text: '问题文本',
      options: [
        { text: '选项A', scores: { key1: 3, key2: 0, key3: 1, key4: 0 } },
        // ...
      ]
    },
  ],
  results: {
    key1: {
      title: '结果标题',
      tagline: '一句话副标题',
      traits: ['标签1', '标签2', '标签3', '标签4'],
      rarity: 0.15,            // 0~1，越小越"稀有"
      desc: '结果描述正文',
      advice: '趣味建议',
      hidden: '隐藏揭秘（需解锁）',
    },
  }
}
```

### 权重型测试模板

```js
module.exports = {
  id: 'test-id',
  algorithm: 'weight',
  dimensionLabels: { dim1: '维度名称', dim2: '...' },
  resultMapping: [
    { primary: 'dim1', result: 'resultKey1' },
  ],
  questions: [
    {
      text: '问题文本',
      options: [
        { text: '选项A', weights: { dim1: 3, dim2: 0 } },  // 注意是 weights 不是 scores
      ]
    },
  ],
  // results 同计分型
}
```

### 分支型测试模板

```js
module.exports = {
  id: 'test-id',
  algorithm: 'branch',
  startQuestion: 'start',
  questions: {
    start: {                   // 注意：questions 是对象不是数组
      text: '问题文本',
      options: [
        { text: '选项A', next: 'q2' },       // 跳转到下一题
        { text: '选项B', result: 'key1' },    // 直接到达结果
      ]
    },
    q2: { /* ... */ },
  },
  // results 同计分型
}
```

## 添加新测试

1. 在 `data/tests/` 下新建 `your-test.js`，按上述模板填写
2. 在 `data/tests.js` 的 `TESTS` 数组中添加卡片信息
3. 在 `utils/test-loader.js` 的 `TEST_MAP` 中添加 `require` 映射
4. （可选）在 `pages/index/index.js` 中添加新分类

## 广告配置

`app.js` 中的 `globalData`：

```js
adEnabled: false,                          // true = 启用广告解锁
rewardedVideoAdId: 'adunit-xxx',          // 激励视频广告位 ID
bannerAdId: 'adunit-yyy',                 // Banner 广告位 ID
```

`adEnabled: false` 时所有结果直接解锁，无广告展示。

## 开发注意事项

- **不要使用 CSS 变量**：glass-easel 渲染引擎不支持，直接写色值
- **不要使用动态 require**：微信不支持，`test-loader.js` 中用静态映射
- **不要启用 lazyCodeLoading**：可能导致白屏
- **Canvas 使用 2D 接口**：`<canvas type="2d">`，不用旧版 API
- **颜色方案**：背景 `#0d0d1a`，主色 `#e94560`，辅色 `#533483`

## 技术栈

- 微信小程序原生开发（WXML / WXSS / JS）
- Canvas 2D API（海报生成）
- 无第三方框架依赖
