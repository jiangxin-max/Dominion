<template>
  <div id="app">
    <h1 class="title">神域传说</h1>
    <hr/>
    <router-link to="/" class="a1">神域图鉴/介绍</router-link>
    <router-link to="/my">我的</router-link>
    <router-view />
  </div>
</template>

<style lang="less">
#app{
  *{margin: 0;padding: 0;}
  a{text-decoration: none;}
  .title{
    text-align: center;
  }
  .a1{
    margin-right: 10px;
  }
}
</style>
