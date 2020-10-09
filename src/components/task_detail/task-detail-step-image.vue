<template>
<div class="component">
  <div class="component-wrapper" :style="componentWrapperStyle">
    <div class="img-item" v-for="(item, index) in imgs" :key="index" @click="imageItemTap(index)">
      <van-image :src="item" fit="contain" width="100%" height="100%"></van-image>
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

export default {
  components: {
    [Image.name]: Image,
    [ImagePreview.name]: ImagePreview,
  },
  props: {
    imgs: {
      type: Array,
      default(){
        return []
      }
    },
  },

  data() {
    return {
      
    }
  },

  computed: {
    componentWrapperStyle (){
      return {
        width: this.imgs.length * (150 + 10) + 10 + "px"
      }
    }
  },

  mounted() {
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
