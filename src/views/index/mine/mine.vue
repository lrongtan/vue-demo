<template>
<div class="content">
  <div class="navigation-bar">
    <van-nav-bar title="个人中心"></van-nav-bar>
  </div>
  <div class="content-wrapper">
    <div class="header-wrapper">
      <div class="img-left">
        <van-image src="" width="60" height="60" round></van-image>
      </div>
      <div class="nickname">
        游客101
      </div>
    </div>

    <div class="section-wrapper">
      <div class="cell-wrapper">
        <van-cell icon="cash-on-deliver" value="提现" is-link />
        <van-cell icon="records" value="收支明细" is-link />
        <van-cell icon="location-o" value="绑定支付宝" is-link />
        <van-cell icon="location-o" value="绑定微信" is-link />
      </div>
    </div>

    <div class="section-wrapper">
      <div class="cell-wrapper">
        <van-cell icon="location-o" value="我的任务" is-link />
        <van-cell icon="service-o" value="我的客服" is-link />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  NavBar,
  Cell,
  Image
} from "vant"

export default {

  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [Image.name]: Image,
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

.content-wrapper {
  flex: 1;
  @include scroll;
}

.header-wrapper {
  margin-top: 15px;
  height: 150px;
  background: white;
  @include flex_v_center;

  .img-left {
    width: 60px;
    height: 60px;
    margin-left: 20px;
    align-self: center;
  }

  .nickname {
    flex: 1;
    font-size: 15px;
    margin-left: 10px;
    text-align: left;
  }
}

.section-wrapper {
  margin-top: 15px;
  align-content: flex-start;
}
</style>
