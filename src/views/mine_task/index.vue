<template>
  <div class="content">
    <div class="navigation-bar">
      <van-nav-bar title="个人中心" ref="navbar" left-arrow @click-left="navigationBackTap"></van-nav-bar>
    </div>
    <div class="content-wrapper" :style="contentWrapperStyle">
      <van-tabs v-model="active" color="#ffb100" :sticky="true" :offset-top="contentWrapperStyle.marginTop" title-active-color="#ffb100">
        <van-tab title="未提交">
          <mine-task-list :task-type="0"></mine-task-list>
        </van-tab>
        <van-tab title="审核中">
          <mine-task-list :task-type="1"></mine-task-list>
        </van-tab>
        <van-tab title="已审核">
          <mine-task-list :task-type="2"></mine-task-list>
        </van-tab>
        <van-tab title="未通过">
          <mine-task-list :task-type="3"></mine-task-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>


<script>
import { Tab, Tabs, NavBar } from "vant";
import MineTaskList from '@/components/mine_task/mine-task-list'

export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [NavBar.name]: NavBar,
    MineTaskList,
  },

  data() {
    return {
      contentWrapperStyle: {
        marginTop: "0px",
        marginBottom: "0px",
      },
      active: 0,
    };
  },
  mounted() {
    let navHeight = this.$refs.navbar.$el.offsetHeight;
    this.contentWrapperStyle.marginTop = navHeight + "px";
  },

  methods: {
    navigationBackTap(){
      this.$router.back()
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


</style>