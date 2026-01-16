import { create } from 'zustand'
import type { Store, Problem, Translations, Filters, SortConfig } from '../types'

const useStore = create<Store>((set) => ({
  problems: [],
  language: 'es',
  translations: {},
  filters: {
    filter1: { column: '', value: '' },
    filter2: { column: '', value: '' },
  },
  sortConfig: {
    key: null,
    direction: 'asc',
  },
  selectedProblem: null,
  appInfo: {
    version: '0.1.0',
    year: 2026,
    copyright: '© JFC',
  },

  setProblems: (problems: Problem[]) => set({ problems }),

  setLanguage: (language: string) => set({ language }),

  setTranslations: (translations: Translations) => set({ translations }),

  setFilters: (filters: Filters) => set({ filters }),

  setSortConfig: (sortConfig: SortConfig) => set({ sortConfig }),

  setSelectedProblem: (problem: Problem | null) => set({ selectedProblem: problem }),

  loadProblems: async () => {
    try {
      const response = await fetch('./data/problems.json')
      const data: Problem[] = await response.json()
      set({ problems: data })
    } catch (error) {
      console.error('Error loading problems:', error)
    }
  },

  loadTranslations: async (lang: string) => {
    try {
      const response = await fetch(`./locales/${lang}.json`)
      const data: Translations = await response.json()
      set({ translations: data, language: lang })
    } catch (error) {
      console.error('Error loading translations:', error)
    }
  },
}))

export default useStore
