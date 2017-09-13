<template>
  <div id="tabWrap">
    <div class="intab">
      <ul class="tab_head clearfix">
        <li>
          <span>营业利润表</span>
        </li>
        <li class="active">
          <span>现金流量表</span>
        </li>
        <li>
          <span>应收账款表</span>
        </li>
      </ul>
      <div class="tab_body">
        <table>
          <thead>
            <tr>
              <th align="left">主营业收入</th>
              <th align="left">182943.43</th>
              <th align="left">8%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>渠道佣金</td>
              <td>600021</td>
              <td>3%</td>
            </tr>
            <tr>
              <td>贡献利润</td>
              <td>
                <span>432535</span>(
                <span>3.32%</span>)</td>
              <td>8%</td>
            </tr>
            <tr>
              <td>运营成本</td>
              <td>39.23%</td>
              <td>2%</td>
            </tr>
            <tr>
              <td>毛利</td>
              <td>
                <span>432535</span>(
                <span>3.32%</span>)</td>
              <td>8%</td>
            </tr>
            <tr>
              <td>分摊</td>
              <td>849295</td>
              <td>1%</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td>营业利润</td>
              <td>849295</td>
              <td>2%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
    >li.active {
      background-color: #FCF1E5;
      border: 1px solid #F5C38B;
    }
    >li+li {
      border-left: 0;
    }
  }
  >.tab_body {
    margin-top: 10px;
    >table {
      width: 100%;
      >thead {
        >tr {
          line-height: 50px;
          >th {
            font-weight: normal;
            border-bottom: 1px dashed #d6d6d6;
          }
        }
      }
      >tbody {
        >tr {
          line-height: 50px;
          >td {
            border-bottom: 1px dashed #d6d6d6;
          }
        }
      }
      >tfoot{
        >tr{
          line-height: 50px;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
