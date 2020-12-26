<template>
  <div class="container">
    <el-header class="header">天地灵物</el-header>
    <el-table :data="magicData" style="width: 100%">
      <el-table-column prop="name" label="名称" width="180"> </el-table-column>
      <el-table-column prop="descriptions" label="描述"> </el-table-column>
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
  computed:{
    ...mapState(['magicData'])
  }
};
</script>
<style lang="less" scoped>
.container {
  .header {
    font-size: 26px;
    text-align: center;
    color: #e066ff;
    line-height: 60px;
  }
}
</style>
