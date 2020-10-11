<template>
<div class="content">
  <div class="navigation-bar">
    <van-nav-bar title="个人中心" ref="navbar"></van-nav-bar>
  </div>
  <div class="content-wrapper" :style="contentWrapperStyle">
    <div class="header-wrapper">
      <div class="img-left">
        <van-image src="" width="60" height="60" round></van-image>
      </div>
      <div class="nickname">
        {{userInfo.name}}
      </div>
    </div>

    <div class="section-wrapper">
      <div class="cell-wrapper">
        <van-cell icon="cash-on-deliver" value="提现" is-link :to="{name: 'withdrawal'}" />
        <van-cell icon="records" value="收支明细" is-link :to="{name: 'balance_payment'}" />
        <van-cell icon="location-o" value="绑定支付宝" is-link :to="{name: 'bind_alipay'}" />
        <van-cell icon="location-o" value="绑定微信" is-link :to="{name: 'bind_wechat'}" />
      </div>
    </div>

    <div class="section-wrapper">
      <div class="cell-wrapper">
        <van-cell icon="location-o" value="我的任务" is-link :to="{name: 'mine_task'}" />
        <van-cell icon="service-o" value="我的客服" is-link :to="{name: 'mine_service'}" />
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

  data() {
    return {
      contentWrapperStyle: {
        marginTop: '0px',
        marginBottom: '0px',
      },
      userInfo: {

      }
    }
  },

  mounted() {
    let navHeight = this.$refs.navbar.$el.offsetHeight
    this.contentWrapperStyle.marginTop = navHeight + 'px'
    this.onGetUserInfo()
  },
  activated() {
    this.onGetUserInfo()
  },

  methods: {
    onMineTaskTap() {
      this.$router.push({
        name: 'mine_task'
      })
    },
    onGetUserInfo() {
      let _this = this
      this.api.userInfo().then(res => {
        _this.userInfo = res.data
      }).catch(res => {

      })
    }
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

.navigation-bar {
  z-index: 1000;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
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
