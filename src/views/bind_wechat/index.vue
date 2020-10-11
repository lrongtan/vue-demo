<template>
<div class="content">
  <div class="navigation-bar">
    <van-nav-bar title="绑定微信" ref="navbar" left-arrow @click-left="navigationBackTap"></van-nav-bar>
  </div>
  <div class="content-wrapper" :style="contentWrapperStyle">
    <div class="content-header">
      <div class="val1">公众号名称:</div>
      <div class="val2">{{accountName}}</div>
      <div class="button-wrapper">
        <van-button class="btn-clipboard" type="primary" size="small" @click="copyDataTap">复制</van-button>
      </div>
    </div>
    <div class="content-text">
      前往微信,搜索{{accountName}}公众号,关注公众号获取二维码
    </div>
    <div class="field-wrapper">
      <van-field v-model="codeInput" label="验证码" placeholder="请输入从公众号获取的验证码"></van-field>
    </div>
    <div class="field-wrapper">
      <van-field v-model="usernameInput" label="真实姓名" placeholder="请输入真实姓名"></van-field>
    </div>
  </div>
  <div class="tool-bar" ref="toolbar">
    <van-button type="primary" block @click="onSubmitTap">提交</van-button>
  </div>
</div>
</template>

<script>
import {
  NavBar,
  Button,
  Field
} from "vant";
import Clipboard from "clipboard"

export default {

  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Field.name]: Field,
  },

  data() {
    return {
      contentWrapperStyle: {
        marginTop: "0px",
        marginBottom: "0px",
      },

      codeInput: "",
      usernameInput: "",
      accountName: "xxxxx公众号",
    }
  },

  mounted() {
    let navHeight = this.$refs.navbar.$el.offsetHeight
    let toolHeight = this.$refs.toolbar.offsetHeight
    this.contentWrapperStyle.marginTop = navHeight + "px";
    this.contentWrapperStyle.marginBottom = toolHeight + "px";
  },

  methods: {
    navigationBackTap() {
      this.$router.back()
    },

    copyDataTap() {
      let _this = this
      var clipboard = new Clipboard('.btn-clipboard', {
        text: function () {
          return _this.accountName
        }
      })
      clipboard.on('success', e => {
        console.log("================成功")
        _this.$toast("复制成功")
      })
      clipboard.on('error', e => {
        console.log("================失败")
        _this.$toast("复制失败")
      })
    },
    onSubmitTap() {
      if (this.codeInput.length <= 0) {
        this.$toast("请输入验证码")
        return
      }
      this.$toast.loading({
        message: "正在操作...",
      })
      let _this = this
      this.api.bindWechat({
        code: this.codeInput
      }).then(res => {
        _this.$toast("绑定成功")
        _this.$router.back()
      }).catch(res => {

      })
    }
  },

}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.navigation-bar {
  z-index: 1000;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
}

.content-wrapper {
  padding-top: 30px;
  flex: 1;
  @include scroll;
}

.content-header {
  @include flex_v_center;
  height: 50px;
  background: white;
  font-size: 15px;
  margin: 0px 10px;
  padding: 0px 15px;

  .val1 {
    color: black;
  }

  .val2 {
    color: $theme-color;
    margin-left: 10px;
  }

  .button-wrapper {
    margin-left: 15px;
  }
}

.content-text {
  font-size: 15px;
  margin: 15px;
  padding: 15px 0px;
}

.field-wrapper {
  margin: 10px;
}

.tool-bar {
  z-index: 1000;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 10px;
}
</style>
