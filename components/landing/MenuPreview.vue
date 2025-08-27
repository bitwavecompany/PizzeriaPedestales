<template>
  <section id="menu" class="pb-12 pt-20 px-4 text-center bg-gradient-to-t from-green-500 to-emerald-800">
    <div class="max-w-4xl mx-auto mb-8 sm:mb-10">
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">Nuestras Pizzas</h2>
    </div>
    <div class="w-full mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 justify-items-center max-w-7xl mx-auto px-2 sm:px-0">

        <Card 
          title="Pizza Hawaiana" 
          img="/images/pizzas/hawaiana.png" 
          description="Jámon, Piña y Queso"
          :sizes="[
            { name: 'FAMILIAR', price: 13.00, portions: 12 },
            { name: 'MEDIANA', price: 9.00, portions: 10 },
            { name: 'PEQUEÑA', price: 7.00, portions: 8 },
            { name: 'INDIVIDUAL', price: 4.50, portions: 6 },
            { name: 'INFANTIL', price: 2.75, portions: 4 }
          ]"
          :popular="true"
        />
                <Card 
          title="Pizza Tradicional" 
          img="/images/pizzas/tradicional.png" 
          description="Jamón y Queso"
          :sizes="[
            { name: 'FAMILIAR', price: 10.50, portions: 12 },
            { name: 'MEDIANA', price: 7.50, portions: 10 },
            { name: 'PEQUEÑA', price: 5.50, portions: 8 },
            { name: 'INDIVIDUAL', price: 3.00, portions: 6 },
            { name: 'INFANTIL', price: 2.50, portions: 4}
          ]"
          :popular="true"
        />
        <Card 
          title="Pizza Fungui" 
          img="/images/pizzas/fungui.png" 
          description="Jamón, Cebolla y Champiñones"
          :sizes="[
            { name: 'FAMILIAR', price: 15.00, portions: 12 },
            { name: 'MEDIANA', price: 11.75, portions: 10 },
            { name: 'PEQUEÑA', price: 8.00, portions: 8 },
            { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
          ]"
          :popular="false"
        />
        <Card 
          title="Pizza Pepperoni" 
          img="/images/pizzas/peperoni.png" 
          description="Pepperoni y Queso"
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
          description="Pollo, Jamón y Piña"
          :sizes="[
            { name: 'FAMILIAR', price: 15.00, portions: 12 },
            { name: 'MEDIANA', price: 12.00, portions: 10 },
            { name: 'PEQUEÑA', price: 8.00, portions: 8 },
            { name: 'INDIVIDUAL', price: 5.50, portions: 6 }
          ]"
          :popular="false"
        />
        <Card 
          title="Pizza Mixta" 
          img="/images/pizzas/mixta.png" 
          description="Jamón, Salchicha, Pimiento, Carne molida, Champiñones, Salami y Cebolla"
          :sizes="[
            { name: 'FAMILIAR', price: 18.50, portions: 12 },
            { name: 'MEDIANA', price: 15.00, portions: 10 },
            { name: 'PEQUEÑA', price: 10.00, portions: 8 },
            { name: 'INDIVIDUAL', price: 5.50, portions: 6 }
          ]"
          :popular="false"
        />
        <Card 
          title="Pizza Napolitana" 
          img="/images/pizzas/napolitana.png" 
          description="Tomate en rodajas, Orégano y Queso"
          :sizes="[
            { name: 'FAMILIAR', price: 10.00, portions: 12 },
            { name: 'MEDIANA', price: 7.00, portions: 10 },
            { name: 'PEQUEÑA', price: 5.00, portions: 8 },
            { name: 'INDIVIDUAL', price: 3.00, portions: 6 }
          ]"
          :popular="false"
        />
        <Card 
          title="Pizza Ranchito" 
          img="/images/pizzas/ranchito.png" 
          description="Jamón, Salchicha, Pepperoni, Carne molida, Tocino, Salami y Queso"
          :sizes="[
            { name: 'FAMILIAR', price: 20.00, portions: 12 },
            { name: 'MEDIANA', price: 16.00, portions: 10 },
            { name: 'PEQUEÑA', price: 12.00, portions: 8 },
            { name: 'INDIVIDUAL', price: 5.50, portions: 6 }
          ]"
          :popular="false"
        />
        <Card 
          title="Pizza Tocichoclo" 
          img="/images/pizzas/tocichoclo.png" 
          description="Tocino, Salami, Choclo y Queso"
          :sizes="[
            { name: 'FAMILIAR', price: 15.00, portions: 12 },
            { name: 'MEDIANA', price: 12.00, portions: 10 },
            { name: 'PEQUEÑA', price: 9.00, portions: 8 },
            { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
          ]"
          :popular="false"
        />
        <Card 
          title="Pizza Tricolor" 
          img="/images/pizzas/tricolor.png" 
          description="Jamón, Piña, Pepperoni, Queso"
          :sizes="[
            { name: 'FAMILIAR', price: 14.00, portions: 12 },
            { name: 'MEDIANA', price: 11.00, portions: 10 },
            { name: 'PEQUEÑA', price: 8.00, portions: 8 },
            { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
          ]"
          :popular="false"
        />
        <Card 
          title="Pizza Chicken" 
          img="/images/pizzas/chicken.png" 
          description="Pollo, Pimiento y Champiñones"
          :sizes="[
            { name: 'FAMILIAR', price: 16.00, portions: 12 },
            { name: 'MEDIANA', price: 13.50, portions: 10 },
            { name: 'PEQUEÑA', price: 9.50, portions: 8 },
            { name: 'INDIVIDUAL', price: 5.00, portions: 6 }
          ]"
          :popular="false"
        />

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
</script>

<style scoped>

</style>
