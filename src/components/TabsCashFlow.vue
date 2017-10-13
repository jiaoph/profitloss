<template>
  <div id="cashFlow">
    <table>
      <thead>
        <tr>
          <th align="left">
            <span class="th">现金收入</span>
          </th>
          <th align="left">
            <span>182943.43</span>
          </th>
          <th align="left">
            <span></span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="clearfix">
            <div class="circle_minus fl">
              <div class="incircle">
                <span></span>
              </div>
            </div>
            <span class="fl lighten">渠道佣金</span>
          </td>
          <td>600021</td>
          <td></td>
        </tr>
        <tr>
          <td class="clearfix">
            <div class="circle_minus fl">
              <div class="incircle">
                <span></span>
              </div>
            </div>
            <span class="fl lighten">项目运营</span>
          </td>
          <td>
            <span>432535</span>
          </td>
          <td></td>
        </tr>
        <tr>
          <td class="clearfix">
            <div class="circle_minus fl">
              <div class="incircle">
                <span></span>
              </div>
            </div>
            <span class="fl lighten">分摊</span>
          </td>
          <td>39.23</td>
          <td></td>
        </tr>
        <tr>
          <td class="clearfix">
            <div class="circle_minus fl">
              <div class="incircle">
                <span></span>
              </div>
            </div>
            <span class="fl lighten">提成计提</span>
          </td>
          <td>
            <span>432535</span>
          </td>
          <td></td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="clearfix">
            <span class="th fl">现金增加额</span>
          </td>
          <td>&nbsp;&nbsp;
            <span>849295</span>
          </td>
          <td>
            <span></span>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'cashFlow'
}
</script>

<style scoped lang="less">
@import url('../assets/less/public.less');

table {
  .th {
    padding-left: 22px;
  }
  width: 100%;
  >thead {
    >tr {
      height: 50px;
      line-height: 50px;
      >th {
        font-weight: normal;
        border-bottom: 1px dashed #d6d6d6;
      }
      >th+th {
        color: @textyellow;
      }
    }
  }
  >tbody {
    >tr {
      height: 50px;
      line-height: 50px;
      >td {
        height: 100%;
        border-bottom: 1px dashed #d6d6d6;
      }
      >td+td {
        color: @textyellow;
      }
      >td:nth-of-type(2) {
        min-width: 170px;
      }
      >td:nth-of-type(3) {
        min-width: 60px;
      }
    }
  }
  >tfoot {
    >tr {
      height: 50px;
      line-height: 50px;
      font-size: 18px;
      color: #35A7A4;
    }
  }
}

.lighten {
  color: lighten(#333333, 40%);
}

.circle_minus {
  height: 50px;
  position: relative;
  padding-right: 24px;
  >.incircle {
    width: 14px;
    height: 14px;
    border: 1px solid @textyellow;
    .borderRadius(50%);
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -7px;
    >span {
      display: block;
      width: 6px;
      border-top: 1px solid @textyellow;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -3px;
      margin-top: -1px;
    }
  }
}

.circle_equal {
  >.incircle {
    border: 1px solid #32A5A2;
    line-height: 12px;
    >b {
      color: #32A5A2;
      position: relative;
      left: 2px;
      top: 1px;
      font-weight: normal;
    }
  }
}

.circle_equal_special {
  top: -6px;
  >.incircle {
    width: 26px;
    height: 26px;
    line-height: 20px;
    >b {
      left: 7px;
      top: 1px;
    }
  }
}
</style>
