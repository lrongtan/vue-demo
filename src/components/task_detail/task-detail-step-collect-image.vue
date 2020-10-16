<template>
<div class="component">
  <div class="component-wrapper">
    <div class="image-item" @click="onDemoTap">
      <van-image :src="imgUrl" width="100%" height="100%" fit="contain"></van-image>
      <div class="img-tag">示例图</div>
    </div>
    <div class="upload-wrapper">
      <van-uploader class="van-uploader" v-model="upFiles" max-count="1" :disabled="!isDraw" multiple :after-read="uploaderAfterRead"></van-uploader>
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

  model: {
    prop: 'imageFiles',
    event: 'imageFilesChange'
  },
  props: {
    imgUrl: String,
    imageFiles: Array,
    isDraw: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      upFiles: this.imageFiles
    }
  },

  watch: {
    imageFiles: function(val){
      this.upFiles = val
    }
  },

  methods: {
    uploaderAfterRead(file) {
      this.$emit('imageFilesChange',this.upFiles)
    },
    onDemoTap(){
      ImagePreview({
        images: [this.imgUrl],
        startPosition: 0,
      });
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
