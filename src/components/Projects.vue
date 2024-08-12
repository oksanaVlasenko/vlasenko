<template>
  <div class="flex flex-col items-center justify-center flex-grow max-w-full overflow-x-hidden mt-6">
    <h2>Work history</h2>

    <div class="work-history">
      <div class="work">
        <div class="logo">
          <img 
            alt="logo"
            src="../assets/logo-fixiq.png"
          />
        </div>

        <div class="flex-grow h-px bg-gray-300 mx-4"></div>

        <div class="text-left">
          <p class="position">Frontend Developer</p>

          <p class="experience">2021-09 - 2024-07 (2 years 11 months)</p>

          <p class="field">Domain: <strong>SAAS</strong></p>

          <div>
            <p class="field">Tech stack</p>

            <div>
              <span>Vue</span>

              <span>Solid.js</span>
            </div>
          </div>
        </div>
        
      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  h2 {
    @apply 
      antialiased text-2xl text-center mb-2;
      color: var(--text-primary-color);
  }

  .work-history {
    @apply 
      rounded-lg bg-white dark:bg-zinc-800/90 shadow-md min-h-[40vh] lg:w-[120vh]  h-auto w-full flex flex-col justify-center my-4;
  }

  .logo {
    @apply
      w-[100px] h-[100px] flex items-center justify-center;
  }

  .work {
    @apply flex flex-col justify-around items-start mx-16 border-l border-gray-300 pl-4 lg:border-none lg:flex-row lg:items-center;
  }

  .position {
    color: var(--text-dark-gray);
    font-size: 1.3rem;
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