<template>
    <div class="navbar-wrap">
      <div class="nav-switcher">
        <span 
          class="nav-brand"
          @click="$router.push('/')"
        >
          OV
        </span>

        <ThemeButton />
      </div>

      <nav class="hidden lg:flex lg:justify-center">
        <ul>
          <!-- <li 
            v-for="link in links"
            :key="link.text"
            class="link"
          >
            <router-link 
              :to="link.to"
              exact-active-class="active"
              class="flex"
              @click="isMenuOpen = false"
            >
              <svg
                class="nav-link-icon"
              >
                <use :xlink:href="`#${link.icon}`"></use>
              </svg>
              
              {{ link.text }}
            </router-link>
          </li> -->
        </ul>
      </nav>

      <div class="nav-icons custom-svg-spacing">
        <a
          href="https://t.me/kseniaVlasenko"
          rel="noreferrer"
          target="_blank"
          class="nav-media-link"
        >
          <svg enable-background="new 0 0 24 24" height="24px" version="1.1" viewBox="0 0 32 32" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="telegram"><g><path d="M24.687,30.163c-0.402,0-0.843-0.132-1.32-0.395l-10.803-7.976c-0.121-0.089-0.195-0.228-0.203-0.378    c-0.007-0.15,0.053-0.295,0.165-0.396L25.322,9.503c0.205-0.185,0.521-0.169,0.706,0.037c0.185,0.205,0.168,0.521-0.037,0.706    l-12.34,11.106l10.254,7.576c0.271,0.145,0.729,0.329,1.055,0.178c0.332-0.152,0.496-0.637,0.576-1.017l4.375-20.617    c0.17-0.681,0.088-1.229-0.215-1.481c-0.231-0.192-0.575-0.206-0.947-0.038L3.033,15.871C2.244,16.188,1.996,16.514,2,16.622    c0.003,0.071,0.173,0.267,0.68,0.422l6.375,1.99l6.999-4.416c0.234-0.146,0.542-0.077,0.689,0.156    c0.147,0.233,0.078,0.542-0.156,0.689l-7.194,4.539C9.269,20.08,9.116,20.1,8.977,20.057l-6.592-2.058    c-1.17-0.358-1.37-0.99-1.384-1.335c-0.02-0.473,0.253-1.157,1.667-1.723l25.695-9.908c0.697-0.318,1.445-0.25,1.974,0.191    c0.613,0.511,0.813,1.413,0.549,2.474l-4.371,20.598c-0.184,0.878-0.566,1.457-1.137,1.719    C25.163,30.114,24.933,30.163,24.687,30.163z" fill="#263238"/></g><path d="M24.687,30.163c-0.402,0-0.843-0.132-1.32-0.395l-6.72-4.959c-0.222-0.164-0.27-0.478-0.105-0.699   c0.164-0.222,0.478-0.27,0.699-0.105l6.664,4.923c0.271,0.145,0.729,0.329,1.055,0.178c0.332-0.152,0.496-0.637,0.576-1.017   l4.375-20.617c0.17-0.681,0.088-1.229-0.215-1.481c-0.231-0.192-0.575-0.206-0.947-0.038L3.033,15.871   C2.244,16.188,1.996,16.514,2,16.622c0.003,0.071,0.173,0.267,0.68,0.422l6.594,2.058c0.158,0.049,0.281,0.174,0.33,0.332   l2.267,7.461c0.061,0.167,0.108,0.333,0.149,0.477c0.032,0.114,0.072,0.256,0.099,0.298c-0.004-0.005,0.076,0.019,0.289,0.02   c0.447,0,0.617-0.167,0.957-0.498l1.66-1.614c0.198-0.194,0.514-0.188,0.707,0.01c0.192,0.198,0.188,0.515-0.01,0.707L14.09,27.88   c-0.402,0.393-0.828,0.809-1.682,0.809c-0.98,0-1.178-0.434-1.351-1.046c-0.035-0.124-0.075-0.267-0.135-0.432l-2.198-7.233   l-6.339-1.979c-1.17-0.358-1.37-0.99-1.384-1.335c-0.02-0.473,0.253-1.157,1.667-1.723l25.695-9.908   c0.697-0.318,1.445-0.25,1.974,0.191c0.613,0.511,0.813,1.413,0.549,2.474l-4.371,20.598c-0.184,0.878-0.566,1.457-1.137,1.719   C25.163,30.114,24.933,30.163,24.687,30.163z" fill="#263238"/><g><g><g><g><g><g><path d="M18.5,14c0,0.275-0.225,0.5-0.5,0.5l0,0c-0.275,0-0.5-0.225-0.5-0.5l0,0c0-0.275,0.225-0.5,0.5-0.5         l0,0C18.275,13.5,18.5,13.725,18.5,14L18.5,14z" fill="#263238"/></g></g></g></g></g></g></g></svg>
        </a>

        <a
          href="https://github.com/oksanaVlasenko"
          rel="noreferrer"
          target="_blank"
          class="nav-media-link"
        >
          <svg enable-background="new 0 0 24 24" height="24px" version="1.1" viewBox="0 0 32 32" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Github"><path d="M11.393,30.176c-0.171,0-0.342-0.029-0.506-0.089C4.695,27.841,0.728,21.911,1.015,15.33   c0.012-0.275,0.232-0.485,0.521-0.478c0.276,0.012,0.49,0.246,0.478,0.521c-0.268,6.142,3.435,11.677,9.214,13.772   c0.151,0.056,0.318,0.033,0.453-0.063c0.139-0.098,0.218-0.25,0.217-0.417l-0.008-1.573c-3.927,0.561-4.857-2.375-4.867-2.406   c-0.552-1.405-1.342-1.82-1.35-1.824c-0.342-0.229-0.996-0.676-0.81-1.262c0.167-0.528,0.852-0.563,1.136-0.572   c1.736,0.122,2.616,1.693,2.652,1.76c0.956,1.643,2.414,1.446,3.335,1.094c0.09-0.452,0.239-0.863,0.439-1.216   c-2.872-0.486-6.176-1.973-6.176-7.568c0-1.531,0.479-2.88,1.424-4.016C7.465,10.408,7.205,8.97,7.917,7.157   C7.972,7.017,8.087,6.91,8.23,6.864C8.374,6.817,9.703,6.47,12.46,8.29c1.119-0.291,2.309-0.442,3.539-0.448   c1.234,0.006,2.423,0.157,3.543,0.448c2.756-1.82,4.08-1.473,4.226-1.426c0.143,0.046,0.257,0.153,0.312,0.292   c0.715,1.813,0.456,3.251,0.247,3.927c0.944,1.133,1.422,2.482,1.422,4.016c0,5.595-3.308,7.078-6.185,7.559   c0.354,0.623,0.549,1.426,0.549,2.32c0,1.013-0.005,2.465-0.01,3.692c0,0.166,0.077,0.315,0.214,0.412   c0.137,0.096,0.306,0.119,0.463,0.063C26.295,27.141,30,21.858,30,16c0-3.863-1.54-7.46-4.335-10.129   c-2.794-2.667-6.462-4.037-10.336-3.855c-0.275,0.021-0.509-0.201-0.523-0.476c-0.013-0.276,0.2-0.51,0.476-0.523   c4.152-0.19,8.08,1.274,11.073,4.131C29.351,8.007,31,11.861,31,16c0,6.277-3.97,11.937-9.878,14.084   c-0.463,0.167-0.978,0.099-1.38-0.185c-0.401-0.283-0.64-0.744-0.638-1.233c0.005-1.226,0.01-2.676,0.01-3.688   c0-1.459-0.567-2.107-0.811-2.317c-0.15-0.13-0.21-0.337-0.151-0.526c0.059-0.19,0.225-0.327,0.422-0.349   c3.054-0.34,6.176-1.401,6.176-6.686c0-1.38-0.458-2.582-1.36-3.569c-0.13-0.143-0.167-0.347-0.094-0.526   c0.139-0.34,0.524-1.537-0.042-3.198c-0.423,0.012-1.503,0.189-3.34,1.44c-0.122,0.083-0.274,0.109-0.416,0.068   c-1.084-0.302-2.293-0.465-3.499-0.472c-1.218,0.006-2.395,0.165-3.494,0.472c-0.141,0.042-0.293,0.015-0.416-0.068   c-1.83-1.245-2.91-1.427-3.346-1.438c-0.563,1.661-0.177,2.855-0.039,3.196c0.072,0.179,0.036,0.383-0.094,0.525   c-0.904,0.991-1.362,2.192-1.362,3.57c0,5.282,3.115,6.35,6.162,6.697c0.196,0.022,0.361,0.158,0.42,0.347   c0.059,0.188,0.001,0.395-0.147,0.525c-0.224,0.197-0.621,0.672-0.756,1.64c-0.023,0.17-0.133,0.316-0.29,0.386   c-0.75,0.338-3.316,1.237-4.858-1.413c-0.011-0.019-0.525-0.921-1.444-1.186c0.326,0.218,1.077,0.852,1.631,2.265   c0.043,0.133,0.808,2.409,4.313,1.646c0.148-0.031,0.301,0.003,0.419,0.098c0.118,0.094,0.187,0.237,0.188,0.387l0.011,2.17   c0.002,0.491-0.237,0.955-0.641,1.239C12,30.082,11.698,30.176,11.393,30.176z" fill="#263238"/><path d="M15.737,31C7.474,31,1,24.411,1,16c0-3.629,1.238-7.111,3.485-9.804c0.176-0.212,0.493-0.241,0.704-0.063   C5.401,6.31,5.43,6.625,5.253,6.837C3.155,9.35,2,12.604,2,16c0,7.851,6.034,14,13.737,14C23.602,30,30,23.72,30,16   S23.602,2,15.737,2c-2.441,0-4.812,0.62-6.858,1.792C8.641,3.927,8.334,3.845,8.197,3.606C8.06,3.366,8.143,3.061,8.382,2.923   C10.579,1.665,13.123,1,15.737,1C24.153,1,31,7.729,31,16S24.153,31,15.737,31z" fill="#263238"/><g><g><g><g><g><g><path d="M7.543,4.552c0,0.275-0.225,0.5-0.5,0.5l0,0c-0.275,0-0.5-0.225-0.5-0.5l0,0         c0-0.275,0.225-0.5,0.5-0.5l0,0C7.318,4.052,7.543,4.276,7.543,4.552L7.543,4.552z" fill="#263238"/></g></g></g></g></g></g></g></svg>
        </a>
        
        <a
          href="https://www.linkedin.com/in/oksana-vlasenko-28b53919b/"
          rel="noreferrer"
          target="_blank"
          class="nav-media-link"
        >
          <svg enable-background="new 0 0 24 24" height="24px" version="1.1" viewBox="0 0 32 32" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="LinkedIn"><path d="M4.983,8.875H4.94C2.657,8.875,1,7.361,1,5.275c0-2.089,1.692-3.606,4.023-3.606   c2.292,0,3.928,1.476,3.977,3.589C9,7.359,7.311,8.875,4.983,8.875z M5.023,2.669C3.243,2.669,2,3.741,2,5.275   c0,1.531,1.209,2.601,2.94,2.601h0.043C6.76,7.875,8,6.804,8,5.27C7.963,3.694,6.795,2.669,5.023,2.669z" fill="#263238"/><path d="M7.5,29h-5C2.224,29,2,28.776,2,28.5v-18C2,10.224,2.224,10,2.5,10h5C7.776,10,8,10.224,8,10.5v18   C8,28.776,7.776,29,7.5,29z M3,28h4V11H3V28z" fill="#263238"/><path d="M30.5,29h-6c-0.276,0-0.5-0.224-0.5-0.5V19c0-1.654-1.346-3-3-3s-3,1.346-3,3v9.5   c0,0.276-0.224,0.5-0.5,0.5h-6c-0.276,0-0.5-0.224-0.5-0.5v-18c0-0.276,0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5v3.014   c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V11h-5v17h5v-9c0-2.206,1.794-4,4-4s4,1.794,4,4v9h5V17.5c0-3.584-2.916-6.5-6.5-6.5   c-1.384,0-2.722,0.406-3.871,1.173c-0.229,0.152-0.54,0.092-0.693-0.138s-0.092-0.54,0.139-0.693C20.388,10.464,21.918,10,23.5,10   c4.136,0,7.5,3.364,7.5,7.5v11C31,28.776,30.776,29,30.5,29z" fill="#263238"/></g></svg>
        </a>
      </div>

      <div 
        class="nav-button"
        @click="isMenuOpen = !isMenuOpen"
      >
        <svg class="nav-burger-svg" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve" width="24px"><g><path d="M432,176H80c-8.8,0-16-7.2-16-16l0,0c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16l0,0C448,168.8,440.8,176,432,176z"></path><path d="M432,272H80c-8.8,0-16-7.2-16-16l0,0c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16l0,0C448,264.8,440.8,272,432,272z"></path><path d="M432,368H80c-8.8,0-16-7.2-16-16l0,0c0-8.8,7.2-16,16-16h352c8.8,0,16,7.2,16,16l0,0C448,360.8,440.8,368,432,368z"></path></g></svg>
      </div>

      <transition
        enter-active-class="transition-opacity duration-500 ease-in-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-500 ease-in-out"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
      <div
        v-if="isMenuOpen"
        class="nav-overlay"
      >
        <nav>
          <ul>
            <li 
              v-for="link in links"
              :key="link.text"
              class="link"
            >
              <router-link 
                :to="link.to"
                exact-active-class="active"
                class="flex"
                @click="isMenuOpen = false"
              >
                <svg
                  class="nav-link-icon"
                >
                  <use :xlink:href="`#${link.icon}`"></use>
                </svg>
                
                {{ link.text }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      </transition>
      
    </div>   
</template>

<script>
import ThemeButton from '@/components/ThemeButton.vue'

export default {
  components: {
    ThemeButton,
  },

  data() {
    return {
      isMenuOpen: false,
      isSmallScreen: false,
      links: [
        { to: '/', text: 'Home', icon: 'home' },
        { to: '/about', text: 'About me', icon: 'about' },
        { to: '/work-history', text: 'Work history', icon: 'project' },
        { to: '/contact', text: 'Contact', icon: 'contact' }
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
  .navbar-wrap {
    @apply 
     relative w-full h-full flex flex-row justify-between pt-4 md:sticky md:top-0 lg:sticky lg:flex-col lg:border-r-2 lg:border-[var(--text-primary-color)];
  }

  .nav-switcher {
    @apply flex lg:justify-center;
  }

  .nav-button {
    @apply cursor-pointer mr-4 bg-[var(--background-color-reverse)] h-fit p-2.5 lg:hidden;
  }

  .nav-burger-svg {
    @apply fill-current text-[var(--background-color-primary)];
  }

  .nav-brand {
    @apply text-4xl text-[var(--text-primary-color)] pt-2.5 ml-4 cursor-pointer lg:text-6xl;
    font-family: var(--font-family--display);
  }

  .link {
    @apply relative p-2.5 text-gray-800 dark:text-gray-200 transition-colors duration-300 text-[var(--color--gray-1)] hover:text-[var(--text-primary-color)] lg:text-xl lg:p-5;
  }

  .active {
    @apply flex text-[var(--color--gray-1)] dark:text-[var(--color--gray-1)];

    svg {
      fill: var(--color--gray-1);
    }
  }

  .nav-icons {
    @apply 
      hidden sm:flex flex-row justify-center lg:justify-around items-start cursor-pointer border-solid border-l-0 border-b-0 border-r-2 lg:border-r-0 lg:border-b-2 border-t-2 border-[var(--text-primary-color)];
    
    svg {
      stroke: var(--text-primary-color);
    }
  }

  .nav-media-link {
    @apply border-l-2 border-b-2 border-[var(--text-primary-color)] p-2.5 lg:border-0 lg:py-2.5 lg:px-8 lg:relative lg:after:content-[''] lg:after:absolute lg:after:right-0 lg:after:top-0 lg:after:bottom-0 lg:after:w-0.5 lg:after:bg-[var(--text-primary-color)] lg:last:after:content-none;
  }

  .nav-overlay {
    @apply fixed z-50 top-20 right-0 left-0 flex justify-center flex-col border-t-2 border-b-2 border-[var(--text-primary-color)] py-2.5;
    /* //height: 240px; */
    background-color: var(--background-color-primary);
  }

  .nav-link-icon {
    width: 24px;
    height: 24px;
    fill: var(--text-primary-color);
    margin-right: 1rem;
  }
</style>