
<template>
  <div class="content">
    <div class="navigation-bar">
      <van-nav-bar title="客服中心" ref="navbar" left-arrow @click-left="navigationBackTap"></van-nav-bar>
    </div>
    <div class="content-wrapper" :style="contentWrapperStyle">
      <div class="cell-wrapper">
        <van-cell icon="phone-o" title="联系电话" is-link value="15394401482" @click="phoneTap"/>
      </div>
      <div class="cell-wrapper">
        <van-cell icon="service-o" title="QQ" is-link value="844928336" @click="qqTap"/>
      </div>
    </div>
  </div>
</template>


<script>
import { NavBar, Cell, CellGroup } from "vant";

export default {
  components: {
    [NavBar.name]: NavBar,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },

  data() {
    return {
      contentWrapperStyle: {
        marginTop: "0px",
        marginBottom: "0px",
      },
    };
  },

  mounted() {
    let navHeight = this.$refs.navbar.$el.offsetHeight
    this.contentWrapperStyle.marginTop = navHeight + "px"
    var userAgentInfo = navigator.userAgent
    console.log(userAgentInfo)
  },

  methods: {
    navigationBackTap() {
      this.$router.back()
    },
    phoneTap(){
      window.location.href = "tel://15394401482"
    },
    qqTap(){
      let qq = "506583276"
      // window.location.href = "http://wpa.qq.com/msgrd?v=3&uin=&site=qq&menu=yes"
      window.location.href = "mqq://im/chat?chat_type=wpa&uin=" + qq + "&version=1&src_type=web"
    }
  },
};
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

.cell-wrapper{
  margin: 10px;
  text-align: left;
}
</style>