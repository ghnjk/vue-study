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

      <el-submenu v-for="(menu,idx) in navigator" :key="idx" :index="idx.toString()">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ menu.title }}</span>
        </template>
        <router-link v-for="(subMenu, subIdx) in menu.children" :key="subIdx" :to="subMenu.url">
          <el-menu-item :index="combineSubMenuTag(idx, subIdx)">
            <i class="el-icon-document"></i>
            {{subMenu.title}}
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
          title: '自动发布任务',
          children: [
            {
              title: '查询任务',
              url: '/url/d'
            },
            {
              title: '创建任务',
              url: '/url/d'
            }
          ]
        },
        {
          title: '系统配置',
          children: [
            {
              title: '发布规则配置',
              url: '/url/d'
            }
          ]
        }
      ]
    }
  },
  created () {
  },
  methods: {
    combineSubMenuTag: function (idx, subIdx) {
      return idx.toString() + '-' + subIdx.toString()
    }
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
