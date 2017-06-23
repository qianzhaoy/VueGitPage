<template>
   <el-row class="navgate">
		<el-col :span="2" :offset="2" class="logo">LOGO</el-col>
		<el-col :span="18" class="lookme">
			<el-menu theme="dark" :default-active="routerPath" class="el-menu-custom" router mode="horizontal">
				<el-menu-item index="/">首页</el-menu-item>
				<el-menu-item index="/aboutMe">关于我</el-menu-item>
<!--				<el-menu-item index="/skill">技能</el-menu-item>-->
				<el-menu-item index="/production">作品</el-menu-item>
				<el-menu-item index="/connection">联系我</el-menu-item>
			</el-menu>
		</el-col>

			<el-col :span="8" :offset="10" class="customShow">
				<el-menu  class="el-menu-vertical-custom" :default-active="routerPath"  router menu-trigger="click" theme="dark" mode="horizontal">
					<el-submenu index="1">
						<template slot="title">导航</template>
						<el-menu-item index="/">首页</el-menu-item>
						<el-menu-item index="/aboutMe">关于我</el-menu-item>
<!--						<el-menu-item index="/skill">技能</el-menu-item>-->
						<el-menu-item index="/production">作品</el-menu-item>
						<el-menu-item index="/connection">联系我</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
		</el-row>
</template>

<script>
	export default {
      computed: {
			routerPath() {
				return this.$store.state.routerPath
			}
		}
	}

</script>

<style lang="less" scoped>
	.customShow {
		display: none;
	}
	
	.navgate {
		position: fixed !important;
		top: 0;
		z-index: 9;
		width: 100%;
		background-color: #324157;
	}
	
	.el-menu-custom {
		float: right
	}

</style>
