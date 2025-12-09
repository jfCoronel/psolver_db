import { create } from 'zustand'

const useStore = create((set) => ({
  problems: [],
  language: 'es',
  translations: {},
  filters: {
    name: '',
    author: '',
    subject: '',
    category: '',
  },
  sortConfig: {
    key: null,
    direction: 'asc',
  },
  selectedProblem: null,

  setProblems: (problems) => set({ problems }),

  setLanguage: (language) => set({ language }),

  setTranslations: (translations) => set({ translations }),

  setFilters: (filters) => set({ filters }),

  setSortConfig: (sortConfig) => set({ sortConfig }),

  setSelectedProblem: (problem) => set({ selectedProblem: problem }),

  loadProblems: async () => {
    try {
      const response = await fetch('/data/problems.json')
      const data = await response.json()
      set({ problems: data })
    } catch (error) {
      console.error('Error loading problems:', error)
    }
  },

  loadTranslations: async (lang) => {
    try {
      const response = await fetch(`/locales/${lang}.json`)
      const data = await response.json()
      set({ translations: data, language: lang })
    } catch (error) {
      console.error('Error loading translations:', error)
    }
  },
}))

export default useStore
