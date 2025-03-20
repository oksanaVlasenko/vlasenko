<template>
  <section id="resume" class="inner resume">
    <div class="content__block block-large">
      <Subtitle title="Resume" />
      
      <h2 class="h2__title animate-in-up">Education and practical experience</h2>
      <p class="h2__text animate-in-up">
        Be who you truly are—or, to put it more simply—never pretend to be something you're not, and don’t 
        imagine yourself as anything other than what others perceive you to be, based on who you truly are or have been.
      </p>
    </div>
    <!-- Content Block - H2 Section Title End -->

    <!-- Content Block - Education Start -->
    <div class="content__block block-large">

      <!-- H3 Block Start -->
      <div class="section-h3">
        <h3 class="h3__title animate-in-up">My education</h3>
      </div>
      <!-- H3 Block End -->

      <!-- Education Lines Start -->
      <div class="container-fluid p-0 resume-lines">
        <!-- education single item -->
        <div class="row g-0 resume-lines__item animate-in-up">
          <div class="resume-lines__item-block-s col-12 col-md-2">
            <span class="resume-lines__date animate-in-up">2013 - 2019</span>
          </div>
          <div class="resume-lines__item-block-m col-12 col-md-5">
            <h5 class="resume-lines__title animate-in-up">CyberSecurity</h5>
            <p class="resume-lines__source animate-in-up">V. N. Karazin Kharkiv National University</p>
          </div>
          <div class="resume-lines__item-block-m col-12 col-md-5">
            <p class="small resume-lines__descr animate-in-up">Master degree of CyberSecurity</p>
          </div>
        </div>
        <!-- education single item -->
        <div class="row g-0 resume-lines__item animate-in-up">
          <div class="resume-lines__item-block-s col-12 col-md-2">
            <span class="resume-lines__date animate-in-up">2019</span>
          </div>
          <div class="resume-lines__item-block-m col-12 col-md-5">
            <h5 class="resume-lines__title animate-in-up">Frontend Specialization</h5>
            <p class="resume-lines__source animate-in-up">Course by Epam</p>
          </div>
          <div class="resume-lines__item-block-m col-12 col-md-5">
            <p class="small resume-lines__descr animate-in-up">Foundation and understand the basic concepts of frontend development</p>
          </div>
        </div>
        <!-- education single item -->

      </div>
      <!-- Education Lines End -->

    </div>
    <!-- Content Block - Education End -->

    <!-- Content Block - Experience Start -->
    <div class="content__block block-large">

      <!-- H3 Block Start -->
      <div class="section-h3">
        <h3 class="h3__title animate-in-up">Work experience</h3>
      </div>
      <!-- H3 Block End -->

      <!-- Experience Lines Start -->
      <div class="container-fluid p-0 resume-lines">
        <!-- experience single item -->
        <div class="row g-0 resume-lines__item animate-in-up">
          <div class="row resume-lines__item-block">
            <div class="resume-lines__item-block-half">
              <span class="resume-lines__date animate-in-up">2025/01 – present</span>
              <span class="resume-lines__date animate-in-up">{{ lastWorkTime }}</span>
            </div>
            <div class="resume-lines__item-block-half">
              <h5 class="resume-lines__title animate-in-up">Senior Frontend Developer</h5>
              <p class="resume-lines__source animate-in-up">Self-Employed</p>
            </div>
          </div>

          <div class="col-12 resume-margin-top">
            <p class="technologies">MurmLex – AI-Powered Vocabulary Learning Platform</p>

            <ul class=" small animate-in-up resume-lines__descr">
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>
                Designed and developed an interactive vocabulary learning application that enhances word retention through AI-powered methods.
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>
                Implemented features such as flashcards, translation verification, and text generation to improve user engagement.              
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>
                Integrated Google Generative AI (Gemini-2.0-Flash) to generate translations, example sentences, and contextual learning materials.              
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>
                Utilized Nspell for spell-checking and validation of words and phrases before translation.             
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>
                Built an automated "Word of the Day" feature using Google Custom Search API to provide daily learning content.             
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>
                Developed a file storage system using AWS S3 for efficient data management.             
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>
                Enabled users to customize learning settings, adjust difficulty levels, and track progress for a personalized experience.         
              </li>
            </ul>
            <br>
            <span class="technologies">Technologies:</span> 
            Next.js, Google Generative AI, Google Custom Search API, AWS S3, Nspell,
            Prisma (PostgreSQL), NextAuth.js, Tailwind CSS, TypeScript,
          </div>
        </div>

        <div class="row g-0 resume-lines__item animate-in-up">
          <div class="row resume-lines__item-block">
            <div class="resume-lines__item-block-half">
              <span class="resume-lines__date animate-in-up">2021/09 – 2024/07</span>
              <span class="resume-lines__date animate-in-up">2 years 11 months</span>
            </div>
            <div class="resume-lines__item-block-half">
              <h5 class="resume-lines__title animate-in-up">Senior Frontend Developer</h5>
              <p class="resume-lines__source animate-in-up">
                in the FixQI Pro
              </p>
            </div>
          </div>
          
          <div class="col-12 resume-margin-top">
            <ul class=" small animate-in-up resume-lines__descr">
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>
                Contributed to the development of a robust micro frontend solution using Solid.js, ensuring efficient feature delivery and seamless integrations.

              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>
                Led the effort to improve application performance through continuous refactoring, significantly enhancing overall system efficiency.
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>
                Mentored junior developers, fostering growth and knowledge sharing within the team, leading to stronger collaboration and skill development.
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>
                Successfully integrated various third-party services, including Checkbox, QuickBooks, and Sendpulse, to streamline business processes and improve user experience.
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>
                Played a key role in maintaining and scaling Vue.js applications (Vue 2 and Vue 3), enhancing code stability and overall user experience.
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>

                Utilized TypeScript, Tailwind CSS, and i18n to create scalable, maintainable, and user-friendly applications.
              </li>
            </ul>
            <br>
            <span class="technologies">Technologies:</span> 
            Vue 2, Vue 3, Vuex, Vue Router, Solid.js, Tailwind CSS, i18n, TypeScript, Nuxt.js
          </div>
        </div>
        <!-- experience single item -->
        <div class="row g-0 resume-lines__item animate-in-up">
          <div class="row resume-lines__item-block">
            <div class="resume-lines__item-block-half">
              <span class="resume-lines__date animate-in-up">2021/06 - 2021/09</span>
              <span class="resume-lines__date animate-in-up">4 months</span>
            </div>
            <div class="resume-lines__item-block-half">
              <h5 class="resume-lines__title animate-in-up">Frontend Developer</h5>
              <p class="resume-lines__source animate-in-up">in the Medstar Solutions</p>
            </div>
          </div>
                    
          <div class="col-12 resume-margin-top">
            <ul class=" small animate-in-up resume-lines__descr">
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>

                Developed and maintained Vue 2 components, improving overall app functionality.
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>

                Integrated frontend with backend services to ensure seamless data flow.
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>

                Increased test coverage by writing unit tests with Jest, ensuring code reliability and quality.
              </li>
            </ul>
            <br />
            <span class="technologies">Technologies:</span> 
            Vue 2, Vuex, Vue Router, i18n, SCSS, Jest
            
          </div>
        </div>
        <!-- experience single item -->
        <div class="row g-0 resume-lines__item animate-in-up">
          <div class="row resume-lines__item-block">
            <div class="resume-lines__item-block-half">
              <span class="resume-lines__date animate-in-up">2020/04 - 2021/05</span>
              <span class="resume-lines__date animate-in-up">1 year 2 months</span>
            </div>
            <div class="resume-lines__item-block-half">
              <h5 class="resume-lines__title animate-in-up">Frontend Developer</h5>
              <p class="resume-lines__source animate-in-up">Self-Employed</p>
            </div>
          </div>
          
          <div class="col-12 resume-margin-top">
            <ul class=" small animate-in-up resume-lines__descr">
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>

                Developed a full-stack recommendation system using the MERN stack (MongoDB, Express, React, Node.js) to provide personalized recommendations through collaborative filtering techniques.
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>

                Integrated Vue 2, React, and native JavaScript to build responsive and dynamic front-end components, enhancing user experience and interactivity.
              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>

                Worked on both the front-end and back-end, ensuring seamless communication between the user interface and the database for real-time data processing.
              </li>
            </ul>
            <br />
            <span class="technologies">Technologies:</span> 
            Vue 2, React.js, Node.js, MongoDB, Express.js, SCSS, JavaScript

          </div>
        </div>

        <!-- experience single item -->
        <div class="row g-0 resume-lines__item animate-in-up">
          <div class="row resume-lines__item-block">
            <div class="resume-lines__item-block-half">
              <span class="resume-lines__date animate-in-up">2020/01 - 2020/04</span>
              <span class="resume-lines__date animate-in-up">4 months</span>
            </div>
            <div class="resume-lines__item-block-half">
              <h5 class="resume-lines__title animate-in-up">Junior Frontend Developer</h5>
              <p class="resume-lines__source animate-in-up">in the Varion</p>
            </div>
          </div>
          
          <div class="col-12 resume-margin-top">
            <ul class=" small animate-in-up resume-lines__descr">
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>

                Developed interactive games using Phaser.js, focusing on optimizing performance, game mechanics, and user experience.              </li>
              <li>
                <svg class="resume__icon">
                  <use xlink:href="#rhombus"></use>
                </svg>

                Built responsive and adaptive front-end components using Vue 2 and native JavaScript, ensuring seamless functionality across devices and screen sizes.              
              </li>
            </ul>
            <br />
            <span class="technologies">Technologies:</span> 
            Vue 2, JavaScript, Phaser.js, CSS, HTML

          </div>
        </div>
      </div>
      <!-- Experience Lines End -->

    </div>
    <!-- Content Block - Experience End -->

    <!-- Content Block - H3 Block Start -->
    <div class="content__block">
      <div class="section-h3 section-h3-grid">
        <h3 class="h3__title animate-in-up">My favourite tools</h3>
      </div>
    </div>
    <!-- Content Block - H3 Block End -->

    <!-- Content Block - Tools List Start -->
    <Tools />

    <Testimonials />
  </section>
</template>

<script setup>
import { useAnimateInUp } from '@/composables/useAnimateInUp';
import { useAnimateCard5 } from '@/composables/useAnimateCard5';
import Testimonials from '@/components/Testimonials.vue';
import Subtitle from '@/components/Subtitle.vue';
import { computed } from 'vue';
import Tools from './Tools.vue';

useAnimateInUp()
useAnimateCard5()

const startDate = new Date('2025-01-01')
const currentDate = new Date()

const lastWorkTime = computed(() => {
  const yearDiff = currentDate.getFullYear() === startDate.getFullYear() 
    ? 0
    : currentDate.getFullYear() - startDate.getFullYear()

  const monthDiff = currentDate.getMonth() - startDate.getMonth()

  return yearDiff ? `${yearDiff} years ${monthDiff}` :  `${monthDiff} months`
})
</script>

<style>
  @import '@/assets/styles/resume';
</style>