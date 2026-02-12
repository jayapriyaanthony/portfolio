export interface Profile {
  name: string
  title: string
  tagline: string
  bio: string
  about: string
  email: string
  linkedin: string
  cgpa: string
  experience: string
}

export interface Skill {
  category: string
  technologies: string[]
}

export interface Achievement {
  metric: string
  description: string
}

export interface WorkExperience {
  title: string
  company: string
  companyDescription: string
  projects: Project[]
  achievements: string[]
  highlights: {
    loadTime: string
    satisfaction: string
    rebuilds: string
    experience: string
    cgpa: string
  }
}

export interface Project {
  name: string
  description: string
  technologies: string[]
  achievements: string[]
}

export interface Article {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  slug: string
}

export interface ContactInfo {
  description: string
  methods: {
    email: string
    linkedin: string
  }
}