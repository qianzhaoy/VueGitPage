<template>
   <el-row id="skill">
   		<el-col :xs="{span:22,offset:1}" :sm="{span:20, offset:2}">
   			<el-row type="flex" justify="space-around">
   				<SkillExp level="comprehend">了解</SkillExp>
   				<SkillExp level="proficiency">熟悉</SkillExp>
   				<SkillExp level="grasp">掌握</SkillExp>
   				<SkillExp level="proficient">精通</SkillExp>
   			</el-row>
   			
   			<div class="boxrotate">
   				<div class="css3">
   					<div class="rotateZ">
   						<SkillExp level="proficient">css3</SkillExp>
						</div>
   				</div>
   				
   				<div class="html5">
   					<div class="rotateZ">
   						<SkillExp level="proficient">html5</SkillExp>
						</div>	
   				</div>
   				
   				 <div class="vue">
   					<div class="rotateZ">
   						<SkillExp level="grasp">Vue</SkillExp>
						</div>	
   				</div>
   				
   				<div>
   					<SkillExp level="proficient" class="fixedCenter" style="position:absolute;height:200px;width:200px">javascript</SkillExp>
					</div>
   			</div>
				
   			
   				
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
				html: [],
				css: [],
				javascript: [],
				swift: [],
				vue: [],
				webpack: [],
				jquery: [],
				nodejs: []
			}
		},
		created() {
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
	.keyframes (@name, @Z) {
		@keyframes @name {
			0% {
				transform: rotateX(-70deg) rotateY(0deg) rotateZ(@Z)
			}
			100% {
				transform: rotateX(-70deg) rotateY(360deg) rotateZ(@Z)
			}
		}
	}
	
	.trackRotate(@X, @Y, @animateName, @animationdelay: 0) {
		transform: rotateX(@X) rotateY(@Y);
		transform-style: preserve-3d;
		div.exp {
			left: 30px;
			animation: @animateName 6s infinite linear;
			animation-delay: @animationdelay;
		}
		
		div.rotateZ{
			animation-delay: @animationdelay;
		}
	}
	
	#skill {
		margin-top: 20px;
		height: calc(~"100vh - 20px");
		position: relative;
	}
	
	.fixedCenter {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	
	.boxrotate {
		height: 400px;
		width: 400px;
		position: absolute;
		transform-style: preserve-3d;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		transform-style: preserve-3d;
		>div {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
		}
		div.rotateZ {
			border: 8px solid #fff;
			border-radius: 50%;
			height: 100%;
			transform: rotateZ(360deg);
			transform-style: preserve-3d;
			animation: part 6s infinite linear;
		}
	}
	
	.css3 {
		.trackRotate(70deg, 60deg, cssFixed);
	}
	
	.html5 {
		.trackRotate(70deg, -60deg, htmlFixed);
	}
	
	.vue{
		.trackRotate(80deg, 0, vueFixed);
		
	}
	
	@keyframes part {
		0% {
			transform: rotateZ(0);
		}
		100% {
			transform: rotateZ(360deg)
		}
	}
	
	.keyframes(htmlFixed, 50deg);
	.keyframes(cssFixed, -50deg);
	.keyframes(vueFixed, 0deg);

</style>
