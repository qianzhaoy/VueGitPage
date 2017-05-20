<template>
  <div id="app" v-loading.fullscreen.lock="isLoading">
    <arcCanvas></arcCanvas>
	<Navgate :routePath="routePath" v-once></Navgate>
	<router-view class="view"></router-view>
  </div>
</template>

<script>
	import ArcCanvas from '@/components/arcCanvas'
	import Navgate from '@/components/navgate'

	export default {
		name: 'app',
		data() {
			return {
				routePath: ""
			}
		},
		created(){
			this.routePath = this.$route.path
		},
		components: {
			ArcCanvas,
			Navgate
		},
		computed: {
			isLoading() {
				return this.$store.state.isLoading
			}
		}
	}

</script>

<style lang="less">
	html {
		font-size: 100px;
	}
	
	body {
		background-color: #E5E9F2
	}
	
	::-webkit-scrollbar {
		width: .12rem;
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
	
	.logo {
		line-height: 60px;
		color: #fff;
	}
	
	
	.view {
		margin-top: 20px;
		padding-top: 60px;
	}
	
	ul.el-menu-vertical-custom {}

</style>
