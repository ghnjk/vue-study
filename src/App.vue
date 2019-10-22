<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  }
}
</script>

<style>
  html,body{
    height: 100%;
    width: 100%;
  }
  .app{
    height: 100%;
  }
  a:hover{
    text-decoration: none;
  }
  .el-container{
    overflow: hidden;
  }
  .down{
    margin-bottom: 25px;
  }
</style>
