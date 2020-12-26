<template>
  <div class="level_container">
    <el-header class="header">境界划分</el-header>
    <el-tree
      :data="levelData"
      :props="defaultProps"
      @node-click="handleNodeClick"
    ></el-tree>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "",
  components: {},
  data() {
    return {
        
        defaultProps: {
          children: 'children',
          label: 'label'
        }
    };
  },
  methods: {
      handleNodeClick(data) {

      }
    },
    computed:{
...mapState(["levelData"])
    }
};
</script>
<style lang="less" scoped>
.level_container{
  .header{
    font-size: 26px;
    text-align: center;
    color: #DC143C;
    line-height: 60px;
  }
}
</style>
