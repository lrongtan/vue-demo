<template>
<div class="content">
  <div class="navigation-bar">
    <van-nav-bar title="提现" ref="navbar" left-arrow @click-left="navigationBackTap"></van-nav-bar>
  </div>
  <div class="content-wrapper" :style="contentWrapperStyle">

    <div class="withdrawal-amount-wrapper">
      <withdrawal-amount :total="revenue" :blance="balance"></withdrawal-amount>
    </div>

    <div class="payment-wrapper">
      <div class="payment-title">提现方式</div>
      <div class="check-box-wrapper">
        <van-radio-group v-model="withdrawalType" direction="horizontal">
          <van-radio name="2" :disabled="!isAlipay">支付宝</van-radio>
          <van-radio name="1" :disabled="!isWechat">微信</van-radio>
        </van-radio-group>
      </div>
    </div>

    <div class="input-wrapper">
      <withdrawal-input v-model="inputValue" :blanceValue="balance"></withdrawal-input>
    </div>

    <div class="tool-bar" ref="toolbar">
      <van-button type="primary" block @click="withdrawalTap">提现</van-button>
    </div>
  </div>
</div>
</template>

<script>
import * as Util from '../../utils/index.js'
import {
  NavBar,
  Button,
  Field,
  RadioGroup,
  Radio
} from "vant";

import WithdrawalAmount from '@/components/withdrawal/withdrawal-amount'
import WithdrawalInput from '@/components/withdrawal/withdrawal-input'
import {
  thistle
} from 'color-name';

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
      withdrawalType: "0",
      inputValue: "",
      withdrawalObject: {
        revenue: 0,
        balance: 0,
      },
    }
  },

  computed: {
    revenue() {
      return Util.moneyFenToYuan(this.withdrawalObject.revenue)
    },
    balance() {
      return Util.moneyFenToYuan(this.withdrawalObject.balance)
    },

    isAlipay() {
      if (this.withdrawalObject.alipay == null) {
        return false
      }
      return true
    },
    isWechat() {
      if (this.withdrawalObject.wxpay == null) {
        return false
      }
      return true
    }
  },

  mounted() {
    let navHeight = this.$refs.navbar.$el.offsetHeight
    let toolHeight = this.$refs.toolbar.offsetHeight
    this.contentWrapperStyle.marginTop = navHeight + "px";
    this.contentWrapperStyle.marginBottom = toolHeight + "px";
    this.onGetUserInfo()
  },

  methods: {
    navigationBackTap() {
      this.$router.back()
    },

    withdrawalTap() {
      if (this.withdrawalType == "0") {
        this.$toast("请选择提现方式")
        return
      }
      // if (this.inputValue.length <= 0) {
      //   this.$toast("请输入提现金额")
      //   return
      // }

      let val = parseFloat(this.inputValue)

      if (val == undefined || val == null || Number.isNaN(val)) {
        this.$toast("请输入正确格式的金额")
        return
      }

      this.api.withdrawarRecordAdd({
        amount: val * 100,
        poundage: val * 100 * 0.01,
        type: this.withdrawalType
      }).then(res => {

      }).catch(res => {

      })
    },
    onGetUserInfo() {
      let _this = this
      this.api.userInfo().then(res => {
        _this.withdrawalObject = res.data
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

.tool-bar {
  z-index: 1000;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 10px;
}
</style>
