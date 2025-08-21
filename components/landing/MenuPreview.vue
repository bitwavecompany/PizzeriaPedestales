<template>
  <section id="menu" class="py-12 px-4 text-center bg-gray-50">
    <div class="max-w-3xl mx-auto mb-10">
      <h2 class="text-5xl font-extrabold text-gray-800 mb-4">Nuestras Pizzas</h2>
      <p class="text-lg text-gray-600 leading-relaxed">
        Cada pizza es elaborada con ingredientes frescos y masa artesanal,<br>
        siguiendo recetas tradicionales italianas
      </p>
    </div>
    <div class="flex justify-center gap-4 flex-wrap">
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

</style>
