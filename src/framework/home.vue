<template>
  <el-container style="height: 100%">
    <el-header height="50px" style="background: #3C8DBC">
      <span class="title-font" >{{SystemName}}</span>
      <Header @changeAside="changeAside"></Header>
    </el-header>
    <el-container>
      <el-aside :width="width">
        <SideBar :isOpen="isOpen"></SideBar>
      </el-aside>
      <el-container>
        <el-main>
          <AppMain></AppMain>
        </el-main>
        <el-footer style="text-align: center">2019@jkguo</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>

import Header from './components/header'
import SideBar from './components/side_bar'
import AppMain from './components/app_main'

export default {
  name: 'Home',
  data () {
    return {
      isOpen: '',
      SystemName: 'AOP自动发布系统',
      width: '200px'
    }
  },
  components: {
    Header,
    SideBar,
    AppMain
  },
  created () {
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
