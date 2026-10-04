<template>
  <component
    :is="resolvedComponent"
    :to="to"
    :href="href"
    :target="target"
    :class="[
      'inline-flex items-center justify-center gap-3 px-8 py-4 rounded font-bold text-sm tracking-wider shadow-lg transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2',
      variant === 'primary' 
        ? 'bg-pedestales-red text-white hover:bg-red-800 hover:shadow-red-900/20 focus:ring-red-400'
        : 'bg-white text-pedestales-dark hover:bg-gray-100 hover:shadow-gray-200/50 border border-gray-200 focus:ring-gray-300'
    ]"
    v-bind="$attrs"
    @click="$emit('click', $event)"
  >
    <slot name="icon" />
    <span>{{ text }}</span>
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent  } from 'vue'


const props = defineProps<{
  text: string
  to?: string
  href?: string
  target?: string
  variant?: 'primary' | 'secondary'
}>()

defineEmits(['click'])

const resolvedComponent = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})
</script>
