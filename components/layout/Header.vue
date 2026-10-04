<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-pedestales-bg/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
    <!-- Top thin colored line -->
    <div class="h-1 w-full flex" aria-hidden="true">
      <div class="h-full bg-yellow-500 w-1/3"/>
      <div class="h-full bg-pedestales-red w-1/3"/>
      <div class="h-full bg-green-700 w-1/3"/>
    </div>
    
    <div class="max-w-7xl mx-auto overflow-x-hidden">
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center justify-between py-4 px-6 md:px-12">
        
        <!-- Logo con NuxtLink -->
        <NuxtLink to="#About" class="flex items-center gap-3 flex-shrink-0 group cursor-pointer">
          <NuxtImg 
            src="/logo.png" 
            alt="Logo Pedestales Pizzería"
            class="w-10 h-10 rounded-full border border-pedestales-red shadow-sm object-cover transition-transform group-hover:scale-105"
            width="40"
            height="40"
          />
          <div class="flex flex-col">
            <span class="text-xl font-bold leading-none text-pedestales-dark">Pedestales</span>
            <span class="text-[9px] text-pedestales-gray tracking-[0.2em] font-medium mt-1 uppercase">Pizzería Artesanal</span>
          </div>
        </NuxtLink>

        <!-- Nav Links Desktop -->
        <nav class="flex-1 flex justify-center">
          <ul class="flex gap-8">
            <li v-for="link in navLinks" :key="link.href">
              <NuxtLink 
                :to="link.href" 
                class="text-sm font-medium text-pedestales-gray hover:text-pedestales-dark transition-colors"
              >
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div class="flex-shrink-0">
          <a 
            id="pedido_desktop"
            :href="whatsappUrl" 
            target="_blank" 
            rel="noopener noreferrer"
            class="bg-pedestales-red text-white text-xs font-bold px-6 py-3 rounded hover:bg-red-800 transition-colors flex items-center gap-2 tracking-wider shadow-sm"
          >
            <Icon icon="mdi:shopping-outline" width="16" />
            HACER PEDIDO
          </a>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden">
        <div class="flex items-center justify-between py-3 px-4">
          <!-- Logo Móvil -->
          <NuxtLink to="#About" class="flex items-center gap-3 flex-1 min-w-0" @click="isMenuOpen = false">
            <NuxtImg 
              src="/logo.png" 
              alt="Logo Pedestales"
              class="w-8 h-8 rounded-full border border-pedestales-red shadow-sm object-cover"
              width="32"
              height="32"
            />
            <div class="flex flex-col">
              <span class="text-lg font-bold leading-none text-pedestales-dark">Pedestales</span>
              <span class="text-[8px] text-pedestales-gray tracking-[0.2em] font-medium mt-1">PIZZERÍA ARTESANAL</span>
            </div>
          </NuxtLink>

          <button 
            class="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-200"
            aria-label="Abrir menú"
            @click="isMenuOpen = !isMenuOpen" 
          >
            <Icon 
              :icon="isMenuOpen ? 'mdi:close' : 'mdi:menu'" 
              width="24" 
              height="24" 
              class="text-gray-700" 
            />
          </button>
        </div>
        
        <!-- Mobile Menu Transition -->
        <transition name="fade">
          <div v-show="isMenuOpen" class="border-t border-gray-100 bg-white">
            <nav class="px-4 py-2">
              <ul class="space-y-1">
                <li v-for="link in navLinks" :key="link.href">
                  <NuxtLink 
                    :to="link.href"
                    class="w-full flex items-center gap-3 text-sm font-medium text-pedestales-dark hover:text-pedestales-red hover:bg-gray-50 transition-colors px-3 py-3 rounded-lg"
                    @click="isMenuOpen = false"
                  >
                    {{ link.name }}
                  </NuxtLink>
                </li>
              </ul>
              <div class="mt-4 pb-4">
                <a 
                  id="pedido_movil"
                  :href="whatsappUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-full bg-pedestales-red text-white text-sm font-bold rounded px-6 py-3 transition-colors shadow flex items-center justify-center gap-2"
                  @click="isMenuOpen = false"
                >
                  <Icon icon="mdi:shopping-outline" width="18" />
                  HACER PEDIDO
                </a>
              </div>
            </nav>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'

// Estado para el menú móvil
const isMenuOpen = ref(false)

// Configuración de enlaces para evitar repetición
const navLinks = [
  { name: 'Menú', href: '#menu' },
  { name: 'Novedades', href: '#carrusel' },
  { name: 'Nuestra Casa', href: '#about' },
  { name: 'Contacto', href: '#contacto' },
]

// Configuración para WhatsApp
const phoneNumber = "593993740527"
const message = "¡Hola! Me gustaría hacer un pedido en Pizzería Pedestales. ¿Podrían ayudarme?"

const whatsappUrl = computed(() => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>