<!-- Test component for GA4 events -->
<template>
  <div class="fixed top-20 right-4 z-50 p-4 bg-blue-500 text-white rounded-lg shadow-lg">
    <h3 class="text-sm font-bold mb-2">Debug GA4</h3>
    <button 
      class="bg-white text-blue-500 px-3 py-1 rounded text-xs font-medium mb-2 block w-full"
      @click="testEvent"
    >
      Test Event
    </button>
    <button 
      class="bg-white text-blue-500 px-3 py-1 rounded text-xs font-medium block w-full"
      @click="checkGtag"
    >
      Check GA4 Status
    </button>
  </div>
</template>

<script setup lang="ts">
import { useGtag } from '@/composables/useGtag'

const { trackEvent } = useGtag()

const testEvent = () => {
  console.log('🧪 Enviando evento de prueba...')
  trackEvent('test_event', {
    test_parameter: 'test_value',
    timestamp: Date.now()
  })
}

const checkGtag = () => {
  console.log('🔍 Verificando estado de GA4...')
  console.log('window.gtag:', typeof window.gtag)
  console.log('window.dataLayer:', window.dataLayer ? 'disponible' : 'no disponible')
  if (window.dataLayer) {
    console.log('dataLayer length:', window.dataLayer.length)
    console.log('Últimas entradas:', window.dataLayer.slice(-5))
  }
}
</script>
