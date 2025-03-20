<template>
  <section id="portfolio" class="inner inner-first portfolio">
    <div class="content__block section-grid-title">
      <Subtitle title="Portfolio" />

      <h2 class="h2__title animate-in-up">Check out my featured projects</h2>
    </div>
    
    <div class="content__block grid-block">
      <div class="container-fluid px-0 inner__gallery">
        <div class="row gx-0 my-gallery" itemscope itemtype="http://schema.org/ImageGallery">

          <figure class="gallery__item grid-item animate-card-2" itemprop="associatedMedia" itemscope itemtype="http://schema.org/ImageObject">
            <a target="_blank" href="https://nextjs-dashboard-ebon-sigma-74.vercel.app/">
              <img src="@/assets/murmlex.png" class="gallery__image" itemprop="thumbnail" alt="Image description">
            </a>
      
            <figcaption class="gallery__descr" itemprop="caption description">
              <h5>MurmLex</h5>
              <div class="card__tags d-flex flex-wrap">
                <span class="rounded-tag ">Next.js</span>
                <span class="rounded-tag ">AI</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useAnimateInUp } from '@/composables/useAnimateInUp';
import { useAnimateCard2 } from '@/composables/useAnimateCard2';
import Subtitle from '@/components/Subtitle.vue';

useAnimateCard2()
useAnimateInUp()

</script>

<style>
  @import '@/assets/styles/about';
</style>