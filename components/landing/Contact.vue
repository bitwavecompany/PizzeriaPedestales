<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer id="contacto" class="bg-[#101522] text-gray-200 py-14 px-4">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      <!-- Columna 1: Logo y descripción -->
      <div>
        <div class="flex items-center gap-3 mb-2">
          <span class="flex items-center justify-center">
            <NuxtImg src="/logo.png" alt="Logo Pizzería Pedestales" class="h-14 w-14 object-contain" />
          </span>
          <span class="font-bold text-2xl">Pizzería Pedestales</span>
        </div>
        <div class="text-gray-400 text-sm mb-4">
          Desde 1952, creando momentos especiales con las mejores pizzas artesanales de la ciudad. Tradición, calidad y sabor en cada bocado.
        </div>
        <div class="flex gap-4 mt-4">
          <a href="#" aria-label="Facebook" class="bg-gray-700 hover:bg-gray-600 rounded-full p-2 text-xl transition flex items-center justify-center">
            <Icon icon="mdi:facebook" class="w-6 h-6" />
            <span class="sr-only">Facebook</span>
          </a>
          <a href="#" aria-label="Instagram" class="bg-gray-700 hover:bg-gray-600 rounded-full p-2 text-xl transition flex items-center justify-center">
            <Icon icon="mdi:instagram" class="w-6 h-6" />
            <span class="sr-only">Instagram</span>
          </a>
          <a href="#" aria-label="Twitter" class="bg-gray-700 hover:bg-gray-600 rounded-full p-2 text-xl transition flex items-center justify-center">
            <Icon icon="mdi:twitter" class="w-6 h-6" />
            <span class="sr-only">Twitter</span>
          </a>
        </div>
      </div>

      <!-- Columna 2: Enlaces rápidos -->
      <div>
        <h3 class="font-bold text-lg mb-4">Enlaces Rápidos</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:text-white transition">Inicio</a></li>
          <li><a href="#menu" class="hover:text-white transition">Nuestro Menú</a></li>
          <li><a href="#" class="hover:text-white transition">Sobre Nosotros</a></li>
          <li><a href="#contacto" class="hover:text-white transition">Contacto</a></li>
        </ul>
      </div>

      <!-- Columna 3: Información de contacto -->
      <div>
        <h3 class="font-bold text-lg mb-4">Información</h3>
        <ul class="space-y-3 text-sm">
          <li class="flex items-start gap-2"><span class="text-red-500 mt-0.5"><Icon icon="bxs:map" width="24" height="24" /></span>123 Pizza Street, Centro<br>Ciudad, CP 12345</li>
          <li class="flex items-center gap-2"><span class="text-red-500"><Icon icon="line-md:phone-twotone" width="24" height="24" /></span>(555) 123-4567</li>
          <li class="flex items-center gap-2"><span class="text-red-500"><Icon icon="ic:baseline-email" width="24" height="24" /></span>pedidos@bellapizza.com</li>
        </ul>
      </div>

      <!-- Columna 4: Horarios -->
      <div>
        <h3 class="font-bold text-lg mb-4">Horarios</h3>
        <div class="flex flex-col gap-2 text-sm">
          <div class="flex justify-between"><span>Lun - Jue:</span><span>11:00 - 22:00</span></div>
          <div class="flex justify-between"><span>Vie - Sáb:</span><span>11:00 - 23:00</span></div>
          <div class="flex justify-between"><span>Domingo:</span><span>12:00 - 21:00</span></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { NuxtImg } from '#components';
</script>
