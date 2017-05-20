<template>
  <div id="home"> 
    <Banner></Banner>
    
    <el-row class="content">
      <HomeLeft></HomeLeft>
<!--      <HomeRight></HomeRight>-->
    </el-row>
  
  </div>
</template>

<script>
    import Banner from '@/components/banner'
    import HomeLeft from '@/components/homeLeft'
    import HomeRight from '@/components/homeRight'
	export default {
		data() {
			return {
			}
		},
		computed:{
			isPhone(){
				return window.screen.width < 520
			}
		},
		components: {
          Banner,
          HomeLeft,
          HomeRight
        }
	}

</script>

<style lang="less" scoped>
	#home{
		margin-top: 0;
	}
	
	.content {
		margin-top: 20px;
	}
	
</style>
