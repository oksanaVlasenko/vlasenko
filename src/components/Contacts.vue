<template>
  <section id="contacts" class="inner contact">
    <div class="content__block section-title">
      <p class="h2__subtitle  animate-in-up">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="13px" height="13px" viewBox="0 0 13 13" fill="currentColor">
          <path fill="currentColor" d="M5.6,12.6c-0.5-0.8-0.7-2.4-1.7-3.5c-1-1-2.7-1.2-3.5-1.7C-0.1,7-0.1,6,0.4,5.6c0.8-0.5,2.3-0.6,3.5-1.8
            C5,2.8,5.1,1.2,5.6,0.4C6-0.1,7-0.1,7.4,0.4c0.5,0.8,0.7,2.4,1.8,3.5c1.2,1.2,2.6,1.2,3.5,1.7c0.6,0.4,0.6,1.4,0,1.7
            C11.8,7.9,10.2,8,9.1,9.1c-1,1-1.2,2.7-1.7,3.5C7,13.1,6,13.1,5.6,12.6z"/>
        </svg>
        <span>Contact</span>
      </p>
      <h2 class="h2__title  animate-in-up">Let's make something awesome together!</h2>
    </div>

    <div class="content__block grid-block block-grid-large">
      <div class="form-container">
        <div 
          class="form__reply centered text-center"
          :class="{'is-visible': isSended}"
        >
          <svg class="reply__icon">
            <use xlink:href="#smile"></use>
          </svg>
          <p class="reply__title">Done!</p>
          <span class="reply__text">Thanks for your message. I'll get back as soon as possible.</span>
        </div> 

        <form 
          ref="form" 
          class="form contact-form"
          :class="{'is-hidden': isSended}" 
          id="contact-form" 
          @submit.prevent="sendEmail"
        >
          <div class="container-fluid p-0">
            <div class="row gx-0">
              <div class="col-12 form__item-md-6 form__item  animate-in-up">
                <input v-model="formObject.name" type="text" name="name" placeholder="Your Name*" required>
              </div>
              <div class="col-12 form__item-md-6 form__item animate-in-up">
                <input v-model="formObject.company" type="text" name="company" placeholder="Company Name">
              </div>
              <div class="col-12 form__item-md-6 form__item animate-in-up">
                <input v-model="formObject.email" type="email" name="email" placeholder="Email Adress*" required>
              </div>
              <div class="col-12 form__item-md-6 form__item animate-in-up">
                <input v-model="formObject.phone" type="tel" name="phone" placeholder="Phone Number*" required>
              </div>
              <div class="col-12 form__item animate-in-up">
                <textarea v-model="formObject.message" name="message" placeholder="A Few Words*" required></textarea>
              </div>
              <div class="col-12 form__item animate-in-up">
                <button class="btn btn-default btn-hover btn-hover-accent" type="submit">
                  <span class="btn-caption">Send Message</span>
                  <svg class="btn-contact-icon">
                    <use xlink:href="#send"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="content__block grid-block">
      <div class="socials-cards d-flex justify-content-start flex-wrap">
        <div class="socials-cards__item d-flex grid-item-s animate-card-5">
          <div class="socials-cards__card">
            <svg>
              <use xlink:href="#telegram"></use>
            </svg>
            <a class="socials-cards__link" href="https://t.me/kseniaVlasenko" target="_blank"></a>
          </div>
        </div>

        <div class="socials-cards__item d-flex grid-item-s animate-card-5">
          <div class="socials-cards__card">
            <svg>
              <use xlink:href="#github"></use>
            </svg>
            <a class="socials-cards__link" href="https://github.com/oksanaVlasenko" target="_blank"></a>
          </div>
        </div>

        <div class="socials-cards__item d-flex grid-item-s animate-card-5">
          <div class="socials-cards__card">
            <svg>
              <use xlink:href="#linkedin"></use>
            </svg>
            <a class="socials-cards__link" href="https://www.linkedin.com/in/oksana-vlasenko-28b53919b/" target="_blank"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="content__block">
      <div class="teaser">
        <p class="teaser__text animate-in-up">Want to know more about me, tell me 
          about your project or just to say hello? 
          <a class="text-link-bold" href="mailto:vlasenkoksenia642@gmail.com?subject=Message%20from%20your%20site&body=Hello,%20I%20would%20like%20to...">Drop me a line</a> 
          and I'll get back 
          as soon as possible.
        </p>

        <!-- Scroll Button Start -->
        <AnimatedRotation 
          :link="'home'"
          :svgPath="'arrowUp'"
          :text="'Scroll for Top *Top* Scroll for Top *'"
          :id="2"
        />
        
      </div>
    </div>

    <!-- Content Block - Contact Data Start -->
    <div class="content__block">
      <div class="container-fluid p-0 contact-lines animate-in-up">
        <div class="d-flex row g-0 contact-lines__item">
          <!-- data item -->
          <div class="col-12 col-md-4 contact-lines__data">
            <p class="contact-lines__title animate-in-up">Location</p>
            <p class="contact-lines__text animate-in-up">
              <a class="text-link-bold" href="https://maps.app.goo.gl/jMBAiwX1TUTCKW7y6" target="_blank">Kharkiv, Ukraine</a>
            </p>
          </div>
          <!-- data item -->
          <div class="col-12 col-md-4 contact-lines__data">
            <p class="contact-lines__title animate-in-up">Phone</p>
            <p class="contact-lines__text animate-in-up">
              <a class="text-link-bold" href="tel:+12127089400">+38(063)-582-91-66</a>
            </p>
          </div>
          <!-- data item -->
          <div class="col-12 col-md-4 contact-lines__data">
            <p class="contact-lines__title animate-in-up">Email</p>
            <p class="contact-lines__text animate-in-up">
              <a class="text-link-bold" href="mailto:vlasenkoksenia642@gmail.com?subject=Message%20from%20your%20site&body=Hello,%20I%20would%20like%20to...">vlasenkoksenia642@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Content Block - Contact Data End -->

    </section>
</template>

<script setup>
import emailjs from '@emailjs/browser'
import { ref } from 'vue'
import { useScrollAppearAnimation } from '@/composables/useScrollAppearAnimation.js';
import AnimatedRotation from '@/components/AnimatedRotation.vue'

useScrollAppearAnimation(50, 0.3)

const form = ref(null)

const formObject = ref({
  name: '',
  email: '',
  message: '',
  company: '',
  phone: ''
})

const isSended = ref(false)

const sendEmail = () => {
  isSended.value = true
  
  emailjs.sendForm('service_v3gop1n', 'template_ozifuu4', form.value, {
    publicKey: 'lpRRPHxWhrE0GgPZk',
  })
    .then(response => {
      console.log('Email sent successfully:', response);
    })
    .catch(error => {
      console.error('Failed to send email:', error);
    })
    .finally(() => {
      formObject.value.name = ''
      formObject.value.email = ''
      formObject.value.message = ''
      formObject.value.company = ''
      formObject.value.phone = ''

      setTimeout(() => {
        isSended.value = false
      }, 1500)
    })
}
</script>

<style>
   @import '@/assets/styles/contacts';
</style>