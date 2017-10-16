import * as types from './types'

export default {
  timechange: ({ commit }, arg) => {
    commit(types.TIMECHANGE, arg)
  },
  fzixnumber: ({commit},arg) => {
    commit(types.FZIXNUMBER,arg)
  }
}