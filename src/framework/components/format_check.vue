<template>
  <div>
    <input_rt @add="add_requestType" ></input_rt>
    <el-input
      type="textarea"
      :rows="10"
      placeholder="请输入内容，通过换行符分隔"
      v-model="textarea"
      autofocus=true
      :disabled="disabled"
    >
    </el-input>
    <el-button type="primary" icon="el-icon-check" @click="Post" :loading="loading" class="button-style">提交</el-button>
    <el-button type="danger" icon="el-icon-edit" @click="changeDisabled"  class="button-style" v-show="isSeen">{{text?'人工修改':'返回'}}</el-button>
    <div class="json-display">
      <pre>{{result_json}}</pre>
    </div>
  </div>
</template>

<script>
  import input_request_type from './input_request_type'
  export default {
    name: 'format_check',
    components: {
      input_rt: input_request_type,
    },
    data () {
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
    },
    created () {
      if (this.$store.state.data['DismissedConf'] !== '') {
        this.textarea = this.$store.state.data['DismissedConf']
        this.isSeen = true
      }
      if (this.$store.state.data['reqId'] !== '') {
        this.reqId = this.$store.state.data['reqId']
      }
    },
    methods: {
      changeDisabled () {
        if (this.disabled == true) {
          alert(this.alertMessage)
          this.disabled = !this.disabled
          this.text = !this.text
        } else {
          this.disabled = !this.disabled
          this.text = !this.text
        }
      },
      Post () {
        this.loading = true
        if (this.textarea == '') {
          this.loading = false
          this.$notify.error({
            title: '错误',
            message: '提交的request_type不可为空',
            duration: 3000
          })
        } else {
          this.message = '重复性校验中'
          this.$message(this.message)
          this.$axios({
            url: 'http://127.0.0.1:8000/op_conf/',
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            data: JSON.stringify({
              'new_conf': this.textarea
            })
          }).then(return_data => {
            this.code = return_data.data['code']
            if (this.code !== 0) {
              this.loading = false
              this.result_json = return_data.data
            } else {
              this.message = '格式校验中'
              this.$message(this.message)
              this.$axios({
                url: 'http://127.0.0.1:8000/format/',
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                data: JSON.stringify({
                  'request_type': this.textarea,
                  'user': this.user,
                  'reqid': this.reqId
                })
              }).then(return_data => {
                this.code = return_data.data['code']
                if (this.code !== 0) {
                  this.loading = false
                  this.result_json = return_data.data
                } else {
                  this.textarea = ''
                  this.isSeen = false
                  this.result_json = '校验全部通过' + ' ' + '审批单单号:' + return_data.data['data']['reqId']
                  this.$store.dispatch('changeReqId', '')
                  this.$store.dispatch('changeDismissedConf', '')
                  this.reqId = ''
                  this.loading = false
                }
              })
            }
          })
        }
      },
      add_requestType (newList, user) {
        if (this.textarea == '') {
          this.textarea += newList + '\n'
          this.user = user
          this.lastUser = this.user
          this.isSeen = true
        } else if (user !== this.lastUser) {
          this.$message.error('与上一次申请人不一致，上一次申请人为:' + this.lastUser)
        } else {
          this.textarea += newList + '\n'
          this.user = user
          this.lastUser = this.user
          this.isSeen = true
        }
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

