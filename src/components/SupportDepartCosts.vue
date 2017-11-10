<template>
  <div id="anchang" class="content">
    <Crumbs></Crumbs>
    <div class="clearfix"></div>
    <div class="title clearfix">
      <h3 class="fl">
        <span>支持部门成本</span>
        <span class="totalCount">
          <b>202088883</b>元</span>
      </h3>
      <div class="timeselect fr">
        <el-select v-model="value" @change="change" placeholder="请选择" class="resetSelect">
          <el-option v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
    </div>
    <div id="tableHead"
      onscroll="document.getElementById('tableBody').scrollLeft=this.scrollLeft"
      class="wrapper clearfix responsiveBox fixHead">
      <ul class="lie"
        v-for="(val,index) in initjson"
        :data-index="val.index"
        :key="index"
        :class="{specialborder:val.fcq === '1',expandWrap:val.index !== '0',expandWrap1:val.index === '2',expandWrap2:val.index === '3',expandWrap3:val.index === '4',expandWrap4:val.index === '5'}">
        <li class="thead" :title="val.gaugeOutfit">
          <span>{{val.gaugeOutfit}}</span>
          <span v-show="val.type === 1"
            @click.stop.prevent="handleExpand($event)"
            :data-statusnum="val.fcq"
            :data-order="index"
            :data-index='Number.parseInt(val.index)+1'
            :data-fzixnumber = "val.fzixnumber"
            title="点击展开/收缩"
            :class="{throwRight:val.fcq === '0',throwLeft:val.fcq === '1'}">
          </span>
        </li>
      </ul>
    </div>
    <div id="tableBody"
      onscroll="document.getElementById('tableHead').scrollLeft=this.scrollLeft"
      class="wrapper clearfix responsiveBox">
      <ul class="lie"
        v-for="(val,index) in initjson"
        :data-index="val.index"
        :key="index"
        :class="{specialborder:val.fcq === '1',expandWrap:val.index !== '0',expandWrap1:val.index === '2',expandWrap2:val.index === '3',expandWrap3:val.index === '4',expandWrap4:val.index === '5'}">
        <!-- <li class="thead" :title="val.gaugeOutfit">
          <span>{{val.gaugeOutfit}}</span>
          <span v-show="val.type === 1"
            @click.stop.prevent="handleExpand($event)"
            :data-statusnum="val.fcq"
            :data-order="index"
            :data-index='Number.parseInt(val.index)+1'
            :data-fzixnumber = "val.fzixnumber"
            title="点击展开/收缩"
            :class="{throwRight:val.fcq === '0',throwLeft:val.fcq === '1'}">
          </span>
        </li> -->
        <li :title="val.depart0">
          <span>{{val.depart0}}</span>
        </li>
        <li :title="val.depart1">
          <span>{{val.depart1 | formateMoney}}</span>
        </li>
        <li :title="val.depart2">
          <span>{{val.depart2 | formateMoney}}</span>
        </li>
        <li :title="val.depart3">
          <span>{{val.depart3 | formateMoney}}</span>
        </li>
        <li :title="val.depart4">
          <span>{{val.depart4 | formateMoney}}</span>
        </li>
        <li :title="val.depart5">
          <span>{{val.depart5 | formateMoney}}</span>
        </li>
        <li :title="val.depart6">
          <span>{{val.depart6 | formateMoney}}</span>
        </li>
        <li :title="val.depart7">
          <span>{{val.depart7 | formateMoney}}</span>
        </li>
        <li :title="val.depart8">
          <span>{{val.depart8 | formateMoney}}</span>
        </li>
        <li :title="val.depart9">
          <span>{{val.depart9 | formateMoney}}</span>
        </li>
        <li :title="val.depart10">
          <span>{{val.depart10 | formateMoney}}</span>
        </li>
        <li :title="val.depart11">
          <span>{{val.depart11 | formateMoney}}</span>
        </li>
        <li :title="val.depart12">
          <span>{{val.depart12 | formateMoney}}</span>
        </li>
        <li :title="val.depart13">
          <span>{{val.depart13 | formateMoney}}</span>
        </li>
        <li :title="val.depart14">
          <span>{{val.depart14 | formateMoney}}</span>
        </li>
        <li :title="val.depart15">
          <span>{{val.depart15 | formateMoney}}</span>
        </li>
        <li :title="val.depart16">
          <span>{{val.depart16 | formateMoney}}</span>
        </li>
        <li :title="val.depart17">
          <span>{{val.depart17 | formateMoney}}</span>
        </li>
        <li :title="val.depart18">
          <span>{{val.depart18 | formateMoney}}</span>
        </li>
        <li :title="val.depart19">
          <span>{{val.depart19 | formateMoney}}</span>
        </li>
        <li :title="val.depart20">
          <span>{{val.depart20 | formateMoney}}</span>
        </li>
        <li :title="val.depart21">
          <span>{{val.depart21 | formateMoney}}</span>
        </li>
        <li :title="val.depart22">
          <span>{{val.depart22 | formateMoney}}</span>
        </li>
        <li :title="val.depart23">
          <span>{{val.depart23 | formateMoney}}</span>
        </li>
        <li :title="val.depart24">
          <span>{{val.depart24 | formateMoney}}</span>
        </li>
        <li class="foot" :title="val | getCount | formateMoney">
          <!--<span>{{val.sum}}</span>-->
          <span>{{val | getCount | formateMoney}}</span>
        </li>
      </ul>
      <div class="tips" v-show="initjson.length === 0">暂无数据</div>
    </div>
  </div>
