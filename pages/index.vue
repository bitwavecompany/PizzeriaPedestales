<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="overflow-x-hidden max-w-full">
    <Hero />
    <div class="px-0 py-0 sm:py-0 overflow-x-hidden">
      <Carrusel/>
    </div>
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
