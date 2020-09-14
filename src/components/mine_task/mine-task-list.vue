
<template>
  <div class="component">
    <div class="component-wrapper">
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list v-model="loading" :finished="finished" finished-text="没有更多数据了" @load="onLoad">
          <div
            class="cell-wrapper"
            v-for="item in m_list"
            :key="item"
            @click="onCellWrapperTap(item)"
          >
          <mine-task-list-cell :title="item"></mine-task-list-cell>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { List, PullRefresh } from "vant";
import MineTaskListCell from "./mine-task-list-cell";
export default {
  components: {
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    MineTaskListCell,
  },

  props: {
    taskType: Number,
  },

  data() {
    return {
      refreshing: false,
      loading: false,
      finished: false,
      m_list: [],
    };
  },

  methods: {
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },

    onLoad() {
      let _this = this;
      setTimeout(function () {
        if (_this.refreshing) {
          _this.finished = false;
          _this.m_list = [];
          _this.refreshing = false;
        }
        for (let i = 0; i < 10; i++) {
          _this.m_list.push(_this.m_list.length + 1);
        }
        if (_this.m_list.length > 40) {
          _this.finished = true;
        }
        _this.loading = false;
      }, 2000);
    },

    onCellWrapperTap(cellItem) {
      console.log(cellItem);
      this.$router.push({ name: "task_detail" });
    },
  },
};
</script>

<style lang="scss" scoped>

.cell-wrapper{
  background: white;
  margin: 10px;
  border-radius: 5px
}
</style>