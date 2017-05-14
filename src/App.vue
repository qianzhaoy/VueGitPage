<template>
  <div id="app">
  <el-row>
  <el-col :span="20" :offset="2">
  <el-menu theme="dark" :default-active="activeIndex" router class="el-menu-demo" mode="horizontal">
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="aboutMe">自我解读</el-menu-item>
    <el-menu-item index="skill">我的技能树</el-menu-item>
    <el-menu-item index="production">我的作品</el-menu-item>
    <el-menu-item index="connection">联系我吧</el-menu-item>
<!--
    <el-submenu index="2">
      <template slot="title">关于我</template>
      <el-menu-item index="2-1">选项1</el-menu-item>
      <el-menu-item index="2-2">选项2</el-menu-item>
      <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
-->
  </el-menu>
</el-col>
</el-row>

<el-row>
  <el-col :span="20" :offset="2">
    <router-view class="content"></router-view>    
  </el-col>
</el-row>
<!--    <router-view></router-view>-->
</div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        activeIndex: "1"
      }
    }
  }

</script>

<style src="./assets/css/reset.css">
</style>
