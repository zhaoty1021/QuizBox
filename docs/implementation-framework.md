# QuizBox 实现框架文档

**日期**：2026-04-14
**基于**：说明文档.md（2026-04-03）
**范围**：v1 全部功能 + 轻度 v2 预留
**技术栈**：原生微信小程序（WXML / WXSS / JS），无第三方框架，纯前端无后端

---

## 1. 项目目录结构

```
QuizBox/
├── app.js                             # 全局入口：globalData（广告ID）
├── app.json                           # 路由、导航栏、基础库版本
├── app.wxss                           # 全局样式：CSS变量、基础reset
├── project.config.json                # 微信开发者工具配置
├── sitemap.json                       # SEO sitemap
│
├── pages/
│   ├── index/                         # 首页 Feed
│   │   ├── index.js                   #   分类筛选、卡片列表、导航
│   │   ├── index.json                 #   页面配置
│   │   ├── index.wxml                 #   Tab栏 + 卡片列表 + Banner广告
│   │   └── index.wxss                 #   深色主题、卡片样式、分类标签色
│   │
│   ├── quiz/                          # 答题页
│   │   ├── quiz.js                    #   逐题展示、选项点击、计分跳转
│   │   ├── quiz.json                  #   页面配置
│   │   ├── quiz.wxml                  #   进度条 + 题目 + 选项列表
│   │   └── quiz.wxss                  #   选项卡片、选中态动效、进度条
│   │
│   └── result/                        # 结果页
│       ├── result.js                  #   广告解锁、海报生成、分享
│       ├── result.json                #   页面配置
│       ├── result.wxml                #   半遮半露 → 解锁完整 → 海报 → 推荐
│       └── result.wxss               #   模糊遮罩、解锁动画、海报预览
│
├── data/
│   ├── tests.js                       # 测试索引（id、title、category、cover、count）
│   └── tests/                         # 测试详情（每个文件 = 一套完整测试）
│       ├── past-life.js               #   示例：你的前世是什么身份？
│       └── ...                        #   后续测试按同结构新增
│
├── utils/
│   ├── test-loader.js                 # 测试数据加载器（静态require映射表）
│   ├── scoring.js                     # 计分引擎（选项分数累加 → resultKey）
│   ├── ad.js                          # 激励视频广告封装（单次回调，防重复注册）
│   └── poster.js                      # Canvas 2D 海报生成 + 兼容性roundRect
│
└── images/
    ├── covers/                        # 测试封面图（750×560rpx 建议尺寸）
    │   └── past-life.png
    └── qrcode.png                     # 小程序码（海报底部用）
```

### 与当前项目的差异

| 操作 | 说明 |
|------|------|
| 删除 `pages/logs/` | 模板页面，项目不需要 |
| 重写 `pages/index/` | 当前是用户头像选择，改为测试卡片Feed |
| 新建 `pages/quiz/` | 答题页，从零创建 |
| 新建 `pages/result/` | 结果页，从零创建 |
| 新建 `data/` | 数据层，从零创建 |
| 重写 `utils/` | 当前只有 formatTime，替换为项目工具模块 |
| 重写 `app.js` | 简化为 globalData 容器（广告ID） |
| 重写 `app.json` | 路由改为 index/quiz/result，导航栏深色主题 |
| 重写 `app.wxss` | 注入全局CSS变量（配色、字体、间距） |

---

## 2. 架构分层

