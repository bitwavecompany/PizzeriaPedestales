<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header class="bg-white border-b border-red-200">
    <div class="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
      <div class="flex items-center gap-3">
        <span class="flex items-center gap-2">
          <img src="/logo.png" alt="Logo Pizzería Pedestales" class="h-12 w-auto inline-block align-middle">
          <span>
            <span class="block text-xl font-extrabold text-red-500 leading-tight">Pizzería Pedestales</span>
          </span>
        </span>
      </div>
      <nav class="flex-1 flex justify-center">
        <ul class="flex gap-8">
          <li>
            <button onclick="location.href='#inicio'" type="button" class="text-base font-medium text-gray-800 hover:text-red-600 transition-colors px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-200">Inicio</button>
          </li>
          <li>
            <button onclick="location.href='#menu'" type="button" class="text-base font-medium text-gray-800 hover:text-red-600 transition-colors px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-200">Menú</button>
          </li>
          <li>
            <button onclick="location.href='#contacto'" type="button" class="text-base font-medium text-gray-800 hover:text-red-600 transition-colors px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-200">Contacto</button>
          </li>
          <li>
            <button onclick="location.href='#nosotros'" type="button" class="text-base font-medium text-gray-800 hover:text-red-600 transition-colors px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-red-200">Nosotros</button>
          </li>
        </ul>
      </nav>
      <div>
  <button onclick="location.href='#pedido'" type="button" class="bg-red-500 hover:bg-red-600 text-white font-medium rounded-full px-7 py-2 transition-colors shadow text-base focus:outline-none focus:ring-2 focus:ring-red-200">Hacer Pedido</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// No necesitas nada aquí de momento
</script>