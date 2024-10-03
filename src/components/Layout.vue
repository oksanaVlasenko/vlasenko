<template>
  <div>
    <div ref="blurContainer" class="gradient-background">
      <div v-for="n in 3" :key="n" class="blur"></div>
    </div>

    <Header />

    <Avatar />

    <div id="content" class="content">
      <div class="content__wrapper">
        <div
          v-for="section in sections"
          :key="section.id"
        >
          <component :is="section.component" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Avatar from '@/components/Avatar.vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Resume from '@/components/Resume.vue'
import Contacts from '@/components/Contacts.vue'

import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

const sections = [
  { id: 'home-page', component: Home },
  { id: 'about', component: About },
  { id: 'resume', component: Resume },
  { id: 'contacts', component: Contacts },
];

const router = useRouter();
const observer = ref(null);
const lastActiveSection = ref('');

const updateActiveSection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (lastActiveSection.value !== entry.target.id) {
        lastActiveSection.value = entry.target.id; 
        entry.target.id === 'home-page' ? router.replace('/') : router.replace(`${entry.target.id}`); 
      }
    }
  });
};

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

  observer.value = new IntersectionObserver(updateActiveSection, {
    threshold: 0.2, // Adjust the threshold as needed
  });

  sections.forEach((section) => {
    const element = document.getElementById(section.id);
    if (element) {
      observer.value.observe(element);
    } 
  });
});

onBeforeUnmount(() => {
  if (observer.value) {
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.value.unobserve(element);
      }
    });
  }
});
</script>

<style>
  @import '@/assets/styles/layout';
</style>