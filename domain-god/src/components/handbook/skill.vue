<template>
  <div class="skill_container">
    <el-header class="skill">功法宝鉴</el-header>
    <el-table :data="skillData" stripe border style="width: 100%" height="300">
      <el-table-column prop="id" label="归档编号" width="180">
      </el-table-column>
      <el-table-column prop="name" label="功法名称" width="180">
      </el-table-column>
      <el-table-column prop="description" label="描述"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "",
  components: {},
  data() {
    return {
      
    };
  },
  methods: {},
  computed:{
    ...mapState(['skillData'])
  }
};
</script>
<style lang="less" scoped>
.skill_container {
  background: cornsilk;
  .skill {
    text-align: center;
    line-height: 60px;
    font-size: 26px;
    color: #f4a460;
  }
}
</style>
