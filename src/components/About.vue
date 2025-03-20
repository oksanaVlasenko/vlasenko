<template>
  <section id="about" class="inner about">
    <div class="content__block section-grid-title">
      <Subtitle title="About Me" />
      <h2 class="h2__title animate-in-up">Turning complex problems into working projects</h2>
    </div>

    <div class="content__block grid-block">
      <div class="achievements d-flex">
        <div class="achievements__item d-flex flex-column grid-item animate-card-3">
          <div class="achievements__card">
            <p class="achievements__number">5+</p>
            <p class="achievements__descr">Years of experience</p>
          </div>
        </div>
        <div class="achievements__item d-flex flex-column grid-item animate-card-3">
          <div class="achievements__card">
            <p class="achievements__number">6+</p>
            <p class="achievements__descr">Projects done</p>
          </div>
        </div>
      </div>
    </div>

    <div class="content__block grid-block block-large">
      <div class="container-fluid p-0">
        <div class="d-flex container-info row g-0 justify-content-between">     
          <div class="col-12 col-xl-8 grid-item about-descr">
            <p class="about-descr__text animate-in-up">
              Experienced software developer with 5+ years in web development, specializing in Vue.js (2 & 3), React, Next.js, Nuxt.js, Solid.js, and TypeScript. 
              Proficient in building scalable, high-performance applications with Node.js, Express.js, and Tailwind CSS.
            </p>

            <p class="about-descr__text animate-in-up">
              Founder & Developer of MurmLex – Designed and developed an AI-powered vocabulary learning platform to enhance word retention through 
              interactive methods. Integrated Google Generative AI for translations and text generation, implemented flashcards, 
              translation verification, and text generation, and developed automated content discovery like "Word of the Day".
            </p>
            
            <p class="about-descr__text animate-in-up">
              Passionate about delivering exceptional user experiences with a strong focus on performance, usability, and pixel-perfect design. 
              Detail-oriented and committed to crafting intuitive, scalable, and maintainable solutions.
            </p>

            <div class="btn-group about-descr__btnholder animate-in-up">
              <a class="btn mobile-vertical btn-default btn-hover btn-hover-accent" @click="downloadAndOpen">
                <span class="btn-caption">
                  Download CV

                  <svg
                    class="header__trigger-icon"
                  >
                    <use xlink:href="#message"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div class="col-12 col-xl-4 grid-item about-info">
            <div class="about-info__item animate-in-up">
              <h6>
                <small class="top">Name</small>
                Oksana Vlasenko
              </h6>
            </div>
            <div class="about-info__item animate-in-up">
              <h6>
                <small class="top">Phone</small>
                <a class="text-link-bold" href="tel:+12127089400">+38(063)-582-91-66</a>
              </h6>
            </div>
            <div class="about-info__item animate-in-up">
              <h6>
                <small class="top">Email</small>
                <a class="text-link-bold" href="mailto:vlasenkoksenia642@gmail.com?subject=Message%20from%20your%20site&body=Hello,%20I%20would%20like%20to...">vlasenkoksenia642@gmail.com</a>
              </h6>
            </div>
            <div class="about-info__item animate-in-up">
              <h6>
                <small class="top">Location</small>
                <a class="text-link-bold" href="https://maps.app.goo.gl/jMBAiwX1TUTCKW7y6" target="_blank">Kharkiv, Ukraine</a>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAnimateInUp } from '@/composables/useAnimateInUp';
import { useAnimateCard3 } from '@/composables/useAnimateCard3';
import Subtitle from '@/components/Subtitle.vue';

useAnimateCard3()
useAnimateInUp()


const downloadAndOpen = () => {
  const fileUrl = new URL('@/assets/CV_Oksana_Vlasenko.pdf', import.meta.url).href;
  
  window.open(fileUrl, '_blank');
}
</script>

<style>
  @import '@/assets/styles/about';
</style>