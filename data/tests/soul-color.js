module.exports = {
  id: 'soul-color',
  title: '你的灵魂是什么颜色？',
  category: 'psychology',
  algorithm: 'weight',
  pickCount: 11,
  dimensionLabels: {
    passion: '热烈',
    depth: '深邃',
    warmth: '温暖',
    freedom: '自由',
  },
  resultMapping: [
    { primary: 'passion', result: 'crimson' },
    { primary: 'depth',   result: 'azure' },
    { primary: 'warmth',  result: 'golden' },
    { primary: 'freedom', result: 'emerald' },
  ],
  questions: [
    {
      text: '周末没有安排，你最可能在做什么？',
      options: [
        { text: '追一部让人热血沸腾的剧', weights: { passion: 3, depth: 0, warmth: 1, freedom: 0 } },
        { text: '泡一杯茶，安静看会儿书', weights: { passion: 0, depth: 3, warmth: 0, freedom: 1 } },
        { text: '约朋友出来吃饭聊天', weights: { passion: 1, depth: 0, warmth: 3, freedom: 0 } },
        { text: '去一个没去过的地方随便逛', weights: { passion: 0, depth: 1, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '你在朋友群里通常是什么角色？',
      options: [
        { text: '话题终结者——总能把气氛点燃', weights: { passion: 3, depth: 0, warmth: 1, freedom: 0 } },
        { text: '安静围观，偶尔冒出一句金句', weights: { passion: 0, depth: 3, warmth: 0, freedom: 1 } },
        { text: '组织者——聚会约饭都是我发起的', weights: { passion: 0, depth: 0, warmth: 3, freedom: 1 } },
        { text: '表情包发射器+段子手', weights: { passion: 1, depth: 0, warmth: 1, freedom: 3 } },
      ]
    },
    {
      text: '让你最有成就感的事情是？',
      options: [
        { text: '拼尽全力完成了一件难事', weights: { passion: 3, depth: 0, warmth: 1, freedom: 0 } },
        { text: '想通了一个困扰很久的问题', weights: { passion: 0, depth: 3, warmth: 0, freedom: 1 } },
        { text: '帮到了一个真正需要帮助的人', weights: { passion: 0, depth: 1, warmth: 3, freedom: 0 } },
        { text: '做了一件所有人都说不可能的事', weights: { passion: 1, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '你最受不了哪种人？',
      options: [
        { text: '做事拖拖拉拉，毫无激情的人', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '说话不过脑子，情绪化的人', weights: { passion: 0, depth: 3, warmth: 1, freedom: 0 } },
        { text: '自私冷漠，只顾自己的人', weights: { passion: 0, depth: 0, warmth: 3, freedom: 1 } },
        { text: '循规蹈矩，毫无想象力的人', weights: { passion: 1, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '如果心情不好，你会怎么消化？',
      options: [
        { text: '运动、蹦迪、大声唱歌', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '一个人待着，想清楚再说', weights: { passion: 0, depth: 3, warmth: 0, freedom: 1 } },
        { text: '找信任的人倾诉', weights: { passion: 0, depth: 0, warmth: 3, freedom: 0 } },
        { text: '做点有创意的事来转移注意力', weights: { passion: 1, depth: 1, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '你觉得哪种能力最值钱？',
      options: [
        { text: '超强的行动力和决断力', weights: { passion: 3, depth: 0, warmth: 1, freedom: 0 } },
        { text: '洞察人心的共情能力', weights: { passion: 0, depth: 3, warmth: 1, freedom: 0 } },
        { text: '让所有人都信任你的人格魅力', weights: { passion: 0, depth: 0, warmth: 3, freedom: 1 } },
        { text: '打破常规的创造力', weights: { passion: 0, depth: 1, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '选一个词形容你的理想生活：',
      options: [
        { text: '精彩', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '宁静', weights: { passion: 0, depth: 3, warmth: 0, freedom: 0 } },
        { text: '温暖', weights: { passion: 0, depth: 0, warmth: 3, freedom: 0 } },
        { text: '自由', weights: { passion: 0, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '你的手机壁纸最可能是？',
      options: [
        { text: '城市夜景 / 跑车 / 火焰', weights: { passion: 3, depth: 0, warmth: 0, freedom: 0 } },
        { text: '星空 / 大海 / 极简风', weights: { passion: 0, depth: 3, warmth: 0, freedom: 1 } },
        { text: '和朋友或家人的合照', weights: { passion: 0, depth: 0, warmth: 3, freedom: 0 } },
        { text: '插画 / 抽象艺术 / 怪诞风', weights: { passion: 0, depth: 1, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '你做决定的方式通常是？',
      options: [
        { text: '直觉告诉我该怎么做，马上行动', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '反复权衡，确认无误再行动', weights: { passion: 0, depth: 3, warmth: 1, freedom: 0 } },
        { text: '先问问周围人的意见', weights: { passion: 0, depth: 0, warmth: 3, freedom: 0 } },
        { text: '选那个最有趣的选项', weights: { passion: 1, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '如果有来生，你希望变成什么？',
      options: [
        { text: '雄鹰——翱翔在最高的天空', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '鲸鱼——在深海里自在遨游', weights: { passion: 0, depth: 3, warmth: 0, freedom: 1 } },
        { text: '大树——守护一方水土和生灵', weights: { passion: 0, depth: 1, warmth: 3, freedom: 0 } },
        { text: '猫——想做什么就做什么', weights: { passion: 0, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '哪种旅行方式最吸引你？',
      options: [
        { text: '极限运动——蹦极、跳伞、攀岩', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '文化之旅——博物馆、古迹、寺庙', weights: { passion: 0, depth: 3, warmth: 1, freedom: 0 } },
        { text: '和朋友一起自驾环游', weights: { passion: 1, depth: 0, warmth: 3, freedom: 0 } },
        { text: '没有计划，随便买张票就出发', weights: { passion: 0, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '你最希望被人记住的是什么？',
      options: [
        { text: '那个敢想敢做的人', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '那个总能看到本质的人', weights: { passion: 0, depth: 3, warmth: 0, freedom: 1 } },
        { text: '那个让人如沐春风的人', weights: { passion: 0, depth: 0, warmth: 3, freedom: 0 } },
        { text: '那个永远在创造惊喜的人', weights: { passion: 0, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '你小时候最常被大人说的一句话是？',
      options: [
        { text: '你怎么这么坐不住', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '你怎么总那么安静', weights: { passion: 0, depth: 3, warmth: 0, freedom: 0 } },
        { text: '你真懂事', weights: { passion: 0, depth: 0, warmth: 3, freedom: 0 } },
        { text: '你脑子里都在想些什么', weights: { passion: 0, depth: 1, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '你觉得"真正的勇敢"是什么？',
      options: [
        { text: '明知困难也敢往前冲', weights: { passion: 3, depth: 0, warmth: 1, freedom: 0 } },
        { text: '在混乱中保持清醒和冷静', weights: { passion: 0, depth: 3, warmth: 0, freedom: 1 } },
        { text: '为了在乎的人愿意牺牲自己', weights: { passion: 0, depth: 0, warmth: 3, freedom: 0 } },
        { text: '坚持做自己，不怕被人不理解', weights: { passion: 1, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '你的能量来源是什么？',
      options: [
        { text: '竞争和挑战——有对手才有动力', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '独处和思考——一个人充电最快', weights: { passion: 0, depth: 3, warmth: 0, freedom: 1 } },
        { text: '和喜欢的人在一起——关系是动力', weights: { passion: 0, depth: 0, warmth: 3, freedom: 0 } },
        { text: '新鲜事物——没有新刺激就会枯萎', weights: { passion: 0, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '深夜睡不着的时候，你脑子里通常在想什么？',
      options: [
        { text: '明天要做的事，恨不得现在就开始', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '人生的意义、宇宙的尽头之类的', weights: { passion: 0, depth: 3, warmth: 0, freedom: 1 } },
        { text: '某个人最近是不是不太开心', weights: { passion: 0, depth: 1, warmth: 3, freedom: 0 } },
        { text: '突然冒出一个很酷的点子，越想越兴奋', weights: { passion: 1, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '如果你的人生是一部电影，它的类型最可能是？',
      options: [
        { text: '热血动作片——每一帧都在燃烧', weights: { passion: 3, depth: 0, warmth: 1, freedom: 0 } },
        { text: '悬疑推理片——层层反转，细思极恐', weights: { passion: 0, depth: 3, warmth: 0, freedom: 1 } },
        { text: '温情治愈片——看完想给身边的人一个拥抱', weights: { passion: 0, depth: 0, warmth: 3, freedom: 0 } },
        { text: '公路冒险片——没有终点，全是风景', weights: { passion: 0, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '朋友送你一本书，你最希望是哪种？',
      options: [
        { text: '一本人物传记——讲述某个传奇人物的一生', weights: { passion: 3, depth: 1, warmth: 0, freedom: 0 } },
        { text: '一本哲学随笔——薄薄的但每页都值得停下来想', weights: { passion: 0, depth: 3, warmth: 0, freedom: 1 } },
        { text: '一本手写的信件集——充满真情实感的文字', weights: { passion: 0, depth: 0, warmth: 3, freedom: 0 } },
        { text: '一本旅行札记——记录世界各地的奇遇', weights: { passion: 0, depth: 0, warmth: 1, freedom: 3 } },
      ]
    },
    {
      text: '你在工作或学习中最怕遇到什么？',
      options: [
        { text: '一成不变的重复任务，毫无挑战', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '到处是噪音和打断，完全无法专注', weights: { passion: 0, depth: 3, warmth: 0, freedom: 0 } },
        { text: '冷漠的团队氛围，大家各干各的', weights: { passion: 0, depth: 0, warmth: 3, freedom: 1 } },
        { text: '死板的规定和流程，一点弹性都没有', weights: { passion: 1, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '如果可以拥有一种超能力，你选哪个？',
      options: [
        { text: '时间暂停——把想做的事全部做完', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '读心术——看穿所有人的真实想法', weights: { passion: 0, depth: 3, warmth: 1, freedom: 0 } },
        { text: '治愈之手——触碰就能消除别人的痛苦', weights: { passion: 0, depth: 0, warmth: 3, freedom: 0 } },
        { text: '瞬间移动——想去哪儿就去哪儿', weights: { passion: 0, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '你收到了一笔意外之财，第一反应是？',
      options: [
        { text: '投资自己——报个一直想学的课程或买装备', weights: { passion: 3, depth: 1, warmth: 0, freedom: 0 } },
        { text: '存起来——有备无患，先想清楚再花', weights: { passion: 0, depth: 3, warmth: 0, freedom: 0 } },
        { text: '请朋友家人吃一顿好的', weights: { passion: 0, depth: 0, warmth: 3, freedom: 1 } },
        { text: '来一场说走就走的旅行', weights: { passion: 1, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '哪句话最让你心头一震？',
      options: [
        { text: '要么热烈地活，要么别活', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '未经审视的人生不值得过', weights: { passion: 0, depth: 3, warmth: 0, freedom: 1 } },
        { text: '所谓爱，就是一个人为了另一个人的幸福而努力', weights: { passion: 0, depth: 1, warmth: 3, freedom: 0 } },
        { text: '生活不在别处，就在不被定义的每一天里', weights: { passion: 0, depth: 0, warmth: 0, freedom: 3 } },
      ]
    },
    {
      text: '你最喜欢哪个时间段？',
      options: [
        { text: '清晨——全世界都还没醒，我已经出发了', weights: { passion: 3, depth: 0, warmth: 0, freedom: 1 } },
        { text: '深夜——万籁俱寂，最适合沉入自己的世界', weights: { passion: 0, depth: 3, warmth: 0, freedom: 0 } },
        { text: '傍晚——忙碌结束，和在乎的人待在一起', weights: { passion: 0, depth: 0, warmth: 3, freedom: 1 } },
        { text: '午后——阳光正好，适合做一切闲散的事', weights: { passion: 0, depth: 1, warmth: 0, freedom: 3 } },
      ]
    },
  ],
  results: {
    crimson: {
      title: '🔥 赤红之魂',
      tagline: '燃烧即存在，停下即消亡',
      traits: ['热烈', '果敢', '行动派', '感染力'],
      rarity: 0.22,
      desc: '你的灵魂是一团赤红的火焰，炽热、纯粹、不可阻挡。你天生带着一种让人忍不住跟随的能量，做事雷厉风行，爱憎分明。你不是那种会在原地犹豫太久的人——比起"万一失败怎么办"，你更相信"不做才会后悔"。身边的人常常被你的热情点燃，你是社交场上天然的发光体。',
      advice: '你的热情是稀缺资源，但别让火焰烧到自己。学会在全速冲刺之间给自己一个喘息的间隔，持续燃烧比爆发一瞬更难，也更值得。',
      hidden: '你的火焰背后藏着一种深深的不安全感——你害怕停下来，因为停下来就意味着面对那些不愿面对的安静。但真相是：安静不会吞噬你，它只是让你看见更真实的自己。',
    },
    azure: {
      title: '🌊 湛蓝之魂',
      tagline: '表面平静，内藏星海',
      traits: ['沉稳', '通透', '高敏感', '深邃'],
      rarity: 0.15,
      desc: '你的灵魂是一片深邃的湛蓝，像最深处的海洋——表面看似波澜不惊，底下却蕴含着难以想象的深度和力量。你是人群中最擅长观察的人，别人没注意到的细节，你全都看在眼里。你不轻易表态，但一旦开口，往往一针见血。你享受独处，不是因为不合群，而是因为你的内心世界已经足够丰富。',
      advice: '你对世界的理解比大多数人更深，但别因此觉得"没人懂我"。试着主动分享你的想法，你会惊喜地发现——被理解的感觉比你想象的更治愈。',
      hidden: '你偶尔会产生一种莫名的"不属于这里"的感觉，像是灵魂来自某个更安静的维度。这种孤独不是缺陷，而是你与生俱来的深度——让你能触及别人到不了的地方。',
    },
    golden: {
      title: '☀️ 金色之魂',
      tagline: '温暖如阳，照亮他人',
      traits: ['温暖', '共情', '包容', '感召力'],
      rarity: 0.25,
      desc: '你的灵魂散发着金色的光芒，温暖、稳定、让人安心。你是那种"和你在一起就觉得一切会变好"的人。你天生共情力强，能读懂别人没有说出口的情绪，也愿意为在乎的人付出。你不是最张扬的那个，却是最被信任的那个——在你身边，人们可以放下防备做真实的自己。',
      advice: '你总是先想到别人，但别忘了"自己也是需要被照顾的人"。下次有人问你"你还好吗"，试着诚实回答，而不是条件反射地说"我没事"。',
      hidden: '你的温暖背后，藏着一个不太愿意承认的事实：你害怕失去。你对关系投入得越深，越担心有一天会失去。但你真正需要学会的不是抓紧，而是相信——真正值得的人，不需要你用牺牲自己来留住。',
    },
    emerald: {
      title: '🌿 翠绿之魂',
      tagline: '自由生长，不被定义',
      traits: ['自由', '创造力', '反叛', '浪漫'],
      rarity: 0.12,
      desc: '你的灵魂是一抹翠绿，像春天破土而出的嫩芽——充满生命力，永远朝着没人走过的方向生长。你骨子里是个反叛者，讨厌被规则束缚，总想找到"另一种可能"。你的脑子里永远有奇奇怪怪的想法，而这些想法偶尔会变成让所有人惊叹的创造。你不是不靠谱，你只是在用自己的节奏活着。',
      advice: '自由是你的氧气，但"有根基的自由"才能走更远。不是每个规则都是枷锁，有些是跳板。找到那些值得遵守的规则，你的创造力会变得更有力量。',
      hidden: '你总说自己喜欢自由，但内心深处有一个隐秘的渴望：被完全理解和接纳。你害怕的不是孤独，而是"为了合群而失去自己"。放心，属于你的人，不需要你变成别人。',
    },
  }
}
