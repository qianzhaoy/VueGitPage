<template>
   <el-row id="aboutMe">
  		<Banner></Banner>
   		<el-col :xs="{span:22,offset:1}" :sm="{span:20, offset:2}">
   			<el-row>
					<el-col :span="18">
						<AboutLeft></AboutLeft>
					</el-col>
					
					 <el-col :span="5" :offset="1">
						 <AboutRight></AboutRight>
					</el-col>
				</el-row>
   		</el-col>
   </el-row>
</template>

<script>
	import AboutRight from '@/components/aboutRight'
	import AboutLeft from '@/components/aboutLeft'
	import Banner from '@/components/banner'
    export default {
        data () {
            return {
            }
        },
        components: {
					Banner,
					AboutRight,
					AboutLeft
        }
    }
</script>

<style lang="less" scoped>
	#aboutMe{
		text-align: center;
		color: #3479ad;
	}
</style>