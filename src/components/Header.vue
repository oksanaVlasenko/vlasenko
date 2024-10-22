<template>
  <header id="header" class="header d-flex justify-content-between">

<!-- Navigation Menu Start -->
  <div class="header__navigation">
    <nav id="menu" class="menu">
      <ul class="menu__list d-flex justify-content-start">
        <li class="menu__item">
          <router-link 
            to="/" 
            class="menu__link btn"
            exact-active-class="active"
          >
            <span class="menu__caption">Home</span>
            <svg
              class="header__trigger-icon"
            >
              <use xlink:href="#home"></use>
            </svg>
          </router-link>
        </li>
        <li class="menu__item">
          <router-link 
            to="/about" 
            class="menu__link btn"
            exact-active-class="active"
          >
            <span class="menu__caption">About Me</span>
            <svg
              class="header__trigger-icon"
            >
              <use xlink:href="#person"></use>
            </svg>
          </router-link>
        </li>
        <li class="menu__item">
          <router-link 
            to="/resume"  
            class="menu__link btn"
            exact-active-class="active"
          >
            <span class="menu__caption">Resume</span>
            <svg
              class="header__trigger-icon"
            >
              <use xlink:href="#textbox"></use>
            </svg>
          </router-link>
        </li>
        <li class="menu__item">
          <router-link 
            to="/contacts" 
            class="menu__link btn"
            exact-active-class="active"
          >
            <span class="menu__caption">Contact</span>
            <svg
              class="header__trigger-icon"
            >
              <use xlink:href="#envelope"></use>
            </svg>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>

    <div class="header__controls d-flex justify-content-end">
      <ThemeButton />

      <a id="notify-trigger" class="header__trigger btn" href="https://t.me/kseniaVlasenko" target="_blank">
        <span class="trigger__caption">
          <small>Let's Talk</small>
        
          <svg
            class="header__caption-icon"
          >
            <use xlink:href="#message"></use>
          </svg>
        </span>
      </a>
    </div>
  </header>
</template>

<script setup>
import ThemeButton from '@/components/ThemeButton.vue'
</script>

<style>
    @import '@/assets/styles/header';

</style>