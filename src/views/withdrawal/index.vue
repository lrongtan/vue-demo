<template>
<div class="content">
  <div class="navigation-bar">
    <van-nav-bar title="提现" ref="navbar" left-arrow @click-left="navigationBackTap"></van-nav-bar>
  </div>
  <div class="content-wrapper" :style="contentWrapperStyle">

    <div class="withdrawal-amount-wrapper">
      <withdrawal-amount :total="withdrawalObject.total" :blance="withdrawalObject.blance"></withdrawal-amount>
    </div>

    <div class="payment-wrapper">
      <div class="payment-title">提现方式</div>
      <div class="check-box-wrapper">
        <van-radio-group v-model="withdrawalType" direction="horizontal">
          <van-radio name="1">支付宝</van-radio>
          <van-radio name="2">微信</van-radio>
        </van-radio-group>
      </div>
    </div>

    <div class="input-wrapper">
      <withdrawal-input v-model="inputValue" :blanceValue="withdrawalObject.blance"></withdrawal-input>
    </div>

    <div class="tool-bar" ref="toolbar">
      <van-button type="primary" block @click="withdrawalTap">提现</van-button>
    </div>
  </div>
</div>
</template>

<script>
import {
  NavBar,
  Button,
  Field,
  RadioGroup,
  Radio
} from "vant";

import WithdrawalAmount from '@/components/withdrawal/withdrawal-amount'
import WithdrawalInput from '@/components/withdrawal/withdrawal-input'

export default {
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Field.name]: Field,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    WithdrawalAmount,
    WithdrawalInput
  },

  data() {
    return {
      contentWrapperStyle: {
        marginTop: "0px",
        marginBottom: "0px",
      },
      withdrawalType: "1",
      inputValue: "",
      withdrawalObject: {
        total: 1000,
        blance: 100,
      }
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

    withdrawalTap(){
      this.inputValue = "9089"
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
  flex: 1;
  @include scroll;
}

.withdrawal-amount-wrapper {
  margin-top: 30px;
  background: white;
}

.payment-wrapper {
  font-size: 15px;
  margin-top: 20px;
  padding: 15px;
}

.check-box-wrapper {
  font-size: 13px;
  margin-top: 20px;
}

.tool-bar{
  z-index: 1000;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 10px;
}
</style>
