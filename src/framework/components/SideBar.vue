<template>
  <transition name="slide-fade">
    <el-menu
      :default-active="activeIndex"
      background-color="#222D32"
      text-color="#fff"
      style="height: 100%"
      active-text-color="#ffd04b"
      :collapse="!isOpen">
      <router-link to="/">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ title }}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-for="(index, menu) in navigator" index="{{index}}">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ menu.title }}</span>
        </template>
        <router-link v-for="(subIndex, subMenu) in menu.children" to="{{submenu.url}}">
          <el-menu-item index="{{index}}-{{subIndex}}">
            <i class="el-icon-document"></i>
            {{submenu.title}}
          </el-menu-item>
        </router-link>
      </el-submenu>

    </el-menu>
  </transition>
</template>

<script>
  export default {
    name: 'SideBar',
    props: ['isOpen'],
    data () {
      return {
        activeIndex: '1',
        currentUser: '',
        title: '首页',
        navigator: [
          {
            title: '首页',
            children: [
              {
                title: '栏目1',
                url: '/url/d'
              }
            ]
          },
          {
            title: '2',
            children: [
              {
                title: '栏目1',
                url: '/url/d'
              }
            ]
          }
        ]
      }
    },
    created () {
    }
  }
</script>

<style scoped>
  .slide-fade-enter-active {
    transition: all .4s ease;
  }
  .slide-fade-leave-active {
    transition: all .4s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to{
    transform: translateX(0px);
    opacity: 0.9%;
  }
  .el-menu{
    border-right: none !important;
  }
  a{
    color: white;
  }
  a:hover{
    color: #99a9bf;
  }
  .el-menu-item{
    background-color: #2C3B40 !important;
  }
  .el-menu-item:hover{
    background-color: rgb(27, 36 ,40) !important;
  }
</style>
