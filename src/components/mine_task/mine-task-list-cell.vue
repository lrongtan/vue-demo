
<template>
  <div class="component">
    <div class="component-wrapper">
      <div class="content-wrapper">
        <div class="img-left">
          <van-image :src="iconImageType"></van-image>
        </div>
        <div class="content-right">
          <div class="title-wrapper">
            <div class="title">{{title}}</div>
            <div class="money">
              佣￥<span>{{title}}</span>
            </div>
          </div>
          <div class="check-time-wrapper">
            审核时间: 24小时内审核
          </div>
          <div class="check-status-wrapper">
            审核状态
          </div>
        </div>
      </div>
      <div class="handle-bar">
        
      </div>
    </div>
  </div>
</template>

<script>
import { Image } from "vant";

var img1 = require("../../assets/images/icon_类型_纯关注.png");
var img2 = require("../../assets/images/icon_类型_纯转发.png");
var img3 = require("../../assets/images/icon_类型_电商相关.png");
var img4 = require("../../assets/images/icon_类型_开户投资.png");
var img5 = require("../../assets/images/icon_类型_其他.png");
var img6 = require("../../assets/images/icon_类型_认证绑卡.png");
var img7 = require("../../assets/images/icon_类型_下载注册.png");

export default {
  components: {
    [Image.name]: Image,
  },

  props: {
    title: {
      type: Number,
    },
    imageType: {
      type: Number,
      default: 1,
    },
  },

  computed: {
    iconImageType: function () {
      switch (this.imageType) {
        case 1:
          return img1;
      }
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


</style>