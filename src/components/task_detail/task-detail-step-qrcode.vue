<template>
<div class="component">
  <div class="component-wrapper">
    <div class="image-item" @click="imageItemTap">
      <van-image :src="imgUrl" height="200px" width="100%"></van-image>
    </div>
    <div class="desc">请保存图片,到微信使用识别二维码图片功能</div>
  </div>
</div>
</template>

<script>
import {
  Image,
  ImagePreview
} from "vant";

var img1 = require("../../assets/images/icon_类型_纯关注.png");

export default {
  components: {
    [Image.name]: Image,
    [ImagePreview.name]: ImagePreview,
  },

  props:{
    imgUrl: String,
  },

  methods: {
    imageItemTap() {
      ImagePreview({
        images: [this.imgUrl],
      });
    },
  },
}
</script>

<style lang="scss" scoped>
.component-wrapper {
  width: 100%;
}

.image-item {
  height: 200px;
  background: gray;
}

.desc {
  font-size: 12px;
  color: #888;
  margin-top: 10px
}
</style>
