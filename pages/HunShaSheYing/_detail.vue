<template>
   <pin-pai-detail v-bind:msg_detail="detail" v-bind:msg_from="from"></pin-pai-detail>
</template>

<script>
import PinPaiDetail from "~/components/Hssy/PinPaiDetail.vue"; //品牌模板

let detail = {};
let from = "";
export default {
  validate(req) {
    detail = req.query || {};
    from = req.params.detail;
    return req.params.detail.indexOf("-info") > -1;
  },
  data: () => {
    return { detail, from };
  },
  components: {
    PinPaiDetail
  }
};
</script>
