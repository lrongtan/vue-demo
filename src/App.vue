<template>
<div id="app">
  <keep-alive>
    <!-- 需要缓存的视图组件 -->
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </keep-alive>
  <!-- 不需要缓存的视图组件 -->
  <router-view v-if="!$route.meta.keepAlive"></router-view>
</div>
</template>

<script>
import * as Util from "./utils/index.js";
export default {

  mounted() {
    let agentId = Util.getUrlKey("agentId")
    console.log(agentId)
    console.log("截取路径参数")
    let appId = Util.getUrlKey("appId")
    console.log(appId)
    if (agentId != null) {
      this.$store.dispatch('setAgentId', agentId);
    }
    if (appId != null) {
      this.$store.dispatch('setAppId', appId);
    }
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  background: $background-color;
}
</style>
