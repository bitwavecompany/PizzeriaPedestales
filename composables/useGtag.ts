// composables/useGtag.ts

// Set global para almacenar eventos recientes y evitar duplicados
const globalRecentEvents = new Set<string>()

export const useGtag = () => {
  type GtagEventParams = Record<string, string | number | boolean | undefined>

  const trackEvent = (
    eventName: string,
    eventParams: GtagEventParams = {}
  ) => {
    // Verificar que estamos en el cliente y que el evento no es vacío
    if (typeof window === 'undefined' || !eventName) {
      console.log('Evento ignorado - no en cliente o nombre vacío:', eventName)
      return
    }

    // Crear una clave única para evitar duplicados
    const duplicateKey = `${eventName}_${eventParams.event_label || ''}`

    // Verificar si el mismo evento se ha enviado muy recientemente (últimos 3 segundos)
    if (globalRecentEvents.has(duplicateKey)) {
      console.log('🚫 Evento duplicado detectado, ignorando:', eventName)
      return
    }

    // Agregar a la lista de eventos recientes
    globalRecentEvents.add(duplicateKey)
    
    // Limpiar la entrada después de 3 segundos
    setTimeout(() => {
      globalRecentEvents.delete(duplicateKey)
    }, 3000)

    // Función para enviar el evento una sola vez
    const sendEvent = (): boolean => {
      try {
        // Verificar si gtag está disponible globalmente
        if (typeof window.gtag === 'function') {
          console.log('✅ Enviando evento via gtag:', eventName, eventParams)
          window.gtag('event', eventName, eventParams)
          return true
        }
        
        // Verificar si dataLayer está disponible como fallback
        if (window.dataLayer && Array.isArray(window.dataLayer)) {
          console.log('✅ Enviando evento via dataLayer:', eventName, eventParams)
          window.dataLayer.push({
            event: eventName,
            ...eventParams
          })
          return true
        }
        
        return false
      } catch (error) {
        console.error('❌ Error enviando evento de GA4:', error)
        return false
      }
    }

    // Intentar enviar inmediatamente - solo una vez
    const success = sendEvent()
    
    if (!success) {
      console.warn('⚠️ GA4 no está disponible para enviar el evento:', eventName)
    }
  }

  return {
    trackEvent
  }
}
