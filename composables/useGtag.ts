// composables/useGtag.ts
export const useGtag = () => {
  type GtagEventParams = Record<string, string | number | boolean | undefined>

  const trackEvent = (
    eventName: string,
    eventParams: GtagEventParams = {}
  ) => {
    // Verificar que estamos en el cliente
    if (typeof window === 'undefined') return

    // Función para intentar enviar el evento
    const sendEvent = () => {
      // Verificar si gtag está disponible globalmente
      if (typeof window.gtag === 'function') {
        console.log('Enviando evento:', eventName, eventParams) // Para debug
        window.gtag('event', eventName, eventParams)
        return true
      }
      
      // Verificar si dataLayer está disponible
      if (window.dataLayer && Array.isArray(window.dataLayer)) {
        console.log('Enviando evento via dataLayer:', eventName, eventParams) // Para debug
        window.dataLayer.push({
          event: eventName,
          ...eventParams
        })
        return true
      }
      
      return false
    }

    // Intentar enviar inmediatamente
    if (sendEvent()) return

    // Si no está disponible, esperar un poco y reintentar
    setTimeout(() => {
      if (!sendEvent()) {
        console.warn('GA4 no está disponible para enviar el evento:', eventName)
      }
    }, 100)
  }

  return {
    trackEvent
  }
}