</template>

<script>
import Crumbs from './Crumbs'
import { mapGetters } from 'vuex'

export default {
  name: 'anchang',
  computed: mapGetters([
      'time_val',
      'fzixnumber_id'
  ]),
  components: {
    Crumbs
  },
  data() {
    return {
      options: [{
        value: '0',
        label: '全部'
      }, {
        value: '1',
        label: '上月'
      }, {
        value: '2',
        label: '本月'
      }, {
        value: '3',
        label: '本年'
      }],
      value: '0', // 默认时间维度
      flag: true, // 首次加载flag
      deleteIndexArr: [],
      initjson: [], // 表格首次获取数据
      regularjson: [], // 点击加载的数据
      fzixnumber: '' // 费用id
    }
  },
  methods: {
    change(val){
      this.regularjson = [];
      this.initjson = [];
      this.flag = true;
      // this.timeval = val;
      this.asyncGetData('0', '0', val, this.fzixnumber, '0');
    },
    asyncGetData(){ // 异步获取this.regularjson
      const _this = this;
      if(arguments.length !== 5) {
        _this.$message({
          showClose: true,
          message: '支持部门成本参数错误',
          type: 'error'
        });
        return;
      }

      return new Promise((resolve,reject) => {
        _this.$http.post('/efangfin/outgoing/twoLevelCost.do',{
          xtype: arguments[0],
          xname: arguments[1],
          xtime: arguments[2],
          xnumber: arguments[3],
          index: arguments[4]
        }).then(data => {
          console.log(data);
          let myData = data.data;
          if (JSON.stringify(myData)) {
            let status = myData.status;
            switch (status) {
              case 1:
                let inData = myData.data;

                if(_this.flag){ // 首次加载
                  if (inData.length) {
                    _this.initjson = inData;
                  } else {
                    _this.initjson = [];
                    _this.$message({
                      showClose: true,
                      message: '支持部门成本数据获取为空',
                      type: 'warning'
                    });
                  }
                  _this.flag = false;
                }else{ // 以后加载
                  if(inData.length){
                    _this.regularjson = inData;
                  } else{
                    _this.regularjson = [];
                  }
                  resolve(_this.regularjson);
                }

                break;
              case 0:
                _this.$message({
                  showClose: true,
                  message: '支持部门成本数据获取错误',
                  type: 'error'
                });
                break;
              default:
                _this.$message({
                  showClose: true,
                  message: '支持部门成本异常status',
                  type: 'error'
                });
                break;
            }
          } else {
            _this.$message({
              showClose: true,
              message: '支持部门成本暂无数据',
              type: 'warning'
            });
            return;
          }
        }).catch(error => {
          _this.$message({
            showClose: true,
            duration: 2000,
            message: '支持部门成本数据获取异常',
            type: 'error'
          });
          console.log(error);
        })
      })
    },
    handleExpand(e) { // 展开、关闭操作
      const _this = this;
      let that =  e.currentTarget;

      let status = that.getAttribute('data-statusnum'), // 关闭、展开状态，0关闭状态可展开，1展开状态可关闭
        order = Number.parseInt(that.getAttribute('data-order')) + 1, // 点击时获取到的数组的order,插入到initjson用
        order_flag = Number.parseInt(that.getAttribute('data-order')), // 获取点击顺序
        out_index = ''; // 点击时获取到的层级

      switch (status) {
        case '0': // 展开添加数据
          let fzixnumber = that.getAttribute('data-fzixnumber'); // 点击时的费用id
          out_index = Number.parseInt(that.getAttribute('data-index'));
          _this.regularjson.length = 0; // 置空上一次加载的数据

          async function sleep(){ // async-await异步获取数据
            let result = await _this.asyncGetData('0', '0', _this.value, fzixnumber, out_index);
            return result;
          }

          sleep().then(regularjson => {
            // regularjson.shift(); //删除数组的首个元素，原因：首次表格已加载
            for (let i = 0, len = regularjson.length; i < len; i++) {
              _this.initjson.splice(order++, 0, regularjson[i]); // 往初始数组中添加新加载进来的数据
            }
          }).then(() => {
            _this.initjson[order_flag].fcq = '1'; // 将status设置为1
          }).catch(err => {
            console.log(err)
          })
          break;
        case '1': // 关闭表格操作
          let fzixnumberid = that.getAttribute('data-fzixnumber'); // 点击时的费用id
          _this.initjson.forEach((val, i) => {
            let new_fzixnumber = val.fzixnumber; // this.initjson数组内的费用id
            if(new_fzixnumber.includes(fzixnumberid)){ // ★★★费用id字符串对比，是否包含点击时的费用id
              _this.deleteIndexArr.push(i);
            }
          })

          let newArr = Array.prototype.slice.call(_this.deleteIndexArr),
            // maxNum = Math.max.apply(null,newArr),
            minNum = Math.min.apply(null, newArr); // 数组最小值

          _this.initjson.splice(minNum+1, newArr.length-1); // 初始数组删除元素
          _this.deleteIndexArr.length = 0; // 置空deleteIndexArr
          _this.initjson[order_flag].fcq = '0'; // 将status设置为0
          break;
        default:
          break;
      }
    }
  },
  mounted(){
    this.value = this.time_val;
    this.fzixnumber = this.fzixnumber_id;
    this.asyncGetData('0', '0', this.value, this.fzixnumber, '0');
  },
  deactivated(){
    this.$destroy(true)
  }
}
</script>

