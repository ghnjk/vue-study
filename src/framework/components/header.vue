<template>
  <nav class="navbar-inverse navbar-fixed-top nav-op" :style="style">
    <div class="navbar-header">
      <i class="el-icon-d-arrow-left hamburger-container" v-show="!show" @click="OpenCloseAside"></i>
      <i class="el-icon-d-arrow-right hamburger-container" v-show="show" @click="OpenCloseAside"></i>
    </div>
    <div class="navbar-right">
      <ul class="nav navbar-nav" style="margin-right: 10px">
        <li><el-link :underline="false" href="wxwork://message/username=jkguo"><i class="el-icon-chat-dot-round el-icon&#45;&#45;right"></i>联系我们</el-link></li>
        <li>
          <a href="#" class="el-link el-link--default">
            <img :src="imageSrc" alt="User Image" class="user-image">
            <span style="color: white;">{{currentUser}}</span>
          </a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'homeHeader',
    data () {
      return {
        currentUser: '',
        imageSrc: '',
        show: true,
        style: 'margin-left:200px;'
      }
    },
    created () {
      sessionStorage.setItem('loginUser', 'jkguo')
      this.imageSrc = 'https://dcloud.oa.com/Public/Avatar/' + sessionStorage.getItem('loginUser') + '.png'
      this.$store.dispatch('changeLoginUser', sessionStorage.getItem('loginUser'))
      if (this.$store.state.data['loginUser']) {
        this.currentUser = this.$store.state.data['loginUser']
      }
      this.OpenCloseAside()
    },
    methods: {
      OpenCloseAside () {
        this.$emit('changeAside', this.show)
        this.show = !this.show
        if (this.show) {
          this.style = 'margin-left:70px;'
        } else {
          this.style = 'margin-left:200px;'
        }
      }
    }
  }
</script>

<style scoped>
  .nav-op{
    height: 50px;
    background-color: #3C8DBC;
  }
  .el-icon-d-arrow-left {
    color: white;
  }
  .el-icon-d-arrow-right{
    color: white;
  }
  .hamburger-container{
    line-height: 50px;
    height: 100%;
    width: 40px;
    float: left;
    cursor: pointer;
    transition: background .3s;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .user-image{
    float: left;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin-right: 10px;
    margin-top: -2px;
  }
  .el-link >>> .el-link--inner{
    color: white !important;
  }
  a{
    color: white;
  }
  a:hover{
    text-decoration: none;
  }

</style>

