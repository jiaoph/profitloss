<template>
  <div id="opeProfit" class="opeProfit">
    <table>
      <thead>
        <tr>
          <th align="left">
            <span class="th">主营业收入</span>
          </th>
          <th align="left">
            <span>{{ mainOpeRev }}</span>
          </th>
          <th align="left">
            <span>8%</span>
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
          <td>{{ placeCommission }}</td>
          <td>3%</td>
        </tr>
        <tr>
          <td class="clearfix">
            <div class="circle_minus circle_equal fl">
              <div class="incircle">
                <b>=</b>
              </div>
            </div>
            <span class="fl">贡献利润</span>
          </td>
          <td>
            <span>432535</span>(
            <span>3.32%</span>)</td>
          <td>8%</td>
        </tr>
        <tr>
          <td class="clearfix">
            <div class="circle_minus fl">
              <div class="incircle">
                <span></span>
              </div>
            </div>
            <span class="fl lighten">运营成本</span>
          </td>
          <td>{{ operateCosts }}</td>
          <td>2%</td>
        </tr>
        <tr>
          <td class="clearfix">
            <div class="circle_minus circle_equal fl">
              <div class="incircle">
                <b>=</b>
              </div>
            </div>
            <span class="fl">毛利</span>
          </td>
          <td>
            <span>432535</span>(
            <span>3.32%</span>)</td>
          <td>8%</td>
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
          <td>{{ hqMannageCount }}</td>
          <td>1%</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td class="clearfix">
            <div class="circle_minus circle_equal circle_equal_special fl">
              <div class="incircle">
                <b>=</b>
              </div>
            </div>
            <span class="th fl">营业利润</span>
          </td>
          <td>&nbsp;&nbsp;
            <span>849295</span>
          </td>
          <td>
            <span>2%</span>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { Event } from '../assets/eventBus'

export default {
  name: 'opeProfit',
  data() {
    return {
      mainOpeRev: 0, // 主营业收入
      placeCommission: 0, // 渠道佣金
      operateCosts: 0, // 运营成本
      hqMannageCount: 0 // 分摊
    } 
  },
  mounted() {
    const async = () => {
      return new Promise((resolve,reject) => {
        Event.$on('homejson', data => {
          resolve(data);
        })
      })
    }

    async().then(arr => {
      this.mainOpeRev = arr[4].money + arr[5].money + arr[1].money + arr[2].money + arr[3].money - arr[12].money;
      this.placeCommission = arr[8].money;
      this.operateCosts = arr[6].money + arr[7].money;
      this.hqMannageCount = arr[0].money;
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style scoped lang="less">
@import url('../assets/less/public.less');

.opeProfit{
  height: 100%;
}
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
