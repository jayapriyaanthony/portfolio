<template>
  <AppLayout>
    <section class="contact section">
      <div class="container">
        <div class="content">
          <h1>Contact</h1>
          <div class="contact-content">
            <p class="contact-intro">
              Let's build frontend systems that are fast, scalable, and future-ready. I specialize in high-performance frontend engineering for complex financial products. If you want to discuss a new project, collaboration, or just want to connect professionally, I'd love to hear from you.
            </p>
            <p>
              Reach out via your preferred method below — I respond quickly and am always open to exploring challenging opportunities or consulting on advanced frontend system transformation.
            </p>
          </div>
          
          <div class="contact-methods">
            <a :href="`mailto:${profile.email}`" class="contact-method">
              <div class="contact-method-icon">✉</div>
              <div class="contact-method-content">
                <div class="contact-method-label">Email</div>
                <div class="contact-method-value">{{ profile.email }}</div>
              </div>
            </a>
            
            <a :href="`https://${profile.linkedin}`" target="_blank" rel="noopener noreferrer" class="contact-method">
              <div class="contact-method-icon">💼</div>
              <div class="contact-method-content">
                <div class="contact-method-label">LinkedIn</div>
                <div class="contact-method-value">{{ profile.linkedin }}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '@/stores/counter'
import AppLayout from '@/layouts/AppLayout.vue'

const { profile } = usePortfolioStore()
</script>

<style scoped>
.contact-content {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--space-12);
}

.contact-intro {
  font-weight: var(--font-weight-medium);
}

.contact-methods {
  display: grid;
  gap: var(--space-6);
  max-width: 600px;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  padding: var(--space-6);
  background-color: var(--color-background-secondary);
  border-radius: var(--border-radius-lg);
  text-decoration: none;
  color: inherit;
  transition: all var(--transition-normal);
  border: 1px solid var(--color-border);
}

.contact-method:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  border-color: var(--color-primary);
}

.contact-method-icon {
  font-size: var(--font-size-2xl);
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  color: white;
  border-radius: var(--border-radius);
}

.contact-method-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-1);
}

.contact-method-value {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}
</style>