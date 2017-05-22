<template>
   <el-row id="aboutMe">
  		<Banner></Banner>
   		<el-col :xs="{span:22,offset:1}" :sm="{span:20, offset:2}">
   			<el-row>
					<el-col :span="18" class="justdo">
						<h1>来个简短的自我介绍</h1>
						<p>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</p>
						<p>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</p>
						<p>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</p>
						<p>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</p>
						<p>文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</p>
						<p>文文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案案</p>
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
	import Banner from '@/components/banner'
    export default {
        data () {
            return {
            }
        },
        components: {
					Banner,
					AboutRight,
        }
    }
</script>

<style lang="less" scoped>
	#aboutMe{
		text-align: center;
		color: #3479ad;
		
		.justdo{
			font-size: .14rem;
			
			h1{
				font-size: .18rem
			}
			p{
				text-align: left;
				margin-top: .4rem;
				text-indent: 2em;
			}
		}
		
	}
</style>