<template>
  <div class="content">
    <div class="nav-row">
      <div class="row-left">llll</div>
      <div class="row-middle">标题</div>
      <div class="row-right">滚蛋</div>
    </div>
    <van-button type="primary" block @click="btnTap">主要按钮</van-button>
    <span class="iconfont icon-listing-content"></span>
  </div>
</template>

<script>

import { Button } from "vant";
export default {

  name: "demo",

  mixins: [],

  components: {
    [Button.name]: Button,
  },

  props: {},

  data() {},

  computed: {},

  watch: {},

  created() {},

  mounted() {},

  destroyed() {},

  methods: {
      // 按钮点击
      btnTap(){
          this.$toast("按钮点击事件")
      }
  },
};
</script>

<style lang="scss">
.content {
  background: #eeeeee;
}
.nav-row {
  background: $theme-color;
  height: 44px;
  @include flex_center;
  .row-middle {
    flex: 1;
  }
}
</style>
