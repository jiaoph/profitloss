<template>
  <div id="headWrap" class="topWrap">
    <div class="top">
        <div class="logo">
            <a href="index.jsp">
                <img src="http://reimbursement.ehaofang.com/ddExpenses/finance/img/logo.png" alt="易好房楼盘开发" title="易好房楼盘开发" />
            </a>
        </div>
        <div class="mine">
            <div></div>
            <a href="http://sso.ehaofang.com/ehaofang-ssoweb/login/loginout.do">退出</a>
        </div>
        <ul class="nav">
            <li class="singleNav">首页</li>
            <li class="singleNav">项目经营</li>
            <li>
                项目开发 <i class="el-icon-caret-bottom caret"></i>
                <div class="project1">
                    <dl>
                        <p id="property">
                            <a href="http://loupan.ehaofang.com/ehaofang-pmweb/pages/index.jsp">开发楼盘</a>
                        </p>
                        <p id="land1">
                            <a href="http://loupan.ehaofang.com/ehaofang-pmweb/pages/land.jsp">土地拍卖</a>
                        </p>
                        <span></span>
                    </dl>
                </div>
            </li>
            <li>
                渠道 <i class="el-icon-caret-bottom caret"></i>
                <div>
                    <dl>
                        <p>
                            <a href="javascript:;">渠道公司</a>
                        </p>
                        <p>
                            <a href="javascript:;">门店</a>
                        </p>
                        <span></span>
                    </dl>
                </div>

            </li>
            <li class="singleNav">客户</li>
            <li>
                交易中心
                <i class="el-icon-caret-bottom caret"></i>
                <div>
                    <dl>
                        <p>
                            <a href="javascript:;">交易列表</a>
                        </p>
                        <p>
                            <a href="javascript:;">申佣列表</a>
                        </p>
                        <span></span>
                    </dl>
                </div>
            </li>
            <li class="navActive">
                财务中心
                <i class="el-icon-caret-bottom caret"></i>
                <div>
                    <dl>
                        <p id="financeCenter">
                            <a href="http://reimbursement.ehaofang.com/ddExpenses/finance/html/financeCenter.jsp">报销</a>
                        </p>
                        <p>
                            <a href="javascript:;">盈亏损益</a>
                        </p>
                        <span></span>
                    </dl>
                </div>
            </li>
            <li>
                组织架构
                <i class="el-icon-caret-bottom caret"></i>
                <div>
                    <dl>
                        <p>
                            <a href="javascript:;">员工中心</a>
                        </p>
                        <p>
                            <a href="javascript:;">部门管理</a>
                        </p>
                        <span></span>
                    </dl>
                </div>
            </li>
            <li class="singleNav">数据中心</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  name: "headWrap",
  methods: {

  }
};
</script>

<style scoped>
.topWrap {
  background: #333;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2000;
}
.top {
  height: 50px;
  width: 1200px;
  margin: 0 auto;
  background: #333;
}

.logo {
  height: 40px;
  width: 113px;
  margin-top: 5px;
  float: left;
}

.logo img {
  border: 0;
  height: 100%;
  width: 100%;
}

.nav {
  float: right;
  list-style: none;
  font-size: 16px;
}

.nav li {
  position: relative;
  list-style: none;
  color: #999;
  height: 46px;
  line-height: 48px;
  text-align: center;
  cursor: pointer;
  margin: 0 20px;
  float: left;
}

.nav .navActive {
  color: #fff;
  border-bottom: 2px solid #ed9127;
}
.nav li div {
  display: none;
  position: absolute;
  z-index: 999999;
  top: 48px;
  left: -30px;
  padding-top: 8px;
  width: 152px;
}
.nav li div dl {
  width: 150px;
  line-height: 36px;
  padding: 6px 0;
  font-size: 14px;
  text-align: left;
  border-radius: 2px;
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}

.nav li div p {
  height: 36px;
  padding-left: 10px;
  line-height: 36px;
  background: #fff;
  color: #333;
}

.nav li div .navItemActive {
  background: #ed9127;
}
.nav li div .navItemActive a {
  color: #fff;
}
.prokf div span {
  border-style: dashed dashed solid dashed;
  border-color: transparent transparent #ffffff transparent;
  border-width: 10px;
  width: 0;
  height: 0;
  overflow: hidden;
  position: absolute;
  top: -18px;
  left: 32px;
}

.mine {
  height: 50px;
  width: 64px;
  float: right;
}

.mine div {
  width: 30px;
  height: 30px;
  background: url("http://reimbursement.ehaofang.com/ddExpenses/finance/img/mine.png")
    no-repeat center center;
  background-size: contain;
  margin: 10px 10px 0 0;
  float: left;
}

.mine a {
  color: #ed9127;
  display: block;
  height: 50px;
  line-height: 50px;
  float: left;
  font-size: 12px;
}

@media screen and (max-width: 1200px) {
  #myframe {
    width: 1200px;
  }
  .top {
    width: 1143px;
    padding: 0 20px;
  }
}

.caret{
  font-size: 12px;
}
</style>
