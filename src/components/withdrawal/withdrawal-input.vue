
<template>
  <div class="component">
    <div class="component-wrapper">
      <div class="input-title">提现金额</div>
      <div class="input">
        <van-field
          class="input-field"
          v-model="fieldInput"
          type="number"
          clearable
          placeholder="请输入要提现的金额"
          @input="inputValueChange"
        >
          <template #button>
            <van-button size="small" type="primary" @click="allTap">全部</van-button>
          </template>
        </van-field>
      </div>
      <div class="input-tips">最多可提现{{cpuBlanceValue - (cpuBlanceValue * poundageVal)}}元</div>
      <div class="input-poundage">手续费1%</div>
      <div class="input-poundage-value">手续费{{cpuBlanceValue * poundageVal}}元</div>
      <div class="input-poundage-tips">提示:提现金额与手续费之和不能超过可提现余额</div>
    </div>
  </div>
</template>


<script>
import { Button, Field } from "vant";
export default {
  components: {
    [Button.name]: Button,
    [Field.name]: Field,
  },

  model:{
    prop: 'inputValue',
    event: 'inputChange'
  },

  props: {
    blanceValue: [String, Number],
    inputValue: String
  },

  computed: {
    cpuBlanceValue: function(){
      if (this.blanceValue instanceof String) {
        let val = parseFloat(this.blanceValue)
        if (val != null) {
          return val
        }else{
          return 0
        }
      } else if (this.blanceValue instanceof Number) {
        return this.blanceValue
      }
      return this.blanceValue
    }
  },

  watch: {
    inputValue: function(val){
      this.fieldInput = val
    }
  },

  data() {
    return {
      poundageVal: 0.01,
      fieldInput: this.inputValue,
    }
  },

  methods: {
    allTap(){
      this.fieldInput = this.cpuBlanceValue * (1-this.poundageVal)
    },
    inputValueChange(val){
      this.$emit('inputChange',val)
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