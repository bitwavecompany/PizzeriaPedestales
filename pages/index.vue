<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Hero />
    <Carrusel/>
    <MenuPreview />
    <Contact />
  </div>
</template>

<script setup lang="ts">
import Hero from '@/components/landing/Hero.vue'
import MenuPreview from '@/components/landing/MenuPreview.vue'
import Contact from '@/components/landing/Contact.vue'
import Carrusel from '@/components/landing/Carrusel.vue';
</script>
