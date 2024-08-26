<template>
  <div class="flex flex-col items-center justify-center flex-grow max-w-full overflow-x-hidden mt-6 pt-9">
    <h2>Get in touch</h2>
    
    <div class="contact">
      <div class="media-group">
        <p class="sub-title">Talk to me</p>

        <div class="media">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
          
          <p class="name">Linkedin</p>

          <p class="text-link">https://www.linkedin.com/in/oksana-vlasenko-28b53919b/</p>

          <a 
            class="icon-btn"
            href="https://www.linkedin.com/in/oksana-vlasenko-28b53919b/"
            target="_blank"
          >
            Write me 
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 28 28"><g fill="none"><path d="M15.268 4.21a.75.75 0 0 0-1.04 1.08l8.275 7.96H3.75a.75.75 0 0 0 0 1.5h18.752l-8.273 7.959a.75.75 0 0 0 1.04 1.08l9.428-9.069a1 1 0 0 0 0-1.441l-9.428-9.07z" fill="currentColor"></path></g></svg>
          </a>
        </div>

        <div class="media">
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44z"></path></svg>
          
          <p class="name">Email</p>

          <p class="text-link">vlasenkoksenia642@gmail.com</p>

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

          <p class="text-link">@kseniaVlasenko</p>

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

        <form 
          ref="form"
          class="contact__form" 
          @submit.prevent="sendEmail" 
        >
          <div class="contact__form-div">
            <label for="" class="contact__form-tag">
              Name
            </label>
            
            <input 
              v-model="form.name" 
              type="text" 
              name="name" 
              class="contact__form-input border" 
              placeholder="Insert your name" 
              required=""
            >
          </div>
          
          <div class="contact__form-div">
            <label for="" class="contact__form-tag">
              Mail
            </label>
            
            <input 
              v-model="form.email" 
              type="email" 
              name="email" 
              class="contact__form-input" 
              placeholder="Insert your email" 
              required=""
            >
          </div>
          
          <div class="contact__form-div contact__form-area">
            <label for="" class="contact__form-tag">
              Message
            </label>
            
            <textarea 
              v-model="form.message" 
              name="message" 
              cols="30" 
              rows="10" 
              class="contact__form-input" 
              placeholder="Write your message"
            />
          </div>
          
          <button type="submit" class="button button--flex">
            Send Message

            <svg 
              v-if="isPending"
              class="animate-spin h-5 w-5 ml-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024"><path d="M512 1024c-69.1 0-136.2-13.5-199.3-40.2C251.7 958 197 921 150 874c-47-47-84-101.7-109.8-162.7C13.5 648.2 0 581.1 0 512c0-19.9 16.1-36 36-36s36 16.1 36 36c0 59.4 11.6 117 34.6 171.3c22.2 52.4 53.9 99.5 94.3 139.9c40.4 40.4 87.5 72.2 139.9 94.3C395 940.4 452.6 952 512 952c59.4 0 117-11.6 171.3-34.6c52.4-22.2 99.5-53.9 139.9-94.3c40.4-40.4 72.2-87.5 94.3-139.9C940.4 629 952 571.4 952 512c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.2C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3s-13.5 136.2-40.2 199.3C958 772.3 921 827 874 874c-47 47-101.8 83.9-162.7 109.7c-63.1 26.8-130.2 40.3-199.3 40.3z" fill="currentColor"></path></svg>
            
            <svg 
              v-else
              class="h-5 w-5 ml-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M3.4 20.4l17.45-7.48a1 1 0 0 0 0-1.84L3.4 3.6a.993.993 0 0 0-1.39.91L2 9.12c0 .5.37.93.87.99L17 12L2.87 13.88c-.5.07-.87.5-.87 1l.01 4.61c0 .71.73 1.2 1.39.91z" fill="currentColor"></path></svg>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'ContactView',

  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },

      isPending: false
    }
  },

  methods: {
    async sendEmail() {
      this.isPending = true

      emailjs.sendForm('service_v3gop1n', 'template_ozifuu4', this.$refs.form, {
        publicKey: '7qoRHeuM-5wpKZr3r',
      })
        .then(response => {
          console.log('Email sent successfully:', response);
        })
        .catch(error => {
          console.error('Failed to send email:', error);
        })
        .finally(() => {
          this.isPending = false

          this.form.name = ''
          this.form.email = ''
          this.form.message = ''
        })
    }
  },
}
</script>
<style>
  .contact {
    @apply 
      rounded-lg bg-white dark:bg-zinc-800/90 shadow-md min-h-[40vh] lg:w-[120vh] lg:grid lg:grid-cols-[50%_50%] h-auto w-full flex flex-col-reverse justify-center my-4;
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
    lg:border-r lg:border-r-teal-400 p-4;
  }

  .sub-title {
    margin-bottom: 1rem;
  }

  .name {
    /* padding-bottom: .5rem; */
    color: var(--text-dark-gray);
    /* //color: var(----text-reverse-color); */
  }

  .text-link {
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