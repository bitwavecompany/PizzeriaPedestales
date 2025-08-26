
<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden w-[320px] flex flex-col transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-2xl cursor-pointer">
    <div class="relative">
      <div class="w-full h-[220px] bg-gray-50 flex items-center justify-center p-4">
        <NuxtImg
          v-if="img"
          :src="img"
          alt="Pizza"
          class="max-w-full max-h-full object-contain rounded-lg"
          format="webp"
          loading="lazy"
        />
        <div v-else class="text-gray-400 text-sm">Sin imagen</div>
      </div>
  <span v-if="popular" class="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow flex items-center gap-1">
    <Icon icon="material-symbols:favorite-rounded" width="16" height="16" class="mr-1" />
    Favorita
  </span>
  <span class="absolute top-3 right-3 bg-gradient-to-r from-green-200 to-emerald-300 text-gray-700 text-xs px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
        <Icon icon="ic:round-access-time" class="h-4 w-4 inline" />
        10-15 min
      </span>
    </div>
    <div class="px-4 py-3  flex-1 flex flex-col">
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-bold text-lg text-gray-800">{{ title }}</h3>
      </div>
      <p class="text-gray-500 text-sm mb-3">{{ description }}</p>
      
      <!-- Sección de tamaños en formato de tarjetas -->
      <div v-if="sizes && sizes.length > 0" class="mb-2">
        <div class="grid grid-cols-2 gap-2">
          <div v-for="(size, index) in sizes" :key="index" class="border border-red-200 rounded-lg bg-white p-2 flex flex-col items-center shadow-sm hover:shadow-md transition-shadow min-h-0">
            <span class="text-gray-800 font-semibold text-sm mb-0.5 leading-tight">{{ size.name }}</span>
            <span class="text-gray-500 text-[11px] mb-1 leading-none">{{ size.portions }} porciones</span>
            <span class="text-red-600 font-extrabold text-base leading-none">${{ size.price.toFixed(2) }}</span>
          </div>
        </div>
      </div>
      
      <!-- Fallback para el formato anterior -->
      <p v-else-if="portions" class="text-green-700 text-xs font-semibold mb-5">Porciones: {{ portions }}</p>
      
      <!-- <Button text="Agregar al Pedido" class="btn-primary w-full mt-auto" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtImg } from '#components'
//import Button from '@/components/ui/Button.vue'
import { Icon } from '@iconify/vue';

interface PizzaSize {
  name: string;
  price: number;
  portions: number;
}

defineProps<{
  title: string,
  img?: string,
  description: string,
  portions?: string,
  sizes?: PizzaSize[],
  popular?: boolean
}>()
</script>

<style scoped>
/* El botón se estiliza desde Button.vue */
</style>
