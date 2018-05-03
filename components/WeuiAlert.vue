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
      <div class="links">
        <nuxt-link class="button--green" to="/">首页</nuxt-link>
        <nuxt-link class="button--grey" to="/admin">管理中心</nuxt-link>
      </div>

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
