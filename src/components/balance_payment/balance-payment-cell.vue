<template>
  <div class="component">
    <div class="component-wrapper">
      <div class="title-wrapper">
        <div class="title">xxxxxxxxxxxxxxx</div>
        <div class="money">+<span>10</span>元</div>
      </div>
      <div class="time-wrapper">
        2020-11-11 13:11:11
      </div>
      <div class="status">
        提现状态
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.component-wrapper{
  padding: 15px;
}
.title-wrapper{
  display: flex;
  .title{
    flex: 1;
  }
  .money{
    margin-left: 10px;
    font-size: 12px;
    color: $theme-color;
    span{
      font-size: 16px;
    }
  }
}

.time-wrapper{
  margin-top: 15px;
  font-size: 13px;
  color: #888;
}

.status{
  margin-top: 15px;
  font-size: 13px;
  color: red;
}

</style>