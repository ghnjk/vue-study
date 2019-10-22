<template>
  <el-container style="height: 100%">
    <el-header height="50px" style="background: #3C8DBC">
      <span class="title-font" >{{SystemName}}</span>
      <home-header @changeAside="changeAside"></home-header>
    </el-header>
    <el-container>
      <el-aside :width="width"><home-aside :isOpen="isOpen"></home-aside></el-aside>
      <el-container>
        <el-main>
          <app-main></app-main>
        </el-main>
        <el-footer style="text-align: center">2019@frankfyang</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      isOpen: '',
      SystemName: 'AOP自动发布系统',
      width: '200px'
    }
  },
  components: {
  },
  created () {
    this.$store.dispatch('changeConf', '')
    this.$store.dispatch('changeApplicant', '')
    this.$store.dispatch('changeTaskId', '')
  },
  methods: {
    changeAside (val) {
      this.isOpen = val
      if (this.isOpen) {
        this.SystemName = '自动发布系统'
        this.width = '200px'
      } else {
        this.SystemName = 'Aop'
        this.width = '75px'
      }
    }
  }
}
</script>

<style scoped>
  .title-font{
    font-size: 22px;
    color: white;
    height: 50px;
    line-height: 50px;
    margin-left: 10px;
  }
  .el-header{
    padding: 0 !important;
  }
</style>
