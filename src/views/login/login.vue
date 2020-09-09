<template>
  <div class="content">
    <div class="navigation-bar">
      <van-nav-bar title="登录"></van-nav-bar>
    </div>

    <div class="login-btn">
      <van-button type="primary" block>登录</van-button>
    </div>
  </div>
</template>


<script>
import { NavBar, Button } from "vant"
export default {
  components:{
    [NavBar.name]: NavBar,
    [Button.name]: Button
  }
}
</script>

<style lang="scss" scoped>
.content{
  width: 100%;
  height: 100%;
}

.login-btn{
  padding: 15px;
}
</style>




