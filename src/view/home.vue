<template>
  <div id="home"> 
    <Banner></Banner>
    
    <el-row class="wrap">
       <el-col :xs="{span:22,offset:1}" :sm="{span:20,offset:2}" class="left">
        <div class="left">
         
					<transition enter-active-class="animated zoomIn">
						<h2 v-if="show">技术栈</h2>
					</transition>
					
					<div class="content">
								<ul class="showContent">
										<li>1、<a href="https://cn.vuejs.org/" target="_blank">vue</a></li>
										<li>2、<a href="https://router.vuejs.org/zh-cn/index.html" target="_blank">vue-router</a></li>
										<li>3、<a href="https://github.com/mzabriskie/axios" target="_blank">axios</a></li>
										<li>4、<a href="https://vuex.vuejs.org/zh-cn/intro.html" target="_blank">vuex</a></li>
										<li>5、<a href="http://element.eleme.io/#/zh-CN/component/installation" target="_blank">element-ui</a></li>
										<li>6、<a href="https://daneden.github.io/animate.css/" target="_blank">animate.css</a></li>
										<li>7、<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial" target="_blank">canvas</a></li>
										<li>8、<a href="http://es6.ruanyifeng.com/" target="_blank">es6( 阮一峰教程, 我还买了纸质书支持一下 )</a></li>
										<li>9、<a href="http://less.bootcss.com/" target="_blank">less(现学现卖)</a></li>
								</ul>

								<p> 试了一下饿了么的 element-ui 组件库. 做一半又想要响应式, 但是 element-ui 以PC端为主,修改比较麻烦, 但是还是硬着头皮做下去了.然后用animate.css做了小部分动画. 也有用Vue的方式写了看起来挺蠢萌的动画...</p>
							</div>
							
							<h2>目录结构<br></h2>
					<div class="content">
						<Tree class="showContent"></Tree>
					</div>
				</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
	import Banner from '@/components/banner'
	import Tree from '@/components/tree'

	export default {
		data() {
			return {
				show: false,
			}
		},
		mounted() {
			this.show = true
		},
		computed: {
			isPhone() {
				return window.screen.width < 520
			}
		},
		components: {
			Banner,
			Tree,
		}
	}

</script>

<style lang="less" scoped>
	#home {
		margin-top: 0;
	}
	
	.wrap {
		margin-top: 20px;
	}
	
	.animateTran(@X, @Y) {
		-moz-transform: translate( @X, @Y );
		-webkit-transform: translate( @X, @Y );
		-ms-transform: translate( @X, @Y );
		-o-transform: translate( @X, @Y );
		transform: translate( @X, @Y );
	}
	
	.left {
		h2 {
			font-size: 0.35rem;
			margin-bottom: 20px;
			display: block;
			border-bottom: 1px solid;
		}
		.showContent,
		p {
			text-indent: 2em;
			margin-bottom: 20px;
			font-size: 0.2rem;
			line-height: 1.7em;
		}
		.showContent {
			color: #fff;
			background-color: #272822;
			border-radius: 5px;
			text-indent: 0;
			padding: 1em;
			padding-left: 2em;
			a {
				color: #fff;
			}
		}
	}

</style>
