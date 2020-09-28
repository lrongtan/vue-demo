
<template>
  <div class="component">
    <div class="component-wrapper">
      <div class="button-wrapper" v-if="toolType == 0">
        <van-button type="primary" block @click="onDrawTap">领取任务</van-button>
      </div>
      <div class="button-wrapper" v-if="toolType == 1">
        <van-button type="primary" block @click="onSubmitTap">提交</van-button>
      </div>
      <div class="button-wrapper" v-if="toolType == 4">
        <van-button type="primary" block @click="onReSubmitTap">重新提交</van-button>
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
    },
    onSubmitTap(){
        this.$emit('onSubmitTap')
    },
    onReSubmitTap(){
        this.$emit('onReSubmitTap')
    },
  },
}
</script>

<style lang="scss" scoped>

</style>