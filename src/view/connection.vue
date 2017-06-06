<template>
	<el-row id="connection">
   		<el-col :xs="{span:22,offset:1}" :sm="{span:16, offset:4}" class="info">
   		  <div class="title">
   		    <h1>Contact Infomation</h1>
   		  </div>
   		</el-col>
   </el-row>
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
  #connection {
    font-size: .18rem;
    margin-top: .5rem;
  }
  
  .info {
    h1 {
      position: absolute;
      top: .05rem;
      left: -5%;
      font-size: .24rem;
      line-height: 1rem;
      font-weight: 700;
      text-indent: 2em;
      width: 110%;
      height: 1rem;
      background-color: rgb(147, 224, 255);
      transition: all 2s;
      
      &:hover{
        width: 90%;
      }
    }
    div.title {
      position: relative;
      height: 1.1rem;
      border: 1px solid #fff;
      border-radius: .5rem;
    }
  }

</style>
