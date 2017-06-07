<template>
	<el-row id="connection">
   		<el-col :xs="{span:22,offset:1}" :sm="{span:16, offset:4}" class="info">
   		  <div class="title">
   		    <h1>Contact Infomation</h1>
   		    <div class="maskleft"></div>
   		    <div class="maskright"></div>
   		  </div>
   		  
   		  <div class="connect">
					<h2>QQ</h2>
					<div>779547508</div>
   		  </div>
   		  
   		  <div class="connect">
					<h2>邮箱</h2>
					<div>779547508@qq.com</div>
   		  </div>
   		  
   		  <div class="connect">
					<h2>Github</h2>
					<div><a href="https://github.com/qianzhaoy">https://github.com/qianzhaoy</a></div>
   		  </div>
   		</el-col>
   </el-row>
</template>

<script>
	export default {
		data() {
			return {}
		},
		components: {}
	}

</script>

<style lang="less" scoped>
	@lineHight: 1.2rem;
	@bot: bottom;
	.mask(@direction: left) {
		position: absolute;
		top: -1px;
		@{direction}: 0;
		height: @lineHight;
		background-color: rgb(147, 224, 255);
		animation: maskShow 2s ease-out
	}
	
	#connection {
		font-size: .18rem;
		margin-top: .5rem;
	}
	
	.info {
		>div {
			margin-bottom: .3rem;
			font-size: .24rem
		}
	}
	
	div.title {
		position: relative;
		height: @lineHight;
		border-top: 1px solid #fff;
		border-bottom: 1px solid #fff;
		h1 {
			position: absolute;
			top: 0;
			left: 0;
			text-indent: 2em;
			line-height: @lineHight;
			font-weight: 700;
			z-index: 9;
		}
		.maskleft {
			.mask(left);
		}
		.maskright {
			.mask(right);
		}
	}
	
	div.connect {
		>div {
			line-height: .8rem;
			border-radius: .1rem;
			margin-top: .2rem;
			background-color: rgba(255, 255, 255, 0.65);
			text-indent: 2em;
		}
		a {
			text-decoration: underline;
		}
	}
	
	@keyframes maskShow {
		0% {
			width: 50%;
		}
		100% {
			width: 0;
		}
	}

</style>
