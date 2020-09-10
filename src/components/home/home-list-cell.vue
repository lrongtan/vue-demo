<template>
<div class="component">
  <div class="component-wrapper">
    <div class="img-left">
      <van-image :src="iconImageType"></van-image>
    </div>
    <div class="content-right">
      <div class="title-wrapper">
        <div class="title">{{title}}</div>
        <div class="money">佣{{title}}元</div>
      </div>
      <div class="tag-wrapper">
        <div class="tag">任务类型</div>
        <div class="tag tag-margin-left">平台应用</div>
      </div>
      <div class="amount-wrapper">
        <div class="finished">{{title}}已赚</div>
        <div class="remaining">剩{{title}}个名额</div>
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
    title: {
      type: Number,
    },
    imageType: {
      type: Number,
      default: 1,
    }
  },

  data() {
    return {

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

  mounted() {
    this.imageType1 = require('../../assets/images/icon_类型_下载注册.png')
  },
}
</script>

<style lang="scss">
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
    color: red;
    font-size: 15px;
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
  }
}

.tag-wrapper {
  @include flex_v_center;
  height: 20px;
  margin: 10px 0px;

  .tag {
    padding: 5px 10px;
    font-size: 13px;
    background: #ccc;
    text-align: center;
    align-self: center;
  }

  .tag-margin-left {
    margin-left: 10px;
  }
}
</style>