```
┌──────────────────────────────────────────────────┐
│                    页面层 (Pages)                  │
│                                                    │
│   index (Feed)  ──→  quiz (答题)  ──→  result (结果)│
│                                                    │
│   职责：UI渲染、用户交互、页面生命周期管理            │
│   原则：不含业务计算逻辑，通过调用工具层完成           │
├──────────────────────────────────────────────────┤
│                    工具层 (Utils)                   │
│                                                    │
│   test-loader  │  scoring  │  ad  │  poster        │
│                                                    │
│   职责：可复用的业务逻辑，与页面解耦                  │
│   原则：纯函数优先，无UI依赖（poster除外需canvas引用） │
├──────────────────────────────────────────────────┤
│                    数据层 (Data)                    │
│                                                    │
│   tests.js (索引)  +  tests/*.js (详情)             │
│                                                    │
│   职责：存储所有测试内容，作为唯一数据源              │
│   原则：索引只存展示信息，详情文件存完整题目和结果     │
│   v2预留：将来替换为网络请求时只需修改 test-loader    │
├──────────────────────────────────────────────────┤
│                   平台层 (WeChat API)              │
│                                                    │
│   wx.navigateTo / wx.redirectTo / wx.reLaunch      │
│   wx.createRewardedVideoAd / <ad> 组件             │
│   Canvas 2D / wx.canvasToTempFilePath              │
│   wx.saveImageToPhotosAlbum / onShareAppMessage    │
└──────────────────────────────────────────────────┘
```

**v2 预留设计**：数据层与页面层通过 `test-loader.js` 解耦。当前 test-loader 使用 `require` 加载本地文件，未来接入后端 CMS 时只需将 test-loader 内部改为 `wx.request`，页面层和工具层调用方式不变。

---

## 3. 页面流转设计

```
         navigateTo              redirectTo
index ──────────────→ quiz ──────────────→ result
  ↑                                          │
  └───────────── reLaunch ───────────────────┘
```

| 跳转 | API | 理由 |
|------|-----|------|
| index → quiz | `wx.navigateTo` | 保留首页在页面栈，用户可返回 |
| quiz → result | `wx.redirectTo` | 答题完成后不需要返回答题页 |
| result → index | `wx.reLaunch` | 清空页面栈，避免层级过深（无tabBar，不用switchTab） |

### 页面间参数传递

```
index ──testId──→ quiz ──testId + resultKey──→ result
```

- **index → quiz**：URL 参数 `?testId=past-life`
- **quiz → result**：URL 参数 `?testId=past-life&resultKey=monk`

---

## 4. 数据流设计

### 4.1 数据加载流

```
                    ┌─ tests.js (索引) ─────→ index 页面渲染卡片列表
test-loader.js ─────┤
                    └─ tests/xxx.js (详情) ──→ quiz 加载题目
                                              → result 加载结果
```

### 4.2 答题数据流

```
quiz 页面
  │
  │  用户点选 option[i]
  ├──→ answers[] 追加 optionIndex
  ├──→ currentIndex + 1
  ├──→ progress 更新
  │
  │  最后一题完成
  └──→ scoring.calcResult(questions, answers) → resultKey
       └──→ redirectTo result?testId&resultKey
```

### 4.3 结果页数据流

```
result 页面 onLoad
  │
  ├──→ test-loader 加载测试详情
  ├──→ test.results[resultKey] 获取结果对象
  │
  ├─── 初始状态（半遮半露）
  │    显示 result.title + 简短描述
  │
  ├─── 用户点击解锁 → ad.showRewardedAd()
  │    ├─ 完播 → unlocked = true → 显示完整 result.desc
  │    └─ 未完播 → toast 提示
  │
  ├─── 用户点击解锁隐藏 → ad.showRewardedAd()
  │    ├─ 完播 → hiddenUnlocked = true → 显示 result.hidden
  │    └─ 未完播 → toast 提示
  │
  ├─── 生成海报 → poster.generatePoster() → posterPath
  │    ├─ 保存到相册
  │    └─ 转发给朋友
  │
  └─── 推荐其他测试 → 随机取 tests.js 中其他测试展示
```

---

## 5. 核心模块规格

### 5.1 test-loader.js — 数据加载器

**职责**：统一管理测试数据的加载，解决微信小程序 `require` 不支持动态路径的问题。

```
接口：
  getTestDetail(testId: string) → TestDetail | null
  getAllTests() → TestIndex[]

内部实现：
  静态 require 映射表：
    'past-life' → require('../data/tests/past-life')
    ...新增测试在此追加一行

扩展测试流程：
  1. 在 data/tests/ 下新建 xxx.js
  2. 在 test-loader.js 映射表中追加一行
  3. 在 data/tests.js 索引中追加展示信息
```

