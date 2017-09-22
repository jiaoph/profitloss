<template>
  <div id="anchang">
    <div class="wrapper clearfix">
      <ul class="lie" 
        v-for="(val,index) in initjson" 
        :data-index="val.index" 
        :key="index"
        :class="{expandWrap:val.index !== '0'}">
        <li class="thead" :title="val.name">
          <span>{{val.name}}</span>
          <span v-show="val.expand" 
            @click.stop.prevent="handleExpand($event)" 
            :data-status="0" 
            :data-order="index" 
            :data-index='Number.parseInt(val.index)+1'
            title="点击展开/收缩" 
            class="throw-right">
          </span>
        </li>
        <li :title="val.zhaomu">
          <span>{{val.zhaomu}}</span>
        </li>
        <li :title="val.renshi">
          <span>{{val.renshi}}</span>
        </li>
        <li :title="val.zuzhi">
          <span>{{val.zuzhi}}</span>
        </li>
        <li :title="val.peixun">
          <span>{{val.peixun}}</span>
        </li>
        <li class="foot" :title="val.total">
          <span>{{val.total}}</span>
        </li>
      </ul>
      <ul class="lie expandWrap">

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'anchang',
  data() {
    return {
      flag: true, // 测试flag
      deleteIndexArr:[],
      initjson: [
        {
          name: '部门',
          zhaomu: '招募部',
          renshi: '人事部',
          zuzhi: '组织',
          peixun: '培训',
          total: '总计',
          expand: false,
          index: '0'
        },
        {
          name: '人力成本',
          zhaomu: '123',
          renshi: '22344',
          zuzhi: '99999999999999',
          peixun: '12',
          total: '24245',
          expand: true,
          index: '0'
        },
        {
          name: '财务',
          zhaomu: '123',
          renshi: '22344',
          zuzhi: '99999999999999',
          peixun: '12',
          total: '24245',
          expand: false,
          index: '0'
        }
      ],
      regularjson1: [
        {
          name: '工资',
          zhaomu: '123',
          renshi: '22344',
          zuzhi: '99999999999999',
          peixun: '12',
          total: '24245',
          expand: false,
          index: '1'
        },
        {
          name: '社保公积金',
          zhaomu: '123',
          renshi: '22344',
          zuzhi: '99999999999999',
          peixun: '12',
          total: '24245',
          expand: true,
          index: '1'
        },
        {
          name: '绩效',
          zhaomu: '123',
          renshi: '22344',
          zuzhi: '99999999999999',
          peixun: '12',
          total: '24245',
          expand: false,
          index: '1'
        },
      ],
      regularjson2: [
        {
          name: '奖金啊',
          zhaomu: '123',
          renshi: '22344',
          zuzhi: '99999999999999',
          peixun: '12',
          total: '24245',
          expand: false,
          index: '2'
        }
      ]
    }
  },
  methods: {
    handleExpand(e) {
      let status = e.currentTarget.getAttribute('data-status'), // 关闭展开状态
        order = Number.parseInt(e.currentTarget.getAttribute('data-order'))+1, // 点击时获取到的数组的order
        out_index = ''; // 点击时获取到的层级
        
      switch (status) {
        case '0': // 该展开添加数据
          e.currentTarget.setAttribute('data-status', '1');
          out_index = Number.parseInt(e.currentTarget.getAttribute('data-index')); 
          // console.log('out_index-->'+out_index)
          // 发送请求加载数据
          if(this.flag){
            this.flag = false;
            if(this.regularjson1.length){
              for(let i = 0,len = this.regularjson1.length; i < len; i++){
                this.initjson.splice(order++, 0, this.regularjson1[i]);
              }
            }
          }else{
            if(this.regularjson2.length){
              for(let i = 0,len = this.regularjson2.length; i < len; i++){
                this.initjson.splice(order++, 0, this.regularjson2[i]);
              }
            }
          }

          break;
        case '1': // 该合并
          e.currentTarget.setAttribute('data-status', '0');
          let inner_index = Number.parseInt(e.currentTarget.getAttribute('data-index'));
          // console.log('inner_index-->'+inner_index)
          if (inner_index === out_index || inner_index > out_index) { // 关闭时的层级和外层的层级对比
            this.initjson.forEach((val,i,arr) => {
              let new_index = Number.parseInt(val.index);

              if(inner_index === new_index || inner_index < new_index){ // 关闭的层级和initjson数组元素的层级对比
                this.deleteIndexArr.push(i);
              }
            })

            let newArr = Array.prototype.slice.call(this.deleteIndexArr),
              // maxNum = Math.max.apply(null,newArr),
              minNum = Math.min.apply(null,newArr); // 数组最小值

            this.initjson.splice(minNum,newArr.length); // 初始数组删除元素
            this.deleteIndexArr = []; // 置空deleteIndexArr
          }
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 100%;
  font-size: 12px;
  border: 1px solid #ddd;
}

.wrapper ul {
  float: left;
  border-right: 1px solid #ddd;
}

.wrapper .expandWrap {
  background-color: #FCF1E5;
}

.wrapper .expand {
  background-color: #fff;
}

.lie li {
  width: 80px;
  height: 54px;
  padding: 5px;
  line-height: 44px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.lie li.thead {
  background-color: #f8f8f8;
  position: relative;
}

.expandWrap li.thead{
  background-color: #FCF1E5;
}

.lie li.foot {
  background-color: #f8f8f8;
  color: #43ADAA;
}

.lie li+li {
  border-top: 1px solid #ddd;
}

.throw-right {
  cursor: pointer;
  border-top: 6px solid transparent;
  border-left: 8px solid #ED9128;
  border-bottom: 6px solid transparent;
  position: absolute;
  top: 50%;
  right: 5px;
  margin-top: -6px;
}

.throw-left {
  cursor: pointer;
  border-top: 6px solid transparent;
  border-right: 8px solid #ED9128;
  border-bottom: 6px solid transparent;
  position: absolute;
  top: 50%;
  right: 5px;
  margin-top: -6px;
}
</style>

