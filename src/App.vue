<template>
  <div class="flex w-full flex-col min-h-screen container-center">    
    <Header />

    <ThemeButton />

    <router-view />

    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ThemeButton from './components/ThemeButton.vue'
import Footer from './components/Footer.vue'

export default {
  components: { 
    Header,
    ThemeButton,
    Footer
  }
}
</script>

<style scoped>
</style>
