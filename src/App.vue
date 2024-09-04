<template>
  <div class="flex w-full flex-col min-h-screen container-center">    
    <Header />

    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: { 
    Header,
  }
}
</script>

<style>

</style>
