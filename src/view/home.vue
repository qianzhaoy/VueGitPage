<template>
  <div id="home">
   <el-row>
		<el-col :span="16">
			
			<transition name="bounce" enter-active-class="animated tada">
				<h2 class="h2" v-show="show" >欢迎观看我的 GitPage.</h2>
			</transition>
			
			<transition name="slide-left-p1">
				<p  v-show="show">一直呢,想去把GitPage这个东西做起来, 但是老是不知道从哪里入手, 不会设计. 脑袋空空的. 自己呢~ 想来想去又没有什么可以展示的好东西.</p>
			</transition>
			
			<transition name="slide-left-p1">
				<p  v-show="show">
					好了, 不逼逼了. 简单介绍一下这个个人主页用的技术结构吧.
				</p>
			</transition>
			
			<p v-show="show">vue + vue-router + axios + element-ui + animate.css + canvas + es6 + less (边看教程边写的less = =)</p>
			<p class="xiahua" v-show="show">	主页也比较简单, 自然用不上vuex了. 试了一下饿了么出品的 element-ui 组件库. 然后用animate.css做了部分还不错的动画. 当然也有用vue的方式写了看起来挺low的动画.. (￣▽￣") </p>
			<p>目录结构如下: <br></p>
		</el-col>
    <transition name="el-zoom-in-center">
     <el-col :span="8" v-show="show">
       <img src="../assets/images/QQ20170514-151007@2x.png" alt="帅哥" width="100%">
     </el-col>
		 </transition>
  </el-row>
  
  </div>
</template>

<script>
	export default {
		data() {
			return {
				show: false
			}
		},
		mounted() {
			this.show = true
		},

		components: {}
	}

</script>

<style lang="less" scoped>
	.animateTran(@X, @Y, @deg) {
		-moz-transform: translate(  @X, @Y ) rotate(@deg);
		-webkit-transform: translate( @X, @Y ) rotate(@deg);
		-ms-transform: translate( @X, @Y ) rotate(@deg);
		-o-transform: translate( @X, @Y ) rotate(@deg);
		transform: translate( @X, @Y ) rotate(@deg);
	}
	
	#home {
		color: #fff;
		.h2 {
			font-size: 40px;
		}
		p {
			text-indent: 2em;
			margin: 20px 0;
			font-size: 18px;
			line-height: 1.7em;
		}
		p.xiahua{
			text-decoration: underline
		}
	}
	
	
	.slide-left-p1-enter {
		.animateTran(-1200px, 0, 360deg)
	}
	
	.slide-left-p1-enter-active {
		transition: all 1s ease-in;
	}

</style>
