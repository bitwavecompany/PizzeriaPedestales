<template>
  <section id="menu" class="pb-12 pt-20 px-4 text-center bg-gradient-to-t from-green-500 to-emerald-800">
    <div class="max-w-3xl mx-auto mb-10">
      <h2 class="text-5xl font-extrabold text-white mb-4">Nuestras Pizzas</h2>
    </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">

  <Card 
    title="Pizza Hawaiana" 
    img="/images/pizzas/hawaiana.png" 
    description="Salsa de tomate, mozzarella, jamón, piña, aceite de oliva"
    :sizes="[
      { name: 'FAMILIAR', price: 14.00, portions: 12 },
      { name: 'MEDIANA', price: 10.00, portions: 10 },
      { name: 'PEQUEÑA', price: 8.00, portions: 8 },
      { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
    ]"
    :popular="true"
  />
  <Card 
    title="Pizza Fungui" 
    img="/images/pizzas/fungui.png" 
    description="Salsa de tomate, mozzarella, champiñones frescos, orégano, aceite de oliva"
    :sizes="[
      { name: 'FAMILIAR', price: 14.00, portions: 12 },
      { name: 'MEDIANA', price: 10.00, portions: 10 },
      { name: 'PEQUEÑA', price: 8.00, portions: 8 },
      { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
    ]"
    :popular="false"
  />
  <Card 
    title="Pizza Pepperoni" 
    img="/images/pizzas/peperoni.png" 
    description="Salsa de tomate, mozzarella, pepperoni, orégano, aceite de oliva"
    :sizes="[
      { name: 'FAMILIAR', price: 14.00, portions: 12 },
      { name: 'MEDIANA', price: 10.00, portions: 10 },
      { name: 'PEQUEÑA', price: 8.00, portions: 8 },
      { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
    ]"
    :popular="false"

  />
  <Card 
    title="Pizza Deli Trópical" 
    img="/images/pizzas/delitropical.png" 
    description="Salsa de tomate, mozzarella, jamón, piña, durazno, cereza, aceite de oliva"
    :sizes="[
      { name: 'FAMILIAR', price: 14.00, portions: 12 },
      { name: 'MEDIANA', price: 10.00, portions: 10 },
      { name: 'PEQUEÑA', price: 8.00, portions: 8 },
      { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
    ]"
    :popular="false"

  />
  <Card 
    title="Pizza Mixta" 
    img="/images/pizzas/mixta.png" 
    description="Salsa de tomate, mozzarella, jamón, salchicha, pimentón, cebolla, orégano"
    :sizes="[
      { name: 'FAMILIAR', price: 14.00, portions: 12 },
      { name: 'MEDIANA', price: 10.00, portions: 10 },
      { name: 'PEQUEÑA', price: 8.00, portions: 8 },
      { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
    ]"
    :popular="false"

  />
  <Card 
    title="Pizza Napolitana" 
    img="/images/pizzas/napolitana.png" 
    description="Salsa de tomate, mozzarella, tomate en rodajas, orégano, ajo, aceite de oliva"
    :sizes="[
      { name: 'FAMILIAR', price: 14.00, portions: 12 },
      { name: 'MEDIANA', price: 10.00, portions: 10 },
      { name: 'PEQUEÑA', price: 8.00, portions: 8 },
      { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
    ]"
    :popular="false"

  />
  <Card 
    title="Pizza Ranchito" 
    img="/images/pizzas/ranchito.png" 
    description="Salsa BBQ, mozzarella, pollo, tocino, cebolla, pimentón, orégano"
    :sizes="[
      { name: 'FAMILIAR', price: 14.00, portions: 12 },
      { name: 'MEDIANA', price: 10.00, portions: 10 },
      { name: 'PEQUEÑA', price: 8.00, portions: 8 },
      { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
    ]"
    :popular="false"

  />
  <Card 
    title="Pizza Tocichoclo" 
    img="/images/pizzas/tocichoclo.png" 
    description="Salsa de tomate, mozzarella, tocino, choclo, orégano, aceite de oliva"
    :sizes="[
      { name: 'FAMILIAR', price: 14.00, portions: 12 },
      { name: 'MEDIANA', price: 10.00, portions: 10 },
      { name: 'PEQUEÑA', price: 8.00, portions: 8 },
      { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
    ]"
    :popular="false"

  />
  <Card 
    title="Pizza Tradicional" 
    img="/images/pizzas/tradicional.png" 
    description="Salsa de tomate, mozzarella, jamón, orégano, aceite de oliva"
    :sizes="[
      { name: 'FAMILIAR', price: 14.00, portions: 12 },
      { name: 'MEDIANA', price: 10.00, portions: 10 },
      { name: 'PEQUEÑA', price: 8.00, portions: 8 },
      { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
    ]"
    :popular="false"

  />
  <Card 
    title="Pizza Tricolor" 
    img="/images/pizzas/tricolor.png" 
    description="Salsa de tomate, mozzarella, pimentón tricolor, cebolla, orégano, aceite de oliva"
    :sizes="[
      { name: 'FAMILIAR', price: 14.00, portions: 12 },
      { name: 'MEDIANA', price: 10.00, portions: 10 },
      { name: 'PEQUEÑA', price: 8.00, portions: 8 },
      { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
    ]"
    :popular="false"

  />
  <Card 
    title="Pizza Chicken" 
    img="/images/pizzas/chicken.png" 
    description="Salsa BBQ, mozzarella, pollo, cebolla, orégano, aceite de oliva"
    :sizes="[
      { name: 'FAMILIAR', price: 14.00, portions: 12 },
      { name: 'MEDIANA', price: 10.00, portions: 10 },
      { name: 'PEQUEÑA', price: 8.00, portions: 8 },
      { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
    ]"
    :popular="false"

  />

    </div>
  </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
</script>

<style scoped>

</style>
