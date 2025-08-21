<template>
  <button
    class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>
