<template>
<div class="content">
  <div class="navigation-bar">
    <van-nav-bar title="绑定支付宝" ref="navbar" left-arrow @click-left="navigationBackTap"></van-nav-bar>
  </div>
  <div class="content-wrapper" :style="contentWrapperStyle">
    <div class="field-wrapper">
      <van-field v-model="accountInput" label="支付宝账号" placeholder="请输入支付宝账号"></van-field>
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
import {
  thistle
} from 'color-name';

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

      accountInput: "",
      usernameInput: "",
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
    onSubmitTap() {
      if (this.accountInput.length <= 0) {
        this.$toast("请输入支付宝账号")
        return
      }

      if (this.usernameInput.length <= 0) {
        this.$toast("请输入姓名")
        return
      }
      this.$toast.loading({
        message: "正在操作...",
      })
      let _this = this
      this.api.bindAlipay({
        alipayAccount: this.accountInput,
        alipayRealname: this.usernameInput
      }).then(res => {
        _this.$toast("绑定成功")
        _this.$router.back()
      }).catch(res => {

      })
    },
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
