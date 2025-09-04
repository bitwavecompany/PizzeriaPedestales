
<template>
  <ClientOnly>
    <div 
      class="relative w-full overflow-hidden rounded-lg shadow-lg h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[560px] mx-auto max-w-7xl"
    >
      <!-- Contenedor de slides -->
      <div
        class="flex h-full transition-transform duration-700 ease-in-out"
        :style="`transform: translateX(-${current * 100}%)`"
      >
        <div 
          v-for="(slide, idx) in slides" 
          :key="idx" 
          class="w-full h-full flex-shrink-0 bg-gray-100"
        >
          <NuxtImg 
            :src="slide" 
            class="w-full h-full object-contain" 
            :alt="`Banner ${idx + 1}`"
            loading="eager"
          />
        </div>
      </div>
      
      <!-- Botones de navegación -->
      <button 
        class="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-gray-400/80 hover:bg-gray-500/90 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 text-white z-10" 
        @click="prev"
      >
        <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        class="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-gray-400/80 hover:bg-gray-500/90 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 text-white z-10" 
        @click="next"
      >
        <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      <!-- Indicadores -->
      <div class="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        <button 
          v-for="(slide, idx) in slides" 
          :key="idx" 
          :class="[
            'w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300',
            current === idx
              ? 'bg-orange-400 scale-125'
              : 'bg-gray-400/70 hover:bg-gray-500/80 border border-gray-500/40'
          ]"
          @click="goTo(idx)"
        />
      </div>
    </div>
    <template #fallback>
      <div class="relative w-full overflow-hidden rounded-lg shadow-lg h-[250px] sm:h-[320px] md:h-[400px] lg:h-[480px] xl:h-[560px] mx-auto max-w-7xl bg-gray-200 flex items-center justify-center">
        <div class="text-gray-500">Cargando carrusel...</div>
      </div>
    </template>
  </ClientOnly>
</template>



<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';

const slides: string[] = [
  '/images/banners/combokids.png',
  '/images/banners/banner-pizzas.png',
  '/images/banners/tarjeta-presentacion.png'
];

const current = ref(0);
let intervalId: ReturnType<typeof setInterval> | null = null;

function next() {
  current.value = (current.value + 1) % slides.length;
}

function prev() {
  current.value = (current.value - 1 + slides.length) % slides.length;
}

function goTo(idx: number) {
  current.value = idx;
}

onMounted(async () => {
  await nextTick();
  // Pequeño delay para evitar problemas de hidratación
  setTimeout(() => {
    intervalId = setInterval(() => {
      next();
    }, 5000); // Cambia cada 5 segundos
  }, 100);
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});
</script>

<style scoped>
/* Estilos específicos del carrusel se manejan inline para evitar problemas de hidratación */
</style>