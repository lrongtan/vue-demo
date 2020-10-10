<template>
  <div class="component">
    <div class="component-wrapper">
      <van-field ref="inputField" class="field-wrapper" v-model="value" :placeholder="placeholder" @input="inputValueChange" @focus="onFocus"></van-field>
    </div>
  </div>
</template>


<script>

import {
  Field
} from "vant";

export default {
  components:{
    [Field.name]: Field
  },

  model:{
    prop: 'inputValue',
    event: 'inputChange'
  },
  props:{
    placeholder: String,
    inputValue: String,
    isDraw: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      value: this.inputValue,
    }
  },

  watch: {
    inputValue: function(val){
      this.value = val
    }
  },

  methods: {
    inputValueChange(val){
      this.$emit('inputChange',val)
    },
    onFocus(){
      if (this.isDraw == false) {
        this.$refs.inputField.blur()
        this.$toast("请先领取任务")
      }
    }
  },
}
</script>

<style lang="scss" scoped>

.field-wrapper{
  background: #efefef;
  border-radius: 10px;
}

</style>