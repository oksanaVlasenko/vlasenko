<template>
  <div class="container-center">    
    <ThemeButton />

    <div>
      <h1>Oksana Vlasenko</h1>

      <h2>Senior Frontend Developer</h2>
    </div>
  </div>
</template>

<script>
import ThemeButton from './components/ThemeButton.vue'

export default {
  components: { 
    ThemeButton
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
