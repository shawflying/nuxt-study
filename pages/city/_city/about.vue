<template>
  <section class="container">
    <div>
      <h1 class="title">
        关于城市:{{params.city}}<br/>
        入参信息：{{query.name}}
      </h1>
    </div>
  </section>
</template>

<script>
var req_params = {};
var req_query = {};
export default {
  validate({ params, query }) {
    console.log("params:", params);
    console.log("query:", query);
    req_params = params;
    req_query = query;
    // return /^\d+$/.test(params.id);
    return true;
  },
  data: () => {
    return { query: req_query, params: req_params };
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
  min-height: 30vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 30;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