<style scoped lang="less">
.responsiveBox{  /*横向滚动*/
  white-space: nowrap;
  overflow: hidden;
  overflow-x: scroll;
  -webkit-backface-visibility: hidden;
  -webkit-overflow-scrolling: touch; /* 滚动touch */
}

.title {
  line-height: 70px;
  position: relative;
}

.title h3 {
  font-size: 20px;
  font-weight: normal;
}

.title h3 .totalCount {
  font-family: 'Helvetica';
  color: #EF9128;
  margin-left: 20px;
}

.title h3 .totalCount b {
  font-weight: normal;
}

.wrapper {
  min-height: 200px;
  max-height: 600px;
  width: 100%;
  overflow-y: scroll;
  font-size: 12px;
  // border-left: 1px solid #ddd;
  position: relative;
}

.fixHead {
  min-height: 0;
  overflow: hidden;
  margin-bottom: -3px;
  width: 98.5%;
}

.fixHead ul li {
  border-bottom: 1px solid #ddd;
}

.fixHead .expandWrap li.thead {
  border-bottom-color: #F5C38B;
}

.wrapper .tips{
  width: 150px;
  height: 50px;
  font-size: 20px;
  position: absolute;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}

.wrapper ul {
  display: inline-block;
  border-right: 1px solid #ddd;
}

.wrapper ul.specialborder {
  border-right-color: #F5C38B;
}

.wrapper ul:first-child {
  border-left: 1px solid #ddd;
}

.wrapper .expandWrap {
  background-color: #FCF1E5;
  border-right: 1px solid #F5C38B;
}

.wrapper .expand {
  background-color: #fff;
}

.lie li, {
  width: 84px;
  height: 54px;
  padding: 10px;
  line-height: 34px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.lie li.thead, {
  border-top: 1px solid #ddd;
  background-color: #f8f8f8;
  position: relative;
}

.expandWrap li.thead {
  border-top: 1px solid #F5C38B;
  background-color: #FCF1E5;
}

.lie li.foot {
  color: #43ADAA;
  border-bottom: 1px solid #ddd;
  background-color: #f8f8f8;
}

.expandWrap li.foot {
  border-bottom: 1px solid #F5C38B;
  background-color: #FCF1E5;
}

.loop(@num) when (@num < 5) {
  .expandWrap@{num} li.thead{
    background-color: lighten(#FCF1E5, @num*3%);
  }
  .expandWrap@{num} li.foot{
    background-color: lighten(#FCF1E5, @num*3%);
  }
  .wrapper .expandWrap@{num} {
    background-color: lighten(#FCF1E5, @num*3%);
  }
  .loop((@num+1));
}

.loop(0);

.lie li+li {
  border-top: 1px solid #ddd;
}

.expandWrap li+li {
  border-top: 1px solid #F5C38B;
}

.throwRight {
  cursor: pointer;
  border-top: 6px solid transparent;
  border-left: 8px solid #ED9128;
  border-bottom: 6px solid transparent;
  position: absolute;
  top: 50%;
  right: 2px;
  margin-top: -6px;
}

.throwLeft {
  cursor: pointer;
  border-top: 6px solid transparent;
  border-right: 8px solid #ED9128;
  border-bottom: 6px solid transparent;
  position: absolute;
  top: 50%;
  right: 2px;
  margin-top: -6px;
}
</style>

