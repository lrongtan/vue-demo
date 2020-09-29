<template>
<div class="content">
  <div class="navigation-bar">
    <van-nav-bar title="详情" ref="navbar" left-arrow @click-left="navigationBackTap"></van-nav-bar>
  </div>
  <div class="content-wrapper" :style="contentWrapperStyle">
    <div class="content-header">
      <task-detail-header-cell :taskDetail="taskDetail"></task-detail-header-cell>
    </div>
    <div class="content-desc">
      <task-detail-content-cell title="任务描述">
        <div class="desc">
          {{ taskDetail.description ? taskDetail.description : "" }}
        </div>
      </task-detail-content-cell>
    </div>
    <div class="content-desc">
      <task-detail-content-cell title="任务限制">
        <div class="desc">
          {{ taskDetail.applyCondition ? taskDetail.applyCondition : "" }}
        </div>
      </task-detail-content-cell>
    </div>
    <div class="content-step">
      <task-detail-content-cell title="任务步骤">
        <task-detail-step-wrapper title="网址类型" :currentIndex="0" :totalIndex="6">
          <div class="step-url">
            <van-button type="primary" size="small" block>打开链接</van-button>
          </div>
        </task-detail-step-wrapper>
        <task-detail-step-wrapper title="图片类型" :currentIndex="1" :totalIndex="6">
          <task-detail-step-image></task-detail-step-image>
        </task-detail-step-wrapper>
        <task-detail-step-wrapper title="二维码类型" :currentIndex="2" :totalIndex="6">
          <task-detail-step-qrcode></task-detail-step-qrcode>
        </task-detail-step-wrapper>
        <task-detail-step-wrapper title="复制数据类型步骤" :currentIndex="3" :totalIndex="6">
          <task-detail-step-copy-data copy-data="我是复制数据"></task-detail-step-copy-data>
        </task-detail-step-wrapper>
        <task-detail-step-wrapper title="截图收集步骤类型" :currentIndex="4" :totalIndex="6">
          <task-detail-step-collect-image></task-detail-step-collect-image>
        </task-detail-step-wrapper>
        <task-detail-step-wrapper title="信息收集步骤类型" :currentIndex="5" :totalIndex="6">
          <task-detail-step-collect-info v-model="inputValue" placeholder="按要求输入信息"></task-detail-step-collect-info>
        </task-detail-step-wrapper>
      </task-detail-content-cell>
    </div>
    <div class="tool-bar-wrapper">
      <task-detail-tool-bar ref="toolbar" :tool-type="0" @onDrawTap="onDrawTap"></task-detail-tool-bar>
    </div>
  </div>
</div>
</template>

<script>
import {
  NavBar,
  List,
  PullRefresh,
  Button
} from "vant";
import TaskDetailHeaderCell from "@/components/task_detail/task-detail-header-cell";
import TaskDetailContentCell from "@/components/task_detail/task-detail-content-cell";
import TaskDetailStepWrapper from "@/components/task_detail/task-detail-step-wrapper";
import TaskDetailStepImage from "@/components/task_detail/task-detail-step-image";
import TaskDetailStepQrcode from "@/components/task_detail/task-detail-step-qrcode";
import TaskDetailStepCopyData from "@/components/task_detail/task-detail-step-copy-data";
import TaskDetailStepCollectImage from "@/components/task_detail/task-detail-step-collect-image";
import TaskDetailStepCollectInfo from "@/components/task_detail/task-detail-step-collect-info";
import TaskDetailToolBar from "@/components/task_detail/task-detail-tool-bar";

export default {
  components: {
    [NavBar.name]: NavBar,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    [Button.name]: Button,
    TaskDetailHeaderCell,
    TaskDetailContentCell,
    TaskDetailStepWrapper,
    TaskDetailStepImage,
    TaskDetailStepQrcode,
    TaskDetailStepCopyData,
    TaskDetailStepCollectImage,
    TaskDetailStepCollectInfo,
    TaskDetailToolBar,
  },

  data() {
    return {
      contentWrapperStyle: {
        marginTop: "0px",
        marginBottom: "0px",
      },
      inputValue: "",
      taskDetail: {},
      taskOrder: {},
    };
  },

  mounted() {
    let navHeight = this.$refs.navbar.$el.offsetHeight;
    let toolHeight = this.$refs.toolbar.$el.offsetHeight;
    this.contentWrapperStyle.marginTop = navHeight + "px";
    this.contentWrapperStyle.marginBottom = toolHeight + "px";
    let taskItem = this.$route.params.taskItem;
    this.taskDetail = JSON.parse(taskItem);
    console.log(this.taskDetail);
    this.onTaskDetailAll();
  },

  methods: {
    onDrawTap() {
      console.log(this.inputValue);
      let _this = this;
      this.$toast.loading({
        message: "正在操作...",
      });
      this.api
        .taskOrderApply({
          id: this.taskDetail.id,
        })
        .then((res) => {
          console.log(res);
          _this.$toast("领取成功");
        })
        .catch((res) => {});
    },
    navigationBackTap() {
      this.$router.back();
    },

    onTaskDetailAll() {
      let _this = this;
      this.api
        .taskDetailAll({
          id: this.taskDetail.id,
        })
        .then(
          this.api.axiosVal().spread((val1, val2) => {
            _this.taskDetail = val1.data;
            _this.taskOrder = val2.data;
          })
        )
        .catch((res) => {});
    },
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.content-wrapper {
  flex: 1;
  @include scroll;
}

.content-header {
  background: white;
  margin: 10px;
  border-radius: 10px;
}

.content-desc {
  background: white;
  margin: 10px;
  border-radius: 10px;

  .desc {
    font-size: 15px;
    text-align: left;
    margin-top: 5px;
  }
}

.content-step {
  background: white;
  margin: 10px;
  border-radius: 10px;
}

.tool-bar-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
