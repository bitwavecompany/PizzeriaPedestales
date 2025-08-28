// composables/useGtag.ts

export const useGtag = () => {
  type GtagEventParams = Record<string, string | number | boolean | undefined>

  const trackEvent = (
    eventName: string,
    eventParams: GtagEventParams = {}
  ) => {
    // Verificar que estamos en el cliente
    if (typeof window === 'undefined') {
      console.log('❌ No estamos en el cliente, ignorando evento:', eventName)
      return
    }

    console.log('🎯 Intentando enviar evento:', eventName, eventParams)

    // Método 1: Usar gtag directamente
    if (typeof window.gtag === 'function') {
      try {
        window.gtag('event', eventName, eventParams)
        console.log('✅ Evento enviado via window.gtag')
        return
      } catch (error) {
        console.error('❌ Error con window.gtag:', error)
      }
    }

    // Método 2: Usar dataLayer directamente
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      try {
        window.dataLayer.push({
          event: eventName,
          ...eventParams
        })
        console.log('✅ Evento enviado via dataLayer')
        return
      } catch (error) {
        console.error('❌ Error con dataLayer:', error)
      }
    }

    console.warn('⚠️ No se pudo enviar el evento - ni gtag ni dataLayer están disponibles')
  }

  return {
    trackEvent
  }
}
