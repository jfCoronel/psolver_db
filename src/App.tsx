import { useEffect } from 'react'
import useStore from './store/useStore'
import ProblemsTable from './components/ProblemsTable'
import ProblemsFilters from './components/ProblemsFilters'
import LanguageSelector from './components/LanguageSelector'
import Logo from './components/Logo'
import { ThemeProvider } from './hooks/use-theme'
import { ThemeToggle } from './components/theme-toggle'

export function App() {
  const loadProblems = useStore((state) => state.loadProblems)
  const loadTranslations = useStore((state) => state.loadTranslations)
  const translations = useStore((state) => state.translations)

  useEffect(() => {
    loadProblems()
    loadTranslations('es')
  }, [loadProblems, loadTranslations])

  const title = translations.app?.title || 'pSolver DB'

  return (
    <ThemeProvider defaultTheme="system" storageKey="psolver-theme">
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <Logo className="w-12 h-12" />
              <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-50">{title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <LanguageSelector />
              <ThemeToggle />
            </div>
          </div>
          <ProblemsFilters />
          <ProblemsTable />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App