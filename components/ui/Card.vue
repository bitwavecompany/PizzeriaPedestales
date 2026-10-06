<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="group bg-white rounded-[2rem] overflow-hidden w-full flex flex-col transition-all duration-500 hover:-translate-y-2 border border-stone-200/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.1)]">
    
    <!-- Zona de Badges (Arriba, sin interferir con la imagen) -->
    <div class="px-5 pt-5 flex flex-wrap gap-2">
      <transition-group name="fade">
        <span 
          v-for="(badge) in badges" 
          :key="badge.text"
          :class="[
            'text-[11px] sm:text-xs font-bold px-3 py-1.5 rounded-full shadow-sm tracking-[0.1em] uppercase flex items-center gap-1.5 transition-all',
            getBadgeClass(badge.type)
          ]"
        >
          <Icon v-if="badge.icon" :icon="badge.icon" class="w-3.5 h-3.5" />
          {{ badge.text }}
        </span>
      </transition-group>
    </div>

    <!-- Zona de Imagen (Más grande y centrada) -->
    <div class="relative w-full h-[220px] sm:h-[240px] flex items-center justify-center p-2 mt-1">
      <NuxtImg
        v-if="img"
        :src="img"
        :alt="`Pizza ${title}`"
        sizes="xs:100vw sm:50vw lg:33vw xl:25vw"
        class="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-xl"
        format="webp"
        loading="lazy"
      />
    </div>
    
    <!-- Zona de Contenido -->
    <div class="px-5 pb-6 flex-1 flex flex-col relative">
      
      <!-- Text Info (Tipografía Bicolor) -->
      <div class="text-center mb-4">
        <h3 class="font-serif font-black text-2xl sm:text-[1.75rem] mb-1.5 leading-none tracking-tight">
          <span class="text-yellow-400 drop-shadow-sm">Pizza</span>
          <span class="text-green-700 ml-1.5">{{ title }}</span>
        </h3>
        <p class="text-pedestales-gray text-xs sm:text-[13px] leading-relaxed line-clamp-2">
          {{ description }}
        </p>
      </div>

      <!-- Contenedor de Precios (Anclado al fondo para alinear tarjetas) -->
      <div class="mt-auto pt-4 w-full">
        
        <!-- VISTA 1: Mostrar "TODO" (Lista clásica de menú) -->
        <ul v-if="selectedSize === 'TODO'" class="flex flex-col w-full border-t border-gray-100 pt-2">
          <li 
            v-for="size in sizes" 
            :key="size.name"
            class="flex items-end justify-between py-1.5 border-b border-dashed border-gray-200 last:border-transparent group/item"
          >
            <div class="flex items-baseline gap-2">
              <span class="text-xs font-bold text-pedestales-dark uppercase tracking-wider">
                {{ size.name }}
              </span>
              <span class="text-[11px] text-pedestales-gray/70">
                {{ size.portions }} porciones
              </span>
            </div>
            <div class="flex items-start text-pedestales-red font-black">
              <span class="text-[11px] mt-[1.5px] mr-[1px] font-bold">$</span>
              <span class="text-base tracking-tight leading-none">
                {{ formatPrice(size.price) }}
              </span>
            </div>
          </li>
        </ul>

        <!-- VISTA 2: Mostrar TAMAÑO ESPECÍFICO filtrado -->
        <div v-else-if="currentSizeInfo" class="pt-3 w-full border-t border-gray-100 flex justify-between items-end pb-1 px-1">
          <div class="flex flex-col items-start gap-1">
            <span class="text-[13px] font-bold text-pedestales-dark uppercase tracking-wide leading-none">
              {{ currentSizeInfo.name }}
            </span>
            <span class="text-[11px] text-pedestales-gray font-medium leading-none">
              {{ currentSizeInfo.portions }} porciones
            </span>
          </div>
          <div class="flex items-start text-pedestales-red font-black relative top-[2px]">
            <span class="text-[11px] mt-[3px] mr-[1px] font-bold">$</span>
            <span class="text-2xl tracking-tight leading-none">
              {{ formatPrice(currentSizeInfo.price) }}
            </span>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

interface PizzaSize {
  name: string
  price: number
  portions: number
}

interface Badge {
  text: string
  type: 'green' | 'red' | 'gold' | 'outline' | string
  icon?: string
}

const props = defineProps<{
  title: string
  img?: string
  description: string
  sizes?: PizzaSize[]
  selectedSize?: string
  badges?: Badge[]
}>()

// Lógica de precio/porciones
const currentSizeInfo = computed(() => {
  if (!props.sizes || props.sizes.length === 0) return null
  
  const selected = props.selectedSize
  if (selected && selected !== 'TODO') {
    return props.sizes.find(s => s.name.toUpperCase() === selected.toUpperCase()) || null
  }
  return null
})

const formatPrice = (price: number) => {
  return price.toFixed(2)
}

const getBadgeClass = (type: string) => {
  const styles: Record<string, string> = {
    green: 'bg-green-700 text-white border border-green-800',
    red: 'bg-pedestales-red text-white border border-red-900/50',
    gold: 'bg-yellow-500 text-pedestales-dark border border-yellow-600',
    outline: 'bg-white/95 backdrop-blur-sm text-pedestales-dark border border-gray-200'
  }
  return styles[type] || 'bg-pedestales-dark text-white'
}
</script>

<style scoped>
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}
</style>