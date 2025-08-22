<template>
  <button
    class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-full shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
  >
    <slot name="icon" />
    <span>{{ text }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
