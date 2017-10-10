<template>
  <div class="msgWrap">
    </p>ERROR: <b>{{ msg }}</b></p>
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
    width: 200px;
    height: 200px;
    font-size: 30px;
    text-align: center;
    line-height: 200px;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }
</style>
