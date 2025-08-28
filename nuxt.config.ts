import tsconfigPaths from 'vite-tsconfig-paths'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-gtag' // 👈 agregado aquí
  ],
  gtag: {
    id: 'G-EFBRLTYSV3', // 👈 tu ID de medición
    config: {
      anonymize_ip: true, // opcional: oculta la IP de los usuarios
      send_page_view: true // 👈 Habilitamos page_view automático
    }
  },
  app: {
    head: {
      title: 'Pizzería Pedestales',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'La mejor pizzería en línea con las pizzas más deliciosas.'
        },
        {
          'http-equiv': 'Permissions-Policy',
          content:
            'accelerometer=(), camera=(), geolocation=(self), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NBSXBL75');`,
          type: 'text/javascript'
        }
      ]
    }
  },
  css: ['@/assets/css/tailwind.css', '@/assets/styles/main.css'],
  ssr: true,
  image: {
    format: ['webp', 'png', 'jpg'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  vite: {
    plugins: [tsconfigPaths()]
  }
})