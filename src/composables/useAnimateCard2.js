import { onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAnimateCard2() {

  const setInitialStates = () => {
    gsap.set('.animate-card-2', { y: 0, opacity: 1 });
  };

  onMounted(() => {
    gsap.set(".animate-card-2", { y: 100, opacity: 0 });

    ScrollTrigger.batch(".animate-card-2", {
      interval: 0.1,
      batchMax: 2,
      duration: 6,
      onEnter: (batch) => gsap.to(batch, {
        opacity: 1,
        y: 0,
        ease: 'sine',
        stagger: { each: 0.15, grid: [1, 2] },
        overwrite: true
      }),
      onLeave: (batch) => gsap.set(batch, { opacity: 1, y: 0, overwrite: true }),
      onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) => gsap.set(batch, { opacity: 0, y: 100, overwrite: true })
    });
    
    ScrollTrigger.addEventListener("refreshInit", setInitialStates);
  });

  onBeforeUnmount(() => {
    ScrollTrigger.removeEventListener("refreshInit", setInitialStates);
  });
}
