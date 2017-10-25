<template>
  <div id="headWrap" class="headWrap">
    <div class="inhead clearfix">
      <div class="logo fl">
        <img src="../assets/img/logo.png" alt="logo">
      </div>
      <ul class="nav fl">
        <li><a href="javascript:;">首页</a></li>
        <li><a href="javascript:;">项目经营</a></li>
        <li><a href="javascript:;">项目开发</a></li>
        <li><a href="javascript:;">渠道</a></li>
        <li><a href="javascript:;">客户</a></li>
        <li><a href="javascript:;">交易中心</a></li>
        <li class="active"><a href="javascript:;">财务中心</a></li>
        <li><a href="javascript:;">组织架构</a></li>
        <li><a href="javascript:;">数据中心</a></li>
      </ul>
      <div class="avatar fr">
        <div class="inavatar">
          <img src="../assets/img/avatar.png" alt="avatar">
          <a href="javascript:;">退出</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'headWrap'
}
</script>

<style scoped lang='less'>
@import url('../assets/less/public.less');
  .headWrap{
    width: 100%;
    height: 50px;
    background-color: #333;
    >.inhead{
      width: 1200px;
      min-width: 1200px;
      height: 100%;
      margin: 0 auto;
      >.logo{
        width: 114px;
        height: 100%;
        position: relative;
        >img{
          width: 100%;
          height: 40px;
          display: block;
          position: absolute;
          top: 50%;
          left: 0;
          margin-top: -20px;
        }
      }
      >.nav{
        height: 48px;
        margin-left: 130px;
        >li{
          float: left;
          height: 100%;
          padding: 0 20px;
          line-height: 50px;
          >a{
            color: #999;
            display: block;
            width: 100%;
            height: 100%;
            font-size: 16px;
          }
        }
        >li.active{
          border-bottom: 2px solid @textyellow;
          >a{
            color: #fff;
          }
        }
      }
      >.avatar{
        height: 100%;
        line-height: 50px;
        >.inavatar{
          >img{
            width: 30px;
            height: 30px;
            vertical-align: middle;
          }
          >a{
            color: @textyellow;
            padding-left: 10px;
          }
        }
      }
    }
  }
</style>
