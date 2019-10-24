<template>
  <el-container style="height: 100%">
    <el-header height="50px" style="background: #3C8DBC">
      <span class="title-font" >{{SystemName}}</span>
      <Header @changeAside="changeAside"></Header>
    </el-header>
    <el-container>
      <el-aside :width="width">
        <SideBar :isOpen="isOpen" :title="SystemName" :navigator="navigator"></SideBar>
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
  name: 'FrameWork',
  data () {
    return {
      isOpen: '',
      SystemName: 'AOP自动发布系统',
      width: '200px',
      navigator: [
        {
          title: '自动发布任务',
          children: [
            {
              title: '查询任务',
              url: '/simple_render'
            },
            {
              title: '创建任务',
              url: '/url/d'
            }
          ]
        },
        {
          title: '系统测试',
          children: [
            {
              title: '测试页面',
              url: '/test'
            },
            {
              title: 'vuex测试页面1',
              url: '/store_test_1'
            },
            {
              title: 'vuex测试页面2',
              url: '/store_test_2'
            }
          ]
        }
      ]
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
