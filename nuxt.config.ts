// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  site: {
    url: 'https://pizzeriapedestales.com',
    name: 'Pizzería Pedestales',
    defaultLocale: 'es'
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
    '@nuxtjs/google-fonts',
    '@nuxtjs/seo'
  ],

  googleFonts: {
    families: {
      'Playfair+Display': [400, 600, 700, 800, 900],
      'Inter': [300, 400, 500, 600, 700],
    },
    display: 'swap',
  },

  gtag: {
    id: 'G-EFBRLTYSV3', // 👈 tu ID de medición
    config: {
      anonymize_ip: true, // opcional: oculta la IP de los usuarios
      send_page_view: true // 👈 Habilitamos page_view automático
    }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      title: 'Pizzería Pedestales',
      meta: [
        {
          name: 'description',
          content: 'La mejor pizzería en línea con las pizzas más deliciosas.'
        },
        {
          'http-equiv': 'Permissions-Policy',
          content:
            'accelerometer=(), camera=(), geolocation=(self), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()'
        },
        { name: 'theme-color', content: '#faf8f4' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'manifest', href: '/manifest.json' }
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
  }
})