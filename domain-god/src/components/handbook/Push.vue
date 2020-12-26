<template>
  <div class="container">
    <el-header class="header">异能觉醒</el-header>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="异能名称" width="180">
      </el-table-column>
      <el-table-column prop="descriptions" label="异能描述"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["tableData"]),
  },
  methods: {},
  mounted() {},
};
</script>
<style lang="less" scoped>
.container {
  .header {
    font-size: 26px;
    text-align: center;
    color: #cc3366;
    line-height: 60px;
  }
}
</style>
