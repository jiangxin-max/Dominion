<template>
  <div class="territory_container">
    <el-header class="header">疆域划分</el-header>
    <div class="box">
      <el-steps direction="vertical" :active="1" space="60px">
        <el-step
          title="星海"
          description="星海级区域，统辖着多个星域，中央政权就在星海之中"
        ></el-step>
        <el-step
        status="finish"
          title="星域"
          description="每一个星域"
        ></el-step>
        <el-step
          status="finish"
          title="星云"
          description="暂时不知道描述啥了，等到想说了再说吧"
        ></el-step>
        <el-step
          status="finish"
          title="星河"
          description="这段就没那么长了"
        ></el-step>
        <el-step
          status="finish"
          title="星团"
          description="这段就没那么长了"
        ></el-step>
        <el-step
          title="星系"
          status="finish"
          description="这段就没那么长了"
        ></el-step>
        <el-step
          status="finish"
          title="星球"
          description="虽然只是一个小小的星球，但是也有很多星球有着很强大的生灵，当然了，大多数星球上存在的生灵都比较弱小，因为星球的资源一般不足以供给一个强大的生灵成长"
        ></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.territory_container {
  .header {
    text-align: center;
    font-size: 26px;
    line-height: 60px;
    color: #6633ff;
  }
}
</style>
