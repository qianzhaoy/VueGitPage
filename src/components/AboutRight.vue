<template>
     <div class="myInfo">
     <el-row  class="portraits">
				<el-col :xs="{span:12, offset:6}">
					 <img src="../assets/images/QQ20170514-151007@2x.png"  alt="帅哥" width="80%">
				</el-col>
			</el-row>
      
      <el-popover
        ref="popover1"
        placement="top-start"
        width="100"
        trigger="hover"
        content="健身, 射箭, 音乐, LOL">
      </el-popover>
      
      <div class="introduction">
          <ul>
              <li>姓名： 钱招严</li>
              <li>年龄： 25</li>
              <li>职业： 前端开发工程师</li>
		      <li v-popover:popover1>兴趣： 健身, 射箭, 音乐, LOL</li>
              <li>所在地： 杭州</li>
              <li>工作年限： 两年</li>
          </ul>
      </div>
   	
      <div id="githubLink">
        <a href="https://github.com/qianzhaoy" target="_blank">
            <svg id="i-github" viewBox="0 0 64 64" width="30%">
                <path stroke-width="0" fill="currentColor" d="M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17 57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18 52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22 15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49 13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49 40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"></path>
            </svg>
        </a>
      </div>
     </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    components: {}
  }

</script>

<style lang="less" scoped>
  .myInfo {
    text-align: center;
    border-left: 1px solid;
/*    height: 100vh;*/
		
    >div {
      margin-bottom: 50px;
    }
    .introduction {
      text-align: left;
      font-size: .18rem;
      li {
        padding-left: 1em;
				white-space: nowrap;
				overflow:hidden;
				text-overflow: ellipsis;
        margin-bottom: 15px;
      }
    }
    .portraits {
      img {
        border-radius: 50%;
      }
    }
    #githubLink {
      #i-github {
        color: #1F2D3D;
      }
    }
  }
	
</style>
