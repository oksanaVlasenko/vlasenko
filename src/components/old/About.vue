<template>
  <div class="about-page">
    <Card />
  </div>
</template>
<script>
import Card from '@/components/old/Card.vue'

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

  .about-page {
    width: auto;
    height: auto;
    overflow: hidden;
  }
</style>