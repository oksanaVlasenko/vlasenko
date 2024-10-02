<template>
  <header id="header" class="header d-flex justify-content-between">

<!-- Navigation Menu Start -->
  <div class="header__navigation">
    <nav id="menu" class="menu">
      <ul class="menu__list d-flex justify-content-start">
        <li class="menu__item">
          <a class="menu__link btn" href="#home">
            <span class="menu__caption">Home</span>
            <svg
              class="header__trigger-icon"
            >
              <use xlink:href="#home"></use>
            </svg>
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link btn" href="#about">
            <span class="menu__caption">About Me</span>
            <svg
              class="header__trigger-icon"
            >
              <use xlink:href="#person"></use>
            </svg>
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link btn" href="#resume">
            <span class="menu__caption">Resume</span>
            <svg
              class="header__trigger-icon"
            >
              <use xlink:href="#textbox"></use>
            </svg>
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link btn" href="#contact">
            <span class="menu__caption">Contact</span>
            <svg
              class="header__trigger-icon"
            >
              <use xlink:href="#envelope"></use>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- Navigation Menu End -->

  <!-- Header Controls Start -->
  <div class="header__controls d-flex justify-content-end">
    <ThemeButton />

    <a id="notify-trigger" class="header__trigger btn" href="https://t.me/kseniaVlasenko" target="_blank">
      <span class="trigger__caption">Let's Talk</span>

      <svg
        class="header__trigger-icon"
      >
        <use xlink:href="#message"></use>
      </svg>
    </a>
  </div>
  <!-- Header Controls End -->

  </header>
</template>

<script setup>
import ThemeButton from '@/components/ThemeButton.vue'
</script>

<style>
    @import '@/assets/styles/header';

</style>