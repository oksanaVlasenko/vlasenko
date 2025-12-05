<template>
  <div class="snow-container" ref="container">
    <div 
      v-for="n in flakesCount" 
      :key="n" 
      class="flake"
    >❄</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const flakesCount = 60;
const container = ref(null);

onMounted(() => {
  const flakes = container.value.querySelectorAll(".flake");

  flakes.forEach((flake) => {
    const delay = Math.random() * 5;
    const duration = 8 + Math.random() * 10;
    const startX = Math.random() * window.innerWidth;
    const endX = startX + (Math.random() * 100 - 50);

    gsap.set(flake, {
      x: startX,
      y: -50,
      scale: Math.random() * 0.8 + 0.4,
      opacity: Math.random() * 0.8 + 0.2,
    });

    gsap.to(flake, {
      y: window.innerHeight + 50,
      x: endX,
      rotation: Math.random() * 360,
      duration,
      delay,
      repeat: -1,
      ease: "none",
    });

    gsap.to(flake, {
      x: endX,
      y: window.innerHeight + 50,
      rotation: Math.random() * 360,
      duration,
      delay,
      repeat: -1,
      ease: "none",
    });

    gsap.to(flake, {
      x: `+=${Math.random() * 30 - 15}`,
      duration: 3 + Math.random() * 3,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
    });
  });
});
</script>

<style scoped>
.snow-container {
  pointer-events: none;
  position: fixed;
  inset: 0;
  overflow: hidden;
  z-index: 9999;
}

.flake {
  position: absolute;
  font-size: 22px;
  color: white;
  user-select: none;
  will-change: transform;
  color: rgba(180, 210, 255, 0.95); 
  text-shadow: 0 0 10px rgba(180, 190, 230, 0.7);
}

/* .flake {
  
} */
</style>
