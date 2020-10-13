
<template>
  <div class="component">
    <div class="component-wrapper">
      <div class="data-wrapper">
        {{ copyData }}
      </div>
      <div class="button-wrapper">
        <van-button
          class="btn-clipboard"
          type="primary"
          size="small"
          block
          plain
          @click="copyDataTap"
          >点击复制</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";

import Clipboard from "clipboard";

export default {
  components: {
    [Button.name]: Button,
  },

  props: {
    copyData: String,
    isDraw: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    copyDataTap() {
      console.log("执行了吗");
      let _this = this;
      var clipboard = new Clipboard(".btn-clipboard", {
        text: function () {
          return _this.copyData;
        },
      });
      clipboard.on("success", (e) => {
        if (this.isDraw === false) {
          _this.$toast("请先领取任务");
          return;
        } else {
          _this.$toast("复制成功");
        }
      });
      clipboard.on("error", (e) => {
        _this.$toast("复制失败");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.data-wrapper {
  margin: 10px 0px;
  text-align: left;
  font-size: 13px;
  color: #999;
}
</style>