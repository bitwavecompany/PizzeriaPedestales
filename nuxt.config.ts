import tsconfigPaths from 'vite-tsconfig-paths'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Pizzería Pedestales',
      meta: [
        {
          name: 'description',
          content: 'La mejor pizzería en línea con las pizzas más deliciosas.'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  css: ['@/assets/css/tailwind.css'],
  vite: {
    plugins: [tsconfigPaths()]
  }
})