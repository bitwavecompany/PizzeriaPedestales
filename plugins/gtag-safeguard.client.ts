// plugins/gtag-safeguard.client.ts
export default defineNuxtPlugin(() => {
  // Solo se ejecuta en el cliente
  if (import.meta.client) {
    console.log('🔒 Plugin de protección GA4 activado')
    
    // Agregar protección adicional contra eventos automáticos
    const originalGtag = window.gtag
    
    if (originalGtag) {
      window.gtag = function(...args: unknown[]) {
        // Solo permitir eventos que tengan un nombre válido
        if (args[0] === 'event' && typeof args[1] === 'string') {
          const eventName = args[1]
          const eventParams = args[2] as Record<string, unknown> || {}
          
          console.log('🎯 Evento GA4 interceptado:', eventName, eventParams)
          
          // Llamar al gtag original
          originalGtag.apply(window, args)
        } else {
          // Para otros tipos de llamadas (config, etc.)
          originalGtag.apply(window, args)
        }
      }
    }
  }
})
