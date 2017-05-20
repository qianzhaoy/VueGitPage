<template>
    <el-carousel>
      <el-carousel-item v-for="item in imgSrc" :key="item">
      	<img :src="item" class="bannerImage">
      </el-carousel-item>
    </el-carousel>
</template>

<script>
    export default {
        data () {
            return {
              imgSrc: [require("../assets/images/1.jpg")]
            }
        },
        components: {
        }
    }
</script>

<style scoped>
    .bannerImage {
		width: 100%;
		min-height: 100%;
	}
</style>