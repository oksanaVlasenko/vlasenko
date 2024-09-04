<template>
  <!-- <section id="home" class="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center">
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <div class="relative z-10 text-center text-white max-w-3xl px-6">
      <h1 class="text-5xl md:text-6xl font-bold mb-4">I'm [Your Name]</h1>
      <p class="text-xl md:text-2xl mb-8">A Web Developer and Designer Creating Beautiful and Functional Websites</p>
      
      <a href="#portfolio" class="inline-block mt-4 px-6 py-3 border border-white text-white hover:bg-white hover:text-black transition duration-300">
        View My Work
      </a>
    </div>
  </section> -->
  <div class="home-page">
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
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
 /* .home-page {
    width: auto;
    height: auto;
    overflow: hidden;
    
 } 

 .home-section {
  position: relative;
 }

 .home-layout {
    display: grid;
    grid-column-gap: 80px;
    grid-row-gap: 80px;
    grid-template-rows: auto;
    grid-auto-columns: 1fr;
    grid-template-columns: 1.25fr minmax(0, .25fr);
 }

 @media screen and (max-width: 1023px) {
    .home-layout {
        grid-template-columns: 1fr;
    }
} 

.home-download {
  grid-area: span 1 / span 1 / span 1 / span 1;
  justify-self: end;
}

.home-image-wrapper {
  z-index: -1;
    text-align: center;
    position: absolute;
    top: 145px;
    bottom: auto;
    left: 34px;
    right: auto;
}

.home-image {
  z-index: -1;
    width: 250px;
    height: 300px;
    object-fit: cover;
    transform: rotate(-7deg);
}

.home-title {
  padding-top: 80px;
}

.home-title-wrapper {
  max-width: 87%;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
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
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
}

.surname {
  opacity: 1;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
  
    text-align: right;
} */
.home-page {
  width: 100%; /* Full width */
  height: 100vh; /* Full height of the viewport */
  overflow: hidden;
}

.home-section {
  position: relative;
  width: 100%;
  height: 100%;
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

.home-download {
  grid-column: 2 / 3; /* Positions this element in the second column */
  justify-self: end;
}

.home-image-wrapper {
  text-align: center;
  position: absolute;
  top: 145px;
  left: 34px;
  right: auto;
}

.home-image {
  width: 250px;
  height: 300px;
  object-fit: cover;
  transform: rotate(-7deg);
}

.home-title {
  padding-top: 80px;
}

.home-title-wrapper {
  display: flex; /* Enables flexbox */
  max-width: 87%;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
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
  text-align: right;
}

</style>