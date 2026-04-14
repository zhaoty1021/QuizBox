module.exports = {
  id: 'past-life',
  title: '你的前世是什么身份？',
  category: 'destiny',
  algorithm: 'score',
  pickCount: 12,
  questions: [
    {
      text: '你最享受哪种环境？',
      options: [
        { text: '宁静的深山古寺', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '喧嚣的城市战场', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '书香弥漫的书院', scores: { monk: 1, warrior: 0, scholar: 3, noble: 1 } },
        { text: '金碧辉煌的宫殿', scores: { monk: 0, warrior: 1, scholar: 1, noble: 3 } },
      ]
    },
    {
      text: '遇到强大的对手，你第一反应是？',
      options: [
        { text: '冷静观察，寻找破绽', scores: { monk: 2, warrior: 1, scholar: 2, noble: 0 } },
        { text: '迎头而上，正面硬刚', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '以智谋化解，不战而胜', scores: { monk: 1, warrior: 0, scholar: 3, noble: 1 } },
        { text: '调动资源，借力打力', scores: { monk: 0, warrior: 1, scholar: 1, noble: 3 } },
      ]
    },
    {
      text: '你最看重人生中的什么？',
      options: [
        { text: '内心的平静与超脱', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '荣耀与被人铭记', scores: { monk: 0, warrior: 2, scholar: 0, noble: 2 } },
        { text: '知识与真理的探寻', scores: { monk: 1, warrior: 0, scholar: 3, noble: 0 } },
        { text: '权力与对他人的影响力', scores: { monk: 0, warrior: 1, scholar: 0, noble: 3 } },
      ]
    },
    {
      text: '如果你有一个秘密，你会？',
      options: [
        { text: '永远藏在心底，独自承受', scores: { monk: 3, warrior: 1, scholar: 1, noble: 0 } },
        { text: '告诉最信任的生死兄弟', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '写进日记，留给后人', scores: { monk: 1, warrior: 0, scholar: 3, noble: 1 } },
        { text: '视情况而定，秘密也是筹码', scores: { monk: 0, warrior: 0, scholar: 1, noble: 3 } },
      ]
    },
    {
      text: '你最恐惧的事情是？',
      options: [
        { text: '被欲望所控制，迷失自我', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '在战场上临阵脱逃', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '学问半途而废，一无所成', scores: { monk: 1, warrior: 0, scholar: 3, noble: 0 } },
        { text: '权力旁落，被人背叛', scores: { monk: 0, warrior: 1, scholar: 0, noble: 3 } },
      ]
    },
    {
      text: '别人眼中的你是？',
      options: [
        { text: '神秘莫测，难以捉摸', scores: { monk: 2, warrior: 0, scholar: 2, noble: 1 } },
        { text: '热血直爽，冲劲十足', scores: { monk: 0, warrior: 3, scholar: 0, noble: 0 } },
        { text: '博学多才，言辞犀利', scores: { monk: 0, warrior: 0, scholar: 3, noble: 1 } },
        { text: '优雅从容，气场十足', scores: { monk: 1, warrior: 0, scholar: 0, noble: 3 } },
      ]
    },
    {
      text: '临死前，你最希望留下的是什么？',
      options: [
        { text: '一本点化众生的经文', scores: { monk: 3, warrior: 0, scholar: 2, noble: 0 } },
        { text: '一段令人传唱的战歌', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '一部改变时代的著作', scores: { monk: 0, warrior: 0, scholar: 3, noble: 1 } },
        { text: '一个繁荣昌盛的王朝', scores: { monk: 0, warrior: 1, scholar: 0, noble: 3 } },
      ]
    },
    {
      text: '你对"命运"的态度是？',
      options: [
        { text: '命运由心，万法皆空', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '命运？我来创造命运', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '用知识读懂命运规律', scores: { monk: 1, warrior: 0, scholar: 3, noble: 0 } },
        { text: '命运是博弈，我要赢', scores: { monk: 0, warrior: 1, scholar: 0, noble: 3 } },
      ]
    },
    {
      text: '深夜失眠时，你通常在想什么？',
      options: [
        { text: '人活着的意义到底是什么', scores: { monk: 3, warrior: 0, scholar: 2, noble: 0 } },
        { text: '明天要做的事，一件件盘算', scores: { monk: 0, warrior: 2, scholar: 0, noble: 2 } },
        { text: '最近看到的一个有趣观点', scores: { monk: 0, warrior: 0, scholar: 3, noble: 0 } },
        { text: '某个人说过的一句话', scores: { monk: 1, warrior: 1, scholar: 0, noble: 2 } },
      ]
    },
    {
      text: '如果穿越回古代，你第一件事做什么？',
      options: [
        { text: '找一座山，开始修行', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '投军入伍，建功立业', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '开个学堂，传授知识', scores: { monk: 1, warrior: 0, scholar: 3, noble: 0 } },
        { text: '想办法接近权力中心', scores: { monk: 0, warrior: 1, scholar: 0, noble: 3 } },
      ]
    },
    {
      text: '你更相信什么？',
      options: [
        { text: '万物有灵，因果不空', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '实力说话，拳头就是道理', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '数据和逻辑不会骗人', scores: { monk: 0, warrior: 0, scholar: 3, noble: 1 } },
        { text: '人脉和资源决定一切', scores: { monk: 0, warrior: 1, scholar: 0, noble: 3 } },
      ]
    },
    {
      text: '朋友遇到麻烦来求助，你会？',
      options: [
        { text: '先帮他理清情绪，再看问题本身', scores: { monk: 3, warrior: 0, scholar: 1, noble: 1 } },
        { text: '二话不说，直接帮他干', scores: { monk: 0, warrior: 3, scholar: 0, noble: 0 } },
        { text: '帮他分析利弊，列出方案', scores: { monk: 0, warrior: 0, scholar: 3, noble: 1 } },
        { text: '看看能不能找关系帮他搞定', scores: { monk: 0, warrior: 1, scholar: 0, noble: 3 } },
      ]
    },
    {
      text: '你觉得最迷人的品质是？',
      options: [
        { text: '不争不抢的松弛感', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '说到做到的执行力', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '旁征博引的知识面', scores: { monk: 0, warrior: 0, scholar: 3, noble: 0 } },
        { text: '运筹帷幄的掌控力', scores: { monk: 0, warrior: 1, scholar: 0, noble: 3 } },
      ]
    },
    {
      text: '下面哪句话最能代表你？',
      options: [
        { text: '世事无常，唯心安处是故乡', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '要么不做，做就做到最好', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '我不确定，让我再查一下', scores: { monk: 0, warrior: 0, scholar: 3, noble: 0 } },
        { text: '格局打开，一切皆有可能', scores: { monk: 0, warrior: 1, scholar: 0, noble: 3 } },
      ]
    },
    {
      text: '如果可以拥有一项古代技能，你选？',
      options: [
        { text: '望气术——看穿人的本质', scores: { monk: 3, warrior: 0, scholar: 2, noble: 0 } },
        { text: '十八般武艺——以一敌百', scores: { monk: 0, warrior: 3, scholar: 0, noble: 0 } },
        { text: '过目不忘——博闻强记', scores: { monk: 0, warrior: 0, scholar: 3, noble: 1 } },
        { text: '帝王心术——驭人之道', scores: { monk: 0, warrior: 0, scholar: 1, noble: 3 } },
      ]
    },
    {
      text: '你在团队中通常是什么角色？',
      options: [
        { text: '旁观者——不太参与，但看得很透', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '冲锋手——脏活累活我来', scores: { monk: 0, warrior: 3, scholar: 0, noble: 0 } },
        { text: '智囊——出主意是我强项', scores: { monk: 0, warrior: 0, scholar: 3, noble: 1 } },
        { text: '统筹者——资源调配我最擅长', scores: { monk: 0, warrior: 0, scholar: 1, noble: 3 } },
      ]
    },
    {
      text: '你做了一个关于前世的梦，梦里的场景是？',
      options: [
        { text: '月光下的古寺，钟声悠远', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '风沙漫天的边关城楼', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '烛火摇曳的藏书阁', scores: { monk: 1, warrior: 0, scholar: 3, noble: 0 } },
        { text: '百官朝拜的恢弘大殿', scores: { monk: 0, warrior: 1, scholar: 0, noble: 3 } },
      ]
    },
    {
      text: '有人当面质疑你，你的第一反应是？',
      options: [
        { text: '微微一笑，不予回应', scores: { monk: 3, warrior: 0, scholar: 0, noble: 1 } },
        { text: '当场反驳，绝不示弱', scores: { monk: 0, warrior: 3, scholar: 0, noble: 0 } },
        { text: '摆事实讲道理，逻辑碾压', scores: { monk: 0, warrior: 0, scholar: 3, noble: 1 } },
        { text: '不动声色，事后让他知道代价', scores: { monk: 0, warrior: 1, scholar: 1, noble: 3 } },
      ]
    },
    {
      text: '如果你能收到前世寄来的一件遗物，你希望是？',
      options: [
        { text: '一串磨得发亮的念珠', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '一把缺口的旧刀', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '一卷写满批注的古籍', scores: { monk: 1, warrior: 0, scholar: 3, noble: 0 } },
        { text: '一枚刻着家徽的玉印', scores: { monk: 0, warrior: 0, scholar: 1, noble: 3 } },
      ]
    },
    {
      text: '旅行时，你最容易被什么吸引？',
      options: [
        { text: '山间小路尽头的无名禅院', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '古战场遗址和烽火台', scores: { monk: 0, warrior: 3, scholar: 1, noble: 0 } },
        { text: '当地老人讲述的民间传说', scores: { monk: 1, warrior: 0, scholar: 3, noble: 0 } },
        { text: '保存完好的古代王府园林', scores: { monk: 0, warrior: 0, scholar: 1, noble: 3 } },
      ]
    },
    {
      text: '你独处时最享受的状态是？',
      options: [
        { text: '什么都不想，放空自己', scores: { monk: 3, warrior: 0, scholar: 0, noble: 1 } },
        { text: '高强度运动，把自己逼到极限', scores: { monk: 0, warrior: 3, scholar: 0, noble: 0 } },
        { text: '沉浸在某个课题里忘记时间', scores: { monk: 0, warrior: 0, scholar: 3, noble: 0 } },
        { text: '复盘最近的人际关系和局势', scores: { monk: 0, warrior: 1, scholar: 1, noble: 3 } },
      ]
    },
    {
      text: '如果给你一年时间不用工作，你会做什么？',
      options: [
        { text: '去一个没有信号的地方静修', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '挑战极限运动，攀登雪山', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '系统地学一门全新的学科', scores: { monk: 0, warrior: 0, scholar: 3, noble: 0 } },
        { text: '建立一个属于自己的小事业', scores: { monk: 0, warrior: 1, scholar: 0, noble: 3 } },
      ]
    },
    {
      text: '你最不能忍受的人是哪种？',
      options: [
        { text: '浮躁功利，从不反省自己的人', scores: { monk: 3, warrior: 0, scholar: 1, noble: 0 } },
        { text: '优柔寡断，关键时刻掉链子的人', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '不懂装懂，信口开河的人', scores: { monk: 0, warrior: 0, scholar: 3, noble: 1 } },
        { text: '忘恩负义，过河拆桥的人', scores: { monk: 0, warrior: 1, scholar: 0, noble: 3 } },
      ]
    },
    {
      text: '你觉得"孤独"意味着什么？',
      options: [
        { text: '修行的必经之路，孤独即自由', scores: { monk: 3, warrior: 0, scholar: 2, noble: 0 } },
        { text: '战场上无人并肩的悲壮', scores: { monk: 0, warrior: 3, scholar: 0, noble: 1 } },
        { text: '思想太超前，无人能懂的寂寞', scores: { monk: 1, warrior: 0, scholar: 3, noble: 0 } },
        { text: '高处不胜寒，王者的宿命', scores: { monk: 0, warrior: 0, scholar: 0, noble: 3 } },
      ]
    },
  ],
  results: {
    monk: {
      title: '✨ 前世得道高僧',
      tagline: '心怀慈悲，看透世情',
      traits: ['超脱', '通透', '内敛', '慈悲'],
      rarity: 0.15,
      desc: '你前世超脱红尘，智慧深远，心怀慈悲却看透世情。历经千年修行，你懂得万物皆空，却也深知人间情义之重。今生的你内心平静，有独到见解，偶尔会觉得与这个世界格格不入——那是因为你的灵魂见过更广阔的天地。',
      advice: '你天生适合做倾听者和引导者。当周围人焦躁时，你的存在本身就是一种安抚。偶尔放下"看透"的姿态，让自己也投入地热爱一次。',
      hidden: '前世的你曾在圆寂前三天，悄悄下山，为一个素不相识的人了结了一段未了的缘。那个秘密，连你的传承弟子都不知道……',
    },
    warrior: {
      title: '⚔️ 前世沙场猛将',
      tagline: '铁血柔情，征战四方',
      traits: ['果断', '热血', '忠诚', '担当'],
      rarity: 0.22,
      desc: '你前世征战四方，铁血柔情并存。百战沙场，你见过生死，也护过无数人的家园。那种燃烧一切的热血，在今生依然流淌——你行动力强，有领导气质，但内心深处有一块柔软之地，只为真正懂你的人而开。',
      advice: '你的执行力是最大的武器，但别忘了"停下来想想"也是一种力量。不是每个问题都需要正面突破，有时候绕路反而更快到达。',
      hidden: '前世最后一战，你本可以撤退，但你选择了留下。那场战役改变了一个王朝的命运，而你的名字……被故意从史书中抹去了。',
    },
    scholar: {
      title: '📜 前世博学鸿儒',
      tagline: '笔走龙蛇，思想照亮时代',
      traits: ['博学', '敏锐', '细腻', '深思'],
      rarity: 0.18,
      desc: '你前世笔走龙蛇，著书立说，以文字影响了无数人的命运。你相信知识的力量胜过刀剑，用思想照亮了一个时代。今生的你求知欲旺盛，敏感细腻，有时会因为想得太多而显得犹豫——那是智者的重量。',
      advice: '知识是你的铠甲，也可能是你的枷锁。偶尔放下"搞清楚再行动"的习惯，试试"先做了再说"——你会发现直觉比你以为的更靠谱。',
      hidden: '前世的你曾写过一部被朝廷列为禁书的著作，书中藏着一个惊天秘密。那本书至今仍有一册残卷，流传于世的某个角落……',
    },
    noble: {
      title: '👑 前世权贵皇族',
      tagline: '生于高位，手握乾坤',
      traits: ['气场', '洞察', '决断', '孤傲'],
      rarity: 0.08,
      desc: '你前世生于高位，手握乾坤，见识过权力的顶端也尝过人心叵测的滋味。你深知一个眼神可以改变他人命运，也明白高处不胜寒的孤独。今生的你天生有气场，善于洞察人性，有时显得难以接近——那是曾经的王者印记。',
      advice: '掌控力是你的天赋，但"被人需要"和"被人信任"是两回事。试着偶尔展示脆弱，你会发现身边人比你想象的更愿意靠近你。',
      hidden: '前世最辉煌时，你曾悄悄放走了一个理应被诛九族的人，只因那人说了一句让你颤动的话。那个人后来做了什么……改变了整个历史走向。',
    },
  }
}
