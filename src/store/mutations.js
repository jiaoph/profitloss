import * as types from './types'
import getters from './getters'

const state = {
  timeval: '0',
  fzixnumber: ''
}

const mutations = {
  [types.TIMECHANGE](state, arg) {
    state.timeval = arg;
  },
  [types.FZIXNUMBER](state,arg) {
    state.fzixnumber = arg;
    sessionStorage.setItem('fzixnumber',arg);
  }
}

export default {
  state,
  mutations,
  getters
}
