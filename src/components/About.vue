<template>
  <section id="about" class="inner about">
    <div class="content__block section-grid-title">
      <p class="h2__subtitle animate-in-up">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
          <path fill="currentColor" d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
            C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
            C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
        </svg>
        <span>About Me</span>
      </p>
      <h2 class="h2__title animate-in-up">Turning complex problems into working projects</h2>
    </div>

    <div class="content__block grid-block">
      <div class="achievements d-flex">
        <div class="achievements__item d-flex flex-column grid-item animate-card-3">
          <div class="achievements__card">
            <p class="achievements__number">4+</p>
            <p class="achievements__descr">Years of experience</p>
          </div>
        </div>
        <div class="achievements__item d-flex flex-column grid-item animate-card-3">
          <div class="achievements__card">
            <p class="achievements__number">4+</p>
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
              I'm a software developer with over 4 years of web development experience, proficient in JavaScript and Vue 2, and with solid skills in Vue 3, Node.js, 
              Express.js, Tailwind CSS, and TypeScript. While I’ve dabbled in React, Vue has been my primary focus for the past 3+ years.  
            </p>

            
            <p class="about-descr__text animate-in-up">
              My core goal is to deliver top-notch user experiences, with a strong emphasis on performance, usability, and attention to detail. 
              I believe that every small element, from design to functionality, plays a crucial role in the overall success of a product.
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