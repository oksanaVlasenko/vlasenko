<template>
  <div class="flex justify-center flex-col sm:flex-row list">
    <router-link 
      to="/"
      class="link"
      exact-active-class="active"
    >
      About me 
    </router-link>

    <router-link 
      to="/work-history"
      class="link"
      exact-active-class="active"
    >
      Work history
    </router-link>

    <router-link 
      to="/contact"
      class="link"
      exact-active-class="active"
    >
      Contact
    </router-link>
  </div>
</template>

<script></script>

<style>
.list {
  @apply
    flex rounded-full bg-white/90 px-3 font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 mr-20;
}

.link {
  @apply relative inline-block px-3 py-2 text-gray-800 dark:text-gray-200 transition-colors duration-300 hover:text-teal-500 dark:hover:text-teal-400;
}

/* Active link gradient underline */
.active {
  @apply relative inline-block text-teal-500 dark:text-teal-400;
}

.active::after {
  content: "";
  @apply absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 via-teal-400 to-teal-500 dark:from-teal-400 dark:via-teal-300 dark:to-teal-400;
  transform: scaleX(1); /* Ensure it's fully visible */
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
}

@media (max-width: 639px) {
  .active::after {
    @apply left-0 right-auto w-full; /* Span width of the text */
    transform: scaleX(0); /* Hide initially */
  }

  .active:hover::after {
    transform: scaleX(1); /* Show on hover */
  }
}

/* Optional: Add hover effect */
.link:hover::after {
  background-color: rgba(0, 0, 0, 0.1); /* Optional hover effect */
}
/* 
.link {
  @apply relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400;
}

.active {
  @apply absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0;
} */
</style>