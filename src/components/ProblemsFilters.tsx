import { X } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import useStore from '../store/useStore'

const ProblemsFilters = () => {
  const filters = useStore((state) => state.filters)
  const setFilters = useStore((state) => state.setFilters)
  const translations = useStore((state) => state.translations)

  const t = translations.filters || {}

  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    setFilters({
      ...filters,
      [key]: value,
    })
  }

  const clearFilters = () => {
    setFilters({
      name: '',
      author: '',
      subject: '',
      category: '',
    })
  }

  const hasActiveFilters = Object.values(filters).some(value => value !== '')

  return (
    <div className="mb-6 p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
          {t.title || 'Filtros'}
        </h3>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={clearFilters}
            className="gap-2"
          >
            <X className="h-4 w-4" />
            {t.clear || 'Limpiar filtros'}
          </Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            {t.name || 'Nombre'}
          </label>
          <Input
            type="text"
            placeholder={t.namePlaceholder || 'Buscar por nombre...'}
            value={filters.name}
            onChange={(e) => handleFilterChange('name', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            {t.author || 'Autor'}
          </label>
          <Input
            type="text"
            placeholder={t.authorPlaceholder || 'Buscar por autor...'}
            value={filters.author}
            onChange={(e) => handleFilterChange('author', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            {t.subject || 'Materia'}
          </label>
          <Input
            type="text"
            placeholder={t.subjectPlaceholder || 'Buscar por materia...'}
            value={filters.subject}
            onChange={(e) => handleFilterChange('subject', e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
            {t.category || 'Categoría'}
          </label>
          <Input
            type="text"
            placeholder={t.categoryPlaceholder || 'Buscar por categoría...'}
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          />
        </div>
      </div>
    </div>
  )
}

export default ProblemsFilters
