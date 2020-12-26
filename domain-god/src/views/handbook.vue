<template>
  <div class="home">
    <el-container>
      <!-- 头部文字总述文字 -->
      <el-header class="header">
        <router-link to="/level" class="a2">境界划分</router-link>
        <router-link to="/spirit" class="a3">种族图鉴</router-link>
        <router-link to="/territory" class="a3"> 疆域划分</router-link>
        <router-link to="/skill" class="a3"> 功法宝鉴</router-link>
        <router-link to="/magic" class="a3"> 天地灵物</router-link>
        <router-link to="/push" class="a3"> 异能觉醒</router-link>
      </el-header>

      <!-- 底部路由视窗 -->
      <el-footer class="footer">
        <router-view></router-view>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      title: "神域传说",
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  .header {
    background: #b6d7a8;
  .a2{
    margin-right:  5px !important;
  }
    .a3 {
      margin: 0 10px ;
    }
  }

  .footer {
    background: #cfe2f3;
  }
}
</style>
