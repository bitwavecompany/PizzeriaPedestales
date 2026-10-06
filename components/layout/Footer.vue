<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer class="bg-white border-t border-gray-100 py-10 px-6 md:px-12 w-full">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      
      <!-- Logo & Branding -->
      <NuxtLink to="#inicio" class="flex items-center gap-4 group">
        <NuxtImg 
          src="/logo.png" 
          alt="Logo Pizzería Pedestales"
          class="w-12 h-12 rounded-full border-2 border-pedestales-red shadow-sm transition-transform group-hover:scale-110"
          width="48"
          height="48"
          loading="lazy"
        />
        <div class="flex flex-col">
          <span class="font-sans font-black text-pedestales-dark leading-none text-lg">Pedestales</span>
          <span class="text-[9px] font-bold tracking-[0.2em] text-pedestales-gray uppercase leading-tight mt-1">
            Pizzería Artesanal
          </span>
        </div>
      </NuxtLink>

      <!-- Social Links (Opcional pero recomendado) -->
      <div class="flex items-center gap-6">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="text-pedestales-gray hover:text-pedestales-red transition-colors" aria-label="Instagram" @click="useTrackEvent('click_social_media', { network: 'Instagram' })">
          <Icon icon="mdi:instagram" width="22" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="text-pedestales-gray hover:text-pedestales-red transition-colors" aria-label="Facebook" @click="useTrackEvent('click_social_media', { network: 'Facebook' })">
          <Icon icon="mdi:facebook" width="22" />
        </a>
        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="text-pedestales-gray hover:text-pedestales-red transition-colors" aria-label="WhatsApp" @click="useTrackEvent('click_social_media', { network: 'WhatsApp' })">
          <Icon icon="mdi:whatsapp" width="22" />
        </a>
      </div>

      <!-- Copyright -->
      <div class="flex flex-col items-center md:items-end gap-2 text-center md:text-right">
        <p class="text-xs text-pedestales-gray font-semibold tracking-wide">
          &copy; {{ currentYear }} Pizzería Pedestales
        </p>
        <p class="text-[10px] text-gray-400 uppercase tracking-widest font-medium">
          Quito, Ecuador
        </p>
      </div>

    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

// Año actual dinámico
const currentYear = new Date().getFullYear()

// Reutilizamos el enlace de WhatsApp por si quieres ponerlo también en el footer
const phoneNumber = "593993740527"
const whatsappUrl = `https://wa.me/${phoneNumber}`
</script>

<style scoped>
/* Estilos extra si fueran necesarios */
</style>