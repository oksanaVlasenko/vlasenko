<template>
  <div>
    <div ref="blurContainer" class="gradient-background">
      <div v-for="n in 3" :key="n" class="blur"></div>
    </div>

    <Header />

    <Avatar />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Avatar from '@/components/Avatar.vue'

import { ref, onMounted } from 'vue';

const blurContainer = ref(null);

const random = (min, max) => () => Math.random() * (max - min) + min;

const randomX = random(-400, 400);
const randomY = random(-200, 200);
const randomAngle = random(-30, 150);
const randomTime = random(20, 30); // in ms
const randomTime2 = random(10, 20); // in ms

// Rotate animation function
function rotate(element) {
  const duration = randomTime2(); // random duration for the rotation
  const start = performance.now();
  const initialRotation = parseFloat(getComputedStyle(element).transform.match(/matrix\(.*?\)/)[0].split(',')[1]) || 0;

  function animate(time) {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const newRotation = initialRotation + progress * randomAngle();

    element.style.transform = `rotate(${newRotation}deg)`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// X movement animation function
function moveX(element) {
  const duration = randomTime(); // random duration for the X movement
  const start = performance.now();
  const initialX = parseFloat(getComputedStyle(element).transform.match(/matrix\(.*?\)/)[0].split(',')[4]) || 0; // current X position
  const targetX = randomX(); // target X position

  function animate(time) {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const newX = initialX + progress * targetX;

    element.style.transform = `translateX(${newX}px)`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

// Y movement animation function
function moveY(element) {
  const duration = randomTime(); // random duration for the Y movement
  const start = performance.now();
  const initialY = parseFloat(getComputedStyle(element).transform.match(/matrix\(.*?\)/)[0].split(',')[5]) || 0; // current Y position
  const targetY = randomY(); // target Y position

  function animate(time) {
    const elapsed = time - start;
    const progress = Math.min(elapsed / duration, 1);
    const newY = initialY + progress * targetY;

    element.style.transform = `translateY(${newY}px)`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  }

  requestAnimationFrame(animate);
}

onMounted(() => {
  const blurs = blurContainer.value.querySelectorAll('.blur');
  blurs.forEach(blur => {
    // Initial random position and rotation
    blur.style.transform = `translate(${randomX()}px, ${randomY()}px) rotate(${randomAngle()}deg)`;
    
    // Start the animations
    moveX(blur);
    moveY(blur);
    rotate(blur);
  });
});
</script>

<style>
  @import '@/assets/styles/layout';
</style>