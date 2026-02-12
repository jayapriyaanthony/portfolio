<template>
  <AppLayout>
    <section class="about section">
      <div class="container">
        <div class="content">
          <h1>About Me</h1>
          <div class="about-content">
            <p v-for="paragraph in aboutParagraphs" :key="paragraph">{{ paragraph }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="skills section-sm">
      <div class="container">
        <div class="content">
          <h2>Core Skills & Technologies</h2>
          <div class="skills-grid">
            <div v-for="skillGroup in skills" :key="skillGroup.category" class="skill-group">
              <h3 class="skill-category">{{ skillGroup.category }}</h3>
              <div class="skill-tags">
                <span 
                  v-for="tech in skillGroup.technologies" 
                  :key="tech" 
                  class="skill-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="ai-workflow section-sm">
      <div class="container">
        <div class="content">
          <h2>How I Work With AI</h2>
          <div class="ai-content">
            <p>AI is part of my engineering workflow, not a shortcut.</p>
            <p>During the Ext.js → Vue 3 revamp, I used Amazon Q and Cursor to break down legacy logic, plan structured rewrites, and maintain consistent coding standards through prompts. This reduced cognitive load, accelerated delivery, and kept architectural decisions fully intentional.</p>
            <p>I use AI to move faster through complexity — while staying in control of design and quality.</p>
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

const { profile, skills } = usePortfolioStore()

const aboutParagraphs = computed(() => {
  return profile.about.split('\n\n')
})
</script>

<style scoped>
.about-content {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
}

.skills-grid {
  display: grid;
  margin-top: var(--space-4);
}

.skill-group {
  padding: var(--space-6);
  background-color: var(--color-background-secondary);
  border-radius: var(--border-radius-lg);
}

.skill-category {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-4);
  color: var(--color-text-secondary);
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.skill-tag {
  background-color: var(--color-background);
  color: var(--color-text-secondary);
  padding: var(--space-2) var(--space-4);
  border-radius: var(--border-radius);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  border: 1px solid var(--color-border);
}

.ai-workflow {
  background-color: var(--color-background-secondary);
}

.ai-content {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
}
</style>
