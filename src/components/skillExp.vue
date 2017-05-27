<template>
	<div class="exp">
		<svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
				<path :d="trackPath.dpath" :fill="trackPath.bg"></path>
		</svg>
		<div class="text">
			<slot></slot>
		</div>
	</div>

</template>

<script>
	export default {
		props: {
			level: {
				type: String
			}
		},
		data() {
			return {
				path: {
					comprehend: {
						dpath: "M50 0 A50 50, 0, 0, 1, 100 50 L50 50",
						bg: "#1fd118"
					},
					proficiency: {
						dpath: "M50 0 A50 50, 0, 0, 1, 50 100 L 50 0",
						bg: "#35c397"
					},
					grasp: {
						dpath: "M50 0 A50 50, 0, 1, 1, 0 50 L 50 50",
						bg: "#ffca3a"
					},
					proficient: {
						dpath: "M 50 50 m 0 -50 a 50 50 0 1 1 0 100 a 50 50 0 1 1 0 -100",
						bg: "#0eb9f8"
					},
				}
			}
		},
		computed: {
			trackPath() {
				return this.path[this.level]
			}
		},
		components: {}
	}

</script>

<style scoped>
	.exp {
		width: 80px;
		height: 80px;
		position: relative;
	}
	
	.text {
		position: absolute;
		left: 50%;
		top: 50%;
		font-size: .16rem;
		font-weight: bold;
		transform: translate(-50%, -50%);
		color: #000
	}

</style>
