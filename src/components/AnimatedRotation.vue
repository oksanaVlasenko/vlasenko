<template>
  <div ref="rotatingElement" class="rotating-btn">
    <a :href="`#${link}`" class="rotating-btn__link slide-down">
      <svg
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
        :style="{ transform: `rotate(${rotation}deg)` }"
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
import { defineProps, ref, onMounted, onUnmounted } from 'vue';

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
  }
});

const rotation = ref(0);
const rotatingElement = ref(null);

let element;

const updateRotation = () => {
  if (!element) return; 

  console.log(rotatingElement.value, ' value rotatingElement')

  const scrollY = window.scrollY;
  const value = parseInt(360, 10); 
  const elementOffsetTop = element.offsetTop;
  const windowHeight = window.innerHeight;
  
  if (scrollY + windowHeight > elementOffsetTop && scrollY < elementOffsetTop + element.offsetHeight) {
    const scrollPosition = scrollY + windowHeight - elementOffsetTop; 
    const elementHeight = element.offsetHeight;

    const rotationFactor = scrollPosition / (elementHeight + windowHeight); 
    const rotationValue = rotationFactor * value; 

    rotation.value = rotationValue > value ? value : rotationValue; 
  } else {
    rotation.value = 0; 
  }
};

onMounted(() => {
  element = document.querySelector('.rotating-btn'); 
  
  window.addEventListener('scroll', updateRotation);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateRotation);
});
</script>
