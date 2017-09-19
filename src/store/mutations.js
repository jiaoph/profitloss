import * as types from './types'
import getters from './getters'

const state = {
  timeval: '0'
}

const mutations = {
  [types.TIMECHANGE](state, arg) {
    state.timeval = arg;
  }
}

export default {
  state,
  mutations,
  getters
}