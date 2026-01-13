import { X } from 'lucide-react'
import { Button } from './ui/button'
import useStore from '../store/useStore'
import type { Problem } from '../types'

interface ProblemDetailProps {
  problem: Problem
}

const ProblemDetail = ({ problem }: ProblemDetailProps) => {
  const setSelectedProblem = useStore((state) => state.setSelectedProblem)
  const translations = useStore((state) => state.translations)

  const t = translations.detail || {}

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation()
    setSelectedProblem(null)
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-900 border-t border-b border-slate-200 dark:border-slate-700">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
            {t.title || 'Detalles del Problema'}
          </h3>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
              {t.id || 'ID'}
            </label>
            <div className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100">
              {problem.id}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
              {t.name || 'Nombre'}
            </label>
            <div className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100">
              {problem.name}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
              {t.date || 'Fecha'}
            </label>
            <div className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100">
              {problem.date}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
              {t.author || 'Autor'}
            </label>
            <div className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100">
              {problem.author}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
              {t.subject || 'Materia'}
            </label>
            <div className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100">
              {problem.subject}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
              {t.category || 'Categoría'}
            </label>
            <div className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100">
              {problem.category}
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1">
              {t.comment || 'Comentario'}
            </label>
            <div className="p-2 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100">
              {problem.comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemDetail
