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
					<h2>E-Mail</h2>
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
			return {
			}
		},
		methods: {
			deepAssign(base, dataArr) {
				dataArr.forEach((obj, ind) => {
					if (base[ind].children.length === 0 && obj.children.length > 0) {
						base[ind].children = obj.children
						return false
					} else {
						deepAssign(base[ind].children, obj.children)
					}
				})
			},
		}
	}

</script>

<style lang="less" scoped>
	@lineHight: 1.2rem;
	.mask(@direction: left) {
		border-top: 1px solid;
		border-bottom: 1px solid;
		position: absolute;
		top: -1px;
		@{direction}: 0;
		width: 50%;
		height: @lineHight;
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
			text-indent: 2em;
			border: 1px solid;
		}
		a {
			text-decoration: underline;
		}
	}
	
	@keyframes maskShow {
		0% {
			width: 0%;
		}
		100% {
			width: 50%;
		}
	}

</style>