**v2 预留**：未来接入后端时，`getTestDetail` 内部改为 `wx.request` 即可，调用方无需修改。

### 5.2 scoring.js — 计分引擎

**职责**：根据用户答案计算得分最高的结果类型。

```
接口：
  calcResult(questions: Question[], answers: number[]) → string (resultKey)

算法：
  遍历 questions[i].options[answers[i]].scores
  累加各 resultKey 的分数
  返回最高分的 key（平局取先出现的）
```

### 5.3 ad.js — 广告管理

**职责**：封装激励视频广告的加载、播放、回调逻辑，防止监听器重复注册。

```
接口：
  showRewardedAd(adUnitId: string, onSuccess: Function, onFail: Function) → void

关键设计：
  - 每次调用创建独立广告实例，回调在 onClose 中一次性处理
  - 自动处理加载失败重试
  - 统一 toast 提示
```

### 5.4 poster.js — 海报生成

**职责**：Canvas 2D 绘制个性化分享海报。

```
接口：
  generatePoster({
    category: string,      // 决定背景渐变色
    testTitle: string,     // 顶部小字
    resultTitle: string,   // 主视觉大字
    resultDesc: string     // 中部正文
  }) → Promise<string>     // 临时文件路径

画布尺寸：375×667 px（对应 750×1334 rpx）

绘制顺序：
  1. 分类对应渐变背景
  2. 测试标题（顶部）
  3. 装饰线
  4. 结果标题（大字居中）
  5. 描述文字（自动换行）
  6. 底部小程序码区域
  7. 导出临时图片

兼容性处理：
  roundRect() → 用 moveTo + arcTo 手动绘制圆角矩形
```

---

## 6. 全局配置设计

### 6.1 app.json

```json
{
  "pages": [
    "pages/index/index",
    "pages/quiz/quiz",
    "pages/result/result"
  ],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#0d0d1a",
    "navigationBarTitleText": "趣味测试",
    "navigationBarTextStyle": "white",
    "backgroundColor": "#0d0d1a"
  },
  "style": "v2",
  "sitemapLocation": "sitemap.json"
}
```

### 6.2 app.js

```
globalData:
  rewardedVideoAdId: string   // 激励视频广告单元ID（开发期用测试ID）
  bannerAdId: string           // Banner广告单元ID（开发期用测试ID）
```

### 6.3 app.wxss — 全局CSS变量

```
主色系：
  --color-bg:           #0d0d1a     深紫黑背景
  --color-card:         #16213e     卡片背景
  --color-card-hover:   #1a2a50     卡片按下态
  --color-primary:      #e94560     主色调玫红
  --color-secondary:    #533483     辅助紫
  --color-accent:       #4a9eff     强调蓝

文字色：
  --color-text-primary:    #ffffff
  --color-text-secondary:  #aaaaaa
  --color-text-muted:      #666666

分类标签色：
  --color-destiny:      #e94560     命运
  --color-psychology:   #533483     性格
  --color-life:         #0f8a8a     人生
  --color-comedy:       #e8a838     沙雕
  --color-relationship: #e05297     关系（v2预留）
  --color-brainhole:    #22c55e     脑洞（v2预留）

圆角与间距：
  --radius-card:    16rpx
  --radius-button:  50rpx
  --radius-tag:     20rpx
  --spacing-page:   30rpx
  --spacing-card:   24rpx

字体：
  全局 font-family: -apple-system, "PingFang SC", sans-serif
  标题    36rpx bold
  副标题  30rpx normal
  正文    26rpx line-height 1.8
  小字    22rpx
```

---

## 7. 说明文档已知问题修正方案

说明文档第12节列出的6个问题，在实现时统一修正：

