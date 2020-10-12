<template>
<div class="component">
  <div class="component-wrapper">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多数据了" @load="onLoad">
        <div class="cell-wrapper" v-for="item in m_list" :key="item.id" @click="onCellWrapperTap(item)">
          <mine-task-list-cell :taskOrder="item" @onCancelTap="onCancelTap(item)" @onDeleteTap="onDeleteTap(item)" @onReApplyTap="onReApplyTap(item)" @onAlterTap="onAlterTap(item)"></mine-task-list-cell>
        </div>
      </van-list>
    </van-pull-refresh>
  </div>
</div>
</template>

<script>
import {
  List,
  PullRefresh
} from "vant";
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
      loading: true,
      finished: false,
      m_list: [],
      m_page: {
        pageIndex: 1,
        pageSize: 10,
      },
    };
  },

  mounted() {
    this.refreshing = true;
    this.onRefresh();
  },

  methods: {
    onRefresh() {
      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.m_page.pageIndex = 1;
      this.onTaskOrderList();
    },

    onLoad() {
      this.m_page.pageIndex = this.m_page.pageIndex + 1;
      this.onTaskOrderList();
    },

    onTaskOrderList() {
      let _this = this;
      this.api
        .taskOrderPageList({
          pageIndex: this.m_page.pageIndex,
          pageSize: this.m_page.pageSize,
          accountId: this.taskType,
          state: this.taskType,
        })
        .then((res) => {
          _this.loading = false;
          if (_this.refreshing) {
            _this.finished = false;
            _this.m_list = [];
            _this.refreshing = false;
          }
          res.data.records.forEach((val) => {
            _this.m_list.push(val);
          });

          if (_this.m_list.length >= res.data.total) {
            _this.finished = true;
          }
        })
        .catch((res) => {
          _this.refreshing = false;
          _this.finished = true;
          _this.loading = false;
        });
    },

    onCellWrapperTap(cellItem) {
      console.log(cellItem);
      if (cellItem.state == 1) {
        let idObj = {
          orderId: cellItem.id,
          taskId: cellItem.taskId,
        }
        let jsonText = JSON.stringify(idObj)
        console.log(jsonText)
        this.$router.push({
          name: "mine_task_detail",
          params: {
            idObj: jsonText
          },
        });
      }
    },

    onCancelTap(cellItem) {
      this.$toast.loading({
        message: "正在操作...",
      });
      let _this = this;
      this.api
        .taskOrderCancel({
          id: cellItem.id,
        })
        .then((res) => {
          _this.$toast("操作成功");
          _this.refreshing = true;
          _this.onRefresh();
        })
        .catch((res) => {});
    },

    onDeleteTap(cellItem) {
      this.$toast.loading({
        message: "正在操作...",
      });
      let _this = this;
      this.api
        .taskOrderDelete({
          id: cellItem.id,
        })
        .then((res) => {
          _this.$toast("操作成功");
          _this.refreshing = true;
          _this.onRefresh();
        })
        .catch((res) => {});
    },

    onReApplyTap(cellItem) {
      this.$toast.loading({
        message: "正在操作...",
      });
      let _this = this;
      this.api
        .taskOrderReApply({
          id: cellItem.id,
        })
        .then((res) => {
          _this.$toast("操作成功");
          _this.refreshing = true;
          _this.onRefresh();
        })
        .catch((res) => {});
    },
    onAlterTap(cellItem) {
      let idObj = {
        orderId: cellItem.id,
        taskId: cellItem.taskId,
      }
      let jsonText = JSON.stringify(idObj)
      console.log(jsonText)
      this.$router.push({
        name: "mine_task_detail",
        params: {
          idObj: jsonText
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cell-wrapper {
  background: white;
  margin: 10px;
  border-radius: 5px;
}
</style>
