<template>
  <div class="bg-white rounded-2xl shadow-lg overflow-hidden w-[320px] flex flex-col">
    <div class="relative">
      <NuxtImg
        src="" alt="Pizza" height="180" width="320"
        class="object-cover w-full h-[180px]"
        format="webp"
        loading="lazy"
      />
      <span class="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">Popular</span>
      <span class="absolute top-3 right-3 bg-white/80 text-gray-700 text-xs px-3 py-1 rounded-full flex items-center gap-1">
        <Icon icon="ic:round-access-time" class="h-4 w-4 inline" />
        15-20 min
      </span>
    </div>
    <div class="p-5 flex-1 flex flex-col">
      <div class="flex justify-between items-center mb-2">
        <h3 class="font-bold text-lg text-gray-800">{{ title }}</h3>
        <span class="text-red-600 font-extrabold text-xl">$18.900</span>
      </div>
      <p class="text-gray-500 text-sm mb-5">Salsa de tomate, mozzarella fresca, albahaca, aceite de oliva extra virgen</p>
      <Button text="Agregar al Pedido" class="btn-primary w-full mt-auto" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtImg } from '#components'
import Button from '@/components/ui/Button.vue'
import { Icon } from '@iconify/vue';
defineProps<{
  title: string
}>()
</script>

<style scoped>
/* El botón se estiliza desde Button.vue */
</style>
