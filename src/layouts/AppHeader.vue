<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <nav class="nav">
        <a href="#home" class="logo">{{ profile.name }}</a>
        <div class="nav-links">
          <a href="#home" class="nav-link" :class="{ active: activeSection === 'home' }">Home</a>
          <a href="#about" class="nav-link" :class="{ active: activeSection === 'about' }">About</a>
          <a href="#skills" class="nav-link" :class="{ active: activeSection === 'skills' }">Skills</a>
          <a href="#projects" class="nav-link" :class="{ active: activeSection === 'projects' }">Projects</a>
          <a href="#contact" class="nav-link" :class="{ active: activeSection === 'contact' }">Contact</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { usePortfolioStore } from '@/stores/counter'

const { profile } = usePortfolioStore()
const isScrolled = ref(false)
const activeSection = ref('home')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
  
  const sections = ['home', 'about', 'skills', 'projects', 'contact']
  const current = sections.find(section => {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      return rect.top <= 100 && rect.bottom >= 100
    }
    return false
  })
  
  if (current) activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border-subtle);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all var(--transition-normal);
  backdrop-filter: blur(12px);
  height: 80px;
}

:global(html) {
  scroll-padding-top: 80px;
}

.header-scrolled {
  background-color: rgba(10, 10, 10, 0.8);
  border-bottom-color: var(--color-border);
  box-shadow: var(--shadow-lg);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) 0;
  transition: padding var(--transition-normal);
}

.header-scrolled .nav {
  padding: var(--space-3) 0;
}

.logo {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
  transition: all var(--transition-fast);
}

.logo:hover {
  color: var(--color-primary);
}

.nav-links {
  display: flex;
  gap: var(--space-8);
}

.nav-link {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  transition: all var(--transition-fast);
  position: relative;
  padding: var(--space-2) 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width var(--transition-normal) var(--ease-out-quart);
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-link.active {
  color: var(--color-primary);
}

@media (max-width: 768px) {
  .nav-links {
    gap: var(--space-4);
  }
  
  .nav-link {
    font-size: var(--font-size-sm);
  }
}
</style>