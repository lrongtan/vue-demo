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
