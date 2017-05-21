<template>
  <div class="next" @click="routePush">
    <i class="el-icon-d-arrow-right"></i>
  </div>
</template>

<script>
  export default {
    props:["goto"],
    data() {
      return {}
    },
    methods:{
      routePush(){
        this.$router.push(this.goto)
      }
    },
    components: {}
  }

</script>

<style scoped lang="less">
  .next{
    font-size: 40px;
    height: 100vh;
    position: relative;
    top: 0;
    width: 80%;
    margin-left: 20%;
    cursor: pointer;
    &:hover{
      background-color:rgba(213, 221, 231, 0.58)
    }
    
    .el-icon-d-arrow-right{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%)
    }
  }

</style>
