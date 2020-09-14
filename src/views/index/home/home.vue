<template>
<div class="content">
  <div class="navigation-bar">
    <van-nav-bar title="首页" ref="navbar"></van-nav-bar>
  </div>
  <div class="content-wrapper" :style="contentWrapperStyle">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多数据了" @load="onLoad">
        <div class="cell-wrapper" v-for="item in m_list" :key="item" @click="onCellWrapperTap(item)">
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
} from "vant"
import HomeListCell from '@/components/home/home-list-cell'

export default {
  components: {
    [NavBar.name]: NavBar,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    HomeListCell,
  },
  data() {
    return {
      refreshing: false,
      loading: false,
      finished: false,
      m_list: [],
      contentWrapperStyle: {
        marginTop: '0px',
        marginBottom: '0px',
      }
    }
  },

  mounted() {
    let navHeight = this.$refs.navbar.$el.offsetHeight
    this.contentWrapperStyle.marginTop = navHeight + 'px'
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
    },
    
    onCellWrapperTap(cellItem){
      console.log(cellItem)
      this.$router.push({name: 'task_detail'})
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

.navigation-bar{
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

.cell-wrapper {
  background: white;
  margin: 10px;
  border-radius: 5px
}
</style>
