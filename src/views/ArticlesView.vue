<template>
  <AppLayout>
    <section class="articles section">
      <div class="container">
        <div class="content">
          <h1>Articles</h1>
          <p class="articles-intro">
            Technical insights from building scalable frontend systems and modernizing legacy applications.
          </p>
        </div>
      </div>
    </section>

    <section class="articles-grid section-sm">
      <div class="container">
        <div class="articles-container">
          <ArticleCard 
            v-for="article in articles" 
            :key="article.id"
            :article="article"
          />
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '@/stores/counter'
import AppLayout from '@/layouts/AppLayout.vue'
import ArticleCard from '@/components/cards/ArticleCard.vue'

const { articles } = usePortfolioStore()
</script>

<style scoped>
.articles-intro {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-top: var(--space-4);
}

.articles-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--space-6);
}

@media (max-width: 768px) {
  .articles-container {
    grid-template-columns: 1fr;
  }
}
</style>