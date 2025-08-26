<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <Header />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
    
    <!-- Botón flotante de WhatsApp -->
    <WhatsAppButton 
      phone-number="593991961946"
      message="¡Hola! Me gustaría hacer un pedido en Pizzería Pedestales. ¿Podrían ayudarme?"
      tooltip-text="¡Escríbenos por WhatsApp!"
    />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import WhatsAppButton from '@/components/ui/WhatsAppButton.vue'
</script>
