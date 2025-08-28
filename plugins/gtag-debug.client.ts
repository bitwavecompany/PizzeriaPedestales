// plugins/gtag-debug.client.ts
export default defineNuxtPlugin(() => {
  // Solo ejecutar en el cliente
  if (typeof window !== 'undefined') {
    // Verificar inmediatamente si gtag está disponible
    console.log('🔍 Verificando estado de Google Analytics...')
    
    const checkGtagStatus = () => {
      console.log('--- Estado de Google Analytics ---')
      console.log('window.gtag:', typeof window.gtag)
      console.log('window.dataLayer:', window.dataLayer ? 'disponible' : 'no disponible')
      console.log('dataLayer length:', window.dataLayer?.length || 0)
      
      if (window.dataLayer) {
        console.log('Últimas entradas en dataLayer:', window.dataLayer.slice(-3))
      }
    }
    
    // Verificar inmediatamente
    checkGtagStatus()
    
    // Verificar después de 2 segundos para dar tiempo a que cargue
    setTimeout(() => {
      console.log('🔍 Verificando nuevamente después de 2 segundos...')
      checkGtagStatus()
    }, 2000)
    
    // Interceptar llamadas a gtag para debugging
    if (typeof window.gtag === 'function') {
      const originalGtag = window.gtag
      window.gtag = function(...args) {
        console.log('📊 Llamada interceptada a gtag:', args)
        return originalGtag.apply(this, args)
      }
    }
  }
})
