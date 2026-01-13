export interface Problem {
  id: string
  name: string
  date: string
  author: string
  subject: string
  category: string
  comment: string
}

export interface Filters {
  name: string
  author: string
  subject: string
  category: string
}

export interface SortConfig {
  key: keyof Problem | null
  direction: 'asc' | 'desc'
}

export interface Translations {
  app?: {
    title?: string
  }
  table?: {
    name?: string
    date?: string
    author?: string
    subject?: string
    category?: string
    comment?: string
    noProblems?: string
    noResults?: string
  }
  filters?: {
    title?: string
    clear?: string
    name?: string
    author?: string
    subject?: string
    category?: string
    namePlaceholder?: string
    authorPlaceholder?: string
    subjectPlaceholder?: string
    categoryPlaceholder?: string
  }
  detail?: {
    title?: string
    id?: string
    name?: string
    date?: string
    author?: string
    subject?: string
    category?: string
    comment?: string
  }
}

export interface StoreState {
  problems: Problem[]
  language: string
  translations: Translations
  filters: Filters
  sortConfig: SortConfig
  selectedProblem: Problem | null
}

export interface StoreActions {
  setProblems: (problems: Problem[]) => void
  setLanguage: (language: string) => void
  setTranslations: (translations: Translations) => void
  setFilters: (filters: Filters) => void
  setSortConfig: (sortConfig: SortConfig) => void
  setSelectedProblem: (problem: Problem | null) => void
  loadProblems: () => Promise<void>
  loadTranslations: (lang: string) => Promise<void>
}

export type Store = StoreState & StoreActions
