<template>
  <div class="card">
    <div class="contacts">
      <div>
        <img 
          alt="avatar"
          class="avatar"
          src="@/assets/avatar.jpg"
        />
      </div>
      
      <div>
        <div class="flex flex-col">
          <button 
            class="primary-btn mt-6"
            @click="$router.push('/contact')"
          >
            Ask a question
          </button>

          <button 
            class="primary-btn mt-6 icons-btn"
            @click="downloadPDF"
          >
            Download CV

            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M531.3 574.4l.3-1.4c5.8-23.9 13.1-53.7 7.4-80.7c-3.8-21.3-19.5-29.6-32.9-30.2c-15.8-.7-29.9 8.3-33.4 21.4c-6.6 24-.7 56.8 10.1 98.6c-13.6 32.4-35.3 79.5-51.2 107.5c-29.6 15.3-69.3 38.9-75.2 68.7c-1.2 5.5.2 12.5 3.5 18.8c3.7 7 9.6 12.4 16.5 15c3 1.1 6.6 2 10.8 2c17.6 0 46.1-14.2 84.1-79.4c5.8-1.9 11.8-3.9 17.6-5.9c27.2-9.2 55.4-18.8 80.9-23.1c28.2 15.1 60.3 24.8 82.1 24.8c21.6 0 30.1-12.8 33.3-20.5c5.6-13.5 2.9-30.5-6.2-39.6c-13.2-13-45.3-16.4-95.3-10.2c-24.6-15-40.7-35.4-52.4-65.8zM421.6 726.3c-13.9 20.2-24.4 30.3-30.1 34.7c6.7-12.3 19.8-25.3 30.1-34.7zm87.6-235.5c5.2 8.9 4.5 35.8.5 49.4c-4.9-19.9-5.6-48.1-2.7-51.4c.8.1 1.5.7 2.2 2zm-1.6 120.5c10.7 18.5 24.2 34.4 39.1 46.2c-21.6 4.9-41.3 13-58.9 20.2c-4.2 1.7-8.3 3.4-12.3 5c13.3-24.1 24.4-51.4 32.1-71.4zm155.6 65.5c.1.2.2.5-.4.9h-.2l-.2.3c-.8.5-9 5.3-44.3-8.6c40.6-1.9 45 7.3 45.1 7.4zm191.4-388.2L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z" fill="currentColor"></path></svg>
          </button>
        </div>

        <div class="icons custom-svg-spacing">
          <a
            href="https://t.me/kseniaVlasenko"
            rel="noreferrer"
            target="_blank"
          >
            <svg enable-background="new 0 0 24 24" height="24px" version="1.1" viewBox="0 0 32 32" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="telegram"><g><path d="M24.687,30.163c-0.402,0-0.843-0.132-1.32-0.395l-10.803-7.976c-0.121-0.089-0.195-0.228-0.203-0.378    c-0.007-0.15,0.053-0.295,0.165-0.396L25.322,9.503c0.205-0.185,0.521-0.169,0.706,0.037c0.185,0.205,0.168,0.521-0.037,0.706    l-12.34,11.106l10.254,7.576c0.271,0.145,0.729,0.329,1.055,0.178c0.332-0.152,0.496-0.637,0.576-1.017l4.375-20.617    c0.17-0.681,0.088-1.229-0.215-1.481c-0.231-0.192-0.575-0.206-0.947-0.038L3.033,15.871C2.244,16.188,1.996,16.514,2,16.622    c0.003,0.071,0.173,0.267,0.68,0.422l6.375,1.99l6.999-4.416c0.234-0.146,0.542-0.077,0.689,0.156    c0.147,0.233,0.078,0.542-0.156,0.689l-7.194,4.539C9.269,20.08,9.116,20.1,8.977,20.057l-6.592-2.058    c-1.17-0.358-1.37-0.99-1.384-1.335c-0.02-0.473,0.253-1.157,1.667-1.723l25.695-9.908c0.697-0.318,1.445-0.25,1.974,0.191    c0.613,0.511,0.813,1.413,0.549,2.474l-4.371,20.598c-0.184,0.878-0.566,1.457-1.137,1.719    C25.163,30.114,24.933,30.163,24.687,30.163z" fill="#263238"/></g><path d="M24.687,30.163c-0.402,0-0.843-0.132-1.32-0.395l-6.72-4.959c-0.222-0.164-0.27-0.478-0.105-0.699   c0.164-0.222,0.478-0.27,0.699-0.105l6.664,4.923c0.271,0.145,0.729,0.329,1.055,0.178c0.332-0.152,0.496-0.637,0.576-1.017   l4.375-20.617c0.17-0.681,0.088-1.229-0.215-1.481c-0.231-0.192-0.575-0.206-0.947-0.038L3.033,15.871   C2.244,16.188,1.996,16.514,2,16.622c0.003,0.071,0.173,0.267,0.68,0.422l6.594,2.058c0.158,0.049,0.281,0.174,0.33,0.332   l2.267,7.461c0.061,0.167,0.108,0.333,0.149,0.477c0.032,0.114,0.072,0.256,0.099,0.298c-0.004-0.005,0.076,0.019,0.289,0.02   c0.447,0,0.617-0.167,0.957-0.498l1.66-1.614c0.198-0.194,0.514-0.188,0.707,0.01c0.192,0.198,0.188,0.515-0.01,0.707L14.09,27.88   c-0.402,0.393-0.828,0.809-1.682,0.809c-0.98,0-1.178-0.434-1.351-1.046c-0.035-0.124-0.075-0.267-0.135-0.432l-2.198-7.233   l-6.339-1.979c-1.17-0.358-1.37-0.99-1.384-1.335c-0.02-0.473,0.253-1.157,1.667-1.723l25.695-9.908   c0.697-0.318,1.445-0.25,1.974,0.191c0.613,0.511,0.813,1.413,0.549,2.474l-4.371,20.598c-0.184,0.878-0.566,1.457-1.137,1.719   C25.163,30.114,24.933,30.163,24.687,30.163z" fill="#263238"/><g><g><g><g><g><g><path d="M18.5,14c0,0.275-0.225,0.5-0.5,0.5l0,0c-0.275,0-0.5-0.225-0.5-0.5l0,0c0-0.275,0.225-0.5,0.5-0.5         l0,0C18.275,13.5,18.5,13.725,18.5,14L18.5,14z" fill="#263238"/></g></g></g></g></g></g></g></svg>
          </a>

          <a
            href="https://github.com/oksanaVlasenko"
            rel="noreferrer"
            target="_blank"
          >
            <svg enable-background="new 0 0 24 24" height="24px" version="1.1" viewBox="0 0 32 32" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Github"><path d="M11.393,30.176c-0.171,0-0.342-0.029-0.506-0.089C4.695,27.841,0.728,21.911,1.015,15.33   c0.012-0.275,0.232-0.485,0.521-0.478c0.276,0.012,0.49,0.246,0.478,0.521c-0.268,6.142,3.435,11.677,9.214,13.772   c0.151,0.056,0.318,0.033,0.453-0.063c0.139-0.098,0.218-0.25,0.217-0.417l-0.008-1.573c-3.927,0.561-4.857-2.375-4.867-2.406   c-0.552-1.405-1.342-1.82-1.35-1.824c-0.342-0.229-0.996-0.676-0.81-1.262c0.167-0.528,0.852-0.563,1.136-0.572   c1.736,0.122,2.616,1.693,2.652,1.76c0.956,1.643,2.414,1.446,3.335,1.094c0.09-0.452,0.239-0.863,0.439-1.216   c-2.872-0.486-6.176-1.973-6.176-7.568c0-1.531,0.479-2.88,1.424-4.016C7.465,10.408,7.205,8.97,7.917,7.157   C7.972,7.017,8.087,6.91,8.23,6.864C8.374,6.817,9.703,6.47,12.46,8.29c1.119-0.291,2.309-0.442,3.539-0.448   c1.234,0.006,2.423,0.157,3.543,0.448c2.756-1.82,4.08-1.473,4.226-1.426c0.143,0.046,0.257,0.153,0.312,0.292   c0.715,1.813,0.456,3.251,0.247,3.927c0.944,1.133,1.422,2.482,1.422,4.016c0,5.595-3.308,7.078-6.185,7.559   c0.354,0.623,0.549,1.426,0.549,2.32c0,1.013-0.005,2.465-0.01,3.692c0,0.166,0.077,0.315,0.214,0.412   c0.137,0.096,0.306,0.119,0.463,0.063C26.295,27.141,30,21.858,30,16c0-3.863-1.54-7.46-4.335-10.129   c-2.794-2.667-6.462-4.037-10.336-3.855c-0.275,0.021-0.509-0.201-0.523-0.476c-0.013-0.276,0.2-0.51,0.476-0.523   c4.152-0.19,8.08,1.274,11.073,4.131C29.351,8.007,31,11.861,31,16c0,6.277-3.97,11.937-9.878,14.084   c-0.463,0.167-0.978,0.099-1.38-0.185c-0.401-0.283-0.64-0.744-0.638-1.233c0.005-1.226,0.01-2.676,0.01-3.688   c0-1.459-0.567-2.107-0.811-2.317c-0.15-0.13-0.21-0.337-0.151-0.526c0.059-0.19,0.225-0.327,0.422-0.349   c3.054-0.34,6.176-1.401,6.176-6.686c0-1.38-0.458-2.582-1.36-3.569c-0.13-0.143-0.167-0.347-0.094-0.526   c0.139-0.34,0.524-1.537-0.042-3.198c-0.423,0.012-1.503,0.189-3.34,1.44c-0.122,0.083-0.274,0.109-0.416,0.068   c-1.084-0.302-2.293-0.465-3.499-0.472c-1.218,0.006-2.395,0.165-3.494,0.472c-0.141,0.042-0.293,0.015-0.416-0.068   c-1.83-1.245-2.91-1.427-3.346-1.438c-0.563,1.661-0.177,2.855-0.039,3.196c0.072,0.179,0.036,0.383-0.094,0.525   c-0.904,0.991-1.362,2.192-1.362,3.57c0,5.282,3.115,6.35,6.162,6.697c0.196,0.022,0.361,0.158,0.42,0.347   c0.059,0.188,0.001,0.395-0.147,0.525c-0.224,0.197-0.621,0.672-0.756,1.64c-0.023,0.17-0.133,0.316-0.29,0.386   c-0.75,0.338-3.316,1.237-4.858-1.413c-0.011-0.019-0.525-0.921-1.444-1.186c0.326,0.218,1.077,0.852,1.631,2.265   c0.043,0.133,0.808,2.409,4.313,1.646c0.148-0.031,0.301,0.003,0.419,0.098c0.118,0.094,0.187,0.237,0.188,0.387l0.011,2.17   c0.002,0.491-0.237,0.955-0.641,1.239C12,30.082,11.698,30.176,11.393,30.176z" fill="#263238"/><path d="M15.737,31C7.474,31,1,24.411,1,16c0-3.629,1.238-7.111,3.485-9.804c0.176-0.212,0.493-0.241,0.704-0.063   C5.401,6.31,5.43,6.625,5.253,6.837C3.155,9.35,2,12.604,2,16c0,7.851,6.034,14,13.737,14C23.602,30,30,23.72,30,16   S23.602,2,15.737,2c-2.441,0-4.812,0.62-6.858,1.792C8.641,3.927,8.334,3.845,8.197,3.606C8.06,3.366,8.143,3.061,8.382,2.923   C10.579,1.665,13.123,1,15.737,1C24.153,1,31,7.729,31,16S24.153,31,15.737,31z" fill="#263238"/><g><g><g><g><g><g><path d="M7.543,4.552c0,0.275-0.225,0.5-0.5,0.5l0,0c-0.275,0-0.5-0.225-0.5-0.5l0,0         c0-0.275,0.225-0.5,0.5-0.5l0,0C7.318,4.052,7.543,4.276,7.543,4.552L7.543,4.552z" fill="#263238"/></g></g></g></g></g></g></g></svg>
          </a>
          
          <a
            href="https://www.linkedin.com/in/oksana-vlasenko-28b53919b/"
            rel="noreferrer"
            target="_blank"
          >
            <svg enable-background="new 0 0 24 24" height="24px" version="1.1" viewBox="0 0 32 32" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="LinkedIn"><path d="M4.983,8.875H4.94C2.657,8.875,1,7.361,1,5.275c0-2.089,1.692-3.606,4.023-3.606   c2.292,0,3.928,1.476,3.977,3.589C9,7.359,7.311,8.875,4.983,8.875z M5.023,2.669C3.243,2.669,2,3.741,2,5.275   c0,1.531,1.209,2.601,2.94,2.601h0.043C6.76,7.875,8,6.804,8,5.27C7.963,3.694,6.795,2.669,5.023,2.669z" fill="#263238"/><path d="M7.5,29h-5C2.224,29,2,28.776,2,28.5v-18C2,10.224,2.224,10,2.5,10h5C7.776,10,8,10.224,8,10.5v18   C8,28.776,7.776,29,7.5,29z M3,28h4V11H3V28z" fill="#263238"/><path d="M30.5,29h-6c-0.276,0-0.5-0.224-0.5-0.5V19c0-1.654-1.346-3-3-3s-3,1.346-3,3v9.5   c0,0.276-0.224,0.5-0.5,0.5h-6c-0.276,0-0.5-0.224-0.5-0.5v-18c0-0.276,0.224-0.5,0.5-0.5h6c0.276,0,0.5,0.224,0.5,0.5v3.014   c0,0.276-0.224,0.5-0.5,0.5s-0.5-0.224-0.5-0.5V11h-5v17h5v-9c0-2.206,1.794-4,4-4s4,1.794,4,4v9h5V17.5c0-3.584-2.916-6.5-6.5-6.5   c-1.384,0-2.722,0.406-3.871,1.173c-0.229,0.152-0.54,0.092-0.693-0.138s-0.092-0.54,0.139-0.693C20.388,10.464,21.918,10,23.5,10   c4.136,0,7.5,3.364,7.5,7.5v11C31,28.776,30.776,29,30.5,29z" fill="#263238"/></g></svg>
          </a>
        </div>
      </div>
    </div>

    <div class="info">
      <h1 class="title">Oksana Vlasenko</h1>

      <h2>Senior Frontend Developer</h2>

      <div>
        <div 
          :class="{
            'max-h-60 overflow-hidden': !isExpanded
          }"
        >
          <p class="text-left px-4 mb-4">
            I'm a <strong>software developer</strong> with 4+ years of web development. 
            I'm proficient in JavaScript, Vue 2, and have worked with Vue 3, 
            Node.js, Express.js, Tailwind CSS, TypeScript etc. <br /> <br />
            I started to work with React, but Vue's stolen my heart. 
            I have been working with Vue 2 over 3 years. <br /> <br />
            <strong>My goal</strong> is delivering the best possible user experience, performance, and intuitiveness in the products I develop. <br /> <br />
            <strong>My key points</strong> are carefully assess every detail of the design and user scenarios, pay attention for performance issues,
            know exactly how the product must work. <br /> <br />

            I’m convinced that attention to detail is critical. 
            Overlooking the small things can lead to a product that fails to meet user needs, regardless of its size or scope. <br /> <br />

            <strong>What are my expectations?</strong> <br />

            - user oriented development<br />
            - the developer should do what the business needs<br />
            - paid overtime
            <br /> <br />

            <strong>Why should you hire me?</strong> <br />
            - I'm <strong>fast-learner</strong> person - I had been learning Solid.js in two weeks and had started to use it right in the same time.
            In result, we've made a micro frontend (warehouse project) in Solid.js and now it use in Magento successfully. <br />
            - I'm <strong>goal-oriented</strong> - I understand the business's goal and I will give it my best to increase your success. <br />
            - I'm <strong>team-player</strong> - I've mentored junior developers on my previous position. 
            I can easy work with other developers and teams, but I also can be an independent player. <br />
            - I'm <strong>diligent</strong> - I always make my tasks in the best way and try to find perfect solution.
            - I'm <strong>passion</strong> about my profession
          
            <br /> <br />
            <strong>English:</strong> C1 - Advanced <br />
            
            <strong>Psychotype:</strong> 
            <a href="https://www.16personalities.com/profiles/1d069ba9ab5f9" target="_blank">
              Virtuoso (ISTP-T)
            </a>
          </p>
        </div>

        <button 
          class="primary-btn mt-4 mb-6" 
          @click="toggleExpand"
        >
          {{ isExpanded ? 'Show Less' : 'Show More' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import pdfUrl from '@/assets/CV_Oksana_Vlasenko.pdf'

export default {
  name: 'CardAbout',

  data() {
    return {
      isExpanded: false,
      pdfUrl
    }
  },

  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded
    },

    downloadPDF() {
      const link = document.createElement('a');
      link.href = this.pdfUrl;
      link.download = 'CV_Oksana_Vlasenko.pdf';
      link.click();
    }
  }
}
</script>

<style>
  .card {
    @apply 
    rounded-lg bg-white dark:bg-zinc-800/90 shadow-md min-h-[40vh] lg:grid lg:grid-cols-[30%_70%] h-auto w-full lg:w-auto flex flex-col justify-center my-4;
      /* grid-template-columns: 30% 70%; */
      /* //height: 50vh; lg:h-[50vh] lg:w-[100vh] */
  }

  

  .info {
    @apply
    flex flex-col justify-center items-center w-full lg:w-auto;
  }

  .contacts {
    @apply
      w-full flex flex-row justify-evenly items-center lg:flex-col lg:justify-center lg:border-r lg:border-r-teal-400;
  }


  

  .icons-btn {
    @apply
      flex flex-row items-center;
      color: #2dd4bf;

      svg {
        margin-left: 0.5rem;
        width: 16px;
      } 
    }

  h2 {
    @apply 
      antialiased text-xl text-center mb-6;
      color: var(--text-primary-color);
  }

  p {
    box-sizing: border-box;
  }
</style>