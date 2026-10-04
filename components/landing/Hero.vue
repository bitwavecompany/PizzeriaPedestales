<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    id="inicio"
    class="relative w-full bg-pedestales-bg pt-32 pb-0 min-h-[90vh] flex items-center overflow-hidden"
  >
    <!-- Decoración de fondo opcional (sutil mancha o textura) -->
    <div class="absolute top-0 right-0 w-1/3 h-full bg-pedestales-red/5 skew-x-12 translate-x-20 pointer-events-none"/>

    <div class="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <!-- Left Content -->
      <div v-motion-slide-visible-bottom :delay="100" class="z-10 relative order-2 lg:order-1 text-center lg:text-left">
        <header class="flex items-center justify-center lg:justify-start gap-4 mb-6">
          <div class="h-px w-8 bg-pedestales-red/50" aria-hidden="true"/>
        </header>
        
        <h1 class="font-serif font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.85] text-pedestales-dark mb-8 tracking-tighter">
          Hechas<br>
          <span class="relative">
            a mano
            <!-- Pequeño detalle visual bajo la palabra pizza -->
            <svg class="absolute -bottom-2 left-0 w-full h-2 text-yellow-500/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 25 0 50 5 T 100 5" fill="none" stroke="currentColor" stroke-width="2"/></svg>
          </span><br>
          <span class="text-pedestales-red italic font-medium">directo al<br>horno.</span>
        </h1>
        
        <p class="text-pedestales-gray text-base md:text-lg max-w-sm mb-10 leading-relaxed mx-auto lg:mx-0">
          Artesanal desde el primer bocado. Ingredientes frescos, masa preparada cada día y ese calor de hogar que siempre te hace volver.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <UiButton
            href="/documents/MenúPizzeríaPedestales.pdf"
            download="Menu-Pizzeria-Pedestales.pdf"
            variant="primary"
            text="DESCARGAR MENÚ"
            @click="useTrackEvent('download_menu')"
          >
            <template #icon>
              <Icon icon="mdi:file-download-outline" width="20" />
            </template>
          </UiButton>
          
          <UiButton
            to="#menu"
            variant="secondary"
            text="VER CARTA ONLINE"
            @click="useTrackEvent('view_menu')"
          />
        </div>
      </div>

      <!-- Right Images -->
      <div v-motion-slide-visible-right :delay="300" class="relative order-1 lg:order-2 flex items-center justify-center h-[400px] sm:h-[500px] lg:h-[600px]">
        
        <!-- Main Circular Image (Tarjeta) -->
        <div class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[460px] lg:h-[460px] rounded-full overflow-hidden shadow-2xl z-10 border-[6px] lg:border-[12px] border-white animate-float">
          <NuxtImg 
            src="/images/pizzas/peperoni.png" 
            alt="Pizza artesanal recién salida del horno" 
            class="w-full h-full object-cover object-center scale-110"
            width="460"
            height="460"
            loading="eager"
            fetchpriority="high"
          />
        </div>
        
        <!-- Small Circular Image (Peperoni) -->
        <div class="absolute right-[-20px] sm:right-0 bottom-10 lg:bottom-20 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-[4px] lg:border-[8px] border-white z-20 animate-float-delayed">
          <NuxtImg 
            src="/logo.webp" 
            alt="Detalle pizza de pepperoni" 
            class="w-full h-full object-cover"
            width="256"
            height="256"
          />
        </div>

        <!-- Badge (Flotante) -->
        <div class="absolute -left-4 top-10 lg:left-0 lg:top-20 bg-white w-24 h-24 sm:w-32 sm:h-32 rounded-full flex flex-col justify-center items-center border-2 border-yellow-500 shadow-xl rotate-[-12deg] z-30 animate-pulse-slow">
          <span class="text-[8px] sm:text-[10px] text-yellow-600 font-bold uppercase tracking-[0.2em]">Sabor</span>
          <span class="font-serif italic text-pedestales-dark text-lg sm:text-2xl my-[-2px] sm:my-[-4px]">CASERO</span>
        </div>

        <!-- Elemento Decorativo: Círculo de fondo -->
        <div class="absolute w-[110%] h-[110%] border-2 border-dashed border-gray-200 rounded-full animate-spin-slow pointer-events-none"/>
      </div>
      
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>