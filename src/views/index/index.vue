<template>
<div class="content">
  <keep-alive>
    <router-view class="content-wrapper"></router-view>
  </keep-alive>
  <div class="tabbar-wrapper" :style="tabbarStyle">
    <van-tabbar v-model="tabbarIndex" safe-area-inset-bottom ref="tabbar">
      <keep-alive>
        <van-tabbar-item icon="home-o" replace to='/index/home'>首页</van-tabbar-item>
      </keep-alive>
      <keep-alive>
        <van-tabbar-item icon="friends-o" replace to='/index/mine'>个人中心</van-tabbar-item>
      </keep-alive>
    </van-tabbar>
  </div>
</div>
</template>

<script>
import {
  Tabbar,
  TabbarItem
} from "vant";

export default {
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  },

  data() {
    return {
      tabbarIndex: 0,
      tabbarStyle: {
        height: "0px"
      }
    };
  },

  mounted() {
    let val = this.$refs.tabbar.$el.offsetHeight; //获取组件高度
    this.tabbarStyle.height = val + "px";
    console.log("tabbar的高度");
    console.log(val);
  },

  methods: {}
};
</script>

<style lang="scss">
.content {
  width: 100%;
  height: 100%;
}
</style>
