<template>
  <div id="contentWrap" class="content">
    <Crumbs></Crumbs>
  </div>
</template>

<script>
import Crumbs from './Crumbs.vue'

export default {
  name: 'contentWrap',
  components: {
    Crumbs
  }
}
</script>


<style lang='less'>
@import url('../assets/less/public');
.content{
    width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    background-color: #fff;
    .boxSizing();
}
</style>

