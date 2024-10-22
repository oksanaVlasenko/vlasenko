import { onMounted, onBeforeUnmount } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useAnimateInUp() {
  const setInitialStates = () => {
    gsap.set('.animate-in-up', { y: 0, opacity: 1 });
  };

  onMounted(() => {
    const animateInUpElements = document.querySelectorAll('.animate-in-up');

    animateInUpElements.forEach((element) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 50,
          ease: 'sine',
        },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: element,
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    ScrollTrigger.addEventListener("refreshInit", setInitialStates);
  });

  onBeforeUnmount(() => {
    ScrollTrigger.removeEventListener("refreshInit", setInitialStates);
  });
}
