<template>
  <div id="app" v-loading.fullscreen.lock="isLoading">
    <arcCanvas v-once></arcCanvas>
		<Navgate v-once></Navgate>
		<transition name="fade">
			<router-view class="view" style="position:absolute;top:0;width:100%"></router-view>
		</transition>
  </div>
</template>

<script>
	import ArcCanvas from '@/components/arcCanvas'
	import Navgate from '@/components/navgate'
	export default {
		name: 'app',
		data() {
			return {}
		},
		components: {
			ArcCanvas,
			Navgate,
		},
		watch:{
			$route(){
				document.body.scrollTop = 0
				document.documentElement.scrollTop = 0
			}
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
		background-color: aliceblue
/*		background-color: rgb(147, 224, 255)*/
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
	
	.logo {
		line-height: 60px;
		color: #fff;
	}
	
	.view {
		padding-top: 60px;
	}
	
	.fade-leave-active,
	.fade-enter {
		opacity: 0;
	}
	
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 1s ease;
	}

</style>
