export default {
  time_val(state) {
    let timeval = sessionStorage.getItem('timeval');
    if (timeval) {
      return timeval;
    } else {
      return state.timeval;
    }
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