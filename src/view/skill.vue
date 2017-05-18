<template>
   <el-row id="aboutMe">
   		<el-col :span="20" :offset="2">
				<el-tag  hit="true">标签一</el-tag>
				<el-tag type="gray" hit="true">标签二</el-tag>
				<el-tag type="primary" hit="true">标签三</el-tag>
				<el-tag type="success" hit="true">标签四</el-tag>
				<el-tag type="warning" hit="true">标签五</el-tag>
				<el-tag type="danger" hit="true">标签六</el-tag>
   		</el-col>
   </el-row>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        components: {
        }
    }
</script>

<style>
    
</style>