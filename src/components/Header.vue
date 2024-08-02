<template>
  <header class="w-full pt-2">
    <Nav />

    <h1 class="title">Oksana Vlasenko</h1>

    <h2>Senior Frontend Developer</h2>

  </header>
</template>

<script>
import Nav from './Nav.vue'

export default {
  components: { 
    Nav
  }
}
</script>

<style scoped>
h1 {
  @apply 
    antialiased text-3xl text-center mt-4;
    color: var(--text-primary-color);
}

h2 {
  @apply 
    antialiased text-2xl text-center;
    color: var(--text-primary-color);
}
</style>