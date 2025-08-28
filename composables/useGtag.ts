// composables/useGtag.ts

// Set global para almacenar eventos recientes y evitar duplicados inmediatos
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

    // Crear una clave única para evitar duplicados inmediatos (misma interacción)
    const duplicateKey = `${eventName}_${Date.now()}`

    // Verificar si el mismo evento se ha enviado muy recientemente (últimos 500ms)
    const recentSimilarEvent = Array.from(globalRecentEvents).find(key => 
      key.startsWith(eventName) && 
      (Date.now() - parseInt(key.split('_').pop() || '0')) < 500
    )

    if (recentSimilarEvent) {
      console.log('🚫 Evento duplicado detectado (muy reciente), ignorando:', eventName)
      return
    }

    // Agregar a la lista de eventos recientes
    globalRecentEvents.add(duplicateKey)
    
    // Limpiar entradas viejas después de 2 segundos
    setTimeout(() => {
      globalRecentEvents.delete(duplicateKey)
    }, 2000)

    // Función para enviar el evento
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

    // Enviar el evento
    const success = sendEvent()
    
    if (!success) {
      console.warn('⚠️ GA4 no está disponible para enviar el evento:', eventName)
    }
  }

  return {
    trackEvent
  }
}
