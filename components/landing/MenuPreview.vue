<template>
  <section id="menu" class="menu-preview">
    <h2>Menú destacado</h2>
    <div class="menu-list">
      <Card title="Pizza Margarita" />
      <Card title="Pizza Pepperoni" />
      <Card title="Pizza Hawaiana" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
</script>

<style scoped>
.menu-preview {
  padding: 2rem;
  text-align: center;
}
.menu-list {
  display: flex;
  justify-content: center;
  gap: 1rem;
}
</style>
