<template>
<!--
    <el-carousel>
      <el-carousel-item v-for="item in imgSrc" :key="item">
-->
      	<img src="../assets/images/title-yellow.png" class="bannerImage">
<!--
      </el-carousel-item>
    </el-carousel>
-->
</template>

<script>
	export default {
		data() {
			return {
				imgSrc: [require("../assets/images/title-yellow.png")]
			}
		},
		components: {}
	}

</script>

<style scoped>
	.bannerImage {
		width: 100%;
		margin-bottom: 20px;
	}

</style>
