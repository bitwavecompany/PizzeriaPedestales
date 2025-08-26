<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer id="contacto" class="bg-[#101522] text-gray-200 pb-12 pt-20 px-4 overflow-x-hidden">
    <div class="max-w-4xl mx-auto mb-8 sm:mb-10 text-center">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-200 mb-4">Contáctanos</h2>
      <p class="text-base sm:text-lg text-gray-400 leading-relaxed">
        ¿Tienes dudas, sugerencias o quieres hacer un pedido especial? <br class="hidden sm:block">
        ¡Estamos aquí para ayudarte y hacer tu experiencia deliciosa!
      </p>
    </div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 overflow-x-hidden">
      <!-- Columna Información de Contacto -->
      <div class="flex flex-col gap-6 lg:col-span-3">
        <div class="bg-white rounded-2xl shadow p-4 sm:p-6 flex flex-col overflow-hidden">
          <div class="flex items-center gap-2 mb-4">
            <span class="bg-red-100 text-red-500 rounded-full p-2 flex items-center justify-center">
              <Icon icon="bxs:map" width="20" height="20" class="sm:w-6 sm:h-6" />
            </span>
            <span class="font-bold text-lg sm:text-xl text-gray-800">Información de Contacto</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div class="flex flex-col gap-3 justify-center">
              <span class="inline-flex items-center bg-gray-200 rounded-full px-3 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-700 gap-2 overflow-hidden">
                <Icon icon="bxs:map" class="text-red-500 flex-shrink-0" :width="isMobile ? 20 : 32" :height="isMobile ? 20 : 32" />
                <span class="font-semibold text-xs sm:text-base truncate">María Angélica Idrobo y Rosa, Catucuamba - Quito, S52-555</span>
              </span>
              <span class="inline-flex items-center bg-gray-200 rounded-full px-3 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-700 gap-2">
                <Icon icon="logos:whatsapp-icon" class="text-red-500 flex-shrink-0" :width="isMobile ? 18 : 24" :height="isMobile ? 18 : 24" />
                <span class="font-semibold">0993740527</span>
              </span>
              <span class="inline-flex items-center bg-gray-200 rounded-full px-3 py-3 sm:py-4 text-sm sm:text-base font-medium text-gray-700 gap-2 overflow-hidden">
                <Icon icon="ic:baseline-email" class="text-red-500 flex-shrink-0" :width="isMobile ? 18 : 24" :height="isMobile ? 18 : 24" />
                <span class="font-semibold text-xs sm:text-base break-all truncate">pizzeriapedestales@gmail.com</span>
              </span>
            </div>
            <div class="bg-gray-200 rounded-xl w-full h-[150px] sm:h-[180px] flex items-center justify-center overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1755832919551!6m8!1m7!1sUh4K7giKIthP5krp4yUcXg!2m2!1d-0.3270631050055807!2d-78.57148220917325!3f117.18452546034955!4f1.3987389562910266!5f0.7820865974627469"
                width="100%" 
                height="100%" 
                style="border:0; border-radius:0.75rem;"
                allowfullscreen 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                title="Ubicación en Google Maps"
                allow="geolocation"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- Columna Horarios -->
      <div class="flex flex-col gap-6 lg:col-span-2">
        <div class="bg-white rounded-2xl shadow p-4 sm:p-6 flex flex-col gap-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-orange-100 text-orange-500 rounded-full p-2 flex items-center justify-center">
              <Icon icon="mdi:clock-outline" width="20" height="20" class="sm:w-6 sm:h-6" />
            </span>
            <span class="font-bold text-lg sm:text-xl text-gray-800">Horarios de Atención</span>
          </div>
          <div class="flex flex-col text-sm sm:text-base divide-y divide-gray-100">
            <div class="flex justify-between items-center py-2 sm:py-3">
              <span class="text-gray-700">Lun - Jue</span>
              <span class="text-gray-900 font-medium">11:00 - 21:00</span>
            </div>
            <div class="flex justify-between items-center py-2 sm:py-3">
              <span class="text-gray-700">Vie - Sáb</span>
              <span class="text-gray-900 font-medium">11:00 - 21:00</span>
            </div>
            <div class="flex justify-between items-center py-2 sm:py-3">
              <span class="text-gray-700">Domingo</span>
              <span class="text-gray-900 font-medium">12:00 - 21:00</span>
            </div>
          </div>
          <div class="mt-3 flex flex-col items-center">
            <div class="text-xs font-bold text-gray-500 mb-2 text-center">SÍGUENOS EN</div>
            <div class="flex gap-3 sm:gap-4 justify-center">
              <a href="#" aria-label="Facebook" class="bg-blue-600 hover:bg-blue-700 rounded-full p-2 text-xl transition flex items-center justify-center">
                <Icon icon="mdi:facebook" class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a href="#" aria-label="Instagram" class="bg-pink-500 hover:bg-pink-600 rounded-full p-2 text-xl transition flex items-center justify-center">
                <Icon icon="mdi:instagram" class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
              <a href="#" aria-label="Twitter" class="bg-sky-500 hover:bg-sky-600 rounded-full p-2 text-xl transition flex items-center justify-center">
                <Icon icon="mdi:twitter" class="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue';

// Estado para detectar si estamos en el cliente
const isClient = ref(false)

// Detectar si es móvil para ajustar iconos
const isMobile = computed(() => {
  if (!isClient.value) return false
  if (typeof window !== 'undefined') {
    return window.innerWidth < 640
  }
  return false
})

onMounted(() => {
  isClient.value = true
})
</script>
