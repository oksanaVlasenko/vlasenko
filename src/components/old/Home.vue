<template>
  <section class="split-hero-section">
    <div class="w-layout-grid grid-hero-split">
      <div class="hero-split-title">
        <div>
          <div class="split-hero-title-wrap">
            <h1 data-w-id="44c86d5a-ee55-2644-8eb8-baf890afa06c" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="hero-title">
              Oksana
            </h1>
            
            <h1 data-w-id="98544331-05bd-b32d-c840-f1617f5e9e30" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="hero-title hero-title-right">
              Vlasenko
            </h1>
          </div>
          
          <div class="split-hero-image-wrap">
            <img src="@/assets/avatar.jpg" loading="eager" alt="" class="split-hero-image">
          </div>
        </div>
        
        <div data-w-id="f76528f1-7582-aae7-b917-679cbbc8ffb7" style="opacity: 1; transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;" class="split-content-wrap">
          <div class="split-hero-icon-wrap">
            <img src="https://cdn.prod.website-files.com/6509249ca8b748e71716e172/650d4d767acfb823adf8b2fc_icon-41.svg" loading="eager" alt="" class="split-hero-icon" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(36.0016deg) skew(0deg, 0deg); transform-style: preserve-3d; will-change: transform;">
          </div>
          
          <h2 class="split-hero">Hi, I’m a Web developer and UI/UX designer</h2>
          
          <p class="split-hero-description">Hey, are you looking for a designer to build your brand and grow your business? let’s shake hands with me.</p>
          
          <a data-w-id="374d031d-07d9-9572-17a9-6105a7b2749d" href="/work" class="button-black w-inline-block">
            <div style="color: rgb(36, 34, 38);" class="button-text">Explore my work</div>
            
            <img src="https://cdn.prod.website-files.com/6509249ca8b748e71716e172/650955050b8b22496ac44907_arrow-icon.svg" loading="eager" style="opacity: 1;" alt="" class="button-icon-dark">
            
            <img src="https://cdn.prod.website-files.com/6509249ca8b748e71716e172/65096b5d4df99bc770bd00c2_arrow-icon-light.svg" loading="eager" style="opacity: 0;" alt="" class="button-icon-light">
            
            <div style="transform: translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 0; transform-style: preserve-3d;" class="button-bg-left"></div>
            
            <div style="transform: translate3d(0px, 0px, 0px) scale3d(0, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); opacity: 0; transform-style: preserve-3d;" class="button-bg-right"></div>
          </a>
        </div>
      </div>
      
      <div id="w-node-ba91ad15-7e14-7852-a616-e98a75c229cf-1716e17b" class="split-button-dark">
        <a href="https://assets.website-files.com/6509249ca8b748e71716e172/650d45e028b8eb8654203f7d_sample-resume.pdf" target="_blank" class="hero-button-dark w-inline-block">
          <h2 class="button-title">Download <span class="button-text-wrap">CV</span></h2>
          
          <img src="https://cdn.prod.website-files.com/6509249ca8b748e71716e172/650ab80e0fb71367bf001e48_icon-13.svg" loading="eager" alt="" class="download-button-image">
        </a>
      </div>
    </div>
  </section>
  <section v-if="false" class="home-page">
    <div class="home-layout">
      <div class="home-title">
        <div>
          <div class="home-title-wrapper">
            <h1 class="home-title-text name">Oksana</h1>
            <h1 class="home-title-text surname">Vlasenko</h1>
          </div>

          <div class="home-image-wrapper">
            <img 
              alt="avatar"
              class="home-image"
              src="@/assets/avatar.jpg"
            />
          </div>
        </div>

        <div class="split-content-wrap">
          <h2>Hi, I’m a Web developer and UI/UX designer</h2>

          <p>Hey, are you looking for a designer to build your brand and grow your business? let’s shake hands with me.</p>
        </div>
      </div>

      <div class="home-download">
        <button class="home-download-btn">
          <h2 class="home-btn-title">
            Download

            <span class="home-btn-text">CV</span>
          </h2>

          <svg
            class="home-btn-img"
          >
            <use xlink:href="#download"></use>
          </svg>
        </button>
      </div>
    </div>
  </section>
  <!-- <div class="home-page">
    <section class="home-section">
      <div class="home-layout">
        <div class="home-title">
          <div>
            <div class="home-title-wrapper">
              <h1 class="home-title-text name">Oksana</h1>
              <h1 class="home-title-text surname">Vlasenko</h1>
            </div>

            <div class="home-image-wrapper">
              <img 
                alt="avatar"
                class="home-image"
                src="@/assets/avatar.jpg"
              />
            </div>
          </div>
        </div>
        <div class="home-download">Download</div>
      </div>
    </section>
  </div> -->
