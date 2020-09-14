
<template>
  <div class="component">
    <div class="component-wrapper">
      <div class="button-wrapper" v-if="toolType == 1">
        <van-button type="primary" block @click="onDrawTap">领取任务</van-button>
      </div>
    </div>
  </div>
</template>

<script>

import {
  Button
} from "vant";

export default {

  components: {
    [Button.name]: Button,
  },
  
  props: {
    toolType:Number
  },


  methods: {
    onDrawTap(){
        this.$emit('onDrawTap')
    }
  },
}
</script>

<style lang="scss" scoped>

</style>