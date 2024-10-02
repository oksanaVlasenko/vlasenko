<template>
  <button 
    id="color-switcher" 
    class="color-switcher header__switcher btn" 
    type="button" 
    role="switch" 
    aria-label="light/dark mode" 
    :aria-checked="currentTheme === 'dark'"
    @click="toggleTheme"
  >
    <svg>
      <use :xlink:href="`#${currentIconClass}`"></use>
    </svg>
  </button>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

// Reactive reference for the current theme
const currentTheme = ref(getCurrentTheme());

// Function to get the current theme from localStorage or system preference
function getCurrentTheme() {
  return localStorage.getItem('template.theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

// Function to load the theme and update the root element
function loadTheme(theme) {
  const root = document.documentElement; // Use document.documentElement to target <html> or <body>
  root.setAttribute('color-scheme', theme);
}

// Computed property for icon class based on current theme
const currentIconClass = computed(() => (currentTheme.value === 'dark' ? 'sun' : 'moon'));

// Function to toggle the theme
function toggleTheme() {
  currentTheme.value = currentTheme.value === 'dark' ? 'light' : 'dark';
  localStorage.setItem('template.theme', currentTheme.value);
  loadTheme(currentTheme.value);
}

// Load the theme on component mount
onMounted(() => {
  loadTheme(currentTheme.value);
});
</script>

<style scoped>
/* .switcher {
  @apply absolute top-2.5 left-1/2;
} */
</style>
