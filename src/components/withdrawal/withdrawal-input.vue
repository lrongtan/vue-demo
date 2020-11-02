<template>
<div class="component">
  <div class="component-wrapper">
    <div class="input-title">提现金额</div>
    <div class="input">
      <van-field class="input-field" v-model="fieldInput" type="number" clearable placeholder="请输入要提现的金额" @input="inputValueChange">
        <template #button>
          <van-button size="small" type="primary" @click="allTap">全部</van-button>
        </template>
      </van-field>
    </div>
    <div class="input-tips">最多可提现{{cpuBlanceValue}}元</div>
    <div class="input-poundage">如果提现金额小于100元,固定手续费0.6元,如果大于100元,手续费按{{poundageVal*100}}%计算,</div>
    <div class="input-poundage-value">手续费{{serviceChargeValue}}元 到账{{actualAmountValue}}元</div>
    <div class="input-poundage-tips">提示:提现实际到账金额需要扣除手续费部分</div>
  </div>
</div>
</template>

<script>
import {
  Button,
  Field
} from "vant";
import {
  thistle
} from 'color-name';
export default {
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
  },

  model: {
    prop: 'inputValue',
    event: 'inputChange'
  },

  props: {
    blanceValue: [String, Number],
    inputValue: String
  },

  computed: {
    cpuBlanceValue: function () {
      if (this.blanceValue instanceof String) {
        let val = parseFloat(this.blanceValue)
        if (val != null) {
          return val
        } else {
          return 0
        }
      } else if (this.blanceValue instanceof Number) {
        return this.blanceValue
      }
      return this.blanceValue
    },
    serviceChargeValue: function(){
      if (this.fieldInput == "") {
        return 0
      }
      let val = parseFloat(this.fieldInput)
      if (val < 100) {
        return (100 * this.poundageVal).toFixed(2)
      }
      return (val * this.poundageVal).toFixed(2)
    },
    actualAmountValue: function(){
      if (this.fieldInput == "") {
        return 0
      }
      let val = parseFloat(this.fieldInput) - this.serviceChargeValue
      if (val < 0) {
        return 0
      }
      return val.toFixed(2)
    }

  },

  watch: {
    inputValue: function (val) {
      this.fieldInput = val
    }
  },

  data() {
    return {
      poundageVal: 0.006,
      fieldInput: this.inputValue,
    }
  },

  methods: {
    allTap() {
      this.fieldInput = this.cpuBlanceValue
    },
    inputValueChange(val) {
      let valF = parseFloat(this.fieldInput)
      if (valF == undefined || valF == null || Number.isNaN(valF)) {
        this.$emit('inputChange', "")
        return
      }
      if (valF > this.cpuBlanceValue) {
        this.$emit('inputChange', this.cpuBlanceValue + "")
        return
      }
      this.$emit('inputChange', val)
    }
  },
};
</script>

<style lang="scss" scoped>
.component-wrapper {
  font-size: 15px;
  padding: 15px;
}

.input-title {
  height: 30px;
}

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
</style>
