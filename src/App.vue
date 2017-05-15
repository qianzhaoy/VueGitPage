<template>
  <div id="app">
  <arcCanvas></arcCanvas>
  <el-row>
  <el-col :span="20" :offset="2">
  <el-menu theme="dark" :default-active="activeIndex" router class="el-menu-demo" mode="horizontal">
    <el-menu-item index="/">首页</el-menu-item>
    <el-menu-item index="aboutMe">xxx</el-menu-item>
    <el-menu-item index="skill">xxx</el-menu-item>
    <el-menu-item index="production">xxxx</el-menu-item>
    <el-menu-item index="connection">xxxx</el-menu-item>
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
	import ArcCanvas from '@/components/arcCanvas'
	
	export default {
		name: 'app',
		data() {
			return {
				activeIndex: "1"
			}
		},
		components:{
			ArcCanvas
		}
	}

</script>

<style lang="css">
	.content {
		margin-top: 40px;
	}
	
	body {
		background-color: #324157;
	}

</style>
