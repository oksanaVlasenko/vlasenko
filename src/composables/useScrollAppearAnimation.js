import { onMounted, ref } from 'vue';

export function useScrollAppearAnimation(yStart = 50, duration = 0.5, delay = 0.2) {
  const isVisible = ref(false);

  const animateElement = (element, index) => {
    element.style.opacity = 0;
    element.style.transform = `translateY(${yStart}px)`;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Apply delay before starting the transition
          setTimeout(() => {
            element.style.transition = `opacity ${duration}s ease, transform ${duration}s ease`;
            element.style.opacity = 1;
            element.style.transform = `translateY(0)`;
          }, index * delay * 1000); // Convert delay to milliseconds
          
          observer.disconnect(); // Stop observing once animation has occurred
        }
      });
    });

    observer.observe(element);
  };

  onMounted(() => {
    const elements = [
      ...document.querySelectorAll('.animate-headline'),
      ...document.querySelectorAll('.animate-card-3'),
      ...document.querySelectorAll('.animate-in-up'),
      ...document.querySelectorAll('.animate-card-5'),
    ]; // For multiple elements 
    
    elements.forEach((element, index) => {
      animateElement(element, index); // Pass index to create delay
    });
    isVisible.value = true;
  });

  return {
    isVisible,
  };
}
