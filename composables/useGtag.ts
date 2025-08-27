// composables/useGtag.ts
export const useGtag = () => {
  type GtagEventParams = Record<string, string | number | boolean | undefined>

  const trackEvent = (
    eventName: string,
    eventParams: GtagEventParams = {}
  ) => {
    if (
      typeof window !== 'undefined' &&
      typeof (window as Window & { gtag?: (...args: unknown[]) => void }).gtag === 'function'
    ) {
      (window as Window & { gtag: (...args: unknown[]) => void }).gtag('event', eventName, eventParams)
    }
  }

  return {
    trackEvent
  }
}