| # | 问题 | 修正方案 | 涉及模块 |
|---|------|---------|----------|
| 12.1 | 结果全遮策略导致跳出率高 | 改为"半遮半露"：免费展示 result.title + 1~2句概括，激励视频解锁详细描述 + 隐藏内容 | result 页面 |
| 12.2 | 广告 onClose 监听器重复注册 | 使用 utils/ad.js 封装，每次调用独立实例，回调一次性处理 | ad.js + result 页面 |
| 12.3 | require() 不支持动态路径 | 新建 utils/test-loader.js 静态映射表 | test-loader.js |
| 12.4 | switchTab 无 tabBar 配置 | 结果页"再测一套"改用 `reLaunch` | result 页面 |
| 12.5 | ctx.roundRect() 低版本不支持 | poster.js 中用 moveTo + arcTo 手动绘制圆角矩形 | poster.js |
| 12.6 | 索引与详情数据冗余 | 索引 tests.js 只存 id/title/category/cover/count，详情文件为唯一数据源 | data 层 |

---

## 8. 开发阶段划分

### P0 — 基础骨架

**目标**：搭建可运行的项目框架，所有页面能正常加载。

```
具体任务：
  ├── 重写 app.json（三页路由 + 深色导航栏）
  ├── 重写 app.js（globalData 广告ID）
  ├── 重写 app.wxss（注入全局CSS变量）
  ├── 删除 pages/logs/
  ├── 创建 pages/quiz/ 空页面骨架
  ├── 创建 pages/result/ 空页面骨架
  ├── 创建 data/ 目录结构
  └── 创建 utils/ 目录结构

产出：三个页面可正常打开，深色主题生效，但无业务逻辑。
```

### P1 — 数据层

**目标**：测试数据可被正确加载和使用。

```
具体任务：
  ├── 编写 data/tests.js（测试索引，至少1套测试）
  ├── 编写 data/tests/past-life.js（完整示例测试）
  ├── 编写 utils/test-loader.js（静态映射表 + getTestDetail / getAllTests）
  └── 编写 utils/scoring.js（calcResult 计分函数）

产出：test-loader 可加载测试索引和详情，scoring 可计算结果。
```

### P2 — 首页 Feed

**目标**：用户可浏览测试列表，按分类筛选，点击进入答题。

```
具体任务：
  ├── 重写 index.js（onLoad 加载测试列表、分类筛选、卡片点击跳转）
  ├── 重写 index.wxml（分类Tab栏 + 测试卡片列表）
  └── 重写 index.wxss（深色卡片样式、分类标签色、布局）

产出：首页展示测试卡片，支持分类切换，点击卡片跳转到答题页。
```

### P3 — 答题页

**目标**：用户可完成一套完整的答题流程。

```
具体任务：
  ├── 编写 quiz.js（加载测试、逐题展示、选项点击、进度更新、计分跳转）
  ├── 编写 quiz.wxml（进度条 + 题目文本 + 选项列表）
  └── 编写 quiz.wxss（选项卡片样式、选中态高亮、进度条动效）

交互细节：
  - 点选后该选项高亮（300ms）
  - 自动跳转下一题
  - 最后一题答完 → scoring.calcResult → redirectTo 结果页

产出：完整答题流程，可从第一题答到最后一题并跳转结果页。
```

### P4 — 结果页核心

**目标**：用户可通过激励视频解锁完整结果和隐藏内容。

```
具体任务：
  ├── 编写 utils/ad.js（激励视频广告封装）
  ├── 编写 result.js（加载结果、广告解锁、隐藏内容解锁）
  ├── 编写 result.wxml（半遮半露 → 解锁完整结果 → 隐藏内容）
  └── 编写 result.wxss（模糊遮罩、解锁按钮、结果展示样式）

半遮半露策略（修正12.1）：
  初始状态：
    - 展示 result.title（如"前世得道高僧"）
    - 展示 1~2 句简短描述
    - 详细描述用模糊遮罩覆盖
    - "观看视频·免费解锁"按钮
  解锁后：
    - 完整 result.desc 全部展示
    - 出现"解锁隐藏揭秘"按钮
    - 操作按钮（生成卡片、分享、再测一套）

产出：结果页完整交互流程，激励视频正常触发（开发期测试ID）。
```

### P5 — 海报与分享

**目标**：用户可生成个性化海报并分享。

