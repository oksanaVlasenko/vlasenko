<template>
  <div class="flex justify-center flex-col sm:flex-row list">
    <div v-if="!isSmallScreen">
      <router-link 
        v-for="link in links"
        :key="link.text"
        :to="link.to"
        :class="[
          'link', 
          'sm:inline-block', 
          { 
            'hidden': $route.path !== link.to && !isMenuOpen, 
            'inline-block': isMenuOpen 
          }
        ]"
        exact-active-class="active"
      >
        {{ link.text }}
      </router-link>
    </div>
    
    <div 
      v-else
      class="fixed z-100 top-0 right-0 left-0 small-list"
    >
      <div 
        class="flex justify-center flex-col sm:flex-row small-nav"
        @click="isMenuOpen = !isMenuOpen"
      >
        <p class="active">{{ activeLink }}</p>

        <svg 
          :class="['absolute open-menu-svg', { 'rotate-180': isMenuOpen }]"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"
          class="w-6 h-6 top-1/2 right-0 transform -translate-y-1/2 mr-2"
        >
          <path d="M7 10l5 5l5-5z"></path>
        </svg>
      </div>

      <div 
        v-if="isMenuOpen"
        class="flex justify-center flex-col"
      >
        <router-link 
          v-for="link in notActiveLink"
          :key="link.text"
          :to="link.to"
          :class="[
            'link', 
            'sm:inline-block', 
            { 
              'hidden': $route.path !== link.to && !isMenuOpen, 
              'inline-block': isMenuOpen 
            }
          ]"
          exact-active-class="active"
          @click="isMenuOpen = false"
        >
          {{ link.text }}
        </router-link>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isSmallScreen: false,
      links: [
        { to: '/', text: 'About me' },
        { to: '/work-history', text: 'Work history' },
        { to: '/contact', text: 'Contact' }
      ]
    }
  },

  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.matchMedia('(max-width: 640px)').matches
    }
  },

  computed: {
    notActiveLink() {
      if (!this.links.length) return []

      return this.links.filter(l => l.text !== this.activeLink)
    },

    activeLink() {
      if (this.$route.path === '/') return 'About me'

      let link = this.links.find(l => this.$route.path === l.to)

      return link ? link.text : ''
    }
  },

  mounted() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize)
  }
}
</script>

<style>
.list {
  @apply
    flex rounded-full bg-white/90 px-3 font-medium shadow-lg shadow-zinc-800/5 backdrop-blur dark:bg-zinc-800/90 mr-20;
}

.small-list {
  @apply
    flex justify-center flex-col rounded-full bg-white/90 px-3 font-medium  shadow-lg shadow-zinc-800/5 backdrop-blur dark:bg-zinc-800/90;
}

.small-nav {
  @apply px-3 py-2 cursor-pointer;
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