<template>
<div class="component">
  <div class="component-wrapper">
    <div class="img-left">
      <van-image :src="iconImageType"></van-image>
    </div>
    <div class="content-right">
      <div class="title-wrapper">
        <div class="title">{{taskItem.taskTitle}}</div>
        <div class="money">佣￥<span>{{taskReward}}</span></div>
      </div>
      <div class="tag-wrapper">
        <div class="tag">{{taskType}}</div>
        <div class="tag tag-margin-left">{{taskItem.channel}}</div>
      </div>
      <div class="amount-wrapper">
        <div class="finished">{{taskItem.finishCount}}已赚</div>
        <div class="remaining">剩<span>{{taskItem.surplusCount}}</span>个名额</div>
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
    taskItem: Object
  },

  data() {
    return {

    }
  },

  computed: {
    iconImageType: function () {
      return Until.taskTypeToImage(this.taskItem.taskType)
    },
    taskType: function(){
      return Until.taskTypeToText(this.taskItem.taskType)
    },
    taskReward: function(){
      return Until.taskTypeToText(this.taskItem.reward)
    }
  },
}
</script>

<style lang="scss" scoped>
.component-wrapper {
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

.amount-wrapper {
  @include flex_v_center;
  height: 35px;

  .finished {
    flex: 1;
    font-size: 15px;
    color: #aaa;
  }

  .remaining {
    font-size: 15px;
    color: #888;

    span {
      color: red
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
}
</style>
