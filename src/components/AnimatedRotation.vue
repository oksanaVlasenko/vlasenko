<template>
  <div ref="rotatingElement" class="rotating-btn" :class="`rotate-${id}`">
    <a :href="`#${link}`" class="rotating-btn__link slide-down">
      <svg
        ref="svgElement"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 120 120"
        style="enable-background:new 0 0 120 120;"
        xml:space="preserve"
        class="animate-rotation text-svg"
        data-value="360"
        
      >
        <defs>
          <path id="textPath" d="M110,59.5c0,27.6-22.4,50-50,50s-50-22.4-50-50s22.4-50,50-50S110,31.9,110,59.5z"/>
        </defs>
        <g>
          <use xlink:href="#textPath" fill="none"></use>
          <text>
            <textPath xlink:href="#textPath">{{ text }}</textPath>
          </text>
        </g>
      </svg>
      <svg class="rotating-btn__arrow">
        <use :xlink:href="`#${svgPath}`"></use>
      </svg>
    </a>
  </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const props = defineProps({
  svgPath: {
    type: String,
    default: () => 'arrowDown'
  },
  text: {
    type: String,
    default: () => 'Scroll for More * Scroll for More * '
  },
  link: {
    type: String,
    default: () => 'about'
  },
  id: {
    type: Number,
    default: () => 1
  }
});

const rotatingElement = ref(null);
const svgElement = ref(null);

onMounted(() => {  
  const value = svgElement.value.getAttribute('data-value');

  gsap.fromTo(svgElement.value, 
    { rotate: 0 },
    { 
      rotate: value, 
      ease: 'sine',
      scrollTrigger: {
        trigger: svgElement.value,
        scrub: true,
        toggleActions: 'play none none reverse',
      }
    });
});
</script>
