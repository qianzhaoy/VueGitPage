<template>
   <el-row id="skill">
   		<el-col :xs="{span:22,offset:1}" :sm="{span:20, offset:2}">
   		<SkillExp class="comprehend"></SkillExp>了解
   			<SkillExp class="proficiency"></SkillExp>熟悉
   			<SkillExp class="grasp"></SkillExp>掌握
   			<SkillExp class="proficient"></SkillExp>精通
<!--
   			<el-row class="skillInfo">
   				<el-col :span="12">
   					<el-tag color="#e44c25">HTML5</el-tag>
   					<p v-for="p in html">{{p}}</p>
   				</el-col>
   				<el-col :span="11" :offset="1">
   					<el-tag color="#3b9adb">CSS + CSS3</el-tag>
   					<p v-for="p in css">{{p}}</p>
   				</el-col>
   			</el-row>
   		
   			<el-row class="skillInfo">
   				<el-col :span="12"><el-tag color="#35495e">javascript</el-tag>
   					<p v-for="p in javascript">{{p}}</p>
   				</el-col>
   				<el-col :span="11" :offset="1"><el-tag type="success" color="#35495e">Vue</el-tag>
   					<p v-for="p in vue">{{p}}</p>
   				</el-col>
   			</el-row>
   			
   			<el-row class="skillInfo">
   				<el-col :span="12"><el-tag type="warning">Swift</el-tag>
   					<p v-for="p in swift">{{p}}</p>
   				</el-col>
   				<el-col :span="11" :offset="1"><el-tag type="primary">webpack</el-tag>
   					<p v-for="p in webpack">{{p}}</p>
   				</el-col>
   			</el-row>
				
				<el-row  class="skillInfo">
					<el-col :span="12"><el-tag type="gray" color="#efe750">JQuery</el-tag>
					  <p v-for="p in jquery">{{p}}</p>
					</el-col>
					<el-col  :span="11" :offset="1"><el-tag color="green">nodejs</el-tag>
					  <p v-for="p in nodejs">{{p}}</p>
					</el-col>
				</el-row>
-->
				
   		</el-col>
   </el-row>
</template>

<script>
	import SkillExp from "@/components/skillExp"
	export default {
		data() {
			return {
				html:[],
				css:[],
				javascript:[],
				swift:[],
				vue:[],
				webpack:[],
				jquery:[],
        nodejs: []
			}
		},
		created(){
			var self = this
			this.$Api.getSkill().then(res => {
				const data = res.data;
				this.html = data.html
				this.css = data.css
				this.javascript = data.javascript
				this.swift = data.swift
				this.vue = data.vue
				this.jquery = data.jquery
				this.webpack = data.webpack
				this.nodejs = data.nodejs
			})
		},
		components: {
			SkillExp
		}
	}

</script>

<style lang="less" scoped>
	
	.skillInfo{
		min-height: 3rem;
		
		p{
			margin-top: .2rem;
/*			text-indent: 2em*/
		}
		
		p:last-child{
			margin-bottom: .2rem;
		}
		
	}
	
</style>
