import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Profile, Skill, WorkExperience, Article } from '@/types'

import profileData from '@/data/profile.json'
import skillsData from '@/data/skills.json'
import workExperienceData from '@/data/work-experience.json'
import articlesData from '@/data/articles.json'

export const usePortfolioStore = defineStore('portfolio', () => {
  const profile = ref<Profile>(profileData as Profile)
  const skills = ref<Skill[]>(skillsData as Skill[])
  const workExperience = ref<WorkExperience>(workExperienceData as WorkExperience)
  const articles = ref<Article[]>(articlesData as Article[])
  const isLoading = ref(false)

  const getArticleBySlug = (slug: string) => {
    return articles.value.find(article => article.slug === slug)
  }

  const getProjectByName = (name: string) => {
    return workExperience.value.projects.find(project => project.name === name)
  }

  return {
    profile,
    skills,
    workExperience,
    articles,
    isLoading,
    getArticleBySlug,
    getProjectByName
  }
})
