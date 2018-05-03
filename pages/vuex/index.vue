<template>
  <div>
    <p>
      <button @click="increment">{{ counter }}</button><br>
      <nuxt-link to="/demo/about">About</nuxt-link>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  // fetch(context) is called by the server-side
  // and nuxt before instantiating the component
  fetch({ store }) {//进入页面后，加载时，
    store.commit("increment");
  },
  computed: mapState(["counter"]),
  methods: {
    increment() {
      console.log(this);
      this.$store.commit("increment");
    }
  }
};
</script>