<template>
<div class="content">
  <div class="navigation-bar">
    <van-nav-bar title="收支明细" ref="navbar" left-arrow @click-left="navigationBackTap"></van-nav-bar>
  </div>
  <div class="content-wrapper" :style="contentWrapperStyle">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多数据了" @load="onLoad">
        <div class="cell-wrapper" v-for="item in m_list" :key="item" @click="onCellWrapperTap(item)">
          <balance-payment-cell :recordItem="item"></balance-payment-cell>
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
  PullRefresh
} from "vant";
import BalancePaymentCell from "@/components/balance_payment/balance-payment-cell"
export default {
  components: {
    [NavBar.name]: NavBar,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    BalancePaymentCell
  },

  data() {
    return {
      refreshing: false,
      loading: false,
      finished: false,
      m_list: [],
      m_page: {
        pageIndex: 1,
        pageSize: 10,
      },
      contentWrapperStyle: {
        marginTop: "0px",
        marginBottom: "0px",
      },
    }
  },

  mounted() {
    let navHeight = this.$refs.navbar.$el.offsetHeight;
    this.contentWrapperStyle.marginTop = navHeight + "px";
    this.onRefresh()

  },

  methods: {
    navigationBackTap() {
      this.$router.back()
    },
    onRefresh() {

      // 清空列表数据
      this.finished = false;
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.m_page.pageIndex = 1;
      this.onRecordList();
    },

    onLoad() {

      this.m_page.pageIndex = this.m_page.pageIndex + 1;
      this.onRecordList()
    },

    onRecordList() {
      let _this = this;
      this.api.incomeRecordPageList(this.m_page).then(res => {
        _this.loading = false;
        if (_this.refreshing) {
          _this.finished = false
          _this.m_list = []
          _this.refreshing = false
        }
        res.data.records.forEach(val => {
          _this.m_list.push(val)
        })

        if (_this.m_list.length >= res.data.total) {
          _this.finished = true
        }
      }).catch(res => {
        _this.loading = false
        _this.refreshing = false
        _this.finished = true
      })
    },

    onCellWrapperTap(cellItem) {
      console.log(cellItem)
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

.cell-wrapper {
  margin: 10px;
  background: white;
  border-radius: 5px
}
</style>
