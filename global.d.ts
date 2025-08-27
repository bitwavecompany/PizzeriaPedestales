export {};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }

  function gtag(...args: unknown[]): void
}
