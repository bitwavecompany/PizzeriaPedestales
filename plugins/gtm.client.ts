// Plugin para Google Tag Manager
export default defineNuxtPlugin(() => {
  // Inicializar dataLayer si no existe
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || []
    
    // Función helper para enviar eventos a GTM
    window.gtag = function(...args: unknown[]) {
      if (window.dataLayer) {
        window.dataLayer.push(args)
      }
    }
  }
})
