<template>
  <div
    v-loading.fullscreen.lock="fullscreenLoading"
    element-loading-text="获取发布状态信息中,请稍候.."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
  >
    <el-row :gutter="20">
      <el-col :span="4">
        <el-row>
          <el-col :span="10" :offset="5">
            <h3 class="h3-bottom">建设中</h3>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style scoped="">
  .h3-bottom{
    margin-bottom: 25px;
  }
  .bottom{
    margin-bottom: 15px;
  }
</style>
