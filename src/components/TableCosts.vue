<template>
  <div id="tableICosts" class="tableIncome">
    <div class="tableWrap">
      <table id="datatableCosts">
        <tbody>
          <tr>
            <td align="center">
              <p>项目运营成本</p>
              <span>8%</span>
            </td>
            <td class="clearfix pointer">
              <div class="circle fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">案场费用</span>
            </td>
            <td>
              <span>{{ acCount }}</span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>项目运营成本</p>
              <span>8%</span>
            </td>
            <td class="clearfix pointer">
              <div class="circle circle2 fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">联动费用</span>
            </td>
            <td>
              <span>{{ ldCount }}</span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>项目运营成本</p>
              <span>8%</span>
            </td>
            <td>
              <span>总计</span>
            </td>
            <td class="textWaring">
              <p>{{ acCount + ldCount }}</p>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>渠道成本</p>
              <span>2%</span>
            </td>
            <td class="clearfix pointer">
              <div class="circle circle3 fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">渠道佣金</span>
            </td>
            <td>
              <span>{{ placeCount }}</span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>渠道成本</p>
              <span>2%</span>
            </td>
            <td>
              <span>总计</span>
            </td>
            <td class="textWaring">
              <p>{{ placeCount }}</p>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>区域成本</p>
              <span>8%</span>
            </td>
            <td class="clearfix pointer">
              <div class="circle circle4 fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">开发费用</span>
            </td>
            <td>
              <span>{{ devCount }}</span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>区域成本</p>
              <span>8%</span>
            </td>
            <td class="clearfix pointer">
              <div class="circle circle5 fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">管理费用</span>
            </td>
            <td>
              <span>{{ areaManageCount }}</span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>区域成本</p>
              <span>8%</span>
            </td>
            <td>
              <span>总计</span>
            </td>
            <td class="textWaring">
              <p>{{ devCount + areaManageCount }}</p>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>总部分摊</p>
              <span>8%</span>
            </td>
            <td class="clearfix pointer" :data-fzixnumber="hqMannageCountID" @click.stop.prevent="handle_mangeCost($event)">
              <div class="circle circle6 fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">管理费用</span>
            </td>
            <td class="pointer" :data-fzixnumber="hqMannageCountID" @click.stop.prevent="handle_detailPage($event)">
              <span>{{ hqMannageCount }}</span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>总部分摊</p>
              <span>8%</span>
            </td>
            <td>
              <span>总计</span>
            </td>
            <td class="textWaring">
              <p>{{ hqMannageCount }}</p>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>财务费用</p>
              <span>8%</span>
            </td>
            <td class="clearfix pointer">
              <div class="circle circle7 fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">财务费用</span>
            </td>
            <td>
              <span>{{ financeCount }}</span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>财务费用</p>
              <span>8%</span>
            </td>
            <td>
              <span>总计</span>
            </td>
            <td class="textWaring">
              <p>{{ financeCount }}</p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td align="center">
              <span>总计</span>
            </td>
            <td colspan="2" align="center">
              <span>{{ acCount+ldCount+placeCount+devCount+areaManageCount+hqMannageCount+financeCount }}</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import { Event } from '../assets/eventBus'

export default {
  name: 'tableICosts',
  data() {
    return {
      acCount: 0, // 案场费用
      acCountID: '',
      ldCount: 0, // 联动费用
      ldCountID: '',
      placeCount: 0, // 渠道佣金
      placeCountID: '',
      devCount: 0, // 开发费用
      devCountID: '',
      areaManageCount: 0, // 管理费用(区域成本)
      areaManageCountID: '',
      hqMannageCount: 0, // 管理费用(总部分摊)
      hqMannageCountID: '',
      financeCount: 0, // 财务费用
      financeCountID: ''
    }
  },
  methods: {
    handle_mangeCost(e) {
      let fzixnumber = e.currentTarget.getAttribute('data-fzixnumber');

      if (!fzixnumber) {
        this.$message({
          // showClose: true,
          message: '详情id丢失，无法查看',
          type: 'error'
        });
        return false;
      }

      this.$store.dispatch('fzixnumber', fzixnumber); // id存入vuex
      this.$router.push({ path: '/supportDepartCosts' });
    },
    handle_detailPage(e) {
      let fzixnumber = e.currentTarget.getAttribute('data-fzixnumber');

      if (!fzixnumber) {
        this.$message({
          // showClose: true,
          message: '详情id丢失，无法查看',
          type: 'error'
        });
        return false;
      }

      this.$store.dispatch('fzixnumber', fzixnumber); // id存入vuex
      this.$router.push({ path: '/detailTable' });
    }
  },
  mounted() {
    ! function merge(tableId, col) { //自动合并相同单元格
      var tr = document.getElementById(tableId);
      for (var i = 1; i < tr.rows.length; i++) { //表示数据内容的第二行
        if (tr.rows[i].cells[col].innerHTML == tr.rows[i - 1].cells[col].innerHTML) { //col代表列
          var t = i - 1;
          while (tr.rows[i].cells[col].innerHTML == tr.rows[t].cells[col].innerHTML) {
            tr.rows[i].cells[col].style.display = "none";
            if (tr.rows[t].cells[col].rowSpan <= (i - t)) {
              tr.rows[t].cells[col].rowSpan += 1; //设置前一行的rowspan+1
            }
            i++;
          }
        }
      }
    }("datatableCosts", "0")

    const async = new Promise((resolve, reject) => { // 子组件异步获取主页数据
      Event.$on('homejson', data => {
        resolve(data);
      })
    })

    async.then(arr => {
      this.acCount = arr[6].money;
      this.ldCount = arr[7].money;
      this.placeCount = arr[8].money;
      this.devCount = arr[9].money;
      this.areaManageCount = arr[10].money;
      this.hqMannageCount = arr[0].money;
      this.hqMannageCountID = arr[0].fzixnumber;
      this.financeCount = arr[11].money;
    }).catch(err => {
      console.log(err);
    })
  }
}
</script>

<style scoped lang="less">
@import url('../assets/less/public');

.tableWrap {
  width: 626px;
  border: 1px solid #e6e6e6;
  >table {
    width: 100%;
    border-collapse: collapse;
    >tbody {
      >tr {
        >td {
          height: 40px;
          line-height: 40px;
          border: 1px solid #e6e6e6;
          padding-left: 16px;
          .boxSizing();
          position: relative;
        }
        >td:nth-child(1) {
          font-size: 16px;
          width: 138px;
          >p {
            line-height: 18px;
          }
        }
        >td:nth-child(2) {
          width: 186px;
          >span {
            margin-left: 10px;
          }
        }
        >td:nth-child(3) {
          width: 300px;
        }
      }
    }
    >tfoot {
      >tr {
        >td {
          font-size: 18px;
          font-weight: 700;
          color: #32A5A2;
          height: 50px;
          line-height: 50px;
          border: 1px solid #e6e6e6;
        }
        >td {
          font-weight: normal;
        }
      }
    }
  }
}

.pointer {
  cursor: pointer;
}

.circle {
  .public_circle(#9ECCE8);
}

.circle2 {
  .public_circle(#489ED3);
}

.circle3 {
  .public_circle(#6AB7CC);
}

.circle4 {
  .public_circle(#32A5A2);
}

.circle5 {
  .public_circle(#AAE5D9);
}

.circle6 {
  .public_circle(#9DACD4);
}

.circle7 {
  .public_circle(#5665C1);
}
</style>
