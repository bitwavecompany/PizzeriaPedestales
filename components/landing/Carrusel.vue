<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="carrusel" class="pt-8 md:pt-12 pb-0 bg-pedestales-bg w-full overflow-hidden">
    <div class="max-w-7xl mx-auto px-6 md:px-12 mb-8">
      <!-- Section Header -->
      <div class="flex flex-col">
        <div class="flex items-center gap-4 mb-4">
          <div class="h-px w-8 bg-pedestales-red/50" aria-hidden="true"/>
        </div>
        <h2 class="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-pedestales-dark leading-tight tracking-tight">
          Nuestras<br>
          <span class="text-pedestales-red italic font-medium">Novedades</span>
        </h2>
      </div>
    </div>

    <!-- Contenedor general del carrusel -->
    <div class="w-full relative group">
      
      <!-- Botones Personalizados con Iconify (Diseño Vidrio Minimalista) -->
      <button class="custom-prev absolute left-[2%] md:left-[4%] top-[calc(50%-1.75rem)] -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-pedestales-muted/50 hover:bg-pedestales-muted/80 backdrop-blur-md rounded-full flex items-center justify-center transition-colors cursor-pointer border-none">
        <Icon icon="mdi:chevron-left" class="w-8 h-8 md:w-10 md:h-10 text-white" />
      </button>
      
      <button class="custom-next absolute right-[2%] md:right-[4%] top-[calc(50%-1.75rem)] -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-pedestales-muted/50 hover:bg-pedestales-muted/80 backdrop-blur-md rounded-full flex items-center justify-center transition-colors cursor-pointer border-none">
        <Icon icon="mdi:chevron-right" class="w-8 h-8 md:w-10 md:h-10 text-white" />
      </button>

      <ClientOnly>
        <Swiper
          :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]"
          :slides-per-view="1.1" 
          :centered-slides="true" 
          :space-between="20"
          :loop="true"
          :speed="800"
          :autoplay="{
            delay: 3500,
            disableOnInteraction: false,
          }"
          :navigation="{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }"
          :pagination="{
            clickable: true,
          }"
          :breakpoints="{
            '640': { slidesPerView: 1.25, spaceBetween: 30 },
            '1024': { slidesPerView: 1.45, spaceBetween: 40 },
          }"
          class="mi-carrusel" 
        >
          <SwiperSlide v-for="(banner, index) in banners" :key="index">
            <a 
              :href="banner.link" 
              class="block relative w-full aspect-[16/9] md:aspect-[21/9] cursor-pointer overflow-hidden rounded-[1rem] sm:rounded-[2rem] shadow-xl isolate transform-gpu bg-transparent"
            >
              <!-- Fondo desenfocado -->
              <NuxtImg 
                :src="banner.img" 
                :alt="`Fondo para ${banner.alt}`" 
                class="absolute inset-0 w-full h-full object-cover scale-125 blur-xl opacity-70"
                aria-hidden="true"
                loading="lazy"
              />
              
              <!-- Efecto Vidrio -->
              <div class="absolute inset-0 bg-white/30 backdrop-blur-md"/>

              <!-- Imagen principal nítida -->
              <NuxtImg 
                :src="banner.img" 
                :alt="banner.alt" 
                class="absolute inset-0 w-full h-full object-contain p-2 md:p-4 transition-transform duration-500 hover:scale-[1.02]" 
                loading="lazy"
              />
            </a>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay as SwiperAutoplay, Navigation as SwiperNavigation, Pagination as SwiperPagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const banners = [
  {
    img: '/images/banners/tarjeta-presentacion.png', 
    alt: 'Nuestras especialidades: Hawaiana, Pepperoni, Ranchito y Mixta',
    link: '#menu'
  },
  {
    img: '/images/banners/banner-pizzas.png',
    alt: 'Promoción especial de fin de semana',
    link: '#contacto' 
  },
  {
    img: '/images/banners/tarjeta-presentacion.png', 
    alt: 'Nuestras especialidades: Hawaiana, Pepperoni, Ranchito y Mixta',
    link: '#menu'
  },
  {
    img: '/images/banners/banner-pizzas.png',
    alt: 'Promoción especial de fin de semana',
    link: '#contacto' 
  }
]
</script>

<style>
/* ESPACIO PARA LOS PUNTOS FUERA DE LA IMAGEN */
.mi-carrusel {
  width: 100%;
  padding-bottom: 3.5rem !important; 
  overflow: visible !important; 
}

/* POSICIÓN Y ESTÉTICA DE LOS PUNTOS */
.mi-carrusel .swiper-pagination {
  bottom: 0 !important; 
}

.mi-carrusel .swiper-pagination-bullet {
  background-color: theme('colors.gray.300') !important; 
  opacity: 1 !important;
  width: 8px !important;
  height: 8px !important;
  transition: all 0.3s ease;
}

.mi-carrusel .swiper-pagination-bullet-active {
  background-color: theme('colors.pedestales-red') !important; 
  width: 24px !important; 
  border-radius: 4px !important;
}

/* ESTADO DESHABILITADO PARA LOS BOTONES PERSONALIZADOS */
.custom-prev.swiper-button-disabled,
.custom-next.swiper-button-disabled {
  opacity: 0.35;
  cursor: auto;
  pointer-events: none;
}

/* EFECTO DE FOCO EN LATERALES */
.swiper-slide {
  transition: transform 0.5s ease, opacity 0.5s ease;
  transform: scale(0.85);
  opacity: 0.4;
}

.swiper-slide-active {
  transform: scale(1);
  opacity: 1;
}
</style>