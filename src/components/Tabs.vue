<template>
  <div id="tabWrap">
    <div class="intab">
      <ul class="tab_head clearfix">
        <router-link to="/home/tabsOpeProfit" tag="li">
          <span>营业利润表</span>
        </router-link>
        <router-link to="/home/tabsCashFlow" tag="li">
          <span>现金流量表</span>
        </router-link>
        <router-link to="/home/jj" tag="li">
          <span>应收账款表</span>
        </router-link>
      </ul>
      <div class="tab_body">
        <transition name="fade">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabWrap',
  mounted() {

  }
}
</script>

<style scoped lang="less">
@import url('../assets/less/public.less');

.intab {
  width: 100%;
  >.tab_head {
    height: 40px;
    >li {
      float: left;
      height: 100%;
      padding: 10px 20px;
      .boxSizing();
      line-height: 20px;
      border: 1px solid #e8e8e8;
      cursor: pointer;
      >span {
        color: @textyellow;
      }
    }
    >li.router-link-active {
      background-color: #FCF1E5;
      border: 1px solid #F5C38B;
    }
    >li+li {
      border-left: 0;
    }
  }
  >.tab_body {
    margin-top: 10px;
    height: 370px;
    overflow: hidden;
  }
}

// 路由动画
.fade-enter-active, .fade-leave-active{
  transition: all 1s ease;
}

.fade-enter-active{
  opacity:1;
}
.fade-leave-active{
  opacity:1;
}

.fade-enter,.fade-leave{
  opacity:0;
}
</style>
