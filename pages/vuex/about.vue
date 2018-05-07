<template>
  <div>
    <p>
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button><br>
      <nuxt-link to="/vuex">Home</nuxt-link>
    </p>
  </div>
</template>