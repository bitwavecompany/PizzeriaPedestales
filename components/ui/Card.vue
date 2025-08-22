
<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden w-[320px] flex flex-col">
    <div class="relative">
      <div class="w-full h-[200px] bg-gray-100 flex items-center justify-center p-4">
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
      <span class="absolute top-3 right-3 bg-white/80 text-gray-700 text-xs px-3 py-1 rounded-full flex items-center gap-1">
        <Icon icon="ic:round-access-time" class="h-4 w-4 inline" />
        15-20 min
      </span>
    </div>
    <div class="p-5 flex-1 flex flex-col">
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-bold text-lg text-gray-800">{{ title }}</h3>
      </div>
      <p class="text-gray-500 text-sm mb-3">{{ description }}</p>
      
      <!-- Sección de precios y porciones estilizada -->
      <div v-if="sizes && sizes.length > 0" class="bg-red-50 border-2 border-red-200 rounded-lg p-3 mb-4">
        <div v-for="(size, index) in sizes" :key="index" class="flex justify-between items-center py-1">
          <span class="text-red-700 font-bold text-sm uppercase">{{ size.name }}:</span>
          <div class="flex items-center gap-2">
            <span class="text-red-700 font-bold text-sm">${{ size.price.toFixed(2) }}</span>
            <span class="text-red-600 text-xs">•••••</span>
            <span class="text-red-700 font-semibold text-xs">{{ size.portions }} PORCIONES</span>
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
