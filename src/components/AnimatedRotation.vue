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
  },
  id: {
    type: Number,
    default: () => 1
  }
});

const rotation = ref(0);
const rotatingElement = ref(null);
const svgElement = ref(null);

const isElementInView = (element) => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const elementOffsetTop = element.offsetTop;
  const elementHeight = element.offsetHeight;

  return (
    (scrollY + windowHeight >= elementOffsetTop) || 
    (scrollY <= elementOffsetTop + elementHeight)  
  );
}

const updateRotation = () => {
  if (!rotatingElement.value || !svgElement.value) return;

  const scrollY = window.scrollY;
  const value = 360
  const windowHeight = window.innerHeight; 
  const elementOffsetTop = rotatingElement.value.offsetTop; 
  
  let isShown = isElementInView(rotatingElement.value)

  if (isShown) {
    const scrollPosition = scrollY + windowHeight - elementOffsetTop; 
    const elementHeight = rotatingElement.value.offsetHeight;

    const rotationFactor = scrollPosition / (elementHeight - windowHeight)
    const rotationValue = rotationFactor * value; 

    rotation.value = rotationValue > value ? value : rotationValue; 
    
    svgElement.value.style.transform = `rotate(${rotation.value}deg)`;
  } else {
    rotation.value = 0; 
    svgElement.value.style.transform = `rotate(${rotation.value}deg)`;
  }
};

onMounted(() => {  
  window.addEventListener('scroll', updateRotation);
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateRotation);
});
</script>
