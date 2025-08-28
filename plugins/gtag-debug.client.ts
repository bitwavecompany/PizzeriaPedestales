// plugins/gtag-debug.client.ts
export default defineNuxtPlugin(() => {
  // Solo ejecutar en el cliente
  if (typeof window !== 'undefined') {
    // Verificar que Google Analytics esté cargado
    let attempts = 0
    const maxAttempts = 10
    
    const checkGtag = () => {
      attempts++
      
      if (typeof window.gtag === 'function') {
        console.log('✅ Google Analytics (gtag) está cargado y listo')
        return
      }
      
      if (window.dataLayer && Array.isArray(window.dataLayer)) {
        console.log('✅ Google Analytics (dataLayer) está disponible')
        return
      }
      
      if (attempts < maxAttempts) {
        console.log(`⏳ Esperando Google Analytics... intento ${attempts}/${maxAttempts}`)
        setTimeout(checkGtag, 1000)
      } else {
        console.warn('⚠️ Google Analytics no se cargó después de varios intentos')
      }
    }
    
    // Verificar inmediatamente y luego cada segundo si es necesario
    checkGtag()
  }
})
