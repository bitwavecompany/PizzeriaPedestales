<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    id="inicio"
    class="relative flex items-center justify-center min-h-[600px] h-screen bg-cover bg-center bg-no-repeat"
    style="background-image: url('/images/banners/tarjeta-presentacion.png'); background-attachment: fixed;"
  >
    <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
      <div class="text-center text-white max-w-2xl w-full px-4 z-10">
        <h1 class="font-bold text-6xl md:text-4xl sm:text-2xl mb-6 leading-tight drop-shadow-lg">
          La Pizza que Siempre Querrás Repetir
        </h1>
        <div class="flex justify-center gap-12 mb-12 flex-wrap">
          <div class="flex items-center gap-2 text-2xl md:text-xl drop-shadow">
            <Icon icon="ic:round-star" class="text-yellow-400" width="36" height="36" />
            <span>La preferida de todos</span>
          </div>
          <div class="flex items-center gap-2 text-2xl md:text-xl drop-shadow">
            <Icon icon="ic:round-access-time" class="text-green-300" width="30" height="30" />
            <span>Listas en tan solo 10 minutos !!!</span>
          </div>
        </div>
        <div class="flex gap-4 justify-center flex-wrap">
          <a href="/documents/MenúPizzeríaPedestales.pdf" download class="inline-block">
            <Button text="Descargar Menú">
              <template #icon>
                <Icon icon="ic:baseline-download" width="24" height="24" />
              </template>
            </Button>
          </a>
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
/* Estilos removidos ya que el componente Button maneja sus propios estilos */
</style>
