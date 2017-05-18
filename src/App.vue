<template>
  <div id="app">
  <arcCanvas></arcCanvas>
  <el-row class="navgate">
  <el-col :span="2" :offset="2" class="logo">LOGO</el-col>
  <el-col :span="18" class="lookme">
		<el-menu theme="dark" :default-active="activeIndex" class="el-menu-custom" router mode="horizontal">
			<el-menu-item index="/">首页</el-menu-item>
			<el-menu-item index="/aboutMe">xxx</el-menu-item>
			<el-menu-item index="/skill">xxx</el-menu-item>
			<el-menu-item index="/production">xxxx</el-menu-item>
			<el-menu-item index="/connection">xxxx</el-menu-item>
		</el-menu>
	</el-col>
	
		<el-col :span="8" :offset="10" class="customShow">
			<el-menu  class="el-menu-vertical-custom" router theme="dark">
		 		<el-submenu index="1">
						<el-menu-item index="/">首页</el-menu-item>
						<el-menu-item index="aboutMe">xxx</el-menu-item>
						<el-menu-item index="production">xxx</el-menu-item>
						<el-menu-item index="connection">xxx</el-menu-item>
				</el-submenu>
			</el-menu>
    </el-col>
    
</el-row>

			<router-view class="view"></router-view>
<!--    <router-view></router-view>-->
</div>
</template>

<script>
	import ArcCanvas from '@/components/arcCanvas'

	export default {
		name: 'app',
		data() {
			return {
				activeIndex: "/"
			}
		},
		created(){
			this.activeIndex = this.$route.path
		},
		components: {
			ArcCanvas
		}
	}

</script>

<style lang="less">
	@screen-sm-min: 768px;
	@screen-md-min: 1200px;
	html {
		font-size: 100px;
	}
	body{
		background-color: #E5E9F2
	}
	
	::-webkit-scrollbar {
		width: 12px;
		background-color: #E5E9F2
	}
	
	::-webkit-scrollbar-thumb:hover {
		background-color: gray
	}
	::-webkit-scrollbar-thumb {
		background-color: #fff;
		border-radius: 5px
	}
	/*	小于768*/
	
	.customShow {
		display: none;
	}
	
	@media only screen and (max-width: @screen-sm-min) {
		html {
			font-size: 50px
		}
		.lookme {
			display: none
		}
		.customShow {
			display: block
		}
	}
	/*	大于768 小于1200*/
	
	@media only screen and (min-width: @screen-sm-min) and (max-width: @screen-md-min) {
		html {
			font-size: 75px
		}
	}
	/*	大于1200*/
	
	@media only screen and (min-width: @screen-md-min) {
		html {
			font-size: 100px
		}
	}
	
	.logo {
		line-height: 60px;
		color: #fff;
	}
	
	.navgate {
		background-color: #324157
	}
	
	.el-menu-custom {
		float: right
	}
	
	.view{
		margin-top: 20px
	}
	
	ul.el-menu-vertical-custom {}

</style>
