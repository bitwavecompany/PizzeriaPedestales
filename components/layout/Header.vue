<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white border-b border-red-200 shadow-sm">
    <div class="max-w-7xl mx-auto overflow-x-hidden">
      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center justify-between py-3 px-6">
        <div class="flex items-center gap-3 flex-shrink-0">
          <span class="flex items-center gap-2">
            <NuxtImg src="/logo.png" alt="Logo Pizzería Pedestales" class="h-12 w-auto inline-block align-middle" />
            <span>
              <span class="block text-xl font-extrabold leading-tight" style="color: #740f2f;">Pizzería Pedestales</span>
            </span>
          </span>
        </div>
        <nav class="flex-1 flex justify-center">
          <ul class="flex gap-8">
            <li>
              <button onclick="location.href='#inicio'" type="button" class="flex items-center gap-2 text-base font-medium text-gray-800 hover:text-red-600 transition-colors px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-200">
                <Icon icon="line-md:home-twotone" width="20" height="20" style="color: #740f2f;" />
                Inicio
              </button>
            </li>
            <li>
              <button onclick="location.href='#menu'" type="button" class="flex items-center gap-2 text-base font-medium text-gray-800 hover:text-red-600 transition-colors px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-200">
                <Icon icon="ion:pizza" width="20" height="20" style="color: #740f2f;" />
                Menú
              </button>
            </li>
            <li>
              <button onclick="location.href='#contacto'" type="button" class="flex items-center gap-2 text-base font-medium text-gray-800 hover:text-red-600 transition-colors px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-200">
                <Icon icon="healthicons:contact-support" width="20" height="20" style="color: #740f2f;" />
                Contacto
              </button>
            </li>
          </ul>
        </nav>
        <div class="flex-shrink-0">
            <a 
              id="pedido_desktop"
              data-gtm="pedido_desktop"
              data-element="pedido-desktop"
              data-action="click"
              data-category="pedido"
              :href="whatsappUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-white font-medium rounded-full px-7 py-2 transition-colors shadow text-base focus:outline-none focus:ring-2 focus:ring-red-200 inline-block" style="background-color: #740f2f;"
            >
            Hacer Pedido
          </a>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden">
        <div class="flex items-center justify-between py-3 px-4">
          <div class="flex items-center gap-2 flex-1 min-w-0">
            <NuxtImg src="/logo.png" alt="Logo Pizzería Pedestales" class="h-10 w-auto flex-shrink-0" />
            <span class="text-lg font-extrabold truncate" style="color: #740f2f;">Pizzería Pedestales</span>
          </div>
          <button 
            class="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-200 flex-shrink-0"
            aria-label="Toggle menu"
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
        
        <!-- Mobile Menu -->
        <div 
          v-show="isMenuOpen" 
          class="border-t border-red-200 bg-white"
        >
          <nav class="px-4 py-2">
            <ul class="space-y-1">
              <li>
                <button 
                  class="w-full flex items-center gap-3 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-50 transition-colors px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
                  type="button"
                  onclick="location.href='#inicio'" 
                  @click="isMenuOpen = false"
                >
                  <Icon icon="line-md:home-twotone" width="20" height="20" style="color: #740f2f;" />
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  class="w-full flex items-center gap-3 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-50 transition-colors px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
                  type="button"
                  onclick="location.href='#menu'" 
                  @click="isMenuOpen = false"
                >
                  <Icon icon="ion:pizza" width="20" height="20" style="color: #740f2f;" />
                  Menú
                </button>
              </li>
              <li>
                <button 
                  class="w-full flex items-center gap-3 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-red-50 transition-colors px-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-200"
                  type="button"
                  onclick="location.href='#contacto'" 
                  @click="isMenuOpen = false"
                >
                  <Icon icon="healthicons:contact-support" width="20" height="20" style="color: #740f2f;" />
                  Contacto
                </button>
              </li>
            </ul>
            <div class="mt-4 pb-2">
              <a 
                id="pedido_movil"
                data-gtm="pedido_movil"
                data-element="pedido-movil"
                data-action="click"
                data-category="pedido"
                :href="whatsappUrl" 
                target="_blank" 
                rel="noopener noreferrer"
                class="w-full text-white font-medium rounded-full px-6 py-3 transition-colors shadow text-base focus:outline-none focus:ring-2 focus:ring-red-200 flex items-center justify-center gap-2" style="background-color: #740f2f;"
                @click="isMenuOpen = false"
              >
                <Icon icon="logos:whatsapp-icon" width="20" height="20" />
                Hacer Pedido
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { NuxtImg } from '#components';
import { Icon } from '@iconify/vue';

// Estado para el menú móvil
const isMenuOpen = ref(false)

// Configuración para WhatsApp
const phoneNumber = "593993740527"
const message = "¡Hola! Me gustaría hacer un pedido en Pizzería Pedestales. ¿Podrían ayudarme?"

const whatsappUrl = computed(() => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
})
</script>