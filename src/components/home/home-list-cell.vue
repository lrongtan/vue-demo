
<template>
  <div class="component">
    <div class="component-wrapper">
      <div class="img-left">
        <van-image></van-image>
      </div>
      <div class="content-right">
        <div class="title-wrapper">
          <div class="title">{{title}}</div>
          <div class="money">佣{{title}}元</div>
        </div>
        <div class="amount-wrapper">
          <div class="finished">{{title}}已赚</div>
          <div class="remaining">剩{{title}}个名额</div>
        </div>
        <div class="tag-wrapper">
          <div class="tag">任务类型</div>
          <div class="tag tag-margin-left">平台应用</div>
        </div>
        </div>  
    </div>
  </div>
</template>

<script>

import { Image } from "vant"

export default {
  components: {
    [Image.name]: Image
  },

  props:[
    'title'
  ]
}
</script>

<style lang="scss" scope>


.component-wrapper{
  @include flex_v_center;
  padding: 10px 0px;
}

.img-left{
  width: 50px;
  height: 50px;
  margin: 10px;
  background: red;
}

.content-right{
  flex: 1;
  text-align: left;
  padding-right: 15px;
  padding-left: 10px;
}

.title-wrapper{
  @include flex_v_center;
  height: 35px;
  .title{
    flex: 1;
    font-size: 15px;
  }
  .money{
    color: red;
    font-size: 15px;
  }
}

.amount-wrapper{
  @include flex_v_center;
  height: 35px;
  .finished{
    flex: 1;
    font-size: 15px;
    color: #aaa;
  }
  .remaining{
    font-size: 15px;
    color: #888;
  }
}

.tag-wrapper{
  @include flex_v_center;
  height: 25px;
  margin-bottom: 10px;
  .tag{
    padding: 10px;
    font-size: 13px;
    background: #ccc;
    text-align: center;
  }
  .tag-margin-left{
    margin-left: 10px;
  }
}





</style>