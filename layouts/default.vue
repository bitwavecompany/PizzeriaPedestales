<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="overflow-x-hidden max-w-full">
    <LayoutHeader />
    <main class="min-h-screen overflow-x-hidden">
      <slot />
    </main>
    <LayoutFooter />
    
    <!-- Botón flotante de WhatsApp -->
    <UiWhatsAppButton 
      phone-number="593993740527"
      message="¡Hola! Me gustaría hacer un pedido en Pizzería Pedestales. ¿Podrían ayudarme?"
      tooltip-text="¡Escríbenos por WhatsApp!"
    />
  </div>
</template>
