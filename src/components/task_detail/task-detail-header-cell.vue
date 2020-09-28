
<template>
<div class="component">
  <div class="component-wrapper">
    <div class="img-left">
      <van-image :src="iconImageType"></van-image>
    </div>
    <div class="content-right">
      <div class="title-wrapper">
        <div class="title">{{taskDetail.taskTitle}}</div>
        <div class="money">佣￥<span>{{taskReward}}</span></div>
      </div>
      <div class="tag-wrapper">
        <div class="tag">{{taskType}}</div>
        <div class="tag tag-margin-left">{{taskDetail.channel}}</div>
        <div class="submit-time">{{taskTime}}内提交</div>
      </div>
      <div class="amount-wrapper">
        <div class="task-id">悬赏ID: {{taskDetail.id}}</div>
        <div class="remaining"><span>{{taskDetail.surplusCount}}</span>/{{taskDetail.taskCount}}</div>
        <div class="check-time">{{auditTime}}内审核</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import * as Until from '../../utils/index'

import {
  Image
} from "vant"

export default {
  components: {
    [Image.name]: Image
  },

  props: {
    taskDetail: Object
  },
  data() {
    return {
      taskTime: "",
      auditTime: "",
    }
  },
  computed: {
    iconImageType: function () {
      return Until.taskTypeToImage(this.taskDetail.taskType)
    },
    taskType: function(){
      return Until.taskTypeToText(this.taskDetail.taskType)
    },
    taskReward: function(){
      return Until.moneyFenToYuan(this.taskDetail.reward)
    }
  },

  mounted() {
    this.taskTime = Until.secondTodhms(this.taskDetail.taskDuration)
    this.auditTime = Until.secondTodhms(this.taskDetail.auditDuration)
  },

  updated() {
    this.taskTime = Until.secondTodhms(this.taskDetail.taskDuration)
    this.auditTime = Until.secondTodhms(this.taskDetail.auditDuration)
  },
  
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>

.component-wrapper {
  @include flex_v_center;
  padding: 10px;
}

.img-left {
  width: 50px;
  height: 50px;
  margin: 0px 10px;
  align-self: flex-start;
}

.content-right {
  flex: 1;
  text-align: left;
  padding-left: 10px;
}

.title-wrapper {
  @include flex_v_center;
  .title {
    flex: 1;
    font-size: 15px;
    margin-right: 10px;
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

.tag-wrapper {
  @include flex_v_center;
  margin: 10px 0px;

  .tag {
    padding: 5px 10px;
    font-size: 13px;
    background: #fefefe;
    border: 1px solid $theme-color;
    border-radius: 3px;
    text-align: center;
    align-self: center;
    color: $theme-color;
  }

  .tag-margin-left {
    margin-left: 10px;
  }

  .submit-time{
    flex: 1;
    text-align: right;
    font-size: 13px;
    color: #888;
  }
}

.amount-wrapper {
  @include flex_v_center;
  height: 25px;

  .task-id{
    font-size: 13px;
    color: #888;
  }
  .remaining {
    flex: 1;
    font-size: 13px;
    color: #888;
    text-align: center;
    span {
      color: red;
    }
  }
  .check-time{
    font-size: 13px;
    color: #888;
  }
}

</style>