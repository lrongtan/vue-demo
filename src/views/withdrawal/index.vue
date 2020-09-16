<template>
<div class="content">
  <div class="navigation-bar">
    <van-nav-bar title="提现" ref="navbar" left-arrow @click-left="navigationBackTap"></van-nav-bar>
  </div>
  <div class="content-wrapper" :style="contentWrapperStyle">

    <div class="withdrawal-amount-wrapper">
      <withdrawal-amount total="100" blance="50"></withdrawal-amount>
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
      <div class="input-title">提现金额</div>
      <div class="input">
        <van-field class="input-field" v-model="fieldInput" type="number" clearable placeholder="请输入要提现的金额">
          <template #button>
            <van-button size="small" type="primary">全部</van-button>
          </template>
        </van-field>
      </div>
      <div class="input-tips">
        最多可提现xxx元
      </div>
      <div class="input-poundage">
        手续费1%
      </div>
      <div class="input-poundage-value">
        手续费0元
      </div>
      <div class="input-poundage-tips">
        提示:提现金额与手续费之和不能超过可提现余额
      </div>
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

export default {
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Field.name]: Field,
    [RadioGroup.name]: RadioGroup,
    [Radio.name]: Radio,
    WithdrawalAmount
  },

  data() {
    return {
      contentWrapperStyle: {
        marginTop: "0px",
        marginBottom: "0px",
      },
      withdrawalType: "1",
      fieldInput: "",
    }
  },

  mounted() {
    let navHeight = this.$refs.navbar.$el.offsetHeight
    // let toolHeight = this.$refs.toolbar.$el.offsetHeight
    // let toolHeight = this.$refs.toolbar.$el.offsetHeight;

    this.contentWrapperStyle.marginTop = navHeight + "px";
    // this.contentWrapperStyle.marginBottom = toolHeight + 20 + "px";
  },

  methods: {
    navigationBackTap() {
      this.$router.back()
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

.input-wrapper {
  font-size: 15px;
  padding: 15px;

  .input-title {
    height: 30px;
  }

  // .input-field{
  //   background: #ffffff;
  // }

  .input-tips {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .input-poundage {
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .input-poundage-value {
    margin-top: 15px;
    margin-bottom: 15px;
    color: red;
  }

}
</style>
