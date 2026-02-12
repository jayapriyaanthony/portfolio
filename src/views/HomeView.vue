<template>
  <AppLayout>
    <section class="hero section">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">{{ profile.name }}</h1>
          <p class="hero-subtitle">{{ profile.title }}</p>
          <p class="hero-tagline">{{ profile.tagline }}</p>
          <div class="hero-bio">
            <p v-for="paragraph in bioParagraphs" :key="paragraph">{{ paragraph }}</p>
          </div>
          <div class="hero-actions">
            <RouterLink to="/projects" class="btn btn-primary">View Projects</RouterLink>
            <RouterLink to="/contact" class="btn">Get in Touch</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="highlights section-sm">
      <div class="container">
        <div class="highlights-grid">
          <div class="highlight-item">
            <div class="highlight-value">{{ workExperience.highlights.loadTime }}</div>
            <div class="highlight-label">Performance Improvement</div>
          </div>
          <div class="highlight-item">
            <div class="highlight-value">{{ workExperience.highlights.satisfaction }}</div>
            <div class="highlight-label">User Satisfaction Boost</div>
          </div>
          <div class="highlight-item">
            <div class="highlight-value">{{ workExperience.highlights.rebuilds }}</div>
            <div class="highlight-label">Legacy System Rebuilt</div>
          </div>
          <div class="highlight-item">
            <div class="highlight-value">{{ workExperience.highlights.experience }}</div>
            <div class="highlight-label">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { usePortfolioStore } from '@/stores/counter'
import AppLayout from '@/layouts/AppLayout.vue'

const { profile, workExperience } = usePortfolioStore()

const bioParagraphs = computed(() => {
  return profile.bio.split('\n\n')
})
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, var(--color-background) 0%, var(--color-background-secondary) 100%);
}

.hero-content {
  max-width: var(--max-width-content);
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--space-2);
}

.hero-subtitle {
  font-size: var(--font-size-2xl);
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-4);
}

.hero-tagline {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-8);
  color: var(--color-text);
}

.hero-bio {
  margin-bottom: var(--space-8);
  text-align: left;
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
}

.highlights {
  background-color: var(--color-background-secondary);
}

.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--space-8);
  text-align: center;
}

.highlight-item {
  padding: var(--space-4);
}

.highlight-value {
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--space-2);
}

.highlight-label {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}

@media (max-width: 768px) {
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
}
</style>
