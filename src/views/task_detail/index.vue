<template>
  <div class="content">
    <div class="navigation-bar">
      <van-nav-bar title="详情"></van-nav-bar>
    </div>
    <div class="content-wrapper">
      <div class="content-header">
        <task-detail-header-cell></task-detail-header-cell>
      </div>
      <div class="content-desc">
        <task-detail-content-cell title="任务描述">
          <div class="desc">
            这是任务描述这是任务描述这是任务描述这是任务描述这是任务描述这是任务描述这是任务描述这是任务描述
          </div>
        </task-detail-content-cell>
      </div>
      <div class="content-desc">
        <task-detail-content-cell title="任务限制">
          <div class="desc">
            任务限制任务限制任务限制任务限制任务限制任务限制任务限制任务限制任务限制任务限制任务限制任务限制任务限制
          </div>
        </task-detail-content-cell>
      </div>
      <div class="content-step">
        <task-detail-content-cell title="任务步骤">
          <task-detail-step-wrapper title="网址类型" :currentIndex="0" :totalIndex="3">
            <div class="step-url">
              <van-button type="primary" size="small" block>打开链接</van-button>
            </div>
          </task-detail-step-wrapper>
          <task-detail-step-wrapper title="图片类型" :currentIndex="1" :totalIndex="3">
            <task-detail-step-image></task-detail-step-image>
          </task-detail-step-wrapper>
          <task-detail-step-wrapper title="二维码类型" :currentIndex="2" :totalIndex="3"></task-detail-step-wrapper>
        </task-detail-content-cell>
      </div>
    </div>
  </div>
</template>

<script>
import { NavBar, List, PullRefresh, Button } from "vant";
import TaskDetailHeaderCell from '@/components/task_detail/task-detail-header-cell'
import TaskDetailContentCell from '@/components/task_detail/task-detail-content-cell'
import TaskDetailStepWrapper from '@/components/task_detail/task-detail-step-wrapper'
import TaskDetailStepImage from '@/components/task_detail/task-detail-step-image'

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

.content-wrapper {
  flex: 1;
  @include scroll;
}

.content-header{
  background: white;
  margin: 10px;
  border-radius: 10px;
}

.content-desc{
  background: white;
  margin: 10px;
  border-radius: 10px;  
  .desc{
    font-size: 15px;
    text-align: left;
    margin-top: 5px;
  }
}

.content-step{
  background: white;
  margin: 10px;
  border-radius: 10px;
}

</style>