<template>
<div class="content">
  <div class="navigation-bar">
    <van-nav-bar title="首页"></van-nav-bar>
  </div>
  <div class="content-wrapper">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多数据了" @load="onLoad">
        <div class="cell-wrapper" v-for="item in m_list" :key="item">
          <home-list-cell :title="item"></home-list-cell>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</div>
</template>

<script>
import {
  NavBar,
  List,
  PullRefresh,
  Image
} from "vant"
import HomeListCell from '@/components/home/home-list-cell'

export default {
  components: {
    [NavBar.name]: NavBar,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    [Image.name]: Image,
    HomeListCell,
  },
  data() {
    return {
      refreshing: false,
      loading: false,
      finished: false,
      m_list: [],
    }
  },

  methods: {
    onRefresh() {

      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad()
    },
    onLoad() {
      let _this = this
      setTimeout(function () {
        if (_this.refreshing) {
          _this.finished = false
          _this.m_list = []
          _this.refreshing = false
        }
        for (let i = 0; i < 10; i++) {
          _this.m_list.push(_this.m_list.length + 1)
        }
        if (_this.m_list.length > 40) {
          _this.finished = true
        }
        _this.loading = false
      }, 2000)
    }
  },
}
</script>

<style lang="scss">
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.content-wrapper {
  flex: 1;
  @include scroll;
  // margin-bottom: 40px;
}

.cell-wrapper {
  background: white;
  margin: 10px;
  border-radius: 5px
}
</style>
