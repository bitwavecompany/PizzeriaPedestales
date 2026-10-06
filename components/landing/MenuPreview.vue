<template>
  <section id="menu" class="pt-10 md:pt-16 pb-0 px-6 md:px-12 bg-pedestales-bg w-full">
    <div class="max-w-7xl mx-auto">
      
      <!-- Section Header -->
      <div v-motion-slide-visible-bottom class="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-16 gap-8">
        <div>
          <div class="flex items-center gap-4 mb-4">
            <div class="h-px w-8 bg-pedestales-red/50" aria-hidden="true"/>
          </div>
          <h2 class="font-serif font-black text-4xl sm:text-5xl lg:text-6xl text-pedestales-dark leading-tight tracking-tight">
            Nuestro<br>
            <span class="text-pedestales-red italic font-medium">Menú</span>
          </h2>
        </div>
        <div class="max-w-sm">
          <p class="text-pedestales-gray text-sm sm:text-base leading-relaxed lg:text-right font-medium">
            Masa fresca preparada a mano cada mañana y horneada en su punto ideal para lograr el toque crujiente perfecto en cada rebanada.
          </p>
        </div>
      </div>

      <!-- Filter Row -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between border-b border-gray-200 pb-6 mb-8 sm:mb-12 gap-4 sm:gap-6">
        <div class="flex flex-col gap-1">
          <span class="text-[10px] font-bold tracking-[0.2em] text-pedestales-red uppercase">Precios por tamaño</span>
          <p class="text-xs text-pedestales-gray uppercase tracking-widest font-bold">Selecciona una opción</p>
        </div>

        <!-- Desktop Filter (Botones) -->
        <div class="hidden sm:flex flex-wrap items-center gap-2 sm:gap-3">
          <button 
            v-for="size in availableSizes" 
            :key="size"
            :class="[
              'text-[11px] sm:text-xs font-bold tracking-widest transition-all px-5 py-2.5 rounded-full border-2 uppercase',
              selectedSize === size 
                ? 'border-pedestales-red bg-pedestales-red text-white shadow-md' 
                : 'border-gray-100 bg-white text-pedestales-gray hover:border-gray-300 hover:text-pedestales-dark'
            ]"
            @click="selectedSize = size"
          >
            {{ size }}
          </button>
        </div>

        <!-- Mobile Filter (Dropdown Select) -->
        <div class="sm:hidden w-full relative">
          <select 
            aria-label="Filtrar por tamaño de pizza"
            v-model="selectedSize"
            class="w-full appearance-none bg-white border-2 border-gray-200 text-pedestales-dark font-bold text-sm rounded-xl px-4 py-3.5 outline-none focus:border-pedestales-red transition-colors uppercase tracking-widest shadow-sm"
          >
            <option v-for="size in availableSizes" :key="size" :value="size">
              {{ size }}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-pedestales-red">
            <Icon icon="mdi:chevron-down" class="w-6 h-6" />
          </div>
        </div>
      </div>

      <!-- Grid de Pizzas Filtradas -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 lg:gap-y-12 justify-items-center">
        <!-- Mostrar mensaje si el filtro no arroja resultados (ej: si no hay infantiles) -->
        <div v-if="filteredPizzas.length === 0" class="col-span-full py-12 text-center text-pedestales-gray">
          No tenemos pizzas disponibles en este tamaño actualmente.
        </div>

        <UiCard 
          v-for="pizza in filteredPizzas"
          :key="pizza.title"
          :title="pizza.title"
          :img="pizza.img"
          :description="pizza.description"
          :badges="pizza.badges"
          :sizes="pizza.sizes"
          :selected-size="selectedSize"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const { availableSizes, selectedSize, filteredPizzas } = useMenu()
</script>