<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <footer id="contacto" class="bg-[#101522] text-gray-200 pb-12 pt-20 px-4">
    <div class="max-w-3xl mx-auto mb-10 text-center">
      <h2 class="text-5xl font-extrabold text-gray-200 mb-4">Contáctanos</h2>
      <p class="text-lg text-gray-400 leading-relaxed">
        ¿Tienes dudas, sugerencias o quieres hacer un pedido especial? <br>
        ¡Estamos aquí para ayudarte y hacer tu experiencia deliciosa!
      </p>
    </div>
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 h-full">
      <!-- Columna Información de Contacto -->
  <div class="flex flex-col gap-6 md:col-span-3 h-full">
        <div class="bg-white rounded-2xl shadow p-6 h-full flex flex-col flex-1">
          <div class="flex items-center gap-2 mb-4">
            <span class="bg-red-100 text-red-500 rounded-full p-2 flex items-center justify-center"><Icon icon="bxs:map" width="22" height="22" /></span>
            <span class="font-bold text-xl text-gray-800">Información de Contacto</span>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="flex flex-col gap-3 justify-center">
              <span class="inline-flex items-center bg-gray-200 rounded-full px-3 py-4 text-base font-medium text-gray-700 gap-2">
                <Icon icon="bxs:map" class="text-red-500" width="18" height="18" />
                <span class="font-semibold">María Angélica Idrobo y Rosa, Catucuamba - Quito, S52-555</span>
              </span>
              <span class="inline-flex items-center bg-gray-200 rounded-full px-3 py-4 text-base font-medium text-gray-700 gap-2">
                <Icon icon="line-md:phone-twotone" class="text-red-500" width="18" height="18" />
                <span class="font-semibold">099-374-0527</span>
              </span>
              <span class="inline-flex items-center bg-gray-200 rounded-full px-3 py-4 text-base font-medium text-gray-700 gap-2">
                <Icon icon="ic:baseline-email" class="text-red-500" width="18" height="18" />
                <span class="font-semibold">pizzeriapedestales@gmail.com</span>
              </span>
            </div>
            <div class="bg-gray-200 rounded-xl w-full h-[180px] flex items-center justify-center overflow-hidden self-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1755832919551!6m8!1m7!1sUh4K7giKIthP5krp4yUcXg!2m2!1d-0.3270631050055807!2d-78.57148220917325!3f117.18452546034955!4f1.3987389562910266!5f0.7820865974627469"
                width="100%" height="180" style="border:0; border-radius:0.75rem;"
                allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                title="Ubicación en Google Maps" />
            </div>
          </div>
  </div>
      </div>
      <!-- Columna Horarios -->
  <div class="flex flex-col gap-6 md:col-span-2">
        <div class="bg-white rounded-2xl shadow p-6 flex flex-col gap-4">
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-orange-100 text-orange-500 rounded-full p-2 flex items-center justify-center"><Icon icon="mdi:clock-outline" width="22" height="22" /></span>
            <span class="font-bold text-xl text-gray-800">Horarios de Atención</span>
          </div>
          <div class="flex flex-col text-sm divide-y divide-gray-100">
            <div class="flex justify-between items-center py-3"><span class="text-gray-700">Lun - Jue</span><span class="text-gray-900 font-medium">11:00 - 21:00</span></div>
            <div class="flex justify-between items-center py-3"><span class="text-gray-700">Vie - Sáb</span><span class="text-gray-900 font-medium">11:00 - 21:00</span></div>
            <div class="flex justify-between items-center py-3"><span class="text-gray-700">Domingo</span><span class="text-gray-900 font-medium">12:00 - 21:00</span></div>
          </div>
          <div class="mt-3 flex flex-col items-center">
            <div class="text-xs font-bold text-gray-500 mb-2 text-center">SÍGUENOS EN</div>
            <div class="flex gap-4 justify-center">
              <a href="#" aria-label="Facebook" class="bg-blue-600 hover:bg-blue-700 rounded-full p-2 text-xl transition flex items-center justify-center"><Icon icon="mdi:facebook" class="w-6 h-6 text-white" /></a>
              <a href="#" aria-label="Instagram" class="bg-pink-500 hover:bg-pink-600 rounded-full p-2 text-xl transition flex items-center justify-center"><Icon icon="mdi:instagram" class="w-6 h-6 text-white" /></a>
              <a href="#" aria-label="Twitter" class="bg-sky-500 hover:bg-sky-600 rounded-full p-2 text-xl transition flex items-center justify-center"><Icon icon="mdi:twitter" class="w-6 h-6 text-white" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>
