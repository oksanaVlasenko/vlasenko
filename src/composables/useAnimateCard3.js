// src/composables/useAnimateInUp.js
import { onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAnimateCard3() {

  const setInitialStates = () => {
    gsap.set('.animate-card-3', { y: 0, opacity: 1 });
  };

  onMounted(() => {
    gsap.set(".animate-card-3", { y: 50, opacity: 0 });

    ScrollTrigger.batch(".animate-card-3", {
      interval: 0.1,
      batchMax: 3,
      duration: 3,
      onEnter: (batch) => gsap.to(batch, {
        opacity: 1,
        y: 0,
        ease: 'sine',
        stagger: { each: 0.15, grid: [1, 3] },
        overwrite: true
      }),
      onLeave: (batch) => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
      onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 50, overwrite: true })
    });
    
    ScrollTrigger.addEventListener("refreshInit", setInitialStates);
  });

  onBeforeUnmount(() => {
    ScrollTrigger.removeEventListener("refreshInit", setInitialStates);
  });
}
