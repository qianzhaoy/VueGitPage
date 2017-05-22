<template>
	<canvas id="arcCanvas" ref="arcCanvas">您的浏览器太辣鸡了,我的效果你看不了</canvas>
</template>

<script>
	import Vue from "vue"
	export default {
		data() {
			return {}
		},
		mounted() {
			const canvasEl = this.$refs.arcCanvas,
				self = this,
				ctx = canvasEl.getContext('2d'),
				radius = 20,
				speed = 1.1,
				opacity = 1,
				initRadius = 2;

			let downTime;
			let isMove = false;
			let arcCache = [];

			canvasEl.width = canvasEl.clientWidth;
			canvasEl.height = canvasEl.clientHeight;

			arcOption()

			window.onresize = function() {
				//高宽每次设置都会重置画布状态和内容
				canvasEl.width = canvasEl.clientWidth;
				canvasEl.height = canvasEl.clientHeight;
			}

			document.addEventListener('mousedown', function(e) {
				if (typeof document.ontouchstart !== "undefined") return;
				const clientX = e.clientX;
				const clientY = e.clientY;
				downTime = new Date();
				arcPush({
					clientX,
					clientY,
					initRadius,
					opacity
				})
			}, false)

			document.addEventListener('mouseup', function(e) {
				if (document.ontouchstart) return;
				downTime = null
			}, false)

			document.addEventListener('mousemove', self.throttle(function(e) {
				if (!isMove) return;
				const clientX = e.clientX
				const clientY = e.clientY
				arcCache.push({
					clientX,
					clientY,
					initRadius,
					opacity
				});
			}, 30), false)

			document.addEventListener('touchstart', function(e) {
				const clientX = e.touches[0].clientX;
				const clientY = e.touches[0].clientY;
				isMove = true;
				downTime = new Date();
				arcPush({
					clientX,
					clientY,
					initRadius,
					opacity
				})
			}, false)

			document.addEventListener('touchmove', self.throttle(function(e) {
				const clientX = e.touches[0].clientX
				const clientY = e.touches[0].clientY
				arcCache.push({
					clientX,
					clientY,
					initRadius,
					opacity
				});
			}, 30), false)

			document.addEventListener('touchend', function(e) {
				isMove = false
				downTime = null
			}, false)

			document.addEventListener('dblclick', function(e) {
				isMove = false
			}, false)

			function arcPush(client) {
				arcCache.push(client);
				setTimeout((function(client) {
					var a = Object.assign({}, client)
					return function() {
						arcCache.push(a)
					}
				})(client), 150);
			}

			function arcOption() {
				window.requestAnimationFrame(arcOption)
				if (downTime && (new Date() - downTime) >= 2000) isMove = true;
				if (arcCache.length === 0) return;

				ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)

				if (isMove && arcCache.length === 1 && arcCache[0].initRadius >= 20) {
					const last = arcCache.length - 1
					arcCache[0].initRadius = 2
					arcCache[0].opacity = 1
				} else {
					arcCache = arcCache.filter(client => client.initRadius <= radius)
				}

				arcCache.forEach((client) => {
					client.initRadius += speed
					client.opacity -= 0.05

					drawArc(client)
				})

			}

			function drawArc({
				clientX,
				clientY,
				initRadius = initRadius,
				opacity = opacity
			}) {
				ctx.beginPath();
				ctx.lineWidth = 2
				ctx.strokeStyle = `hsla(180, 100%, 50%, ${opacity} )`
				ctx.arc(clientX, clientY, initRadius, 0, 2 * Math.PI);
				ctx.stroke();
			}

		},
		methods: {
			throttle(func, wait, options) {

				var timeout, context, args, result;
				// 最近一次func被调用的时间点  
				var previous = 0;
				if (!options) options = {};

				// 创建一个延后执行的函数包裹住func的执行过程  
				var later = function() {
					// 执行时，刷新最近一次调用时间  
					previous = options.leading === false ? 0 : new Date();
					// 清空定时器  
					timeout = null;
					result = func.apply(context, args);
					if (!timeout) context = args = null;
				};

				// 返回一个throttled的函数  
				var throttled = function() {
					// ----- 节流函数开始执行----  
					// 我们尝试调用func时，会首先记录当前时间戳  
					var now = new Date();
					// 是否是第一次调用  
					if (!previous && options.leading === false) previous = now;
					// func还要等待多久才能被调用 =  预设的最小等待期-（当前时间-上一次调用的时间）  
					// 显然，如果第一次调用，且未设置options.leading = false，那么remaing=0，func会被立即执行  
					var remaining = wait - (now - previous);
					// 记录之后执行时需要的上下文和参数  
					context = this;
					args = arguments;

					// 如果计算后能被立即执行  
					if (remaining <= 0 || remaining > wait) {
						// 清除之前的“最新调用”  
						if (timeout) {
							clearTimeout(timeout);
							timeout = null;
						}
						// 刷新最近一次func调用的时间点  
						previous = now;
						// 执行func调用  
						result = func.apply(context, args);
						// 如果timeout被清空了，  
						if (!timeout) context = args = null;

					} else if (!timeout && options.trailing !== false) {
						// 如果设置了trailing edge，那么暂缓此次调用尝试的执行  
						timeout = setTimeout(later, remaining);
					}
					return result;
				};

				// 可以取消函数的节流化  
				throttled.cancel = function() {
					clearTimeout(timeout);
					previous = 0;
					timeout = context = args = null;
				};

				return throttled;
			}
		}
	}

</script>

<style lang="css" scoped>
	#arcCanvas {
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		z-index: 99;
		pointer-events: none;
	}

</style>
