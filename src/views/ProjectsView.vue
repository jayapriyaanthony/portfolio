<template>
  <AppLayout>
    <section class="projects section">
      <div class="container">
        <div class="content">
          <h1>Work Experience</h1>
          <div class="work-header">
            <h2>{{ workExperience.title }} — {{ workExperience.company }}</h2>
            <p class="company-description">{{ workExperience.companyDescription }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="projects-grid section-sm">
      <div class="container">
        <div class="projects-container">
          <ProjectCard 
            v-for="project in workExperience.projects" 
            :key="project.name"
            :project="project"
          />
        </div>
      </div>
    </section>

    <section class="achievements section-sm">
      <div class="container">
        <div class="content">
          <h2>Key Achievements</h2>
          <ul class="achievements-list">
            <li v-for="achievement in workExperience.achievements" :key="achievement">
              {{ achievement }}
            </li>
          </ul>
        </div>
      </div>
    </section>
  </AppLayout>
</template>

<script setup lang="ts">
import { usePortfolioStore } from '@/stores/counter'
import AppLayout from '@/layouts/AppLayout.vue'
import ProjectCard from '@/components/cards/ProjectCard.vue'

const { workExperience } = usePortfolioStore()
</script>

<style scoped>
.work-header {
  margin-bottom: var(--space-8);
}

.work-header h2 {
  margin-bottom: var(--space-4);
  color: var(--color-text);
}

.company-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--space-6);
}

.achievements {
  background-color: var(--color-background-secondary);
}

.achievements-list {
  margin: 0;
  padding-left: var(--space-6);
}

.achievements-list li {
  margin-bottom: var(--space-3);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
}

@media (max-width: 768px) {
  .projects-container {
    grid-template-columns: 1fr;
  }
}
</style>