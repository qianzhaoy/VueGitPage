<template>
  <div id="home">
		
    <el-carousel>
      <el-carousel-item v-for="item in banner" :key="item">
      	<img :src="item" class="bannerImage">
      </el-carousel-item>
    </el-carousel>
  
   <el-row class="content">
   
		<el-col :span="14" :offset="2" class="left">
			<transition name="bounce" enter-active-class="animated tada">
				<h2 class="h2" v-show="show" >欢迎来到我的git主页.</h2>
			</transition>
			
			<transition name="slide-left-p1">
			<div v-show="show">
<!--				<p>一直想去把GitPage这个东西做起来, 但是老是不知道从哪里入手, 不会设计. 脑袋空空的. 自己呢~ 想来想去又没有什么可以值得展示的技术.</p>-->
				<p>
					好了. 简单介绍一下这个个人主页使用到的技术东西.(附链接).
				</p>
				
				<ul>
					<li>1、<a href="https://cn.vuejs.org/" target="_blank">vue</a></li>
					<li>2、<a href="https://router.vuejs.org/zh-cn/index.html" target="_blank">vue-router</a></li>
					<li>3、<a href="https://github.com/mzabriskie/axios" target="_blank">axios</a></li>
					<li>4、<a href="http://element.eleme.io/#/zh-CN/component/installation" target="_blank">element-ui</a>&nbsp;&nbsp;&nbsp;<a href="http://mint-ui.github.io/docs/#/zh-cn2" target="_blank">(移动端叫mint-ui)</a></li>
					<li>5、<a href="https://daneden.github.io/animate.css/" target="_blank">animate.css</a></li>
					<li>6、<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial" target="_blank">canvas</a></li>
					<li>7、<a href="http://es6.ruanyifeng.com/" target="_blank">es6( 阮一峰教程, 我还买了纸质书支持一下 )</a></li>
					<li>8、<a href="http://less.bootcss.com/" target="_blank">less</a></li>
				</ul>
				
				<p class="xiahua">	主页也比较简单, 自然用不上vuex了. 试了一下饿了么出品的 element-ui 组件库. 然后用animate.css做了部分还行的动画. 当然也有用vue的方式写了看起来挺low的动画.. (￣▽￣"). 最后在vue-loader.conf里加了 autoprefixer 用作css3的前缀自动补全处理. </p>
				<p>目录结构如下: <br></p>
			</div>
			</transition>
		</el-col>
    
     <el-col :span="5" :offset="1" class="myInfo">
      <div class="portraits">
       <img src="../assets/images/QQ20170514-151007@2x.png"  alt="帅哥" width="80%">
			</div>
			 
			<div class="introduction">
				<ul>
					<li>个人简介 ——</li>
					<li>姓名： 钱招严</li>
					<li>职业： 前端开发工程师</li>
					<li>年限： 两年</li>
					<li>兴趣： 健身, 射箭, 音乐</li>
				</ul>
			</div>
   	
    	<div id="githubLink">
				<a href="https://github.com/qianzhaoy" target="_blank">
					<svg id="i-github" viewBox="0 0 64 64" width="30%">
						<path stroke-width="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"></path>
					</svg>
				</a>
			</div>
     </el-col>
     
  </el-row>
  
  </div>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				banner: [require("../assets/images/1.jpg")]
			}
		},
		mounted() {
			this.show = true
		},

		components: {}
	}

</script>

<style lang="less" scoped>
	.animateTran(@X, @Y) {
		-moz-transform: translate( @X, @Y );
		-webkit-transform: translate( @X, @Y );
		-ms-transform: translate( @X, @Y );
		-o-transform: translate( @X, @Y );
		transform: translate( @X, @Y );
	}
	
	#home{
		margin-top: 0;
	}
	
	.bannerImage {
		width: 100%;
		min-height: 240px;
	}
	
	.content {
		margin-top: 20px;
	}
	
	.left {
		height: 100vh;
		overflow: auto;
		.h2 {
			font-size: 0.35rem;
			margin-bottom: 20px;
		}
		p,
		ul {
			text-indent: 2em;
			margin-bottom: 20px;
			font-size: 0.2rem;
			line-height: 1.7em;
		}
		p.xiahua {
			text-decoration: underline
		}
		ul {
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
	
	.myInfo {
		text-align: center;
		border-left: 1px solid;
		height: 100vh;
		
		>div{
			margin-bottom: 50px;
		}
		
		.introduction{
			text-align: left;
			font-size: 18px;
			li{
				text-indent: 2em;
				margin-bottom: 15px;
			}
		}
		
		.portraits {
			img {
				border-radius: 50%;
			}
			&:hover img {
				animation: headRotate 3s infinite linear;
			}
		}
		
		#githubLink {
			#i-github {
				color: #1F2D3D;
			}
		}
	}
	
	.slide-left-p1-enter {
		.animateTran(-1200px, 0)
	}
	
	.slide-left-p1-enter-active {
		transition: all 1s ease-in;
	}
	
	@keyframes headRotate {
		0 {
			transform: rotateY(0)
		}
		60% {
			transform: rotateY(360deg)
		}
		100% {
			transform: rotateY(360deg)
		}
	}

</style>
