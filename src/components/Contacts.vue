<template>
  <div class="flex flex-col items-center justify-center flex-grow max-w-full overflow-x-hidden">
    <h2>Get in touch</h2>
    
    <div class="contact">
      <div class="media-group">
        <p>Talk to me</p>

        <div class="media">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
          
          <p class="name">Linkedin</p>

          <p class="link">https://www.linkedin.com/in/oksana-vlasenko-28b53919b/</p>

          <a 
            class="icon-btn"
            href="https://www.linkedin.com/in/oksana-vlasenko-28b53919b/"
            target="_blank"
          >
            Write me 
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g fill="none"><path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07z"></path></g></svg>
          </a>
        </div>

        <div class="media">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"></path></svg>
          
          <p class="name">Email</p>

          <p class="link">vlasenkoksenia642@gmail.com</p>

          <a 
            class="icon-btn"
            href="mailto:vlasenkoksenia642@gmail.com"
            target="_blank"
          >
            Write me 
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g fill="none"><path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07z" fill="currentColor"></path></g></svg>
          </a>
        </div>

        <div class="media">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9l-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9l190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284L16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>
          
          <p class="name">Telegram</p>

          <p class="link">@kseniaVlasenko</p>

          <a 
            class="icon-btn"
            href="https://t.me/kseniaVlasenko"
            target="_blank"
          >
            Write me 
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g fill="none"><path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07z" fill="currentColor"></path></g></svg>
          </a>
        </div>
      </div>

      <div class="contact-me">
        <p class="sub-title">Contact Me</p>

        <form action="" class="contact__form">
          <div class="contact__form-div">
            <label for="" class="contact__form-tag">Name</label>
            <input type="text" name="name" class="contact__form-input" placeholder="Insert your name" required="">
          </div>
          
          <div class="contact__form-div">
            <label for="" class="contact__form-tag">Mail</label>
            <input type="email" name="email" class="contact__form-input" placeholder="Insert your email" required="">
          </div>
          
          <div class="contact__form-div contact__form-area">
            <label for="" class="contact__form-tag">Message</label>
            <textarea name="message" cols="30" rows="10" class="contact__form-input" placeholder="Write your message">

            </textarea>
          </div>
          
          <button class="button button--flex">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .contact {
    @apply 
      rounded-lg bg-white dark:bg-zinc-800/90 shadow-md min-h-[40vh] lg:w-[120vh] lg:grid lg:grid-cols-[50%_50%] h-auto w-full flex flex-col justify-center my-4;
  }

  h2 {
    @apply 
      antialiased text-2xl text-center mb-2;
      color: var(--text-primary-color);
  }

  svg {
    width: 24px;
    height: 24px;
  }

  .media {
    @apply 
      flex flex-col items-center justify-center p-4;
  }

  .contact-me {
    @apply 
      flex flex-col items-center justify-center p-4;
  }

  .media-group {
    @apply
    lg:border-r lg:border-r-teal-400;
  }

  .sub-title {
    margin-bottom: 1rem;
  }

  .name {
    /* padding-bottom: .5rem; */
    color: var(--text-dark-gray);
    /* //color: var(----text-reverse-color); */
  }

  .link {
    /* padding-bottom: .5rem; */
    color: var(--text-light-gray);
    cursor: pointer;
  }

  .icon {
    fill: var(--background-color-reverse);
  }


  .icon-btn {
    @apply
      flex flex-row items-center;
    
      color: var(--text-light-gray);

    svg {
      margin-left: 0.5rem;
      width: 16px;
    } 
  }

  
  .icon-btn:hover {
    svg {
      margin-left: 0.75rem;
    }
    
  }

  .contact__form {
    width: 360px;
  }

  .contact__form-div {
    height: 4rem;
    margin-bottom: 2rem;
    position: relative;
  }

  .contact__form-area {
    height: 11rem;
    margin: none;
  }

  .contact__form-tag {
    background-color: var(--background-color-secondary);
    font-size: 0.75rem;
    left: 1.25rem;
    padding: .25rem;
    position: absolute;
    top: -.75rem;
    z-index: 10;
    color: var(--text-primary-color);
  }

  .contact__form-input {
    background: none;
    border: 2px solid var(--text-primary-color);
    border-radius: .75rem;
    color: #757575;
    height: 100%;
    left: 0;
    outline: none;
    padding: 1.5rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .button {
    @apply
    bg-white dark:bg-zinc-800/90 shadow-md text-base leading-5 rounded-lg;
    padding: 1rem 1.75rem;
    color: #2dd4bf;
    /* color: var(--text-primary-color); */
    font-weight: 500;
    align-items: center;
    display: inline-flex;
  }
</style>