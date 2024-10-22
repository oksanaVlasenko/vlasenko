import { onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAnimateCard5() {
  const setInitialStates = () => {
    gsap.set('.animate-card-5', { y: 0, opacity: 1 });
  };

  onMounted(() => {
    // Initial state setup for .animate-card-5
    gsap.set(".animate-card-5", { y: 50, opacity: 0 });

    ScrollTrigger.batch(".animate-card-5", {
      interval: 0.1,
      batchMax: 5,
      delay: 1000, // Delay before starting the animation
      onEnter: (batch) => gsap.to(batch, {
        opacity: 1,
        y: 0,
        ease: 'sine',
        stagger: { each: 0.15, grid: [1, 5] },
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
