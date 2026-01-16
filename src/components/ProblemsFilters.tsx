import { X } from 'lucide-react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import useStore from '../store/useStore'
import type { Problem } from '../types'

const ProblemsFilters = () => {
  const filters = useStore((state) => state.filters)
  const setFilters = useStore((state) => state.setFilters)
  const translations = useStore((state) => state.translations)

  const t = translations.filters || {}
  const columnLabels = t.columns || {}

  // Columnas disponibles para filtrar (excluimos 'id' porque no es útil para filtrar)
  const availableColumns: (keyof Problem)[] = ['name', 'date', 'author', 'subject', 'category', 'comment']

  const handleColumnChange = (filterKey: 'filter1' | 'filter2', column: string | null) => {
    if (!column) return
    setFilters({
      ...filters,
      [filterKey]: {
        ...filters[filterKey],
        column: column as keyof Problem,
      },
    })
  }

  const handleValueChange = (filterKey: 'filter1' | 'filter2', value: string) => {
    setFilters({
      ...filters,
      [filterKey]: {
        ...filters[filterKey],
        value,
      },
    })
  }

  const clearFilters = () => {
    setFilters({
      filter1: { column: '', value: '' },
      filter2: { column: '', value: '' },
    })
  }

  const hasActiveFilters =
    (filters.filter1.column !== '' && filters.filter1.value !== '') ||
    (filters.filter2.column !== '' && filters.filter2.value !== '')

  const getColumnLabel = (column: keyof Problem | '') => {
    if (!column) return ''
    // Excluimos 'id' de los labels ya que no está en columnLabels
    if (column === 'id') return column
    return columnLabels[column as keyof typeof columnLabels] || column
  }

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Filtro 1 */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {t.filter || 'Filtro'} 1
          </label>
          <div className="space-y-2">
            <Select
              value={filters.filter1.column || undefined}
              onValueChange={(value) => handleColumnChange('filter1', value)}
            >
              <SelectTrigger>
                <SelectValue>
                  {filters.filter1.column ? getColumnLabel(filters.filter1.column) : (t.selectColumn || 'Seleccionar columna...')}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {availableColumns.map((column) => (
                  <SelectItem key={column} value={column}>
                    {getColumnLabel(column)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="text"
              placeholder={t.valuePlaceholder || 'Buscar...'}
              value={filters.filter1.value}
              onChange={(e) => handleValueChange('filter1', e.target.value)}
              disabled={!filters.filter1.column}
            />
          </div>
        </div>

        {/* Filtro 2 */}
        <div className="space-y-3">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            {t.filter || 'Filtro'} 2
          </label>
          <div className="space-y-2">
            <Select
              value={filters.filter2.column || undefined}
              onValueChange={(value) => handleColumnChange('filter2', value)}
            >
              <SelectTrigger>
                <SelectValue>
                  {filters.filter2.column ? getColumnLabel(filters.filter2.column) : (t.selectColumn || 'Seleccionar columna...')}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {availableColumns.map((column) => (
                  <SelectItem key={column} value={column}>
                    {getColumnLabel(column)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="text"
              placeholder={t.valuePlaceholder || 'Buscar...'}
              value={filters.filter2.value}
              onChange={(e) => handleValueChange('filter2', e.target.value)}
              disabled={!filters.filter2.column}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProblemsFilters
