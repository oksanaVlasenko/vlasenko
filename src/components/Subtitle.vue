<template>
  <p class="h2__subtitle animate-in-up">
    <svg>
      <use xlink:href="#rhombus"></use>
    </svg>

    <span>{{ title }}</span>
  </p>
</template> 

<script setup>
  import { useAnimateInUp } from '@/composables/useAnimateInUp';

  import { defineProps } from 'vue';

  const props = defineProps({
    title: {
      type: String,
      default: () => ''
    }
  })

  useAnimateInUp()
</script>