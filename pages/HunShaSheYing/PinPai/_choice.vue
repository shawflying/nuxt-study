<template>
   <pin-pai v-bind:msg_choice="choice" v-bind:msg_type="'PinPai'"></pin-pai>
</template>

<script>
import PinPai from "~/components/Hssy/PinPai.vue"; //品牌模板

let choice = "";
export default {
  validate(req) {
    choice = req.params.choice || "";
     return req.params.choice.indexOf("-info") == -1;
  },
  data: () => {
    return { choice: choice };
  },
  components: {
    PinPai
  }
};
</script>
