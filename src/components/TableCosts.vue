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
            <td class="clearfix">
              <div class="circle fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">案场费用</span>
            </td>
            <td>
              <span>1234545</span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>项目运营成本</p>
              <span>8%</span>
            </td>
            <td class="clearfix">
              <div class="circle circle2 fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">联动费用</span>
            </td>
            <td>
              <span>1234545</span>
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
              <p>1234545</p>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>渠道成本</p>
              <span>2%</span>
            </td>
            <td class="clearfix">
              <div class="circle circle3 fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">渠道佣金</span>
            </td>
            <td>
              <span>2324</span>
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
              <p>1234545</p>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>区域成本</p>
              <span>8%</span>
            </td>
            <td class="clearfix">
              <div class="circle circle4 fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">开发费用</span>
            </td>
            <td>
              <span>1234545</span>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>区域成本</p>
              <span>8%</span>
            </td>
            <td class="clearfix">
              <div class="circle circle5 fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">管理费用</span>
            </td>
            <td>
              <span>1234545</span>
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
              <p>1234545</p>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>总部分摊</p>
              <span>8%</span>
            </td>
            <td class="clearfix pointer" @click.stop.prevent="handle_mangeCost">
              <div class="circle circle6 fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">管理费用</span>
            </td>
            <td>
              <span>1234545</span>
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
              <p>1234545</p>
            </td>
          </tr>
          <tr>
            <td align="center">
              <p>财务费用</p>
              <span>8%</span>
            </td>
            <td class="clearfix">
              <div class="circle circle7 fl">
                <div class="incircle">
                  <div class="circleSolid"></div>
                </div>
              </div>
              <span class="fl">财务费用</span>
            </td>
            <td>
              <span>1234545</span>
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
              <p>1234545</p>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td align="center">
              <span>总计</span>
            </td>
            <td colspan="2" align="center">
              <span>1234</span>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name:'tableICosts',
  methods:{
    handle_mangeCost(){
      this.$router.push({path:'/supportDepartCosts'});
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
  }
}
</script>

<style scoped lang="less">
@import url('../assets/less/public');

.public_circle(@color: #CAD879){
  height: 100%;
  width: 16px;
  position: relative;
  >.incircle{
    width: 16px;
    height: 16px;
    .borderRadius(50%);
    border: 1px solid @color;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -9px;
    >.circleSolid{
      width: 14px;
      height: 14px;
      background-color: @color;
      .borderRadius(50%);
      position: absolute;
      margin: auto;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
    }
  }
}

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
          max-width: 28px;
          >p{
            line-height: 18px;
          }
        }
        >td:nth-child(2){
          max-width: 50px;
          >span{
            margin-left: 10px;
          }
        }
      }
    }
    >tfoot{
      >tr{
        >td{
          font-size: 18px;
          font-weight: 700;
          color: #32A5A2;
          height: 50px;
          line-height: 50px;
          border: 1px solid #e6e6e6;
        }
        >td{
          font-weight: normal;
        }
      }
    }
  }
}

.pointer{
  cursor: pointer;
}

.circle{
  .public_circle(#9ECCE8);
}
.circle2{
  .public_circle(#489ED3);
}
.circle3{
  .public_circle(#6AB7CC);
}
.circle4{
  .public_circle(#32A5A2);
}
.circle5{
  .public_circle(#AAE5D9);
}
.circle6{
  .public_circle(#9DACD4);
}
.circle7{
  .public_circle(#5665C1);
}

</style>
