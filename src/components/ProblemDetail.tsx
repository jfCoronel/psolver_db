import { X, ExternalLink } from 'lucide-react'
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
    <div className="bg-blue-50 dark:bg-blue-950/50 border-t border-b border-blue-200 dark:border-blue-800/50">
      <div className="p-6">
        <div className="flex justify-between items-start mb-6">
          <div className="flex items-baseline gap-3">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">
              {t.title || 'Detalles del Problema'}:
            </h3>
            <span className="text-lg text-slate-700 dark:text-slate-200">
              {problem.name}
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={handleClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex gap-6">
          {/* Imagen en miniatura a la derecha */}
          {problem.image && (
            <div className="flex-shrink-0 order-2">
              <img
                src={problem.image}
                alt={problem.name}
                className="w-72 h-40 object-contain rounded-lg border border-blue-200 dark:border-blue-700 bg-white dark:bg-slate-800"
              />
            </div>
          )}

          <div className="flex-1 space-y-4">
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
                {t.problem_id || 'Código'}:
              </span>
              <span className="text-slate-900 dark:text-slate-100">
                {problem.problem_id}
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
            {problem.description && (
              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
                  {t.description || 'Descripción'}:
                </span>
                <p className="text-slate-900 dark:text-slate-100 mt-1 whitespace-pre-wrap">
                  {problem.description}
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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

              <div>
                <span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
                  {t.language || 'Idioma'}:
                </span>
                <p className="text-slate-900 dark:text-slate-100 mt-1">
                  {problem.language}
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

        {/* Botón abrir problema */}
        <div className="flex justify-end mt-4">
          <Button
            variant="default"
            size="sm"
            onClick={() => window.open(`https://app.psolver.org/app/?id=${problem.problem_id}`, '_blank')}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            {t.openProblem || 'Abrir Problema'}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProblemDetail
