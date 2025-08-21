<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    id="inicio"
    class="relative flex items-center justify-center min-h-[600px] h-screen bg-cover bg-center bg-no-repeat"
    style="background-image: url('/images/banners/tarjeta-presentacion.png'); background-attachment: fixed;"
  >
    <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
      <div class="text-center text-white max-w-2xl w-full px-4 z-10">
        <h1 class="font-bold text-5xl md:text-4xl sm:text-2xl mb-6 leading-tight drop-shadow-lg">
          La Mejor Pizza de la
          <span class="text-red-500 drop-shadow-xl"> Ciudad</span>
        </h1>
        <p class="text-lg md:text-base mb-8 drop-shadow-md leading-relaxed">
          Desde 1952, creamos pizzas artesanales con ingredientes<br>
          frescos y recetas tradicionales italianas
        </p>
        <div class="flex justify-center gap-12 mb-12 flex-wrap">
          <div class="flex items-center gap-2 text-base drop-shadow">
            <Icon icon="ic:round-star" class="text-yellow-400 text-xl" />
            <span>4.8/5 Estrellas</span>
          </div>
          <div class="flex items-center gap-2 text-base drop-shadow">
            <Icon icon="ic:round-access-time" class="text-green-300 text-xl" />
            <span>Entrega en 30 min</span>
          </div>
          <div class="flex items-center gap-2 text-base drop-shadow">
            <Icon icon="ic:round-emoji-events" class="text-yellow-300 text-xl" />
            <span>+70 años de experiencia</span>
          </div>
        </div>
        <div class="flex gap-4 justify-center flex-wrap">
          <Button text="Ver Nuestro Menú" class="btn-primary" />
          <Button text="Hacer Pedido" class="btn-secondary" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button.vue'
import { Icon } from '@iconify/vue';
</script>

<style scoped>
.btn-primary {
  background: #ef4444;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}
.btn-primary:hover {
  background: #dc2626;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(239, 68, 68, 0.3);
}
.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
}
.btn-secondary:hover {
  background: white;
  color: #333;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 255, 255, 0.3);
}
</style>
