<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer id="contacto" class="bg-[#101522] text-gray-200 py-14 px-4">
    <div class="max-w-3xl mx-auto mb-10 text-center">
      <h2 class="text-5xl font-extrabold text-gray-200 mb-4">Contáctanos</h2>
      <p class="text-lg text-gray-400 leading-relaxed">
        ¿Tienes dudas, sugerencias o quieres hacer un pedido especial? <br>
        ¡Estamos aquí para ayudarte y hacer tu experiencia deliciosa!
      </p>
    </div>
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      <!-- Columna 1: Logo y descripción -->
  <div>
    <iframe
      src="https://www.google.com/maps/embed?pb=!4v1755832919551!6m8!1m7!1sUh4K7giKIthP5krp4yUcXg!2m2!1d-0.3270631050055807!2d-78.57148220917325!3f117.18452546034955!4f1.3987389562910266!5f0.7820865974627469"
      width="100%" height="300" style="border:0; border-radius:1rem;"
      allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
      title="Ubicación en Google Maps"
    />
  </div>


      <!-- Columna 2: Información de contacto -->
      <div>
        <h3 class="font-bold text-lg mb-4">Información</h3>
        <ul class="space-y-3 text-sm">
          <li class="flex items-start gap-2"><span class="text-red-500 mt-0.5"><Icon icon="bxs:map" width="24" height="24" /></span>María Angelica Idrobo y Rosa Catucuamba -<br>Quito, S52-555</li>
          <li class="flex items-center gap-2"><span class="text-red-500"><Icon icon="line-md:phone-twotone" width="24" height="24" /></span>0993740527</li>
          <li class="flex items-center gap-2"><span class="text-red-500"><Icon icon="ic:baseline-email" width="24" height="24" /></span>pizzeriapedestales@gmail.com</li>
        </ul>
      </div>

      <!-- Columna 3: Horarios -->
      <div>
        <h3 class="font-bold text-lg mb-4">Horarios</h3>
        <div class="flex flex-col gap-2 text-sm">
          <div class="flex justify-between"><span>Lun - Jue:</span><span>11:00 - 22:00</span></div>
          <div class="flex justify-between"><span>Vie - Sáb:</span><span>11:00 - 23:00</span></div>
          <div class="flex justify-between"><span>Domingo:</span><span>12:00 - 21:00</span></div>
        </div>
      </div>

      <!-- Columna 4: Encuéntranos en -->
      <div>
        <h3 class="font-bold text-lg mb-4">Encuéntranos en</h3>
        <div class="flex gap-4 mt-2">
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
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
