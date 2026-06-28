export interface Period {
  start: string
  end: string | null
  current: boolean
}

export interface Experience {
  id: string
  title: string
  company: string
  period: Period
  highlights: string[]
  techStack: string[]
  practices: string[]
}

export interface Education {
  id: string
  institution: string
  location: string
  degree: string
  faculty: string
  period: { start: string; end: string }
  finalProject: string
  techStack: string[]
  practices: string[]
}

export interface SkillItem {
  name: string
  highlights: string[]
}

export interface Skills {
  backend: SkillItem[]
  frontend: SkillItem[]
  databases: string[]
  practices: string[]
  tools: string[]
}

export interface CertificationItem {
  name: string
  issuer: string
}

export interface Certification {
  category: string
  items: CertificationItem[]
}

export interface OpenSourceProject {
  id: string
  name: string
  role: string
  url: string
  description: string
}

export interface Project {
  id: string
  name: string
  company: string
  description: string
  techStack: string[]
}

export interface Personal {
  name: string
  phone: string
  email: string
  linkedin: string
  github: string
}

export interface CVData {
  personal: Personal
  objective: string
  experiences: Experience[]
  education: Education[]
  skills: Skills
  certifications: Certification[]
  openSource: OpenSourceProject[]
  projects: Project[]
}
