
<template>
  <div class="relative w-full overflow-hidden rounded-lg shadow-lg h-[280px] sm:h-[380px] md:h-[450px] lg:h-[520px] xl:h-[600px]">
    <div
      class="flex carrusel-track h-full"
      :style="`transform: translateX(-${current * 100}%);`"
    >
      <div v-for="(slide, idx) in slides" :key="idx" class="w-full flex-shrink-0 h-full relative">
        <!-- Imagen de fondo -->
        <div class="absolute inset-0">
          <NuxtImg :src="slide.image" class="w-full h-full object-cover" :alt="`Banner ${idx + 1}`" />
        </div>
        
      </div>
    </div>
    
    <!-- Botones de navegación -->
  <button class="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-400/80 hover:bg-gray-500/90 rounded-full p-3 shadow-lg transition-all duration-300 text-white" @click="prev">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  <button class="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-400/80 hover:bg-gray-500/90 rounded-full p-3 shadow-lg transition-all duration-300 text-white" @click="next">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
    
    <!-- Indicadores -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
      <button 
        v-for="(slide, idx) in slides" 
        :key="idx" 
        :class="[
          'w-3 h-3 rounded-full transition-all duration-300',
          current === idx
            ? 'bg-orange-400 scale-125'
            : 'bg-gray-400/70 hover:bg-gray-500/80 border border-gray-500/40'
        ]"
        @click="goTo(idx)"
      />
    </div>
  </div>
</template>



<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { NuxtImg } from '#components';

interface Slide {
  image: string;
  subtitle: string;
  title1: string;
  title2: string;
  description: string;
  decorativeImage?: string;
}

const slides: Slide[] = [
  {
    image: '/images/banners/banner-pizzas.png',
    subtitle: 'CLÁSICA Y DELICIOSA',
    title1: 'PIZZA',
    title2: 'HAWAIANA',
    description: 'Jamón, piña y queso mozzarella en perfecta armonía',
    decorativeImage: '/images/pizzas/hawaiana.png'
  },
  {
    image: '/images/banners/combokids.png',
    subtitle: 'ESPECIAL PARA NIÑOS',
    title1: 'COMBO',
    title2: 'KIDS',
    description: 'La combinación perfecta para los más pequeños de la casa',
    decorativeImage: '/images/pizzas/tradicional.png'
  }
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

onMounted(() => {
  intervalId = setInterval(() => {
    next();
  }, 5000); // Cambia cada 5 segundos
});
onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<style scoped>
.carrusel-track {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>