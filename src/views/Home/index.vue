<script setup lang="ts">
//COMPONENTS
import HeaderHome from './components/HeaderHome.vue'
import BodyHome from './components/BodyHome.vue'
</script>

<template>
  <div class="hero-seccion h-screen">
    <div class="intro_text">
      <svg class="top-1/4 md:top-2/3" viewBox="0 0 1320 300">
        <text class="animate-stroke" x="50%" Y="50%" text-anchor="middle">
          HI
        </text>
      </svg>
    </div>
    <HeaderHome />
    <BodyHome class="px-20" />
  </div>
</template>

<style scoped lang="scss">
.hero-seccion {
  @apply bg-dark-one relative overflow-hidden;
  z-index: 1;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 322px;
    height: 308px;
    border-radius: 50%;
    background: #8750f7;
    background: linear-gradient(260deg, #8750f7 0%, rgba(115, 67, 210, 0) 100%);
    filter: blur(150px);
    margin-right: -5%;
    margin-top: -5%;
    z-index: -1;
  }
}

.intro_text svg {
  // font-family: var(--tj-ff-russo);
  position: absolute;
  width: 100%;
  height: 100%;
  left: 46%;
  // top: 55%;
  transform: translate(-50%, -50%) scale(1);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
  animation: 3s pulsate infinite alternate ease-in-out;
}

.intro_text svg text {
  text-transform: uppercase;
  /* animation: stroke 4s; */
  stroke-width: 1.2;
  stroke: #2a1454;
  fill: transparent;
  font-size: 240px;
  display: inline-block;
  opacity: 0;
}

.intro_text svg text.animate-stroke {
  animation: stroke 4s; /* Adjust the duration as needed */
  opacity: 0.7;
}

@keyframes stroke {
  0% {
    stroke-dashoffset: 25%;
    stroke-dasharray: 0 50%;
    stroke-width: 1;
  }
  100% {
    stroke-dashoffset: 100%;
    stroke-dasharray: 100% 0;
    stroke-width: 1;
  }
}
@keyframes pulsate {
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
