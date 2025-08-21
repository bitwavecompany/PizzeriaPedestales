<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section id="contacto" class="contact">
    <h2>Contacto</h2>
    <div class="contact-info">
      <div class="contact-item">
        <h3>📍 Dirección</h3>
        <p>Calle Principal 123, Ciudad</p>
      </div>
      <div class="contact-item">
        <h3>📞 Teléfono</h3>
        <p>+1 234 567 8900</p>
      </div>
      <div class="contact-item">
        <h3>📧 Email</h3>
        <p>info@pizzeriapedestales.com</p>
      </div>
      <div class="contact-item">
        <h3>🕒 Horarios</h3>
        <p>Lunes a Domingo: 11:00 AM - 11:00 PM</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact {
  padding: 4rem 2rem;
  text-align: center;
  background: #f8f9fa;
}

.contact h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #dc2626;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.contact-item {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.contact-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #374151;
}

.contact-item p {
  color: #6b7280;
  margin: 0;
}
</style>
