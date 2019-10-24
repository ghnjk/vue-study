<template>
  <div>
    <el-row :gutter="24" style="margin-top: 59px">
      <el-col :span="6">
        <div style="display: flex; margin-top: 10px; height: 100px; float: right">
          <div>vuex store 测试</div>
        </div>
      </el-col>
      <el-col :span="12">
        <el-input v-model="msg" placeholder="请输入消息"></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="24" style="margin-top: 59px">
      <el-col :span="2" :offset="12">
        <el-button @click="load">加载</el-button>
      </el-col>
      <el-col :span="2" :offset="2">
        <el-button @click="save" type="primary">保存</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'StoreTest1',
  data: function () {
    return {
      msg: ''
    }
  },
  created: function () {
    this.load()
  },
  methods: {
    save: function () {
      console.log('this tab msg is : ' + this.msg)
      this.$store.dispatch('TestModule/publishMessage', this.msg)
    },
    load: function () {
      this.msg = this.$store.getters['TestModule/getMessage']
      console.log('this tab msg is : ' + this.msg)
    }
  }
}
</script>
<style scoped>

</style>
