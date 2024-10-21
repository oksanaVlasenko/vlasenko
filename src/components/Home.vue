<template>
  <section id="home-page" class="main intro">
    <!-- Headline Start -->
    <div id="headline" class="headline d-flex align-items-start flex-column" data-speed="1">
      <p class="headline__subtitle animate-headline">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
          <path fill="currentColor" d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
            C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
            C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
        </svg>
        <span>Let's meet!</span>
      </p>
      <h1 ref="headline" class="headline__title animate-headline">I'm Oksana Vlasenko<br>Senior Frontend Developer.</h1>
      
      <div class="headline__btnholder d-flex flex-column flex-sm-row">
        <a class="btn mobile-vertical btn-default btn-hover btn-hover-accent-mobile animate-headline" href="#resume">
          <span class="btn-caption">My Works</span>
          <svg>
            <use xlink:href="#dots"></use>
          </svg>
        </a>
        <a class="btn mobile-vertical btn-default btn-hover btn-hover-outline-mobile animate-headline" @click="downloadAndOpen">
          <span class="btn-caption">Download CV
            <svg>
              <use xlink:href="#download"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>
    <!-- Headline End -->

    <!-- Scroll Button Start -->
    <AnimatedRotation />
    <!-- Scroll Button End -->

    </section>
</template>

<script setup>
import AnimatedRotation from '@/components/AnimatedRotation.vue'

import { onMounted } from 'vue';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const downloadAndOpen = () => {
  const fileUrl = new URL('@/assets/CV_Oksana_Vlasenko.pdf', import.meta.url).href;
  
  window.open(fileUrl, '_blank');
}

onMounted(() => {
  gsap.set(".animate-headline", { y: 50, opacity: 0 });

  ScrollTrigger.batch(".animate-headline", {
    interval: 0.1, 
    batchMax: 4, 
    onEnter: batch => gsap.to(batch, {
      opacity: 1, 
      y: 0,
      ease: 'sine',
      stagger: { each: 0.15, grid: [1, 4] }, 
      overwrite: true
    }),
    onLeave: batch => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
    onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 50, overwrite: true })
  });

  ScrollTrigger.refresh();
});

</script>

<style>
  @import '@/assets/styles/home';
</style>