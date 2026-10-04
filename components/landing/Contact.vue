<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="contacto" class="pt-10 md:pt-16 pb-12 px-6 md:px-12 bg-pedestales-bg w-full border-t border-gray-200/60 mt-10">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-24">
      
      <!-- Left: Title & CTA -->
      <div class="flex-1 w-full text-center lg:text-left flex flex-col items-center lg:items-start">
        <header class="flex items-center gap-4 mb-6 justify-center lg:justify-start w-full">
          <div class="h-px w-8 bg-pedestales-red/50" aria-hidden="true"/>
        </header>
        <h2 class="font-serif font-black text-5xl sm:text-6xl md:text-7xl text-pedestales-dark leading-[0.9] tracking-tighter mb-10">
          Pasa por<br>
          <span class="text-pedestales-red italic font-medium">tu pizza.</span>
        </h2>
      </div>

      <!-- Right: Details -->
      <div class="flex-1 w-full lg:pt-8">
        <div class="flex flex-col gap-8">
          <div 
            v-for="item in contactDetails" 
            :key="item.label"
            class="flex items-center gap-6 group"
          >
            <div class="p-3 bg-white rounded-full shadow-sm border border-stone-200 text-pedestales-red group-hover:scale-110 group-hover:shadow-md transition-all">
              <Icon :icon="item.icon" class="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div class="flex flex-col text-left">
              <span class="text-[10px] font-bold tracking-[0.2em] text-pedestales-gray uppercase mb-1">
                {{ item.label }}
              </span>
              <template v-if="item.link">
                <a :href="item.link" target="_blank" class="font-sans font-bold text-pedestales-dark text-xl sm:text-2xl hover:text-pedestales-red transition-colors">
                  {{ item.value }}
                </a>
              </template>
              <p v-else class="font-sans font-bold text-pedestales-dark text-xl sm:text-2xl">
                {{ item.value }}
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Configuración de contacto
const phoneNumber = "593993740527"
const googleMapsUrl = "https://maps.google.com/?q=Maria+Angelica+Idrobo+y+Rosa+C+Quito"

const contactDetails = [
  {
    icon: 'mdi:phone-outline',
    label: 'Pedidos y reservas',
    value: '099 374 0527',
    link: `tel:+${phoneNumber}`
  },
  {
    icon: 'mdi:map-marker-outline',
    label: 'Encuéntranos en',
    value: 'María Angélica Idrobo y Rosa C.',
    link: googleMapsUrl
  },
  {
    icon: 'mdi:clock-outline',
    label: 'Abierto',
    value: 'Mar — Dom · 16:00 — 21:00',
    link: null
  }
]


</script>