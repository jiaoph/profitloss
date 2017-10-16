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
    <div class="wrapper clearfix responsiveBox">
      <ul class="lie" 
        v-for="(val,index) in initjson" 
        :data-index="val.index" 
        :key="index" 
        :class="{expandWrap:val.index !== '0',expandWrap1:val.index === '2',expandWrap2:val.index === '3',expandWrap3:val.index === '4',expandWrap4:val.index === '5'}">
        <li class="thead" :title="val.gaugeOutfit">
          <span>{{val.gaugeOutfit}}</span>
          <span v-show="val.type === 1" 
            @click.stop.prevent="handleExpand($event)" 
            :data-status="0" 
            :data-order="index" 
            :data-index='Number.parseInt(val.index)+1' 
            :data-fzixnumber = "val.fzixnumber"
            title="点击展开/收缩" 
            class="throw-right">
          </span>
        </li>
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
import { Message } from "element-ui";

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
      regularjson: [] // 点击加载的数据
    }
  },
  methods: {
    change(val){
      this.regularjson = [];
      this.initjson = [];
      this.flag = true;
      this.timeval = val;
      this.getData('0', '0', val, this.fzixnumber_id, '0');
    },
    getData(){
      if(arguments.length !== 5) {
        Message({
          showClose: true,
          message: '支持部门成本参数异常错误',
          type: 'error'
        });
        return;
      }
      this.$http.post('/efangfin/outgoing/twoLevelCost.do',{
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

              if(this.flag){ // 首次加载
                if (inData.length) {
                  this.initjson = inData;
                } else {
                  this.initjson = [];
                  Message({
                    showClose: true,
                    message: '支持部门成本数据获取为空',
                    type: 'warning'
                  });
                }
                this.flag = false;
              }else{ // 以后加载
                if(inData.length){
                  this.regularjson = inData;
                } else{
                  this.regularjson = [];
                }
              }
              
              break;
            case 0:
              Message({
                showClose: true,
                message: '支持部门成本数据获取错误',
                type: 'error'
              });
              break;
            default:
              Message({
                showClose: true,
                message: '支持部门成本异常status',
                type: 'error'
              });
              break;
          }
        } else {
          Message({
            showClose: true,
            message: '支持部门成本暂无数据',
            type: 'warning'
          });
          return;
        }
      }).catch(error => {
        Message({
          showClose: true,
          duration: 2000,
          message: '支持部门成本数据获取异常',
          type: 'error'
        });
        console.log(error);
      })
    },
    asyncFunction(){ // 异步获取this.regularjson
      return new Promise((resolve,reject) => {
        // setTimeout(() => {
        //   resolve(this.regularjson);
        // },1500)
        resolve(this.regularjson);
      })
    },
    removeClass(el, className) {
      el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    },
    handleExpand(e) {
      let status = e.currentTarget.getAttribute('data-status'), // 关闭展开状态
        order = Number.parseInt(e.currentTarget.getAttribute('data-order')) + 1, // 点击时获取到的数组的order,插入到initjson用
        out_index = ''; // 点击时获取到的层级

      switch (status) {
        case '0': // 该展开添加数据
          out_index = Number.parseInt(e.currentTarget.getAttribute('data-index'));
          // console.log('out_index-->'+out_index)

          // 发送请求加载数据
          let fzixnumber = e.currentTarget.getAttribute('data-fzixnumber'); //点击时的费用id
          this.getData('0', '0', this.value, fzixnumber, out_index);
          
          this.asyncFunction().then((regularjson) => {
            regularjson.shift(); //删除数组的首个元素，原因：首次表格已加载

            for (let i = 0, len = regularjson.length; i < len; i++) {
              this.initjson.splice(order++, 0, regularjson[i]);
            }
          }).then(() => {
            e.target.setAttribute('data-status', '1');
            this.removeClass(e.target, 'throw-right');
            e.target.className += ' ' + 'throw-left';
            e.target.parentNode.parentNode.className += ' ' + 'specialborder'; // 添加class
          }).catch(error => {
            console.log(error);
          })
          break;
        case '1': // 合并表格操作
          let fzixnumberid = e.currentTarget.getAttribute('data-fzixnumber'); // 点击时的费用id
          this.initjson.forEach((val, i) => {
            let new_fzixnumber = val.fzixnumber; // this.initjson数组内的费用id

            if(new_fzixnumber.includes(fzixnumberid)){ // ★★★费用id字符串对比
              this.deleteIndexArr.push(i);
            }
          })

          // let inner_index = Number.parseInt(e.currentTarget.getAttribute('data-index'));
          // // console.log('inner_index-->'+inner_index)
          // if (inner_index === out_index || inner_index > out_index) { // 关闭时的层级和外层的层级对比

          //   this.initjson.forEach((val, i, arr) => {
          //     let new_index = Number.parseInt(val.index);
              
          //     if (inner_index === new_index || inner_index < new_index) { // 关闭的层级和initjson数组元素的层级对比
          //       this.deleteIndexArr.push(i);
          //     }
          //   })

            let newArr = Array.prototype.slice.call(this.deleteIndexArr),
              // maxNum = Math.max.apply(null,newArr),
              minNum = Math.min.apply(null, newArr); // 数组最小值
            
            this.initjson.splice(minNum+1, newArr.length-1); // 初始数组删除元素
            this.deleteIndexArr = []; // 置空deleteIndexArr
            e.currentTarget.setAttribute('data-status', '0');
            this.removeClass(e.currentTarget, 'throw-left');
            e.currentTarget.className += ' ' + 'throw-right';
            this.removeClass(e.currentTarget.parentNode.parentNode, 'specialborder'); // removeclass
          // }
          break;
        default:
          break;
      }
    }
  },
  mounted(){
    this.value = this.time_val;
    console.log(this.fzixnumber_id)
    this.getData('0', '0', this.value, this.fzixnumber_id, '0');
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
  overflow-y: scroll;
  font-size: 12px;
  // border-left: 1px solid #ddd;
  position: relative;
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

.lie li {
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

.lie li.thead {
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

.throw-right {
  cursor: pointer;
  border-top: 6px solid transparent;
  border-left: 8px solid #ED9128;
  border-bottom: 6px solid transparent;
  position: absolute;
  top: 50%;
  right: 2px;
  margin-top: -6px;
}

.throw-left {
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

