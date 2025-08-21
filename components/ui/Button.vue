<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <button class="btn">{{ text }}</button>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<style scoped>
.btn {
  background: tomato;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
}
</style>
