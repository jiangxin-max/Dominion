<template>
  <div>
    <el-header class="header">种族图鉴</el-header>
    <div class="description">
      总的来说，无尽宇宙中的种族只是被分为四个大类，其下又分为很多小的种族
    </div>
    <div class="box">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="人族" name="1">
          <div>
            desc：人族泛指的是人类形体的一个大种族，他们大都天赋普通，但是基数庞大，族中仍然强者林立
          </div>
          <div>
            巨人族：该种族体型庞大，天生拥有巨大力量，防御力量，但是移动速度相对缓慢，种族繁育能力偏弱
          </div>
          <div>
            人族：普通人体型，没有太大特点，没有特别的特殊能力，但是学习能力，繁殖能力较强，适应性强大，拥有各种类型修真者
          </div>
          <div>
            精灵族：光明精灵们通体发亮，光明耀眼，长得非常美丽。他们通常性情温良，开朗热情，能和树木花草、游鱼飞鸟彼此沟通；黑暗精灵，居住在地底洞穴或森林深处的神秘种族，信仰着某种以蜘蛛图腾为标记的邪神，并获得暗黑力量的保护
          </div>
        </el-collapse-item>
        <el-collapse-item title="妖族" name="2">
          <div>
            desc：妖族泛指的是妖兽一族，形体和人族差异较大，他们修炼缓慢，但是天生个体力量强大，每一次进阶都能带来大幅实力增长
          </div>
          <div>
            龙族：应龙，烛龙，螭龙，孽龙，蟠龙，蛟龙，虬龙，青龙，五爪金龙，九爪金龙，紫金神龙，深海狄龙，神圣巨龙，暗黑魔龙炼狱血龙，深渊骨龙，烈焰火龙，雷霆巨龙金龙，银龙，黄铜龙，青铜龙，赤铜龙，水银龙，钛龙，蓝龙、赤龙，幻龙，毒龙，紫晶龙，钻石龙元素龙，太虚古龙，五彩神龙，七彩宝龙，铁翼狂龙，风暴神龙，光暗圣龙，噬魂狂龙，双首阴阳龙，蓝宝石龙，天苍青蛰龙，阴影龙，虚空龙，水晶龙，天蚀黄龙
          </div>
        </el-collapse-item>
        <el-collapse-item title="神族" name="3">
          <div>
            desc：神族拥有特殊天赋，天生下来就拥有特殊力量以及特殊天赋，他们是已知宇宙的最高统治者族群
          </div>
          <div>
            清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
          </div>
          <div>
            帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
          </div>
        </el-collapse-item>
        <el-collapse-item title="魔族" name="4">
          <div>
            desc：魔族是拥有特殊力量的一群生灵，只是他们拥有的力量和其他种族的力量不太一样，狂暴而又难以控制，他们的力量和神族力量相互克制，因此经常和神族开战，双方矛盾不断
          </div>
          <div>
            结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      activeName: "1",
    };
  },
};
</script>
<style lang="less" scoped>
.header {
  text-align: center;
  line-height: 60px;
  font-size: 26px;
  color: #f4a460;
}
.description {
  width: 100%;
  background: #e0ffff;
  color: #cdcd00;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
