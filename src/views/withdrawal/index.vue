<template>
  <div class="content">
    <div class="navigation-bar">
      <van-nav-bar title="提现" ref="navbar" left-arrow @click-left="navigationBackTap"></van-nav-bar>
    </div>
    <div class="content-wrapper" :style="contentWrapperStyle">

    </div>
  </div>
</template>
<script>

import { NavBar, Button, Field } from "vant";

export default {
  components: {
    [NavBar.name]: NavBar,
    [Button.name]: Button,
    [Field.name]: Field,
  },

  data() {
    return {
      contentWrapperStyle: {
        marginTop: "0px",
        marginBottom: "0px",
      },
    }
  },

  mounted() {
    let navHeight = this.$refs.navbar.$el.offsetHeight
    // let toolHeight = this.$refs.toolbar.$el.offsetHeight
    // let toolHeight = this.$refs.toolbar.$el.offsetHeight;

    this.contentWrapperStyle.marginTop = navHeight + "px";
    // this.contentWrapperStyle.marginBottom = toolHeight + 20 + "px";
  },

  methods: {
    navigationBackTap(){
      this.$router.back()
    },
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

</style>