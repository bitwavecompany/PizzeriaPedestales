<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    id="inicio"
    class="relative flex items-center justify-center min-h-[500px] sm:min-h-[600px] h-screen bg-cover bg-center bg-no-repeat overflow-x-hidden"
    style="background-image: url('/images/banners/tarjeta-presentacion.png'); background-attachment: scroll;"
  >
    <div class="absolute inset-0 bg-black/40 flex items-center justify-center overflow-x-hidden">
      <div class="text-center text-white max-w-4xl w-full px-4 sm:px-6 lg:px-8 z-10">
        <h1 class="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight drop-shadow-lg">
          La Pizza que Siempre Querrás Repetir
        </h1>
        <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div class="flex items-center justify-center gap-2 text-lg sm:text-xl lg:text-2xl drop-shadow">
            <Icon icon="ic:round-star" class="text-yellow-400 flex-shrink-0" :width="isLargeScreen ? 36 : 24" :height="isLargeScreen ? 36 : 24" />
            <span class="text-center sm:text-left">La preferida de todos</span>
          </div>
          <div class="flex items-center justify-center gap-2 text-lg sm:text-xl lg:text-2xl drop-shadow">
            <Icon icon="ic:round-access-time" class="text-green-300 flex-shrink-0" :width="isLargeScreen ? 30 : 24" :height="isLargeScreen ? 30 : 24" />
            <span class="text-center sm:text-left">Listas en tan solo 10 minutos!</span>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <a href="/documents/MenúPizzeríaPedestales.pdf" download class="inline-block w-full sm:w-auto max-w-xs" @click="trackMenuDownload">
            <Button text="Descargar Menú" class="w-full sm:w-auto justify-center">
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
import { computed, ref, onMounted } from 'vue'
import Button from '@/components/ui/Button.vue'
import { useGtag } from '@/composables/useGtag'
import { Icon } from '@iconify/vue';

// Estado para detectar si estamos en el cliente
const isClient = ref(false)

const { trackEvent } = useGtag()

// Detectar pantallas grandes para ajustar el tamaño de los iconos
const isLargeScreen = computed(() => {
  if (!isClient.value) return false
  if (typeof window !== 'undefined') {
    return window.innerWidth >= 1024
  }
  return false
})

onMounted(() => {
  isClient.value = true
})

const trackMenuDownload = (event: Event) => {
  // Prevenir que el evento se dispare durante la hidratación o por comportamiento no deseado
  if (!isClient.value) {
    event.preventDefault()
    return
  }
  
  console.log('Intentando enviar evento de descarga de menú...') // Debug
  trackEvent('menu_download', {
    event_category: 'engagement',
    event_label: 'Menu PDF',
    file_name: 'MenúPizzeríaPedestales.pdf',
    file_extension: 'pdf',
    link_url: '/documents/MenúPizzeríaPedestales.pdf',
    value: 1
  })
}


</script>

<style scoped>
/* Ajustes específicos para móviles */
@media (max-width: 640px) {
  section {
    background-attachment: scroll !important;
  }
}

/* Mejorar legibilidad en pantallas pequeñas */
@media (max-width: 768px) {
  .drop-shadow-lg {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }
}
</style>
