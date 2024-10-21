import { onMounted, ref } from 'vue';

export function useScrollAppearAnimation(yStart = 50, duration = 0.3, delay = 0.1) {
  // const isVisible = ref(false);

  // const animateElement = (element, index) => {
  //   element.style.opacity = 0;
  //   element.style.transform = `translateY(${yStart}px)`;

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         // Apply delay before starting the transition
  //         setTimeout(() => {
  //           element.style.transition = `opacity ${duration}s ease, transform ${duration}s ease`;
  //           element.style.opacity = 1;
  //           element.style.transform = `translateY(0)`;
  //         }, index * delay * 1000); // Convert delay to milliseconds
          
  //         observer.disconnect(); // Stop observing once animation has occurred
  //       }
  //     });
  //   });

  //   observer.observe(element);
  // };

  // onMounted(() => {    
  //   // animate-card-3 animate-card-5
  //   const elements = [
  //     ...document.querySelectorAll('.animate-headline'),
  //     ...document.querySelectorAll('.animate-card-3'),
  //     ...document.querySelectorAll('.animate-in-up'),
  //     ...document.querySelectorAll('.animate-card-5'),
  //   ];

  //   elements.forEach((element, index) => {
  //     animateElement(element, index); // Pass index to create delay
  //   });
  //   isVisible.value = true;
  // });

  // return {
  //   isVisible,
  // };
}
