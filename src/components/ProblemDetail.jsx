import useStore from '../store/useStore'
import { X } from 'lucide-react'
import { Button } from './ui/button'

const ProblemDetail = ({ problem }) => {
  const setSelectedProblem = useStore((state) => state.setSelectedProblem)
  const translations = useStore((state) => state.translations)

  const t = translations.detail || {}

  const handleClose = (e) => {
    e.stopPropagation()
    setSelectedProblem(null)
  }

  return (
    <div className="bg-slate-50 border-t border-b border-slate-200">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-slate-900">
            {t.title || 'Detalles del Problema'}
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              {t.id || 'ID'}
            </label>
            <div className="p-2 bg-white rounded border border-slate-200 text-sm">
              {problem.id}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              {t.name || 'Nombre'}
            </label>
            <div className="p-2 bg-white rounded border border-slate-200 text-sm">
              {problem.name}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              {t.date || 'Fecha'}
            </label>
            <div className="p-2 bg-white rounded border border-slate-200 text-sm">
              {problem.date}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              {t.author || 'Autor'}
            </label>
            <div className="p-2 bg-white rounded border border-slate-200 text-sm">
              {problem.author}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              {t.subject || 'Materia'}
            </label>
            <div className="p-2 bg-white rounded border border-slate-200 text-sm">
              {problem.subject}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              {t.category || 'Categoría'}
            </label>
            <div className="p-2 bg-white rounded border border-slate-200 text-sm">
              {problem.category}
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              {t.comment || 'Comentario'}
            </label>
            <div className="p-2 bg-white rounded border border-slate-200 text-sm">
              {problem.comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemDetail
