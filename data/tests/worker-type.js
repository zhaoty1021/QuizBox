module.exports = {
  id: 'worker-type',
  title: '你是哪种打工人？',
  category: 'comedy',
  algorithm: 'score',
  pickCount: 12,
  questions: [
    {
      text: '周一早上闹钟响了，你的第一反应是？',
      options: [
        { text: '再睡5分钟（然后迟到）', scores: { slacker: 3, grinder: 0, peacemaker: 1, boss: 0 } },
        { text: '弹射起床，洗漱出门一气呵成', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 1 } },
        { text: '先看看群消息有没有人@我', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '躺着用手机先处理几封邮件', scores: { slacker: 0, grinder: 1, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '领导突然在群里说"明天开个会"，你的心理活动是？',
      options: [
        { text: '又开会？我先查查明天能不能请假', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 0 } },
        { text: '赶紧准备汇报材料，争取表现', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 1 } },
        { text: '无所谓，开就开呗', scores: { slacker: 1, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '先了解一下会议议题，提前布局', scores: { slacker: 0, grinder: 1, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '同事甩给你一个不是你负责的活，你会？',
      options: [
        { text: '装没看到消息，过两天再说', scores: { slacker: 3, grinder: 0, peacemaker: 1, boss: 0 } },
        { text: '不是我的也做了吧，顺手的事', scores: { slacker: 0, grinder: 3, peacemaker: 1, boss: 0 } },
        { text: '虽然不情愿但还是帮了', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '委婉地让他找该负责的人', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '你的工位上最显眼的东西是？',
      options: [
        { text: '零食堆 / 抱枕 / 各种小玩具', scores: { slacker: 3, grinder: 0, peacemaker: 1, boss: 0 } },
        { text: '第二块屏幕和日程表', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 1 } },
        { text: '同事送的小礼物和团队合照', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '看起来很整洁，重要东西都锁抽屉了', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '公司团建，你的状态是？',
      options: [
        { text: '终于不用上班了！玩最嗨的那个', scores: { slacker: 3, grinder: 0, peacemaker: 1, boss: 0 } },
        { text: '心里想着工作没做完，但还是去了', scores: { slacker: 0, grinder: 3, peacemaker: 1, boss: 0 } },
        { text: '穿梭在各桌之间，确保每个人都开心', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '和不同部门的人聊天，了解了不少信息', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '你最频繁使用的工作表情包是？',
      options: [
        { text: '摸鱼被发现.jpg / 我好累.gif', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 0 } },
        { text: '收到！/ 已完成！/ 马上处理！', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 0 } },
        { text: '好的好的 / 辛苦啦 / 抱抱', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '👌（就一个OK手势，简洁高效）', scores: { slacker: 0, grinder: 1, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '下班时间到了但领导还没走，你会？',
      options: [
        { text: '悄悄收拾东西溜了，速度要快', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 0 } },
        { text: '手头的活做完了才走，管他几点', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 1 } },
        { text: '看看同事们的状态，大家走了我才走', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '准时走，但走之前确保重要的事已安排好', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '你对升职加薪的态度是？',
      options: [
        { text: '有就好，没有也行，钱够花就行', scores: { slacker: 3, grinder: 0, peacemaker: 1, boss: 0 } },
        { text: '我要做到最好，让领导不得不提拔我', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 1 } },
        { text: '不好意思主动提，等公司安排吧', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '有明确的职业规划，知道什么时候该跳', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '开会时你通常在做什么？',
      options: [
        { text: '偷偷刷手机 / 画画 / 神游', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 0 } },
        { text: '认真记笔记，生怕漏掉重要信息', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 0 } },
        { text: '关注每个人的表情，看看气氛', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 1 } },
        { text: '听关键信息，思考对自己工作的影响', scores: { slacker: 0, grinder: 1, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '如果可以选一个职场超能力，你选？',
      options: [
        { text: '隐身术——摸鱼永远不被发现', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 0 } },
        { text: '时间暂停——一天干三天的活', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 1 } },
        { text: '读心术——知道每个人在想什么', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 1 } },
        { text: '预知未来——提前知道公司要裁谁', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '你的午休时间通常是？',
      options: [
        { text: '午觉！午觉是底线！', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 0 } },
        { text: '边吃边工作，感觉时间不够用', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 0 } },
        { text: '和同事一起吃饭聊天', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 1 } },
        { text: '看行业资讯或学点新东西', scores: { slacker: 0, grinder: 1, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '项目出了问题，你的第一反应是？',
      options: [
        { text: '不是我负责的部分吧？（心虚地查看）', scores: { slacker: 3, grinder: 0, peacemaker: 1, boss: 0 } },
        { text: '立即排查原因，加班也要搞定', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 1 } },
        { text: '先安抚大家的情绪，再一起想办法', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '迅速定位责任和影响范围，决定要不要上报', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '你觉得"好工作"最重要的是什么？',
      options: [
        { text: '事少离家近，钱多不加班', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 0 } },
        { text: '能学到东西，有成长空间', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 1 } },
        { text: '同事关系好，氛围融洽', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '平台好，能积累资源和人脉', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '你的简历上最可能怎么写自己？',
      options: [
        { text: '不太擅长写简历这种东西…', scores: { slacker: 3, grinder: 0, peacemaker: 1, boss: 0 } },
        { text: '列出每一段经历的量化成果', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 1 } },
        { text: '强调团队合作和沟通能力', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '针对目标公司定制化修改', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '你的年终总结是怎么写的？',
      options: [
        { text: '截止日期前一晚东拼西凑', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 0 } },
        { text: '平时就在记录，到时候直接整理', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 1 } },
        { text: '重点写团队协作和帮助他人的部分', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '用数据说话，让领导看到价值', scores: { slacker: 0, grinder: 1, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '公司突然宣布要搬到更远的办公区，你的反应是？',
      options: [
        { text: '太远了，我研究一下能不能申请远程办公', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 1 } },
        { text: '无所谓，反正我每天最早到最晚走', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 0 } },
        { text: '组织大家一起拼车，顺便建个通勤互助群', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '新办公区可能有新机会，先了解一下周边资源', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '工作群里有人发了一个明显有bug的方案，你会？',
      options: [
        { text: '看到了但不想说，反正不是我的活', scores: { slacker: 3, grinder: 0, peacemaker: 1, boss: 0 } },
        { text: '马上指出问题并附上修改建议', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 0 } },
        { text: '私聊对方委婉提醒，避免公开尴尬', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 1 } },
        { text: '先不说，看看领导的反应再决定怎么出手', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '周五下午三点，你的工作状态是？',
      options: [
        { text: '灵魂已经在周末了，身体只是坐在工位', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 0 } },
        { text: '抓紧把本周的尾巴收干净，下周开局才轻松', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 1 } },
        { text: '张罗着问大家周末有什么安排', scores: { slacker: 1, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '复盘一下本周的进展，调整下周的计划', scores: { slacker: 0, grinder: 1, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '公司新来了一个实习生坐你旁边，你会？',
      options: [
        { text: '点个头就完事了，等他来问我再说', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 1 } },
        { text: '把自己整理的工作文档分享给他', scores: { slacker: 0, grinder: 3, peacemaker: 1, boss: 0 } },
        { text: '带他认识各部门的人，帮他快速融入', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '观察一下他的能力和性格，看看能不能为我所用', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '你的手机里和工作相关的App有多少个？',
      options: [
        { text: '就一个钉钉/飞书，而且通知是关的', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 0 } },
        { text: '项目管理、文档协作、笔记工具装了一堆', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 1 } },
        { text: '各种工作群聊工具都有，方便随时回消息', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '不多但精，主要是行业资讯和人脉管理类的', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '领导在大群里表扬了另一个同事，你的内心是？',
      options: [
        { text: '哦，然后呢？跟我有什么关系', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 0 } },
        { text: '暗暗较劲，下次被表扬的一定是我', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 0 } },
        { text: '真心为同事高兴，还跟着点了个赞', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 0 } },
        { text: '分析一下他做对了什么，看看有没有可借鉴的', scores: { slacker: 0, grinder: 1, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '如果公司突然倒闭了，你的第一反应是？',
      options: [
        { text: '终于可以好好休息一段时间了！', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 0 } },
        { text: '立刻更新简历投出去，一天都不能闲着', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 0 } },
        { text: '先建个群把关系好的同事拉进来，以后还能互相帮忙', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 1 } },
        { text: '不慌，之前积累的资源和人脉够我从容选择下一站', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
    {
      text: '你怎么看待"职场社交"这件事？',
      options: [
        { text: '能不社交就不社交，下班别找我', scores: { slacker: 3, grinder: 0, peacemaker: 0, boss: 0 } },
        { text: '用作品和业绩说话就好，不需要刻意经营', scores: { slacker: 0, grinder: 3, peacemaker: 0, boss: 0 } },
        { text: '社交就是工作的一部分呀，认识人多路好走', scores: { slacker: 0, grinder: 0, peacemaker: 3, boss: 1 } },
        { text: '有选择性地维护关键人脉，质量比数量重要', scores: { slacker: 0, grinder: 0, peacemaker: 0, boss: 3 } },
      ]
    },
  ],
  results: {
    slacker: {
      title: '🐟 摸鱼艺术家',
      tagline: '在工位上开辟了第二人生',
      traits: ['松弛', '会摸鱼', '乐观', '务实'],
      rarity: 0.25,
      desc: '你是摸鱼界的行为艺术家。你深谙"工作是为了生活，不是生活为了工作"的人生哲学，精确掌握了"看起来在忙"的核心技术。别人加班内卷时你已在外卖小程序里选好了晚餐。但别误会，真正重要的事你从不掉链子——你只是不愿意把精力浪费在无意义的内卷上。',
      advice: '你的"不卷"其实是一种智慧，但别让它变成"不在乎"。找到一件你真正愿意全力以赴的事，你会发现自己的爆发力比谁都猛。',
      hidden: '其实你比任何人都清楚公司的运转规律——谁干活谁摸鱼，哪些会有用哪些是浪费时间。你不是能力不行，你是选择了"精准投放"自己的精力。',
    },
    grinder: {
      title: '⚡ 卷王本王',
      tagline: '不是在工作，就是在优化工作',
      traits: ['勤奋', '自律', '执行力', '上进'],
      rarity: 0.20,
      desc: '你是团队里永远在线的发动机。你的日程排满，效率拉满，别人还在纠结要不要开始的时候你已经做完了。加班对你来说不是负担而是常态，因为你真的享受"搞定一件事"带来的成就感。你是领导最放心的人，但有时也是同事最有压力的对比参照。',
      advice: '你的自律是超能力，但记住：休息不是偷懒，是为了走更远的路。试试主动"浪费"一个周末什么都不干——你值得拥有一些"无用"的快乐。',
      hidden: '你拼命努力的背后，其实藏着一种隐隐的不安：你害怕一旦停下来，就会被人超过、被人遗忘。但真相是——你的价值从来不需要用忙碌来证明。',
    },
    peacemaker: {
      title: '🕊️ 人间润滑剂',
      tagline: '职场生态链的隐形守护者',
      traits: ['高情商', '亲和力', '团队感', '善良'],
      rarity: 0.18,
      desc: '你是公司里的人际关系粘合剂，走到哪里气氛都不会差。你记得每个同事的生日，能在两个吵架的同事之间完美斡旋，连保洁阿姨都和你关系不错。你不一定是能力最强的，但绝对是最不可或缺的——因为没有你，这个团队的化学反应根本跑不起来。',
      advice: '你花了太多精力照顾别人的感受，但"自己不开心也是需要被关注的事"。下次有人越界时，试试直接说"不"——你会发现，真正尊重你的人不会因此离开。',
      hidden: '你的温柔背后藏着一种深深的疲惫——你太擅长读懂别人的情绪了，以至于忘了"我自己现在是什么感受"。你最需要学会的不是取悦别人，而是取悦自己。',
    },
    boss: {
      title: '🦊 隐藏大佬',
      tagline: '低调做事，布局无声',
      traits: ['战略感', '低调', '目标感', '高效'],
      rarity: 0.05,
      desc: '你在职场里的存在感不算最高，但真正了解你的人都知道——你是最不能被低估的那个。你不会无意义地忙碌，每一步都有清晰的目的。你观察力惊人，总能提前察觉风向变化。别人在内卷时你在布局，别人在社交时你在提升核心竞争力。有一天当你出手时，所有人才发现：这个人一直在下一盘大棋。',
      advice: '你的战略思维是稀缺品，但别忘了：职场不只有博弈，也有真诚。偶尔展示一下"不完美"的自己，你会收获意想不到的盟友。',
      hidden: '你看起来目标感很强，但内心深处偶尔会冒出一个念头："如果我不用这么精确地计算每一步，会不会活得更轻松？"答案是——会的。但你选择了更难的那条路，因为你知道自己配得上更好的。',
    },
  }
}
