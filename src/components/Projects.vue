<template>
  <div class="flex flex-col items-center justify-center flex-grow max-w-full overflow-x-hidden mt-6 pt-9">
    <h2>Work history</h2>

    <div class="work-history">
      <div class="work">
        <div class="logo">
          <img 
            alt="logo"
            src="../assets/logo-fixiq.png"
          />
        </div>

        <div class="work-info">
          <p class="position">
            FixIQ Pro
          </p>

          <div class="details">
            <p class="experience">Frontend Developer</p>

            <p class="experience">2021-09 - 2024-07</p>
          </div>
        </div>
      </div>  
      
      <div class="work">
        <div class="logo">
          <img 
            alt="logo"
            src="../assets/medstar-logo.png"
          />
        </div>

        <div class="work-info">
          <p class="position">
            Medstar Solutions
          </p>

          <div class="details">
            <p class="experience">Frontend Developer</p>

            <p class="experience">2021-06 - 2021-09</p>
          </div>
        </div>
      </div>   

      <div class="work">
        <div class="logo">
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 640 512" class="freelance-icon">
            <path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z" fill="none"></path>
          </svg>
        </div>

        <div class="work-info">
          <p class="position">
            Freelance
          </p>

          <div class="details">
            <p class="experience">Frontend Developer</p>

            <p class="experience">2020-07 - 2021-05</p>
          </div>
        </div>
      </div> 
      
      <div class="work">
        <div class="logo">
          <img 
            alt="logo"
            src="../assets/varion.png"
          />
        </div>

        <div class="work-info">
          <p class="position">
            Varion
          </p>

          <div class="details">
            <p class="experience">Frontend Developer</p>

            <p class="experience">2020-01 - 2020-04</p>
          </div>
        </div>
      </div>  

      <button 
        class="primary-btn mt-6 icon-btn"
        @click="downloadPDF"
      >
        Download CV

        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M531.3 574.4l.3-1.4c5.8-23.9 13.1-53.7 7.4-80.7c-3.8-21.3-19.5-29.6-32.9-30.2c-15.8-.7-29.9 8.3-33.4 21.4c-6.6 24-.7 56.8 10.1 98.6c-13.6 32.4-35.3 79.5-51.2 107.5c-29.6 15.3-69.3 38.9-75.2 68.7c-1.2 5.5.2 12.5 3.5 18.8c3.7 7 9.6 12.4 16.5 15c3 1.1 6.6 2 10.8 2c17.6 0 46.1-14.2 84.1-79.4c5.8-1.9 11.8-3.9 17.6-5.9c27.2-9.2 55.4-18.8 80.9-23.1c28.2 15.1 60.3 24.8 82.1 24.8c21.6 0 30.1-12.8 33.3-20.5c5.6-13.5 2.9-30.5-6.2-39.6c-13.2-13-45.3-16.4-95.3-10.2c-24.6-15-40.7-35.4-52.4-65.8zM421.6 726.3c-13.9 20.2-24.4 30.3-30.1 34.7c6.7-12.3 19.8-25.3 30.1-34.7zm87.6-235.5c5.2 8.9 4.5 35.8.5 49.4c-4.9-19.9-5.6-48.1-2.7-51.4c.8.1 1.5.7 2.2 2zm-1.6 120.5c10.7 18.5 24.2 34.4 39.1 46.2c-21.6 4.9-41.3 13-58.9 20.2c-4.2 1.7-8.3 3.4-12.3 5c13.3-24.1 24.4-51.4 32.1-71.4zm155.6 65.5c.1.2.2.5-.4.9h-.2l-.2.3c-.8.5-9 5.3-44.3-8.6c40.6-1.9 45 7.3 45.1 7.4zm191.4-388.2L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0 0 42 42h216v494z" fill="currentColor"></path></svg>
      </button>
    </div>

    <div class="hidden md:block">
      <GithubActivity />
    </div>
  </div>
</template>

<script>
import GithubActivity from './GithubActivity.vue';

export default {
  components: {
    GithubActivity
  }
}
</script>

<style>
  h2 {
    @apply antialiased text-2xl text-center mb-2;

    color: var(--text-primary-color);
  }

  .icon-btn {
    @apply
      flex justify-center items-center w-fit;
      color: #2dd4bf;
      margin: 0 auto 1rem auto;

      svg {
        margin-left: 0.5rem;
        width: 16px;
      } 
    }

  .work-history {
    @apply 
      rounded-lg bg-white dark:bg-zinc-800/90 shadow-md min-h-[40vh] lg:w-[120vh]  h-auto w-full flex flex-col justify-center my-4;
  }

  .logo {
    @apply
      w-[50px] h-[45px] flex items-center justify-center rounded-full shadow-md mr-4 lg:w-[100px] lg:h-[90px];
  }

  .work {
    @apply flex flex-row items-center justify-start ml-20 lg:mx-16 pl-4 lg:border-none mb-4 mt-4;
  }

  .work-info {
    @apply flex flex-col items-start w-full;
  }

  .freelance-icon {
    @apply w-[32px] lg:w-[48px];

    path {
      fill: var(--text-dark-gray);
    }
   
  }

  .details {
    @apply flex w-full flex-col items-start lg:justify-between lg:items-center lg:flex-row;
  }

  .position {
    color: var(--text-dark-gray);
    font-size: 1rem;
  }

  .experience {
    color: var(--text-light-gray);
    font-size: .8rem;
  }

  .field {
    color: var(--text-light-gray);
    font-size: .8rem;
  }

  span {
    display: inline-block;
    padding: 6px 12px;
    border-radius: 50px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 5px 10px 5px 0;
    line-height: 1;
    cursor: pointer;
    font-size: 12px;
    background-color: var(--background-color-reverse);
    color: var(--text-light-gray);
  }
</style>