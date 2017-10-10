<template>
  <div class="msgWrap">
    <div class="inMsgWrap">
      </p>ERROR: <b>{{ msg }}</b></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: '404'
    }
  }
}
</script>

<style scoped>
  .msgWrap{
    width: 100%;
    /*height: 100%;*/
    /*position: relative;*/
  }
  .inMsgWrap{
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
</style>
