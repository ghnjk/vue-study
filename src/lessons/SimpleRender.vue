<template>
  <div>
    <el-input
      type="textarea"
      :rows="10"
      placeholder="请输入内容，通过换行符分隔"
      v-model="textarea"
      autofocus=true
      :disabled="disabled"
    >
    </el-input>
    <el-button type="primary" icon="el-icon-check" :loading="loading" class="button-style">提交</el-button>
    <el-button type="danger" icon="el-icon-edit" class="button-style" v-show="isSeen">{{text?'人工修改':'返回'}}</el-button>
    <div class="json-display">
      <pre>{{result_json}}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SimpleRender',
  data: function () {
    console.log('dfsfsfd')
    return {
      isSeen: false,
      textarea: '',
      timer: null,
      loading: false,
      result_json: '返回值',
      disabled: true,
      text: true,
      user: '',
      code: '',
      message: '',
      alertMessage: '人工修改，风险高，请谨慎操作',
      lastUser: '',
      reqId: ''
    }
  }
}
</script>

<style scoped>
  .json-display{
    margin-top: 20px;
  }
  .button-style{
    margin-top: 10px;
  }
</style>
