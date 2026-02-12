<template>
  <article class="article-card card hover-lift">
    <div class="article-meta">
      <time class="article-date">{{ formattedDate }}</time>
      <span class="article-read-time">{{ article.readTime }}</span>
    </div>
    
    <h3 class="article-title">
      <a :href="`#articles/${article.slug}`">
        {{ article.title }}
      </a>
    </h3>
    
    <p class="article-excerpt">{{ article.excerpt }}</p>
    
    <div class="article-tags">
      <span 
        v-for="tag in article.tags" 
        :key="tag" 
        class="tag"
      >
        {{ tag }}
      </span>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Article } from '@/types'

const props = defineProps<{
  article: Article
}>()

const formattedDate = computed(() => {
  return new Date(props.article.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<style scoped>
.article-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.article-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-primary-hover));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition-normal) var(--ease-out-quart);
}

.article-card:hover::before {
  transform: scaleX(1);
}

.article-meta {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  margin-bottom: var(--space-3);
  font-size: var(--font-size-sm);
  color: var(--color-text-muted);
}

.article-title {
  margin-bottom: var(--space-3);
}

.article-title a {
  color: var(--color-text-primary);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.article-title a:hover,
.article-card:hover .article-title a {
  color: var(--color-primary);
}

.article-excerpt {
  flex: 1;
  margin-bottom: var(--space-4);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
}

.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.tag {
  background-color: var(--color-surface-elevated);
  color: var(--color-text-secondary);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--border-radius);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  border: 1px solid var(--color-border);
  transition: all var(--transition-fast);
}

.article-card:hover .tag {
  border-color: var(--color-primary);
  color: var(--color-primary);
}
</style>