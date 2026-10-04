<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="about" class="relative pt-10 md:pt-16 pb-0 px-6 md:px-12 bg-pedestales-bg w-full overflow-hidden">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      
      <!-- Left Image Column -->
      <div class="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto order-2 lg:order-1">
        <div class="relative rounded-[2rem] overflow-hidden shadow-2xl h-[500px] sm:h-[600px] w-full group">
          <NuxtImg 
            src="/avatar.jpg" 
            alt="Proceso de elaboración de pizza artesanal Pedestales" 
            class="absolute inset-0 w-full h-full object-cover object-left transition-transform duration-1000 group-hover:scale-110"
            width="500"
            height="600"
            loading="lazy"
          />
          <!-- Overlay Gradiente -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none"/>
          
          <div class="absolute bottom-0 left-0 w-full p-8 sm:p-10">
            <p class="font-serif text-white text-3xl sm:text-4xl font-bold leading-tight drop-shadow-md">
              El secreto está<br>
              <span class="text-yellow-500 italic font-medium">en el horno.</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Right Content Column -->
      <div class="flex flex-col justify-center order-1 lg:order-2">
        <!-- Section Header -->
        <header class="flex items-center gap-4 mb-4">
          <div class="h-px w-8 bg-pedestales-red/50" aria-hidden="true"/>
        </header>
        
        <h2 class="font-serif font-black text-5xl sm:text-6xl lg:text-[4.5rem] text-pedestales-dark leading-[0.9] tracking-tighter mb-8">
          Sabor único,<br>
          <span class="text-green-700 italic font-medium">masa fresca.</span>
        </h2>
        
        <p class="text-pedestales-gray text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
          Somos un pequeño negocio familiar con una gran pasión: preparar nuestra masa fresca cada día y hornearla en su punto exacto. Cuidamos cada detalle a mano, usando ingredientes seleccionados y porciones generosas para lograr ese toque cálido y crujiente que siempre te hace volver.
        </p>
        
        <div class="flex items-center gap-3 text-pedestales-dark font-medium font-serif italic text-lg">
          <Icon icon="mdi:pizza" class="w-6 h-6 text-pedestales-red" />
          <span>Artesanal desde el primer bocado.</span>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>