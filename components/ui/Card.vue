<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card">
    <h3>{{ title }}</h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  background: white;
  width: 150px;
}
</style>
