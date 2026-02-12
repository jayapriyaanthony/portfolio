<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <p class="footer-text">
          © {{ currentYear }} {{ profile.name }}. Built with Vue 3 & TypeScript.
        </p>
        <div class="footer-links">
          <a :href="`https://${profile.linkedin}`" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/she_techie?igsh=MTl0aGl3eWVubHpqOA==" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a :href="`mailto:${profile.email}`">
            Email
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/counter'

const { profile } = usePortfolioStore()
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background-color: var(--color-background-secondary);
  border-top: 1px solid var(--color-border);
  padding: var(--space-8) 0;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-text {
  color: var(--color-text-muted);
  margin: 0;
}

.footer-links {
  display: flex;
  gap: var(--space-6);
}

.footer-links a {
  color: var(--color-text-secondary);
  font-size: var(--font-size-sm);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: var(--space-4);
    text-align: center;
  }
}
</style>