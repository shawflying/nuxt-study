<template>
  <div>
    acb
   <pin-pai v-bind:msg_choice="choice" v-bind:msg_type="'PinPai'"></pin-pai>    
  </div>
</template>

<script>
import PinPai from "~/components/Hssy/PinPai.vue"; //品牌模板

let choice = "";
export default {
  middleware: "stats",
  validate(req) {
    choice = req.params.choice || "";
    return true;
  },
  data: () => {
    return { choice: choice };
  },
  components: {
    PinPai
  }
};
</script>
