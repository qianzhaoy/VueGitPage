<template>
	<canvas id="arcCanvas" ref="arcCanvas">您的浏览器太辣鸡了,我的特效你没资格看</canvas>
</template>

<script>
	import Vue from "vue"
	export default {
		data() {
			return {}
		},
		mounted() {
			const canvasEl = this.$refs.arcCanvas,
				ctx = canvasEl.getContext('2d'),
				radius = 20,
				speed = 1.1,
				arcColor = "#64cfd3",
				lineWidth = 2,
				initRadius = 2;

			let arcCache = [];

			canvasEl.width = canvasEl.clientWidth;
			canvasEl.height = canvasEl.clientHeight;


			window.onresize = function() {
				canvasEl.width = canvasEl.clientWidth;
				canvasEl.height = canvasEl.clientHeight;
			}

			document.addEventListener('mousedown', function(e) {
				const clientX = e.clientX
				const clientY = e.clientY
				arcCache.push({
					clientX,
					clientY,
					initRadius
				})
			}, false)

			arcOption()

			function arcOption() {
				window.requestAnimationFrame(arcOption)
				if(arcCache.length === 0) return;
				ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
				arcCache = arcCache.filter(client => client.initRadius <= radius)
				arcCache.forEach((client) => {
					client.initRadius += speed
					drawArc(client)
				})
			}

			function drawArc({ clientX, clientY, initRadius = 2 }) {
				ctx.lineWidth = lineWidth
				ctx.strokeStyle = arcColor
				ctx.beginPath();
				ctx.arc(clientX, clientY, initRadius, 0, 2 * Math.PI);
				ctx.stroke();
			}

		},
		methods: {},
		components: {}
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
