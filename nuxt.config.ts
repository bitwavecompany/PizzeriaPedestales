// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  site: {
    url: 'https://pizzeriapedestales.com',
    name: 'Pizzería Pedestales'
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
    '@nuxtjs/google-fonts',
    '@vueuse/motion/nuxt',
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
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }]
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