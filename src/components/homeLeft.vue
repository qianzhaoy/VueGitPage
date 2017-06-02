<template>
	 <div class="left">
		<transition name="bounce" enter-active-class="animated tada">
				<h2 class="h2" v-show="show" >序&nbsp;言</h2>
		</transition>
		 
		<div class="content">
<!--				<p>一直想去把GitPage这个东西做起来, 但是老是不知道从哪里入手, 不会设计. 脑袋空空的. 自己呢~ 想来想去又没有什么可以值得展示的技术.</p>-->
				<p>
						好了. 简单介绍一下这个个人主页使用到的技术东西.(附链接).
				</p>

				<ul>
						<li>1、<a href="https://cn.vuejs.org/" target="_blank">vue</a></li>
						<li>2、<a href="https://router.vuejs.org/zh-cn/index.html" target="_blank">vue-router</a></li>
						<li>3、<a href="https://github.com/mzabriskie/axios" target="_blank">axios</a></li>
						<li>4、<a href="https://vuex.vuejs.org/zh-cn/intro.html" target="_blank">vuex</a></li>
						<li>5、<a href="http://element.eleme.io/#/zh-CN/component/installation" target="_blank">element-ui</a>&nbsp;&nbsp;&nbsp;<a href="http://mint-ui.github.io/docs/#/zh-cn2" target="_blank">(移动端叫mint-ui)</a></li>
						<li>6、<a href="https://daneden.github.io/animate.css/" target="_blank">animate.css</a></li>
						<li>7、<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial" target="_blank">canvas</a></li>
						<li>8、<a href="http://es6.ruanyifeng.com/" target="_blank">es6( 阮一峰教程, 我还买了纸质书支持一下 )</a></li>
						<li>9、<a href="http://less.bootcss.com/" target="_blank">less(现学现卖)</a></li>
				</ul>

				<p class="xiahua"> 试了一下饿了么出品的 element-ui 组件库. 然后用animate.css做了部分还行的动画. 当然也有用vue的方式写了看起来挺low的动画.. (￣▽￣").</p>
				<p>目录结构如下: <br></p>
		</div>
		<div style="height:500px"></div>
		</div>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
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
  
  .left {
/*
    height: 100vh;
    overflow: auto;
*/
    
    .h2 {
      font-size: 0.35rem;
      margin-bottom: 20px;
      text-align: center
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
  
	.content{
		animation: late 1s ease-out;		
	}
  
  @keyframes late {
    from {
      transform: translate(-1200px, 0)
    }
    to {
       transform: translate(0, 0)
    }
  }

</style>
