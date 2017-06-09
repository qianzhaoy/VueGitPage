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
   				
   				
   				
   			    <div class="jquery">
   					<div class="rotateZ">
   					  <SkillExp level="proficient">jquery</SkillExp>
				    </div>	
   				</div>
   				
   			    <div class="swift">
   					<div class="rotateZ">
   					  <SkillExp level="comprehend">swift</SkillExp>
				    </div>	
   				</div>
   				
   				<div class="nodeJs">
   					<div class="rotateZ">
   					  <SkillExp level="proficiency">nodeJs</SkillExp>
				    </div>	
   				</div>
   				
   				<div>
   				   <SkillExp level="proficient" class="fixedCenter" style="position:absolute;height:200px;width:200px">javascript</SkillExp>
				</div>
   			</div>
   		</el-col>
   </el-row>
</template>

<script>
  import SkillExp from "@/components/skillExp"
  export default {
    components: {
      SkillExp
    }
  }

</script>

<style lang="less" scoped>
  .keyframes (@name, @Z) {
    @keyframes @name {
      0% {
        transform: rotateX(-90deg) rotateY(0deg) rotateZ(@Z)
      }
      100% {
        transform: rotateX(-90deg) rotateY(360deg) rotateZ(@Z)
      }
    }
  }
  
  .trackRotate(@X, @Y, @animateName) {
    transform: rotateX(@X) rotateY(@Y);
    transform-style: preserve-3d;
    div.exp {
      left: 30px;
      animation: @animateName 7s infinite linear;
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
    position: absolute;
    top: 50%;
    left: 50%;
    height: 400px;
    width: 400px;
    transform-style: preserve-3d;
    transform: translate(-50%, -40%);
    >div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
    }
    div.rotateZ {
      border: 3px solid #fff;
      border-radius: 50%;
      height: 100%;
      transform: rotateZ(360deg);
      transform-style: preserve-3d;
      animation: part 7s infinite linear;
    }
    .nodeJs {
      div.rotateZ {
        border: 3px solid #fff;
        border-radius: 50%;
        height: 100%;
        transform: rotateZ(360deg);
        transform-style: preserve-3d;
        animation: nodepart 7s infinite linear;
      }
    }
  }
  
  .css3 {
    .trackRotate(70deg, 60deg, cssFixed);
  }
  
  .html5 {
    .trackRotate(70deg, -60deg, htmlFixed);
  }
  
  .vue {
    .trackRotate(70deg, 0, vueFixed);
  }
  
  .jquery {
    .trackRotate(70deg, -30deg, jqueryFixed);
  }
  
  .swift {
    .trackRotate(70deg, 30deg, swiftFixed);
  }
  
  .nodeJs {
    .trackRotate(0, -91deg, nodeFixed);
  }
  
  @keyframes part {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(360deg)
    }
  }
  
  @keyframes nodepart {
    0% {
      transform: rotateZ(0);
    }
    100% {
      transform: rotateZ(-360deg)
    }
  }
  
  .keyframes(htmlFixed, 60deg);
  .keyframes(cssFixed, -50deg);
  .keyframes(vueFixed, 0deg);
  /*  .keyframes(swiftFixed, 100deg);*/
  
  @keyframes jqueryFixed {
    0% {
      transform: rotateX(-100deg) rotateY(10deg) rotateZ(30deg)
    }
    100% {
      transform: rotateX(-100deg) rotateY(370deg) rotateZ(30deg)
    }
  }
  
  @keyframes swiftFixed {
    0% {
      transform: rotateX(100deg) rotateY(180deg) rotateZ(150deg)
    }
    100% {
      transform: rotateX(100deg) rotateY(-180deg) rotateZ(150deg)
    }
  }
  
  @keyframes nodeFixed {
    0% {
      transform: rotateX(270deg) rotateY(90deg) rotateZ(90deg)
    }
    100% {
      transform: rotateX(270deg) rotateY(-270deg) rotateZ(90deg)
    }
  }

</style>
