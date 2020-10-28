<template>
<div class="content">
  <keep-alive>
    <router-view class="content-wrapper"></router-view>
  </keep-alive>
  <div class="tabbar-wrapper" :style="tabbarStyle">
    <van-tabbar v-model="tabbarIndex" safe-area-inset-bottom ref="tabbar" active-color="#ffb100">
      <keep-alive>
        <van-tabbar-item icon="home-o" replace to='/index/home'>首页</van-tabbar-item>
      </keep-alive>
      <keep-alive>
        <van-tabbar-item icon="user-o" replace to='/index/mine'>我的</van-tabbar-item>
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

// import 

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
      },
    };
  },

  computed: {
    userToken: function () {
      return this.$store.getters.userToken;
    }
  },

  mounted() {
    let val = this.$refs.tabbar.$el.offsetHeight; //获取组件高度
    this.tabbarStyle.height = val + "px";
    console.log("这输出了啥")
    console.log(this.userToken.token)
    if ((this.userToken.token == null || this.userToken.token == undefined) && this.$store.getters.userId == "") {
      this.$router.replace({
        name: 'login'
      })

    }
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  // height: 100%;
}
</style>