```
具体任务：
  ├── 编写 utils/poster.js（Canvas 2D 海报绘制）
  ├── result.wxml 添加隐藏 canvas 元素
  ├── result.js 添加海报生成 + 保存相册 + 转发逻辑
  └── 准备 images/qrcode.png 占位图

海报内容：
  - 分类渐变背景
  - 测试标题（顶部小字）
  - 结果标题（大字主视觉）
  - 结果描述（自动换行）
  - 底部小程序码区域

产出：点击"生成专属卡片"生成海报，可保存到相册或转发。
```

### P6 — 广告与打磨

**目标**：补全广告位，优化细节交互，处理兼容性。

```
具体任务：
  ├── 首页底部 Banner 广告组件
  ├── 结果页底部 Banner 广告组件
  ├── 结果页"推荐其他测试"区域（随机推荐）
  ├── 首页卡片列表为空时的空状态提示
  ├── 答题选项点击动效（高亮 → 切换）
  ├── 全局 loading 态处理
  └── poster.js roundRect 兼容性处理（moveTo + arcTo）

产出：功能完整，交互流畅，可提交审核。
```

---

## 9. 新增测试内容的扩展流程

新增一套测试只需三步，无需修改页面代码：

```
Step 1: 新建 data/tests/xxx.js
        按 past-life.js 的结构编写题目和结果

Step 2: 在 utils/test-loader.js 映射表中追加：
        'xxx': require('../data/tests/xxx')

Step 3: 在 data/tests.js 索引中追加：
        { id: 'xxx', title: '...', category: '...', ... }
```

新增分类需额外：
- `app.wxss` 添加 `--color-xxx` 变量
- `index.js` 的 `categories` 数组追加项
- `poster.js` 的 `GRADIENTS` 对象追加渐变色

---

## 10. 模块依赖关系

```
index.js
  ├── require → data/tests.js
  └── wx.navigateTo → quiz

quiz.js
  ├── require → utils/test-loader.js
  │                └── require → data/tests/xxx.js
  ├── require → utils/scoring.js
  └── wx.redirectTo → result

result.js
  ├── require → utils/test-loader.js
  ├── require → utils/ad.js
  │                └── wx.createRewardedVideoAd
  ├── require → utils/poster.js
  │                └── Canvas 2D API
  ├── wx.saveImageToPhotosAlbum
  ├── wx.reLaunch → index
  └── onShareAppMessage
```

无循环依赖。所有依赖方向为：页面 → 工具 → 数据 → 平台API。

---

## 11. v2 预留点清单

以下设计为未来迭代预留了扩展空间，但不引入额外复杂度：

| 预留点 | 当前实现 | v2 扩展方式 |
|--------|---------|-------------|
| 数据加载 | test-loader.js 本地 require | 内部改为 wx.request，接口不变 |
| 分类体系 | categories 硬编码数组 | 后端下发分类列表 |
| 新增分类配色 | CSS变量已预留 relationship / brainhole | 直接启用 |
| 测试热度 count | 硬编码数字 | 接入后端实时计数 |
| 用户答题记录 | 无持久化 | wx.setStorageSync 或后端存储 |
| 排行榜数据 | 无 | 后端接口 + 新页面 |

---

## 12. 关键技术决策记录

| 决策 | 选择 | 理由 |
|------|------|------|
| 框架选择 | 原生微信小程序 | 说明文档明确要求，三页轻量项目无需框架 |
| 数据存储 | 本地 JS 文件硬编码 | v1 无后端，开发成本最低 |
| 测试加载 | 静态 require 映射表 | 微信不支持动态 require，映射表是唯一方案 |
| 广告封装 | 独立 ad.js 工具模块 | 防止 onClose 重复注册，统一错误处理 |
| 海报方案 | Canvas 2D（type="2d"） | 微信推荐的新版 API，性能优于旧版 |
| 页面跳转 | navigateTo / redirectTo / reLaunch | 无 tabBar 配置，switchTab 不可用 |
| 结果展示 | 半遮半露策略 | 降低跳出率，兼顾广告收入和用户体验 |
| 样式方案 | CSS 变量 + rpx 单位 | 原生支持，响应式适配，主题扩展方便 |
