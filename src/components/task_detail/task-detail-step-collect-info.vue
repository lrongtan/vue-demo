<template>
  <div class="component">
    <div class="component-wrapper">
      <van-field class="field-wrapper" v-model="value" :placeholder="placeholder" @input="inputValueChange"></van-field>
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
  },

  data() {
    return {
      value: this.inputValue,
    }
  },

  methods: {
    inputValueChange(val){
      this.$emit('inputChange',val)
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