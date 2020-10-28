<template>
<div class="content">
  <div class="navigation-bar">
    <van-nav-bar title="绑定手机号" left-arrow
        @click-left="navigationBackTap"></van-nav-bar>
  </div>
  <div class="top-padding"></div>
  <!-- 账号输入框 -->
  <div class="input-wrapper" :class="{'input-wrapper-focus' : accountInputFocus}">
    <van-field v-model="accountInput" placeholder="请输入手机号" clearable @focus="accountFocus" @blur="accountBlur"></van-field>
  </div>
  <!-- 验证码输入框 -->
  <div class="input-wrapper" :class="{'input-wrapper-focus' : codeInputFocus}">
    <van-field v-model="codeInput" placeholder="请输入验证码" @focus="codeFocus" @blur="codeBlur">
      <template #button>
        <van-button size="small" type="primary" :disabled="sendCodeButtonDisabled" @click="sendCodeTap">{{codeButtonText}}</van-button>
      </template>
    </van-field>
  </div>
  <div class="login-btn">
    <van-button type="primary" block @click="loginTap">提交</van-button>
  </div>
</div>
</template>

<script>
import {
  NavBar,
  Button,
  Field
} from "vant"
import * as Regular from '@utils/regular'
import {
  constants
} from 'zlib';

export default {
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Field.name]: Field,
  },

  data() {
    return {
      accountInput: "",
      codeInput: "",
      sendCodeButtonDisabled: false,
      codeButtonText: "发送验证码",
      accountInputFocus: false,
      codeInputFocus: false,
      codeObj: null,
    }
  },

  methods: {
    navigationBackTap() {
      this.$router.back();
    },
    loginTap() {
      // this.$toast('点击了登录按钮')
      let result = Regular.phoneNumber(this.accountInput);
      if (!result) {
        this.$toast('请输入正确的手机号');
        return
      }
      if (this.codeInput.length <= 0) {
        this.$toast('请输入验证码');
        return
      }
      this.login();
    },

    login() {
      let _this = this;
      this.$toast.loading({
        message: "操作中..."
      });
      this.api.bindPhone({
        phone: this.accountInput,
        verifyCode: this.codeInput,
      }).then(res => {
        console.log("成功");
        console.log(res);
        _this.$toast.clear();
        _this.$router.back()
      }).catch(res => {
        console.log("失败");
        console.log(res);
      })
    },

    loginSuccess(token) {
      // this.$store.dispatch('setUserToken', token);
      // this.$router.back()
      // this.$router.replace({
      //   name: 'index'
      // });
    },

    sendCodeTap() {
      let result = Regular.phoneNumber(this.accountInput);
      let _this = this;
      if (!result) {
        this.$toast('请输入正确的手机号')
        return
      }
      this.$toast.loading({
        message: "正在发送验证码..."
      });
      this.api.sendCode({
        mobile: this.accountInput
      }).then(res => {
        console.log(res);
        _this.codeObj = res;
        _this.sendCodeSuccess();
        _this.$toast('验证码发送成功');
      }).catch(res => {
        console.log("错误");
        console.log(res);
      })
    },

    //发送验证码成功处理
    sendCodeSuccess() {
      this.countDown()
    },

    //倒计时
    countDown() {
      this.sendCodeButtonDisabled = true
      let _this = this
      let count = 60
      this.codeButtonText = count + "s后重发"
      let timerInterval = setInterval(function () {
        count -= 1
        _this.codeButtonText = count + "s后重发"
        if (count < 1) {
          clearInterval(timerInterval)
          _this.sendCodeButtonDisabled = false
          _this.codeButtonText = "发送验证码"
        }
      }, 1000)
    },

    accountFocus() {
      this.accountInputFocus = true
    },
    accountBlur() {
      this.accountInputFocus = false
    },
    codeFocus() {
      this.codeInputFocus = true
    },
    codeBlur() {
      this.codeInputFocus = false
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
}

.top-padding {
  padding-top: 50px;
}

.login-btn {
  padding: 15px;
}

.input-wrapper {
  margin: 15px;
}

.input-wrapper-focus {
  border: 1px solid $theme-color;
}
</style>
