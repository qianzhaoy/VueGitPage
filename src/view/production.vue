<template>
 <div id="production">
  <el-row class="project">
    <el-col :xs="{span:22,offset:1}" :sm="{span:12, offset:2}">
      <el-row>
        内容
      </el-row>
    </el-col>
    
    <el-col :xs="0" :sm="{span:7, offset: 1}" style="overflow:hidden">
     <div style="width:60%;">
      <el-input
        placeholder="标题搜索"
        icon="search">
      </el-input>
      </div> 
    </el-col>
  </el-row>

   <el-row>
    <div class="pages">
        <el-pagination
        layout="prev, pager, next"
        :total="50">
        </el-pagination>
    </div>
    </el-row>
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
  #production {
    margin-top: 20px;
    height: calc(~"100vh - 20px");
    position: relative;
    text-align: center;
    
    >.project{
      min-height:90%;
      min-height: calc(~"100% - 60px");
    }
  }
  
</style>
