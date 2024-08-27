<template>
  <header class="w-full pt-2">
    <Nav />
  </header>
</template>

<script>
import Nav from '@/components/Nav.vue'

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