export default {
  time_val(state) {
     return state.timeval;
  },
  fzixnumber_id(state) {
    let fzixnumber = sessionStorage.getItem('fzixnumber');
    if (fzixnumber) {
      return fzixnumber;
    } else {
      return state.fzixnumber;
    }
  }
}