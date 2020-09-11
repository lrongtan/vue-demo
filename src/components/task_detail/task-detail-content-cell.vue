

<template>
  <div class="component">
    <div class="component-wrapper">
      <div class="component-header">
        <div class="v-line"></div>
        <div class="title">{{title}}</div>
      </div>
      <div class="component-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  props:{
    title:{
      type: String,
    }
  }
  
}
</script>


<style lang="scss" scoped>

.component-wrapper{
  padding: 10px;
}

.component-header{
  @include flex_v_center;
  height: 25px;
  .v-line{
    background: $theme-color;
    width: 4px;
    height: 13px;
    border-radius: 2px;
  }
  .title{
    font-size: 15px;
    font-weight: 500;
    margin-left: 10px;
  }

}
</style>