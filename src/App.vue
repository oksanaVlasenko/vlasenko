<template>
  <Loader v-if="!isLoaded"/>

  <Layout v-else />
</template>

<script setup>
import Loader from '@/components/Loader.vue'
import Layout from '@/components/Layout.vue'

import { ref, onMounted } from 'vue'

const isLoaded = ref(false)

const startLoader = () => {
  setTimeout(() => {
    isLoaded.value = true
  }, 1500)
}

onMounted(() => {
  startLoader()
})
</script>

