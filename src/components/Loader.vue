<template>
  <div id="loader" :class="{ 'loaded': isLoaded }" class="loader">
    <div id="loaderContent" class="loader__content">
      <div class="loader__shadow"></div>
      <div class="loader__box"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

const startLoader = () => {
  setTimeout(() => {
    isLoaded.value = true
  }, 500)
}

onMounted(() => {
  startLoader()
})
</script>

<style>
@import '@/assets/styles/loader';
</style>