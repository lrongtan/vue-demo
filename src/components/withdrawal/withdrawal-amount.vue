<template>
<div class="component">
  <div class="component-wrapper">
    <div class="item-wrapper">
      <div class="title">总收入</div>
      <div class="value">{{total}}元</div>
    </div>
    <div class="item-wrapper">
      <div class="title">余额</div>
      <div class="value">{{blance}}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {

  props: {
    total: [String, Number],
    blance: [String, Number],
  }
}
</script>

<style lang="scss" scoped>
.component-wrapper {
  height: 100px;
  display: flex;
}

.item-wrapper {
  flex: 1;
  @include flex_column;
  justify-content: space-around;
  align-items: center;
  font-size: 15px;
}
</style>
