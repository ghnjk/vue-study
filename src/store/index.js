import Vue from 'vue'
import Vuex from 'vuex'
import TestModule from './modules/test_module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    TestModule
  }
})
