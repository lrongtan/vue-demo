
<template>
<div class="component">
  <div class="component-wrapper">
    <div class="img-left">
      <van-image :src="iconImageType"></van-image>
    </div>
    <div class="content-right">
      <div class="title-wrapper">
        <div class="title">任务标题</div>
        <div class="money">佣￥<span>100</span></div>
      </div>
      <div class="tag-wrapper">
        <div class="tag">任务类型</div>
        <div class="tag tag-margin-left">平台应用</div>
        <div class="submit-time">1小时内提交</div>
      </div>
      <div class="amount-wrapper">
        <div class="task-id">悬赏ID: xxxxxxx</div>
        <div class="remaining"><span>10</span>/100</div>
        <div class="check-time">24小时内审核</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import {
  Image
} from "vant"

var img1 = require('../../assets/images/icon_类型_纯关注.png')
var img2 = require('../../assets/images/icon_类型_纯转发.png')
var img3 = require('../../assets/images/icon_类型_电商相关.png')
var img4 = require('../../assets/images/icon_类型_开户投资.png')
var img5 = require('../../assets/images/icon_类型_其他.png')
var img6 = require('../../assets/images/icon_类型_认证绑卡.png')
var img7 = require('../../assets/images/icon_类型_下载注册.png')


export default {
  components: {
    [Image.name]: Image
  },

  props: {
    imageType: {
      type: Number,
      default: 1,
    }
  },
  computed: {
    iconImageType: function () {
      switch (this.imageType) {
        case 1:
          return img1;
      }
    }
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