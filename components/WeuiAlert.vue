<template>
  <div>
    <!--BEGIN toast-->
    <div id="toast" style="display: none;">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-icon-success-no-circle weui-icon_toast"></i>
            <p class="weui-toast__content">已提交</p>
        </div>
    </div>
    <!--end toast-->

          <!-- loading toast -->
    <div id="loadingToast" style="display:none;">
        <div class="weui-mask_transparent"></div>
        <div class="weui-toast">
            <i class="weui-loading weui-icon_toast"></i>
            <p class="weui-toast__content">数据加载中</p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {
    return { title: "美好的事情，总是让人期待！" };
  }
};
</script>
<style>

</style>
