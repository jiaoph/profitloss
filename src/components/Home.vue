<template>
  <div id="contentWrap" class="content">
    <Crumbs></Crumbs>
    <div class="mainBusiness clearfix">
      <div class="tab fl clear">
        <Tabs></Tabs>
      </div>
      <div class="barChart fr"></div>
    </div>
  </div>
</template>

<script>
import Crumbs from './Crumbs.vue'
import Tabs from './Tabs.vue'

export default {
  name: 'contentWrap',
  components: {
    Crumbs,
    Tabs
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
    >.mainBusiness{
      width: 100%;
      padding-top: 16px;
      >.tab{
        width: 404px;
        padding-left: 40px;
      }
      >.barChart{
        width: 506px;
        height: 30px;
        background-color:red;
      }
    }
}
</style>

