<template>
  <div>
    <div class="content__block section-title">
      <Subtitle title="Testimonials" />

      <h2 class="h2__title animate-in-up">Colleagues say about me</h2>
    </div>

    <div class="content__block">
      <div class="testimonials-slider">
        <div class="swiper-testimonials">
          <div class="swiper-wrapper">
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="index"
              class="swiper-slide"
              :data-index="index"
              :class="{
                'swiper-slide-active': index === activeIndex,
                'swiper-slide-prev': index === prevIndex,
                'swiper-slide-next': index === nextIndex
              }"
            >
              <div class="testimonials-card">
                <div class="testimonials-card__author">
                  <p class="tauthor__name">{{ testimonial.name }}</p>
                  <p class="tauthor__position">{{ testimonial.role }}</p>
                  <div class="tauthor__rating">
                    <svg v-for="star in 5" :key="star" class="testimonials__icon">
                      <use xlink:href="#star"></use>
                    </svg>
                  </div>
                </div>
                <div class="testimonials-card__descr">
                  <p  class="tooltip-line-clamp">{{ testimonial.testimonial }}</p>
                </div>

                <div class="testimonials-card__btnholder animate-in-up">
                  <a class="btn mobile-vertical btn-line btn-transparent slide-right" target="_blank" href="https://www.linkedin.com/in/oksana-vlasenko-28b53919b/details/recommendations/?detailScreenTabIndex=0">
                    <span class="btn-caption">
                      View on LinkedIn

                      <svg class="testimonials__icon">
                        <use xlink:href="#arrowRight"></use>
                      </svg>
                    </span>
                    
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="swiper-button-prev mxd-slider-btn-square mxd-slider-btn-square-prev animate-in-up">
            <button 
              class="btn btn-square btn-square-s btn-outline slide-left"
              @click="() => updateActiveTestimonial('previous')"
            >
              <svg>
                <use xlink:href="#leftChevron"></use>
              </svg>              
            </button>
          </div>

          <div class="swiper-button-next mxd-slider-btn-square mxd-slider-btn-square-next animate-in-up">
            <button 
              class="btn btn-square btn-square-s btn-outline slide-right" 
              @click="() => updateActiveTestimonial('next')"
            >
              <svg>
                <use xlink:href="#rightChevron"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useAnimateInUp } from '@/composables/useAnimateInUp';
  import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'
  import gsap from 'gsap';
  import Subtitle from '@/components/Subtitle.vue';

  const testimonials = [{
    name: 'Nataliia Vyrsta',
    role: 'Front-End Developer',
    testimonial: 'I have had the pleasure of working closely with Oksana Vlasenko, and I can confidently say that she is an exceptional frontend developer. Working with her is incredibly easy; she has a knack for making complex tasks seem effortless and always fosters a collaborative environment. Oksana has been an outstanding mentor to me, guiding me through various challenges and helping me grow professionally. Her ability to quickly understand and navigate through code is remarkable, and she consistently makes brilliant architectural decisions that enhance our projects. Communication with Oksana is always smooth and straightforward. She has a unique ability to explain complex concepts in an easily digestible manner, making her a joy to work with. Her professionalism, combined with her technical prowess, makes her an invaluable asset to any team.'
  },
  {
    name: 'Roman Almazov',
    role: 'Lead Frontend Engineer',
    testimonial: 'Oksana is easily one of the best frontend engineers I have worked with on the same team over the past 12 years, not only in terms of skills, but also in hard work, enthusiasm and team play, which not every person can maintain and endure'
  },
  {
    name: 'Eduard Donets',
    role: 'QA/QC Engineer',
    testimonial: 'Оксана проявила себе як висококваліфікований фронтенд-розробник із глибокими знаннями сучасних веб-технологій, таких як HTML, CSS, JavaScript, а також фреймворків, таких як React/Vue.js. Демонструвала вміння розробляти чистий, модульний та підтримуваний код, завдяки чому проєкт розвивався під найвищим стандартами. Окрім технічних знань, хочу відзначити чудові комунікаційні навички та здатністю працювати в команді. Плідна співпраця з дизайнерами, бекенд-розробниками та відділом QA, дозволяло швидко вирішувати будь-які питання та вдосконалювати кінцевий продукт. Вміння аналізувати задачі та пропонувати оптимальні рішення значно підвищували ефективність командної роботи. Я рекомендую Оксану як надійного, ініціативного та талановитого фронтенд-розробника, який здатний приносити реальні результати і робити значний внесок у розвиток будь-якого проєкту.'
  }
  ]

  const activeIndex = ref(0);
  let autoSwitchInterval = null;

  const prevIndex = computed(() =>
    activeIndex.value === 0 ? testimonials.length - 1 : activeIndex.value - 1
  );
  const nextIndex = computed(() =>
    activeIndex.value === testimonials.length - 1 ? 0 : activeIndex.value + 1
  );

  const updateActiveTestimonial = async (direction) => {
    const oldIndex = activeIndex.value;
    const newIndex = direction === "next" ? nextIndex.value : prevIndex.value;

    gsap.to(`.swiper-slide[data-index="${oldIndex}"] .testimonials-card`, {
      x: direction === "next" ? -150 : 150,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out"
    });

    activeIndex.value = newIndex;
    await nextTick();

    gsap.fromTo(`.swiper-slide[data-index="${newIndex}"] .testimonials-card`,
      { x: direction === "next" ? 150 : -150, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
    );
  };

  const startAutoSwitch = () => {
    autoSwitchInterval = setInterval(() => updateActiveTestimonial("next"), 5000);
  };

  const stopAutoSwitch = () => {
    clearInterval(autoSwitchInterval);
  };

  onMounted(() => startAutoSwitch());
  onBeforeUnmount(() => stopAutoSwitch());

  useAnimateInUp()
</script>

<style>
  @import '@/assets/styles/testimonials';
</style>