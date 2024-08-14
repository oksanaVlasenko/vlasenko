<template>
  <div class="flex justify-center flex-col sm:flex-row list">
    <router-link 
      to="/"
      :class="['link', 'sm:inline-block', { 'hidden': $route.path !== '/' && !isMenuOpen, 'inline-block': isMenuOpen }]"
      exact-active-class="active"
      @click="isMenuOpen = false"
    >
      About me 
    </router-link>

    <router-link 
      to="/work-history"
      :class="['link', 'sm:inline-block', { 'hidden': $route.path !== '/work-history' && !isMenuOpen, 'inline-block': isMenuOpen }]"
      active-class="active"
      @click="isMenuOpen = false"
    >
      Work history
    </router-link>

    <router-link 
      to="/contact"
      :class="['link', 'sm:inline-block', { 'hidden': $route.path !== '/contact' && !isMenuOpen, 'inline-block': isMenuOpen }]"
      active-class="active"
      @click="isMenuOpen = false"
    >
      Contact 
    </router-link>

    <svg 
      :class="['open-menu-svg', { 'rotate-180': isMenuOpen, 'top-12': isMenuOpen, 'top-1.5': !isMenuOpen }]"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"
      @click="isMenuOpen = !isMenuOpen"
    >
      <path d="M7 10l5 5l5-5z"></path>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      links: [
        { to: '/', text: 'About me' },
        { to: '/work-history', text: 'Work history' },
        { to: '/contact', text: 'Contact' },
      ],
    };
  },
}
</script>

<style>
.list {
  @apply
    flex rounded-full bg-white/90 px-3 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 mr-20;
}

.link {
  @apply relative  px-3 py-2 text-gray-800 dark:text-gray-200 transition-colors duration-300 hover:text-teal-500 dark:hover:text-teal-400;
}

/* Active link gradient underline */
.active {
  @apply relative inline-block text-teal-500 dark:text-teal-400;
}

.active::after {
  content: "";
  @apply absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0;
  transform: scaleX(1); 
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

.open-menu-svg {
  @apply
  sm:hidden text-teal-500 rounded absolute right-0.5 cursor-pointer;
  width: 24px;
  height: 24px;
}

/* @media (max-width: 639px) {
  .active::after {
    @apply left-0 right-auto w-full; 
    transform: scaleX(0);
  }

  .active:hover::after {
    transform: scaleX(1); 
  }
} */

/* Optional: Add hover effect */
/* .link:hover::after {
  background-color: rgba(0, 0, 0, 0.1); /* Optional hover effect */
/* } */
/* 
.link {
  @apply relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400;
}

.active {
  @apply absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0;
} */
</style>