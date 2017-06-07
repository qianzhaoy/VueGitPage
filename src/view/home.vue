<template>
  <div id="home"> 
    <Banner></Banner>
    
    <el-row class="wrap">
       <el-col :xs="{span:22,offset:1}" :sm="{span:20,offset:2}" class="left">
        <HomeLeft></HomeLeft>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import Banner from '@/components/banner'
    import HomeLeft from '@/components/homeLeft'
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
        }
	}

</script>

<style lang="less" scoped>
	#home{
		margin-top: 0;
	}
	
	.wrap {
		margin-top: 20px;
	}
	
</style>
