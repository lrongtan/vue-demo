<template>
<div class="component">
  <div class="component-wrapper">
    <div class="title-wrapper">
      <div class="title" v-if="recordItem.type == 1">{{recordItem.taskTitle}}</div>
      <div class="title" v-else>提现</div>
      <div class="money" :class="{'moneyOther':recordItem.type == 2}">{{symbol}}<span>{{income}}</span>元</div>
    </div>
    <div class="time-wrapper">
      {{recordItem.createdAt}}
    </div>
    <div class="status">
      {{state}}
    </div>
  </div>
</div>
</template>

<script>
import * as Until from '../../utils/index'

export default {
  props: {
    recordItem: Object
  },

  computed: {
    symbol() {
      if (this.recordItem.type == 1) {
        return "+"
      }
      if (this.recordItem.type == 2) {
        return "-"
      }
      return ""
    },
    state() {
      if (this.recordItem.type == 1) {
        return ""
      }
      if (this.recordItem.state != undefined) {
        switch (this.recordItem.state) {
          case 1:
            return "处理中"
            break
          case 2:
            return "成功"
            break
          case 3:
            return "失败"
            break
        }
      }
      return ""
    },
    income() {
      return Until.moneyFenToYuan(this.recordItem.income)
    }
  },
}
</script>

<style lang="scss" scoped>
.component-wrapper {
  padding: 15px;
}

.title-wrapper {
  display: flex;

  .title {
    flex: 1;
    font-size: 15px;
  }

  .money {
    margin-left: 10px;
    font-size: 12px;
    color: $theme-color;

    span {
      font-size: 16px;
    }
  }

  .moneyOther {
    color: black;
  }
}

.time-wrapper {
  margin-top: 15px;
  font-size: 13px;
  color: #888;
}

.status {
  margin-top: 15px;
  font-size: 13px;
  color: red;
}
</style>
