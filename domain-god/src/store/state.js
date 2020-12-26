const state = {
  //异能觉醒
  tableData: [
    {
      name: "觉醒",
      descriptions:
        "辅助性质异能，辅助异能觉醒，提高异能开发度，本身没有什么特殊能力，但是对非异能者，能大幅度提高非异能者觉醒异能的可能，对异能者，能提高对异能的开发和掌控",
    },
    {
      name: "亡者之力/死亡之力",
      descriptions:
        "操作亡魂的能力，精神系攻击为主，造成精神伤害，开发到极致，可以拉扯灵魂，吸收灵魂，转化灵魂，被攻击者会具备流血，生命衰退，生命上限减少等负面影响",
    },
    {
      name: "生命之力",
      descriptions:
        "与亡者之力相对应的能力，强大的治疗恢复能力，开发到极致，死人复生也不是问题，强大的奶妈",
    },
    {
      name: "神速",
      descriptions: "拥有极致的速度，想去哪里就去哪里！",
    },
    {
      name: "分身",
      descriptions:
        "没什么好解释的，就是分身而已，高度开发的分身，每一个都是真身，真身可以在每一个分身之间来回切换",
    },
    {
      name: "能量操控",
      descriptions:
        "高级异能，能量操控，只要是能量就可以操控，其他异能者使用异能也是在动用能量，因此对异能者克制很大，高度开发的异能操控及其强大",
    },
    {
      name: "神魂",
      descriptions:
        "拥有及其强大的神魂，善于制造幻境等，善于操控魂力",
    },
  ],
  //   天地灵物
  magicData: [
    {
      name: "幽冥之火",
      descriptions:
        "只在极致的阴寒之地才可能出现，拥有极其阴寒的能力，明明是火，却又极其冰冷，不仅可以提升实力，还可用于炼丹炼器",
    },
    {
      name: "乾坤鼎",
      descriptions: "神器。一鼎定乾坤，威力极大",
    },
  ],
  //功法宝鉴
  skillData: [
    {
      id: "08710000001",
      name: "玄天宝鉴",
      description:
        "两仪生万象，玄天纳众生。大幅提升身体韧性，增强自愈能力，增加免伤能力",
    },
    {
      id: "08710000002",
      name: "元始万化归元经",
      description:
        "主要是用来控制妖兽一族，针对妖兽一族的妖丹有很大克制效果，并且可以模拟自身气息为妖兽气息，理论上圆满状态可以转换为任意妖兽",
    },
    {
      id: "08710000003",
      name: "八九玄功",
      description:
        "可修三头六臂，通天地造化，成就无上金身，大幅提升防御力，增加攻击伤害穿透",
    },
    {
      id: "08710000004",
      name: "不死神诀",
      description:
        "修炼极为苛刻，要有必死的决心，人未成神时，寿命短暂，修炼此功法，可以让非神体之人也能不死，并大幅提升自愈能力，回复能力",
    },
    {
      id: "08710000005",
      name: "道一神诀",
      description:
        "大道唯一，天地唯一。大幅提升攻击力，大幅提升攻击穿透，附带灼烧效果",
    },
    {
      id: "08710000006",
      name: "千心蛊术",
      description: "一门蛊毒之术，应该很厉害的吧",
    },
    {
      id: "08710000007",
      name: "上古不灭身",
      description: "修炼不灭真身，极大幅提升身体自愈能力，回复能力",
    },
    {
      id: "08710000008",
      name: "时空法典",
      description: "一本讲述时间与空间奥秘的法典",
    },
    {
      id: "08710000009",
      name: "分魂决",
      description: "三魂七魄，各自为一体，一魂一体",
    },
    {
      id: "08710000010",
      name: "降神术.水",
      description: "高阶水系修行奥秘记录",
    },
    {
      id: "08710000011",
      name: "降神术.金",
      description: "高阶金系修行奥秘记录",
    },
    {
      id: "08710000012",
      name: "降神术.木",
      description: "高阶木系修行奥秘记录",
    },
    {
      id: "08710000013",
      name: "降神术.火",
      description: "高阶火系修行奥秘记录",
    },
    {
      id: "08710000014",
      name: "降神术.土",
      description: "高阶土系修行奥秘记录",
    },
    {
      id: "08710000015",
      name: "降神术.雷",
      description: "高阶雷系修行奥秘记录",
    },
    {
      id: "08710000016",
      name: "降神术.风",
      description: "高阶风系修行奥秘记录",
    },
    {
      id: "08710000017",
      name: "降神术.光",
      description: "高阶光系修行奥秘记录",
    },

    
  ],
//   境界划分
levelData: [{
    label: '先天九境',
    children: [{
      label: '炼体境',
      children: [{
        label: '炼皮'
      },{
        label:'炼筋'
      },{
        label:'炼骨'
      },{
        label:'炼血'
      },{
        label:'炼气'
      },{
        label:'炼元'
      },{
        label:'炼魂'
      },{
        label:'炼魄'
      },{
        label:'炼灵'
      }]
    },{
        label: '通灵境',
      children: [{
        label: '三级 1-1-1'
      }]
    },{
        label: '归元境',
      children: [{
        label: '三级 1-1-1'
      }]
    },{
        label: '天人境',
      children: [{
        label: '三级 1-1-1'
      }]
    },{
        label: '五行境',
      children: [{
        label: '三级 1-1-1'
      }]
    },{
        label: '六合境',
      children: [{
        label: '三级 1-1-1'
      }]
    },{
        label: '七星境',
      children: [{
        label: '三级 1-1-1'
      }]
    },{
        label: '八荒境',
      children: [{
        label: '三级 1-1-1'
      }]
    },{
        label: '九耀境',
      children: [{
        label: '三级 1-1-1'
      }]
    }]
  }, {
    label: '后天九境',
    children: [{
      label: '元丹境',
      children: [{
        label: '三级 2-1-1'
      }]
    }, {
      label: '幻神境',
      children: [{
        label: '三级 2-2-1'
      }]
    }, {
      label: '元神境',
      children: [{
        label: '三级 2-2-1'
      }]
    }, {
      label: '法相境',
      children: [{
        label: '三级 2-2-1'
      }]
    }, {
      label: '地相境',
      children: [{
        label: '三级 2-2-1'
      }]
    }, {
      label: '天相境',
      children: [{
        label: '三级 2-2-1'
      }]
    }, {
      label: '灵台境',
      children: [{
        label: '三级 2-2-1'
      }]
    }, {
      label: '生死境',
      children: [{
        label: '三级 2-2-1'
      }]
    }, {
      label: '通神境',
      children: [{
        label: '三级 2-2-1'
      }]
    }]
  }, {
    label: '神灵九境',
    children: [{
      label: '神灵境',
      children: [{
        label: '神道第一境'
      }]
    }, {
      label: '天神境',
      children: [{
        label: '神道第二境'
      }]
    }, {
      label: '真神境',
      children: [{
        label: '神道第三境'
      }]
    }, {
      label: '神王境',
      children: [{
        label: '下三神第一境'
      }]
    }, {
      label: '神主境',
      children: [{
        label: '下三神第二境'
      }]
    }, {
      label: '神尊境',
      children: [{
        label: '下三神第三境'
      }]
    }, {
      label: '神皇境',
      children: [{
        label: '上三神第一境'
      }]
    }, {
      label: '神君境',
      children: [{
        label: '上三神第二境'
      }]
    }, {
      label: '神帝境',
      children: [{
        label: '上三神第三境'
      }]
    }]
  }, {
    label: '大道三境',
    children: [{
      label: '轮回境',
      children: [{
        label: '三级 3-1-1'
      }]
    }, {
      label: '六道境',
      children: [{
        label: '三级 3-2-1'
      }]
    }, {
      label: '造物境',
      children: [{
        label: '三级 3-2-1'
      }]
    }]
  }, {
    label: '帝王三境',
    children: [{
      label: '大帝境',
      children: [{
        label: '三级 3-1-1'
      }]
    }, {
      label: '天尊境',
      children: [{
        label: '三级 3-2-1'
      }]
    }, {
      label: '天帝境',
      children: [{
        label: '三级 3-2-1'
      }]
    }]
  }, {
    label: '元始六境',
    children: [{
      label: '太初境',
      children: [{
        label: '三级 3-1-1'
      }]
    }, {
      label: '太始境',
      children: [{
        label: '三级 3-2-1'
      }]
    }, {
      label: '太上境',
      children: [{
        label: '三级 3-2-1'
      }]
    }, {
      label: '太一境',
      children: [{
        label: '三级 3-2-1'
      }]
    }, {
      label: '混元境',
      children: [{
        label: '三级 3-2-1'
      }]
    } ,{
      label: '元始境',
      children: [{
        label: '三级 3-2-1'
      }]
    }]
  }
  ],
// 种族图鉴
// 疆域划分
};
export default state;
