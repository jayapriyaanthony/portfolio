<template>
  <article class="project-card card hover-lift">
    <div class="project-header">
      <h3 class="project-title">{{ project.name }}</h3>
      <div class="project-technologies">
        <span 
          v-for="tech in project.technologies" 
          :key="tech" 
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>
    </div>
    
    <p class="project-description">{{ project.description }}</p>
    
    <ul class="project-achievements">
      <li v-for="achievement in project.achievements" :key="achievement">
        {{ achievement }}
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '@/types'

defineProps<{
  project: Project
}>()
</script>

<style scoped>
.project-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
}

.project-card::before {
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

.project-card:hover::before {
  transform: scaleX(1);
}

.project-header {
  margin-bottom: var(--space-4);
}

.project-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-3);
  color: var(--color-text-primary);
  transition: color var(--transition-fast);
}

.project-card:hover .project-title {
  color: var(--color-primary);
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-bottom: var(--space-4);
}

.tech-tag {
  background-color: var(--color-surface-elevated);
  color: var(--color-text-secondary);
  padding: var(--space-1) var(--space-3);
  border-radius: var(--border-radius);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  border: 1px solid var(--color-border);
  transition: all var(--transition-fast);
}

.project-card:hover .tech-tag {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.project-description {
  font-weight: var(--font-weight-medium);
  margin-bottom: var(--space-4);
  color: var(--color-text-secondary);
}

.project-achievements {
  flex: 1;
  margin: 0;
  padding-left: var(--space-4);
}

.project-achievements li {
  margin-bottom: var(--space-2);
  font-size: var(--font-size-sm);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
}
</style>