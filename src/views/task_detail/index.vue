<template>
  <div class="content">
    <div class="navigation-bar">
      <van-nav-bar
        title="详情"
        ref="navbar"
        left-arrow
        @click-left="navigationBackTap"
      ></van-nav-bar>
    </div>
    <div class="content-wrapper" :style="contentWrapperStyle">
      <div class="content-header">
        <task-detail-header-cell
          :taskDetail="taskDetail"
        ></task-detail-header-cell>
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
          <div
            class="task-step"
            v-for="(item, index) in taskDetail.taskStepObj"
            :key="index"
          >
            <task-detail-step-wrapper
              :title="item.txtDescribe"
              :currentIndex="index"
              :totalIndex="taskDetail.taskStepObj.length"
            >
              <div class="step-url" v-if="item.stepType == 1">
                <van-button
                  type="primary"
                  size="small"
                  block
                  @click="onStep1Tap(item)"
                  >打开链接</van-button
                >
              </div>
              <div class="step-url" v-if="item.stepType == 2">
                <task-detail-step-image
                  :imgs="item.imgs"
                ></task-detail-step-image>
              </div>
              <div class="step-url" v-if="item.stepType == 3">
                <task-detail-step-qrcode
                  :imgUrl="item.imgs[0]"
                ></task-detail-step-qrcode>
              </div>
              <div class="step-url" v-if="item.stepType == 4">
                <task-detail-step-copy-data
                  :copy-data="item.textData"
                  :isDraw="false"
                ></task-detail-step-copy-data>
              </div>
              <div class="step-url" v-if="item.stepType == 5">
                <task-detail-step-collect-image
                  :imgUrl="item.imgs[0]"
                ></task-detail-step-collect-image>
              </div>
              <div class="step-url" v-if="item.stepType == 6">
                <task-detail-step-collect-info
                  v-model="inputValue"
                  placeholder="按要求输入信息"
                ></task-detail-step-collect-info>
              </div>
            </task-detail-step-wrapper>
          </div>
        </task-detail-content-cell>
      </div>
      
    </div>
    <div class="tool-bar-wrapper">
        <task-detail-tool-bar
          ref="toolbar"
          :tool-type="0"
          @onDrawTap="onDrawTap"
        ></task-detail-tool-bar>
      </div>
  </div>
</template>

<script>
import * as Util from "../../utils/index.js";
import { NavBar, List, PullRefresh, Button } from "vant";
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
    let task = JSON.parse(taskItem);
    task.taskStepObj = Util.jsonClearEscapeCharacter(task.taskStep);
    this.taskDetail = task;
    this.handleTaskStepObj(task.taskStepObj);
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
          _this.onTaskDetailAll();
        })
        .catch((res) => {});
    },
    navigationBackTap() {
      this.$router.back();
    },

    onTaskDetailAll() {
      let _this = this;
      this.api
        .taskDetail({
          id: this.taskDetail.id,
        })
        .then((res) => {
          let val = res.data;
          val.taskStepObj = JSON.parse(val.taskStep);
          _this.handleTaskStepObj(val.taskStepObj);
          _this.taskDetail = val;
          if (_this.taskDetail.isApply == 1 || _this.taskDetail.isApply == 4) {
            let idObj = {
              orderId: _this.taskDetail.orderId,
              taskId: _this.taskDetail.id,
            };
            let jsonText = JSON.stringify(idObj);
            console.log(jsonText);
            this.$router.replace({
              name: "mine_task_detail",
              params: {
                idObj: jsonText,
              },
            });
          }
        })
        .catch((res) => {});
    },

    handleTaskStepObj(taskStepObj) {
      taskStepObj.forEach((val) => {
        val.stepType = val["step-type"];
        val.txtDescribe = val["txt-describe"];
        val.txtUrl = val["txt-url"];
        if (val["files"] != undefined) {
          val.imgs = val["files"].split(",");
        }
        if (val["txt-data"] != undefined) {
          val.textData = val["txt-data"];
        }

        console.log(val["step-type"]);
        console.log(val["txt-describe"]);
        console.log(val["txt-url"]);
        console.log(val.imgs);
      });
    },

    onStep1Tap(taskStep) {
      // window.open(taskStep.txtUrl, '_blank')
      this.$toast("请先领取任务");
      // window.location.href = taskStep.txtUrl
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
