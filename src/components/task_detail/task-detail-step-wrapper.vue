<template>
  <div class="component">
    <div class="component-wrapper">
      <div class="step-left-wrapper">
        <div class="step-up-line step-line" :class="{'step-line-none': currentIndex == 0}"></div>
        <div class="step-dot-view">{{currentIndex + 1}}</div>
        <div class="step-down-line step-line" :class="{'step-line-none': currentIndex == totalIndex-1}"></div>
      </div>
      <div class="step-content-wrapper">
        <div class="title">{{title}}</div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  
  props:{
    totalIndex: Number,
    currentIndex: Number,
    title: String,
  }
}
</script>


<style lang="scss" scoped>

.component-wrapper{
  display: flex;
}

.step-left-wrapper{
  @include flex_column;
  align-items: center;
  .step-line{
    width: 1px;
    // border-radius: 1px;
    background: $theme-color;
  }
  .step-line-none{
    width: 0px;
  }
  .step-dot-view{
    width: 22px;
    height: 22px;
    line-height: 22px;
    text-align: center;
    color: white;
    background: $theme-color;
    border-radius: 11px;
    font-size: 12px;
  }

  .step-up-line{
    height: 15px;
  }
  .step-down-line{
    flex: 1;
  }
}

.step-content-wrapper{
  flex: 1;
  margin-left: 15px;
  margin-right: 10px;
  .title{
    font-size: 15px;
    color: #999;
    padding: 20px 0px;
    min-height: 22px;
    text-align: left;
    // line-height: 52px;
  }
}

</style>