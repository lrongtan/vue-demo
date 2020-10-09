
<template>
  <div class="component">
    <div class="component-wrapper">
      <div class="content-wrapper">
        <div class="img-left">
          <van-image :src="iconImageType"></van-image>
        </div>
        <div class="content-right">
          <div class="title-wrapper">
            <div class="title">{{taskOrder.taskTitle}}</div>
            <div class="money">
              佣￥<span>{{taskReward}}</span>
            </div>
          </div>
          <div class="check-time-wrapper">
            审核时间: {{auditTime}}内审核
          </div>
          <div class="check-status-wrapper">
            {{taskOrderStateText}}
          </div>
        </div>
      </div>
      <div class="handle-bar">
        <div class="bar-state" v-if="taskOrder.state == 1" @click.stop="onCancelTap">取消报名</div>
        <div class="bar-state" v-if="taskOrder.state == 4" @click.stop="onAlterTap">修改</div>
        <div class="bar-state-wrapper" v-if="taskOrder.state == 5">
          <div class="bar-state" @click.stop="onDeleteTap">删除记录</div>
          <div class="bar-line"></div>
          <div class="bar-state" @click.stop="onReApplyTap">重新报名</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Until from '../../utils/index';

import { Image } from "vant";

export default {
  components: {
    [Image.name]: Image,
  },

  props: {
    taskOrder: Object,
  },

  data() {
    return {
      taskTime: "",
      auditTime: "",
    }
  },

  computed: {
    iconImageType: function () {
      return Until.taskTypeToImage(this.taskOrder.taskType)
    },
    taskType: function(){
      return Until.taskTypeToText(this.taskOrder.taskType)
    },
    taskReward: function(){
      return Until.moneyFenToYuan(this.taskOrder.reward)
    },
    taskOrderStateText: function(){
      switch (this.taskOrder.state) {
        case 1:
          return "已报名"
          break;
        case 2:
          return "审核中"
          break;
        case 3:
          return "已完成"
          break;
        case 4:
          return "已拒绝"
          break;
        case 5:
          return "已失效"
          break;
        default:
          return ""
          break;
      }
    }
  },

  mounted() {
    // this.taskTime = Until.secondTodhms(this.taskOrder.taskDuration)
    // this.auditTime = Until.secondTodhms(this.taskOrder.auditDuration)
  },


  methods: {
    onCancelTap(){
      this.$emit('onCancelTap') 
    },

    onDeleteTap(){
      this.$emit('onDeleteTap') 
    },

    onReApplyTap(){
      this.$emit('onReApplyTap')
    },
    onAlterTap(){
      this.$emit('onAlterTap')
    },
  },
};
</script>


<style lang="scss" scoped>

.component-wrapper{
  @include flex_column;

}
.content-wrapper{
  @include flex_v_center;
  padding: 10px 0px;

}

.img-left {
  width: 50px;
  height: 50px;
  margin: 10px;
  align-self: flex-start;
}

.content-right {
  flex: 1;
  text-align: left;
  padding-right: 15px;
  padding-left: 10px;
}

.title-wrapper {
  @include flex_v_center;
  height: 35px;

  .title {
    flex: 1;
    font-size: 15px;
  }

  .money {
    color: $theme-color;
    font-size: 15px;

    span {
      font-size: 20px;
      font-weight: bold;
    }
  }
}

.check-time-wrapper{
  height: 25px;
  font-size: 13px;
  color: #777;
}

.check-status-wrapper{
  height: 25px;
  font-size: 13px;
  color: red;
}

.handle-bar{
  background: $background-color;
}

.bar-state{
  background: white;
  margin-top: 1px;
  color: $theme-color;
  font-size: 15px;
  padding: 15px;
  text-align: center;
  flex: 1;
}

.bar-state-wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .bar-line{
    width: 1px;
  }
}


</style>