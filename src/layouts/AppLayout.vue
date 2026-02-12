<template>
  <div class="app-layout">
    <AppHeader />
    <main class="main-content">
      <!-- Hero Section -->
      <section id="home" class="hero section">
        <div class="hero-container">
          <div class="hero-image-section">
            <img src="@/assets/profile.jpg" alt="Jayapriya Anthony" class="profile-image" />
          </div>
          <div class="hero-content-section">
            <div class="hero-content">
              <h1 class="hero-title">{{ profile.name }}</h1>
              <p class="hero-subtitle">{{ profile.title }}</p>
              <p class="hero-tagline">{{ profile.tagline }}</p>
              <div class="hero-bio">
                <p v-for="paragraph in bioParagraphs" :key="paragraph">{{ paragraph }}</p>
              </div>
              <div class="hero-actions">
                <a href="#projects" class="btn btn-primary">View Projects</a>
                <a href="#contact" class="btn btn-secondary">Get in Touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Highlights Section -->
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

      <!-- About Section -->
      <section id="about" class="about section">
        <div class="container">
          <div class="content">
            <h2>About Me</h2>
            <div class="about-content">
              <p v-for="paragraph in aboutParagraphs" :key="paragraph">{{ paragraph }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Skills Section -->
      <section id="skills" class="skills section-sm">
        <div class="container">
          <div class="content">
            <h2>Core Skills & Technologies</h2>
            <div class="skills-grid">
              <div v-for="skillGroup in skills" :key="skillGroup.category" class="skill-group">
                <h3 class="skill-category">{{ skillGroup.category }}</h3>
                <div class="skill-tags">
                  <span v-for="tech in skillGroup.technologies" :key="tech" class="skill-tag">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Section -->
      <section id="projects" class="projects section">
        <div class="container">
          <div class="content">
            <h2 class="work-header-title">Work Experience</h2>
            <div class="work-header">
              <h3>{{ workExperience.title }} — {{ workExperience.company }}</h3>
              <p class="company-description">{{ workExperience.companyDescription }}</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="projects-container">
            <ProjectCard v-for="project in workExperience.projects" :key="project.name" :project="project" />
          </div>
        </div>
      </section>



      <!-- Contact Section -->
      <section id="contact" class="contact section">
        <div class="container">
          <div class="content">
            <h2>Contact</h2>
            <div class="contact-content">
              <p class="contact-intro">
                Let's build frontend systems that are fast, scalable, and future-ready. I specialize in high-performance frontend engineering for complex financial products.
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
              <a href="https://www.instagram.com/she_techie?igsh=MTl0aGl3eWVubHpqOA==" target="_blank" rel="noopener noreferrer" class="contact-method">
                <div class="contact-method-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div class="contact-method-content">
                  <div class="contact-method-label">Instagram</div>
                  <div class="contact-method-value">@she_techie</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { usePortfolioStore } from '@/stores/counter'
import AppHeader from './AppHeader.vue'
import AppFooter from './AppFooter.vue'
import ProjectCard from '@/components/cards/ProjectCard.vue'


const { profile, workExperience, skills } = usePortfolioStore()

const bioParagraphs = computed(() => profile.bio.split('\n\n'))
const aboutParagraphs = computed(() => profile.about.split('\n\n'))

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.main-content {
  flex: 1;
  width: 100%;
}

.hero {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 0;
}

.hero-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  width: 100%;
}

.hero-image-section {
  background: linear-gradient(45deg, #f0f0f0 0%, #e0e0e0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.hero-content-section {
  display: flex;
  align-items: center;
  padding: var(--space-12);
  background: #2d2d2d;
}

.hero-content {
  max-width: 600px;
}

.hero-title {
  font-size: 4rem;
  font-weight: var(--font-weight-bold);
  margin-bottom: var(--space-4);
  color: white;
}

.hero-subtitle {
  font-size: var(--font-size-2xl);
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--space-6);
}

#projects{
  background-color: var(--color-surface)
}

.hero-tagline {
  font-size: var(--font-size-xl);
  margin-bottom: var(--space-8);
  color: #e0e0e0;
  line-height: var(--line-height-relaxed);
}

.work-header-title {
  margin-bottom: var(--space-4);
}

.hero-bio {
  margin-bottom: var(--space-8);
  color: #c0c0c0;
}

.hero-actions {
  display: flex;
  gap: var(--space-4);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: white;
  color: #2d2d2d;
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

.about {
  background-color: var(--color-surface);
  padding-top: var(--space-12);
}

.about h2 {
  color: var(--color-text-primary);
  margin-bottom: var(--space-8);
}

.about-content {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
}

.about-content p {
  color: var(--color-text-secondary);
  margin-bottom: var(--space-6);
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

.work-header h3 {
  margin-bottom: var(--space-4);
  color: var(--color-text-secondary);
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

@media (max-width: 768px) {
  .hero-container {
    grid-template-columns: 1fr;
    min-height: auto;
  }
  
  .hero-image-section {
    min-height: 50vh;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-content-section {
    padding: var(--space-8);
  }
  
  .highlights-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-4);
  }
  
  .projects-container {
    grid-template-columns: 1fr;
  }
  
  .articles-container {
    grid-template-columns: 1fr;
  }
}
</style>