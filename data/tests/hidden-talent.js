module.exports = {
  id: 'hidden-talent',
  title: '你隐藏的超能力是什么？',
  category: 'brainhole',
  algorithm: 'score',
  pickCount: 12,
  questions: [
    {
      text: '你经常被朋友说的一句话是？',
      options: [
        { text: '你怎么知道的？你是不是有读心术？', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 1 } },
        { text: '你这效率也太高了吧', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '你运气也太好了吧', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '你怎么和刚才完全不一样了', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '你最擅长猜中什么？',
      options: [
        { text: '猜到别人没说出口的想法', scores: { mindread: 3, timectrl: 0, luck: 1, shapeshft: 0 } },
        { text: '猜到事情需要多长时间', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '猜对抽奖/石头剪刀布的结果', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '猜到不同场合该怎么表现', scores: { mindread: 1, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '如果有一天你突然消失了，朋友会先在哪找你？',
      options: [
        { text: '他们会觉得我在观察他们的反应', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 0 } },
        { text: '去我的工作台——我可能在赶deadline', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '可能会觉得我是被幸运外星人接走了', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 1 } },
        { text: '他们不一定认得出我', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '玩狼人杀/剧本杀时，你最强的地方是？',
      options: [
        { text: '一眼看出谁在说谎', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 1 } },
        { text: '在有限时间内分析出所有线索', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '总是莫名其妙抽到最好的身份', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '演什么像什么，谁都看不穿', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '你最"细思恐极"的一个特质是？',
      options: [
        { text: '有时候会梦到还没发生的事', scores: { mindread: 3, timectrl: 1, luck: 1, shapeshft: 0 } },
        { text: '总感觉时间对我格外"宽容"', scores: { mindread: 0, timectrl: 3, luck: 1, shapeshft: 0 } },
        { text: '关键时刻总有贵人出现帮我', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '不同朋友认识的我好像是不同的人', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '考试/面试时，你的状态是？',
      options: [
        { text: '总能猜中出题人/面试官想要的答案', scores: { mindread: 3, timectrl: 0, luck: 1, shapeshft: 0 } },
        { text: '最后几分钟效率暴增，刚好做完', scores: { mindread: 0, timectrl: 3, luck: 1, shapeshft: 0 } },
        { text: '复习的内容恰好被考到了', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '面试时变成了一个更好的"版本"', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '你最可能拥有哪种"异常"体验？',
      options: [
        { text: '和一个人对视就大概知道他在想什么', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 1 } },
        { text: '某个瞬间感觉时间变慢了', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '遇到危险时莫名其妙地化险为夷', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '在不同环境中性格截然不同', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '你觉得自己最"不正常"的能力是？',
      options: [
        { text: '能感受到别人情绪的变化，像天线一样', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 1 } },
        { text: '内心有个精准的时钟，几乎不需要看表', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '做选择时凭直觉选的通常都是对的', scores: { mindread: 1, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '可以在几秒内切换到完全不同的状态', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '你最让人感到不可思议的日常表现是？',
      options: [
        { text: '总能提前发现谁要生气/不开心', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 0 } },
        { text: '同样的时间，我做的事情比别人多得多', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '排队总能选到最快的那条', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '和不同类型的人都能聊到一起', scores: { mindread: 1, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '如果你是游戏角色，你的被动技能是？',
      options: [
        { text: '洞察之眼——看破一切伪装', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 0 } },
        { text: '时间加速——冷却时间减半', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '天命之子——暴击率+50%', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '千面——根据环境自动切换形态', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '你在电影里最可能扮演什么角色？',
      options: [
        { text: '读心侦探——所有人的秘密都逃不过你', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 1 } },
        { text: '时间管理大师——永远在最后一秒解决问题', scores: { mindread: 0, timectrl: 3, luck: 1, shapeshft: 0 } },
        { text: '主角光环本环——怎么都死不了', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '超级间谍——一人千面，谁都猜不到真身', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '你的朋友圈/社交账号是什么风格？',
      options: [
        { text: '偶尔发一些让人"被看穿了"的观察', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 0 } },
        { text: '日更——记录力max', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '分享好运瞬间——中奖/偶遇/巧合', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '不同平台完全不同的画风', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '你对"第六感"的看法是？',
      options: [
        { text: '我就有，而且很准', scores: { mindread: 3, timectrl: 0, luck: 1, shapeshft: 0 } },
        { text: '不存在第六感，只有高效的信息处理', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '说不清，但有些巧合真的无法解释', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 1 } },
        { text: '可能是一种"读空气"的能力', scores: { mindread: 1, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '你最希望自己的超能力能用在哪里？',
      options: [
        { text: '读懂暗恋对象/老板真正在想什么', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 0 } },
        { text: '让每天多出几个小时来做自己的事', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '买彩票一买一个准', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '在任何社交场合都如鱼得水', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '如果超能力会有副作用，你最能接受哪种？',
      options: [
        { text: '偶尔会感受到不想知道的信息', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 0 } },
        { text: '感觉比别人老得更快', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '好运会偶尔反噬——小倒霉不断', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '有时候会忘了"真正的自己"是什么样', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '深夜刷手机时，你最容易沉迷的内容是？',
      options: [
        { text: '微表情分析/心理学/犯罪侧写类视频', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 1 } },
        { text: '效率工具/时间管理/自律打卡博主', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '开盲盒/刮刮乐/抽卡类直播', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '各种变装/仿妆/声音模仿视频', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '如果穿越到古代，你最可能靠什么活下去？',
      options: [
        { text: '察言观色，成为皇帝身边的谋士', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 1 } },
        { text: '精准预判战局节奏，当一名军师', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '意外挖到宝藏或被贵人收养', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '伪装成不同身份，在各方势力间游刃有余', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '和陌生人一起坐电梯时，你会？',
      options: [
        { text: '不自觉地观察对方的状态，脑补他的故事', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 0 } },
        { text: '默默计算到达楼层的时间，精确到秒', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '电梯门一开就遇到了正好要找的人', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 1 } },
        { text: '根据对方气质迅速调整自己的气场', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '你最容易在什么时刻获得灵感？',
      options: [
        { text: '和别人深度交谈时，突然"接收到"对方没说的信息', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 0 } },
        { text: 'deadline前最后两小时，大脑突然超频运转', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '随手翻书/刷视频，恰好看到最需要的答案', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '换了一个新环境后，立刻进入新的思维模式', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '你最常被误解的地方是？',
      options: [
        { text: '别人觉得我在"审视"他们，但我只是在无意识地感知', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 1 } },
        { text: '别人觉得我不需要休息，其实我只是把休息安排得很隐蔽', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '别人觉得我"走了狗屎运"，但我真的只是运气好', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '别人觉得我没有真性情，但其实我每一面都是真实的', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '你在团队合作中，最常扮演的角色是？',
      options: [
        { text: '氛围感知者——第一个发现团队情绪出问题的人', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 0 } },
        { text: '节奏掌控者——确保进度不偏移一秒', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '锦鲤本鲤——有我在的项目总是特别顺利', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 1 } },
        { text: '万能胶——什么岗位缺人我就能顶上', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '你做过的最"超自然"的一件事是？',
      options: [
        { text: '正要给某人发消息，那人就给我打了电话', scores: { mindread: 3, timectrl: 0, luck: 1, shapeshft: 0 } },
        { text: '闹钟还没响就醒了，而且分秒不差', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '连续三次在扭蛋机抽中隐藏款', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '被同一天认识的两拨人当成了完全不同的人', scores: { mindread: 0, timectrl: 0, luck: 0, shapeshft: 3 } },
      ]
    },
    {
      text: '如果你是一款App，你的核心功能是？',
      options: [
        { text: '情绪扫描仪——对准一个人就能显示他的真实心情', scores: { mindread: 3, timectrl: 0, luck: 0, shapeshft: 0 } },
        { text: '时间折叠器——帮用户把8小时的活压缩到3小时', scores: { mindread: 0, timectrl: 3, luck: 0, shapeshft: 0 } },
        { text: '概率扭曲器——打开之后做什么都更容易成功', scores: { mindread: 0, timectrl: 0, luck: 3, shapeshft: 0 } },
        { text: '人格切换台——一键变成最适合当前场景的你', scores: { mindread: 0, timectrl: 1, luck: 0, shapeshft: 3 } },
      ]
    },
  ],
  results: {
    mindread: {
      title: '🧠 读心术',
      tagline: '你看到的不是表情，是灵魂',
      traits: ['直觉', '共情', '洞察', '敏感'],
      rarity: 0.20,
      desc: '你的隐藏超能力是一种近乎恐怖的"读心术"。你能从一个人的微表情、语气变化、甚至打字节奏中读出他们真正的想法。朋友和你聊天时常常有种"被扒光"的感觉——不是因为你在审判，而是因为你太懂了。这种天赋让你成为最好的倾听者，也让你有时候承受了太多不属于自己的情绪。',
      advice: '你的共情力是一件礼物，但记得给自己设置"情绪防火墙"。不是每个人的情绪都需要你来接住，照顾好自己才能更好地理解别人。',
      hidden: '你偶尔会有一种疲惫感——不是身体上的，而是"看穿太多"带来的。你知道谁在强颜欢笑，谁在口是心非，但你选择不拆穿。这种克制，才是你真正的超能力。',
    },
    timectrl: {
      title: '⏱️ 时间操控',
      tagline: '同样24小时，你活出了48小时的密度',
      traits: ['高效', '专注', '自律', '掌控感'],
      rarity: 0.15,
      desc: '你的隐藏超能力是"时间操控"——同样的24小时，你似乎总能做到比别人多得多的事。你的大脑里有一个精密的时间引擎，能把每一分钟都用到恰到好处。deadline对别人是噩梦，对你是"刚好在最佳时间点完成"的精确操作。别人觉得你效率高，但你知道——你只是比别人更懂得"时间的纹理"。',
      advice: '你对时间的掌控力让人羡慕，但"不被时间驱动"的时刻也同样珍贵。试试不设闹钟的一天，让时间自己流动——你会发现一种从未体验过的自由。',
      hidden: '你高效的背后藏着一种隐隐的焦虑：你害怕"浪费时间"。但有些最美好的事——发呆、闲聊、漫无目的地散步——恰恰是"浪费"出来的。',
    },
    luck: {
      title: '🍀 逆天好运',
      tagline: '走路都能捡到四叶草的人',
      traits: ['乐观', '直觉', '松弛', '福气'],
      rarity: 0.10,
      desc: '你的隐藏超能力是一种让所有人嫉妒的"逆天好运"。你总能在关键时刻遇到贵人，做选择时踩中正确的那个，就连下雨天出门都会在你到达目的地后才开始下。你不是没有努力，但你的努力好像总能得到命运的额外"加成"。有人说这是运气，但你知道——乐观本身就是最强的运气加持器。',
      advice: '好运是你的天赋，但别让它变成依赖。运气只是锦上添花，真正的底气还是来自实力。偶尔做做那些"确定会失败"的事——你会发现，输也没那么可怕。',
      hidden: '你的好运背后其实有一个不为人知的秘密：你对"失去好运"这件事有一种深深的恐惧。你害怕有一天运气用完了，自己还剩什么？答案是——你的乐观和韧性，从来都不是运气。',
    },
    shapeshft: {
      title: '🎭 千面变形',
      tagline: '你不是在演，你是真的有很多面',
      traits: ['适应力', '社交变色龙', '共情', '多面'],
      rarity: 0.12,
      desc: '你的隐藏超能力是"千面变形"——你可以在不同的场景中切换出完全不同的人格面具，而且每一面都是真实的。和学霸在一起你是学术达人，和段子手在一起你比他还好笑，和长辈在一起你乖巧得体。这不是虚伪，而是你天生拥有一种超强的"社交镜像"能力——你能迅速理解一个人/一个环境需要什么，并成为那个最合适的版本。',
      advice: '你的适应力是顶级天赋，但别忘了问自己"只有我一个人的时候，我是什么样的？"找到那个不需要适应任何人的自己，那才是你最有力量的形态。',
      hidden: '你最隐秘的恐惧是：如果有一天所有面具都摘下来，镜子里的那个人，你还认识吗？答案是——你认识。因为你所有的面，都是你。不是伪装，是丰富。',
    },
  }
}
