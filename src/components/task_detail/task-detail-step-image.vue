<template>
<div class="component">
  <div class="component-wrapper" :style="componentWrapperStyle">
    <div class="img-item" v-for="(item, index) in imgs" :key="index" @click="imageItemTap(index)">
      <van-image :src="item"></van-image>
      <div class="img-tag" v-if="index == 0">说明图</div>
    </div>
  </div>
</div>
</template>

<script>
import {
  Image,
  ImagePreview
} from "vant";

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
    [ImagePreview.name]: ImagePreview,
  },
  props: {
    imgs: {
      type: Array,
      default: function () {
        return [img1, img2, img3];
      },
    },
  },

  data() {
    return {
      componentWrapperStyle: {
        width: "285px"
      }
    }
  },

  mounted() {
    this.componentWrapperStyle.width = this.imgs.length * (150 + 10) + 10 + "px"
  },
  methods: {
    imageItemTap(index) {
      ImagePreview({
        images: this.imgs,
        startPosition: index,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.component {
  @include scroll-x;
  width: 285px;
}

.component-wrapper {
  height: 200px;
  display: flex;
}

.img-item {
  width: 150px;
  margin-right: 10px;
  position: relative;
  background: gray;
}

.img-tag {
  position: absolute;
  left: 0px;
  top: 0px;
  font-size: 12px;
  color: white;
  padding: 5px 10px;
  background: $theme-color;
  z-index: 1000;
  // background: $theme-color;
}
</style>
