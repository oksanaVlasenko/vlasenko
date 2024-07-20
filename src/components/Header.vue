<template>
  <header class="w-full pt-2">
    <ThemeButton />

    <Nav />

    <h1 class="title">Oksana Vlasenko</h1>

    <h2>Senior Frontend Developer</h2>

  </header>
</template>

<script>
import ThemeButton from './ThemeButton.vue'
import Nav from './Nav.vue'

export default {
  components: { 
    ThemeButton,
    Nav
  }
}
</script>

<style scoped>
h1 {
  @apply 
    antialiased text-3xl text-center my-12;
    color: var(--text-primary-color);
}

h2 {
  @apply 
    antialiased text-2xl text-center;
    color: var(--text-primary-color);
}
</style>