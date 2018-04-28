<template>
  <section class="container">
    <div>
      <h1 class="title">
        login_id
      </h1>
    </div>
  </section>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";
export default {
  components: {
    AppLogo
  },
  methods: {
    show: () => {
      alert("alert");
    }
  }
};
</script>

<style>
.container {
  min-height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
