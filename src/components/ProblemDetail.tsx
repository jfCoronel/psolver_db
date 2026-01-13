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
        <div className="flex justify-between items-start mb-6">
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

        <div className="space-y-4">
          {/* Sección de información principal en una línea compacta */}
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {t.id || 'ID'}:
              </span>
              <span className="text-slate-900 dark:text-slate-100">
                {problem.id}
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {t.date || 'Fecha'}:
              </span>
              <span className="text-slate-900 dark:text-slate-100">
                {problem.date}
              </span>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {t.author || 'Autor'}:
              </span>
              <span className="text-slate-900 dark:text-slate-100">
                {problem.author}
              </span>
            </div>
          </div>

          {/* Separador visual */}
          <div className="border-t border-slate-200 dark:border-slate-700"></div>

          {/* Información adicional */}
          <div className="space-y-3">
            <div>
              <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
                {t.name || 'Nombre'}:
              </span>
              <p className="text-slate-900 dark:text-slate-100 mt-1">
                {problem.name}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
                  {t.subject || 'Materia'}:
                </span>
                <p className="text-slate-900 dark:text-slate-100 mt-1">
                  {problem.subject}
                </p>
              </div>

              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
                  {t.category || 'Categoría'}:
                </span>
                <p className="text-slate-900 dark:text-slate-100 mt-1">
                  {problem.category}
                </p>
              </div>
            </div>

            {problem.comment && (
              <>
                <div className="border-t border-slate-200 dark:border-slate-700 pt-3"></div>
                <div>
                  <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
                    {t.comment || 'Comentario'}:
                  </span>
                  <p className="text-slate-900 dark:text-slate-100 mt-1 whitespace-pre-wrap">
                    {problem.comment}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemDetail
