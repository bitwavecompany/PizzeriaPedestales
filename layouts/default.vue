<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Header />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
</script>