</template>

<script>
import Card from '@/components/old/Card.vue'

export default {
  components: {
    Card
  }
}
</script>

<style>
.home-page {
  width: 100%; /* Full width */
  min-height: 100vh; /* Allows content to grow beyond the viewport */
  overflow-y: hidden;
  position: relative;
  padding-left: 90px;
}

@media screen and (min-width: 1440px) {
    .home-page {
        padding-left: 176px;
    }
}

.home-layout {
  display: grid;
  grid-column-gap: 80px;
  grid-row-gap: 80px;
  grid-template-rows: auto;
  grid-template-columns: 1.25fr minmax(0, 0.25fr);
}

@media screen and (max-width: 1023px) {
  .home-layout {
    grid-template-columns: 1fr;
  }
}

@media screen and (min-width: 1440px) {
    .home-layout {
        grid-column-gap: 150px;
        grid-row-gap: 150px;
        grid-template-columns: 1fr minmax(0, .25fr);
    }
}

.split-content-wrap {
  max-width: 43%;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    margin-left: auto;
    display: flex;
 }

 .home-download {
  grid-area: span 1 / span 1 / span 1 / span 1;
  justify-self: end;
 }

 .home-download-btn {
    width: 100px;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
    background-color: var(--background-color-reverse);
    flex-direction: column;
    align-items: center;
    padding: 50px 30px;
    text-decoration: none;
    transition: background-color .3s ease-in-out;
    display: flex;
    max-width: 100%;
 }

 @media screen and (min-width: 1440px) {
    .home-download-btn {
        padding-top: 60px;
        padding-bottom: 60px;
    }
}

@media screen and (min-width: 1280px) {
    .home-download-btn {
        width: 130px;
        height: 100%;
        padding: 50px 30px;
    }
}

 .home-btn-title {
    color: var(--background-color-primary);
    text-align: center;
    text-transform: uppercase;
    word-break: break-all;
    font-size: 56px;
    line-height: 1em;
 }

 @media screen and (min-width: 1440px) {
    .home-btn-title {
        font-size: 80px;
    }
}

 .home-btn-text {
  margin-top: 20px;
    display: block;
 }

 .home-btn-img {
    width: 60px;
    height: 60px;
    flex: 0 auto;
    fill: var(--background-color-primary);
 }

 .home-title {
  padding-top: 80px;
}

.home-image-wrapper {
  z-index: 0;
    text-align: center;
    position: absolute;
    top: 145px;
    bottom: auto;
    left: 34px;
    right: auto;
}

@media screen and (min-width: 1440px) {
    .home-image-wrapper {
        z-index: 0;
        position: absolute;
        top: 204px;
        bottom: auto;
        left: 188px;
        right: auto;
    }
}

.home-image {
  width: 250px;
  height: 300px;
  object-fit: cover;
  transform: rotate(-7deg);
}

.home-title-wrapper {
  display: flex; /* Enables flexbox */
  max-width: 87%;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  position: relative;
  z-index: 2;
}

.home-title-text {
  font-family: var(--font-family--display);
  margin-bottom: 0;
  font-size: 8vw;
  font-weight: 400;
  line-height: 1em;
}

.name {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
  transform-style: preserve-3d;
}

.surname {
  opacity: 1;
  transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
  transform-style: preserve-3d;
  width: 100%; /* Ensures the text takes the full width of its container */
  text-align: right;
}

</style>