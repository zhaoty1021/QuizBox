module.exports = {
  id: 'parallel-life',
  title: '平行宇宙里的你在过什么人生？',
  category: 'life',
  algorithm: 'branch',
  startQuestion: 'start',
  questions: {
    // ===== 入口 =====
    start: {
      text: '你最常做的白日梦是？',
      options: [
        { text: '在一个没人认识我的城市重新开始', next: 'q1_freedom' },
        { text: '发明了一个改变世界的东西', next: 'q1_create' },
        { text: '站在一个巨大舞台上，万人瞩目', next: 'q1_power' },
        { text: '在一个安静的地方，过自给自足的生活', next: 'q1_peace' },
      ]
    },

    // ===== 第二层：自由路线 =====
    q1_freedom: {
      text: '如果明天可以出发去任何地方，你选？',
      options: [
        { text: '一张随机目的地的机票', next: 'q2_wander' },
        { text: '一个文化完全不同的国家深度体验', next: 'q2_explore' },
        { text: '其实哪儿都行，重点是逃离现在', next: 'q2_escape' },
      ]
    },
    // ===== 第二层：创造路线 =====
    q1_create: {
      text: '你小时候最想成为什么？',
      options: [
        { text: '科学家 / 发明家', next: 'q2_inventor' },
        { text: '画家 / 作家 / 音乐人', next: 'q2_artist' },
        { text: '探险家 / 旅行家', next: 'q2_wander' },
      ]
    },
    // ===== 第二层：权力路线 =====
    q1_power: {
      text: '你觉得什么样的人最酷？',
      options: [
        { text: '白手起家建立商业帝国的企业家', next: 'q2_empire' },
        { text: '在车库里造出下一个苹果的极客', next: 'q2_inventor' },
        { text: '背包走遍全世界的旅行博主', next: 'q2_wander' },
      ]
    },
    // ===== 第二层：安宁路线 =====
    q1_peace: {
      text: '你理想中的一天是怎样的？',
      options: [
        { text: '日出而作，照顾花园和菜地，傍晚读书', next: 'q2_hermit' },
        { text: '在工作室里做手工/画画，沉浸一整天', next: 'q2_artist' },
        { text: '什么都不做，只是坐着看云发呆', next: 'q2_detach' },
      ]
    },

    // ===== 第三层 =====
    q2_wander: {
      text: '你最享受旅行中的哪个瞬间？',
      options: [
        { text: '迷路后意外发现了一个超棒的地方', next: 'q3_solo_travel' },
        { text: '和旅途中认识的陌生人聊到深夜', next: 'q3_connection' },
        { text: '站在一个绝美的地方，觉得世界好大', next: 'q3_solo_travel' },
      ]
    },
    q2_explore: {
      text: '到了一个完全陌生的城市，你第一件事做什么？',
      options: [
        { text: '不看攻略，随便走走看看', next: 'q3_solo_travel' },
        { text: '去当地人常去的地方，融入他们的日常', next: 'q3_connection' },
        { text: '找一个安静的角落，先观察这个城市的节奏', next: 'q3_observe' },
      ]
    },
    q2_escape: {
      text: '你觉得自己最想逃离的是什么？',
      options: [
        { text: '固定的日程和重复的日子', next: 'q3_solo_travel' },
        { text: '不得不维持的人际关系', next: 'q3_observe' },
        { text: '对未来的焦虑和不确定感', next: 'q3_seek_meaning' },
      ]
    },
    q2_inventor: {
      text: '你更想创造什么？',
      options: [
        { text: '一个能解决实际问题的产品/工具', next: 'q3_build' },
        { text: '一个能影响很多人思想的作品', next: 'q3_influence' },
        { text: '一个只有我自己觉得酷的东西', next: 'q3_obsess' },
      ]
    },
    q2_artist: {
      text: '创作对你来说意味着什么？',
      options: [
        { text: '表达内心那些说不出来的东西', next: 'q3_obsess' },
        { text: '让看到的人产生共鸣', next: 'q3_influence' },
        { text: '纯粹的快乐，做的过程就是奖励', next: 'q3_craft' },
      ]
    },
    q2_empire: {
      text: '如果你是CEO，你最享受哪个部分？',
      options: [
        { text: '做关键决策的瞬间——一念之间改变走向', next: 'q3_decide' },
        { text: '组建一支强大的团队，看他们成长', next: 'q3_influence' },
        { text: '看着数字增长，资源越来越多', next: 'q3_accumulate' },
      ]
    },
    q2_hermit: {
      text: '你觉得"自给自足"最吸引你的是什么？',
      options: [
        { text: '不欠任何人，完全自由', next: 'q3_observe' },
        { text: '亲手创造自己需要的一切，有种踏实感', next: 'q3_craft' },
        { text: '远离噪音，终于能听见自己的声音', next: 'q3_seek_meaning' },
      ]
    },
    q2_detach: {
      text: '你觉得"什么都不做"的时候，大脑在做什么？',
      options: [
        { text: '在回忆过去的某个画面', next: 'q3_seek_meaning' },
        { text: '什么都没想，就是放空', next: 'q3_observe' },
        { text: '在想一些奇奇怪怪的假设', next: 'q3_obsess' },
      ]
    },

    // ===== 第四层 =====
    q3_solo_travel: {
      text: '你觉得"家"意味着什么？',
      options: [
        { text: '一个背包就是家，心安即归处', next: 'q4_nomad_deep' },
        { text: '家是一个人，不是一个地方', next: 'q4_bond' },
      ]
    },
    q3_connection: {
      text: '你和陌生人建立联系的速度快吗？',
      options: [
        { text: '很快，我天生自来熟', next: 'q4_bond' },
        { text: '慢热，但一旦连接就很深', next: 'q4_nomad_deep' },
      ]
    },
    q3_observe: {
      text: '你更享受"参与世界"还是"观察世界"？',
      options: [
        { text: '观察——我喜欢当一个清醒的旁观者', next: 'q4_hermit_deep' },
        { text: '参与——但只参与我真正在乎的部分', next: 'q4_selective' },
      ]
    },
    q3_build: {
      text: '你做东西的驱动力是什么？',
      options: [
        { text: '解决一个让我烦躁的问题', next: 'q4_inventor_deep' },
        { text: '证明"这件事是可以做到的"', next: 'q4_inventor_deep' },
        { text: '赚到钱，获得商业上的成功', next: 'q4_ruler_deep' },
      ]
    },
    q3_influence: {
      text: '你希望影响别人的方式是？',
      options: [
        { text: '用作品/产品，让它替我说话', next: 'q4_inventor_deep' },
        { text: '直接领导，带着一群人往前走', next: 'q4_ruler_deep' },
        { text: '不需要大规模影响，影响一小群人就够了', next: 'q4_selective' },
      ]
    },
    q3_obsess: {
      text: '你有过那种"别人都不理解但你特别着迷"的经历吗？',
      options: [
        { text: '经常，而且我享受这种"只有我懂"的感觉', next: 'q4_inventor_deep' },
        { text: '有过，后来发现还是需要有人懂', next: 'q4_bond' },
        { text: '有过，但我最后把它做成了别人也能理解的东西', next: 'q4_ruler_deep' },
      ]
    },
    q3_craft: {
      text: '你愿意花多长时间打磨一件作品？',
      options: [
        { text: '直到我自己满意为止，哪怕一年', next: 'q4_hermit_deep' },
        { text: '差不多了就可以，完成比完美重要', next: 'q4_inventor_deep' },
      ]
    },
    q3_decide: {
      text: '做了一个高风险决定后，你的状态是？',
      options: [
        { text: '兴奋——赌一把的感觉让我活着', next: 'q4_ruler_deep' },
        { text: '冷静分析后果，准备应对方案', next: 'q4_ruler_deep' },
        { text: '有点后悔，但绝不会让别人看出来', next: 'q4_selective' },
      ]
    },
    q3_accumulate: {
      text: '你追求资源的根本动力是什么？',
      options: [
        { text: '安全感——有足够的底气面对任何变化', next: 'q4_ruler_deep' },
        { text: '自由——有钱就可以做任何想做的事', next: 'q4_nomad_deep' },
      ]
    },
    q3_seek_meaning: {
      text: '你觉得人活着最重要的是什么？',
      options: [
        { text: '找到内心的平静', next: 'q4_hermit_deep' },
        { text: '经历尽可能多的事', next: 'q4_nomad_deep' },
        { text: '留下一些痕迹证明来过', next: 'q4_inventor_deep' },
      ]
    },

    // ===== 第五层（终局确认）=====
    q4_nomad_deep: {
      text: '你最怕哪种人生？',
      options: [
        { text: '一辈子待在同一个地方，做同样的事', result: 'drifter' },
        { text: '被迫过一种不是自己选择的生活', next: 'q5_freedom_or_peace' },
      ]
    },
    q4_inventor_deep: {
      text: '如果你的创造成功了，你最想要什么？',
      options: [
        { text: '被写进历史——哪怕只是一个小注脚', result: 'inventor' },
        { text: '赚到足够的钱，然后做下一个项目', next: 'q5_create_or_rule' },
        { text: '不需要成功，做的过程就够了', result: 'hermit' },
      ]
    },
    q4_ruler_deep: {
      text: '你更羡慕哪种人？',
      options: [
        { text: '年纪轻轻就实现了财务自由', result: 'ruler' },
        { text: '在某个领域做到了前1%', result: 'inventor' },
        { text: '每天按自己的节奏生活，从不焦虑', next: 'q5_freedom_or_peace' },
      ]
    },
    q4_hermit_deep: {
      text: '如果隐居，你最怕失去什么？',
      options: [
        { text: '不怕，我已经想好了', result: 'hermit' },
        { text: '怕失去和重要的人的联系', next: 'q5_bond_check' },
      ]
    },
    q4_bond: {
      text: '你觉得"归属感"重要吗？',
      options: [
        { text: '重要，但我在路上也能找到', result: 'drifter' },
        { text: '非常重要，我需要一个稳定的圈子', next: 'q5_bond_check' },
        { text: '不重要，我自己就是自己的归属', result: 'hermit' },
      ]
    },
    q4_selective: {
      text: '你对"成功"的定义最接近哪个？',
      options: [
        { text: '做出了一个留得下来的东西', result: 'inventor' },
        { text: '不被打扰地过自己想要的日子', result: 'hermit' },
        { text: '活得自由，想去哪就去哪', result: 'drifter' },
        { text: '掌握足够的资源和话语权', result: 'ruler' },
      ]
    },

    // ===== 第六层（最终分歧）=====
    q5_freedom_or_peace: {
      text: '如果可以选一种退休生活？',
      options: [
        { text: '环游世界，把没去过的地方都走一遍', result: 'drifter' },
        { text: '种花种菜，和猫狗一起晒太阳', result: 'hermit' },
      ]
    },
    q5_create_or_rule: {
      text: '当你的事业做大后，你更想？',
      options: [
        { text: '继续亲手做产品，保持创造的感觉', result: 'inventor' },
        { text: '扩大规模，让更多人为我的愿景工作', result: 'ruler' },
      ]
    },
    q5_bond_check: {
      text: '你最珍惜的关系是哪种？',
      options: [
        { text: '能一起沉默也不尴尬的老朋友', result: 'hermit' },
        { text: '一起冒险、一起经历疯狂事的旅伴', result: 'drifter' },
        { text: '志同道合、一起创造东西的搭档', result: 'inventor' },
      ]
    },
  },
  results: {
    drifter: {
      title: '🌍 星际流浪者',
      tagline: '在路上，就是回家',
      traits: ['冒险', '好奇心', '适应力', '浪漫'],
      rarity: 0.18,
      desc: '在平行宇宙里，你是一个永远在路上的旅人。你的行李永远只有一个背包，但你见过的日出比大多数人一辈子看到的都多。你不属于任何一个地方，但每到一个地方都能迅速融入。你用脚步丈量世界，用故事填满人生。有人觉得你不稳定，但你知道——每一次出发，都是一次灵魂的升级。',
      advice: '你追逐自由的脚步是你最大的魅力，但偶尔试试"在一个地方深深扎根"——你会发现，深度和广度一样精彩。',
      hidden: '你不停出发的背后，其实藏着一种说不清的"不满足"——不是对世界不满足，而是对自己。你一直在找的那个东西，可能不在下一个目的地，而在你停下来的那个瞬间。',
    },
    inventor: {
      title: '🔬 疯狂发明家',
      tagline: '在别人看到问题的地方，你看到了答案',
      traits: ['创造力', '专注', '好奇', '偏执'],
      rarity: 0.14,
      desc: '在平行宇宙里，你是一个沉迷于创造的人。你的房间/工作室堆满了各种半成品和草图，你的大脑从不停转。你可能不善言辞，但你的作品会替你说话。你相信"做出来"比"说出来"更有力量。有人觉得你偏执，但你知道——所有伟大的东西，都是"偏执"的人做出来的。',
      advice: '你的专注力是稀缺资源，但别忘了：有些灵感需要在"不专注"的时候才会出现。给大脑一些放空的时间，它会用惊喜来回报你。',
      hidden: '你最害怕的事情其实不是"做不出来"，而是"做出来了没人在乎"。但你需要知道——真正有价值的创造，从来不需要即时的掌声。',
    },
    ruler: {
      title: '🏛️ 商业帝国缔造者',
      tagline: '野心是最好的导航',
      traits: ['野心', '魄力', '资源整合', '领袖气质'],
      rarity: 0.08,
      desc: '在平行宇宙里，你站在一个庞大商业帝国的顶端。从第一桶金到行业领袖，你靠的不是运气而是精准的判断力和过人的执行力。你天生能看到别人看不到的机会，也敢在别人犹豫时下注。你不是最聪明的，但你总能找到最聪明的人为你所用。',
      advice: '你的雄心推动你不断攀登，但"到达顶峰"不是故事的结局。试着在上升的路上停下来看看风景，有些风景只存在于中途。',
      hidden: '你最不愿承认的事是：你偶尔会羡慕那些"不那么有野心"的人。他们看起来轻松得多，快乐得多。但你选择了另一条路——因为平凡，从来不是你的选项。',
    },
    hermit: {
      title: '🏡 山野隐居者',
      tagline: '在安静中，听见自己',
      traits: ['独立', '审美', '自在', '通透'],
      rarity: 0.10,
      desc: '在平行宇宙里，你住在一个远离喧嚣的地方——可能是山间小屋，可能是海边木房。你有一门让自己安心的手艺，院子里种着菜和花。你的日子很简单，但每一天都是自己选择的。你不需要别人的认可来证明自己的价值，因为你早就和自己和解了。',
      advice: '你的内心丰富到不需要外界的填充，但别让"我一个人就够了"变成一堵墙。偶尔打开门，让一些人和事进来——你不会因此失去自己，只会发现更大的自己。',
      hidden: '你渴望安静，但你的灵魂并不"安静"——在那个小屋里、那个院子里，你其实一直在进行一场很深很深的对话。那场对话的对象，是你自己。',
    },
  }
}
