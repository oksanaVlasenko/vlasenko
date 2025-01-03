<template>
  <Loader v-if="!isLoaded"/>

  <Layout v-if="isLoaded" />
</template>

<script setup>
import Loader from '@/components/Loader.vue'
import Layout from '@/components/Layout.vue'

import { ref, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();

const isLoaded = ref(false)

const startLoader = () => {
  setTimeout(() => {
    isLoaded.value = true 

    nextTick(() => {
      if (router.currentRoute.value.fullPath !== '/') router.replace(router.currentRoute.value.fullPath); 
    })
  }, 1500)
}

onMounted(async () => {
  await nextTick()

  startLoader()
})
</script>

