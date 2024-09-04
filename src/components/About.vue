<template>
  <div class="flex flex-col items-center justify-center flex-grow max-w-full overflow-x-hidden pt-9">
    <Card />
  </div>
</template>
<script>
import Card from '@/components/Card.vue'

export default {
  components: {
    Card
  }
}
</script>
<style>
  h4 {
    font-family: var(--font-family--display);
  }
</style>