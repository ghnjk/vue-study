const state = {
  msg: ''
}

const getters = {
  getMessage: (state, getters) => {
    console.log('get message: ' + state.msg)
    return state.msg
  }
}

const mutations = {
  setMessage: (state, msg) => {
    console.log('set message to: ' + msg)
    state.msg = msg
  }
}

const actions = {
  publishMessage: ({state, commit}, msg) => {
    console.log('publish action. msg is : ' + msg)
    commit('setMessage', msg)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
