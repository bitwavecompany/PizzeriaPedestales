<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  titleTemplate: '%s | Pizzería Pedestales',
  ogTitle: 'Pizzería Pedestales',
  ogDescription: 'La mejor pizzería en línea con las pizzas más deliciosas y masa artesanal fermentada por 48h.',
  ogImage: '/logo.webp',
  twitterCard: 'summary_large_image',
})

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Pizzería Pedestales",
  "image": "https://pizzeriapedestales.vercel.app/logo.webp",
  "description": "Masa lenta, fuego alto y buenos ingredientes. Una experiencia sencilla, hecha para repetirse.",
  "servesCuisine": "Pizza",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dirección del local",
    "addressLocality": "Ciudad",
    "addressRegion": "Región",
    "addressCountry": "EC"
  }
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schemaData)
    }
  ]
})
</script>