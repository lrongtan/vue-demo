<template>
<div class="component">
  <div class="component-wrapper">
    <div class="image-item">
      <van-image :src="imgUrl" width="100%" height="100%" fit="contain"></van-image>
      <div class="img-tag">示例图</div>
    </div>
    <div class="upload-wrapper">
      <van-uploader class="van-uploader" v-model="upFiles" max-count="5" multiple :after-read="uploaderAfterRead"></van-uploader>
    </div>
  </div>
</div>
</template>

<script>
import {
  Image,
  ImagePreview,
  Uploader
} from "vant";

export default {

  components: {
    [Image.name]: Image,
    [ImagePreview.name]: ImagePreview,
    [Uploader.name]: Uploader
  },

  props: {
    imgUrl: String
  },

  data() {
    return {
      upFiles: []
    }
  },

  methods: {
    uploaderAfterRead(file) {
      console.log("执行吗")
      console.log(this.upFiles)
      
    }
  },

}
</script>

<style lang="scss" scoped>
.component-wrapper {
  width: 100%;
  display: flex;
}

.image-item {
  width: 100px;
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
  // z-index: 1000;
  // background: $theme-color;
}

.upload-wrapper {
  flex: 1;
}

.van-uploader {}
</style>
